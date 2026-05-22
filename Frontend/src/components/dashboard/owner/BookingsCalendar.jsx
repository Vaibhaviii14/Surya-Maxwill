import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const COURTS = ["Court 01", "Court 04", "Court 07", "Court 12"];
const TIME_SLOTS = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
  "20:00 - 22:00"
];

const DUMMY_SLOTS = [
  { court: "Court 01", slot: "08:00 - 10:00", patron: "Marcus Sterling", type: "Member Practice" },
  { court: "Court 01", slot: "18:00 - 20:00", patron: "Sarah Jenkins", type: "Social Doubles" },
  { court: "Court 04", slot: "10:00 - 12:00", patron: "Devon Lane", type: "Elite Coaching" },
  { court: "Court 07", slot: "14:00 - 16:00", patron: "Ananya Roy", type: "Matchplay" },
  { court: "Court 12", slot: "18:00 - 20:00", patron: "Kabir Mehta", type: "Club Tournament" },
  { court: "Court 12", slot: "20:00 - 22:00", patron: "Vikram Malhotra", type: "Private Booking" },
];

function BookingsCalendar() {
  const [currentDay, setCurrentDay] = useState("Today, 22 May");

  const getBooking = (court, slot) => {
    return DUMMY_SLOTS.find(b => b.court === court && b.slot === slot);
  };

  return (
    <div className="dash-card" style={{ padding: "2.5rem", marginBottom: "3rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h3 style={{ fontFamily: "'Special Elite', cursive", fontSize: "1.2rem", letterSpacing: "3px", textTransform: "uppercase", color: "#d7ff53" }}>
            Club Bookings Timeline
          </h3>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", opacity: "0.7", marginTop: "0.2rem" }}>
            Real-time court scheduling command
          </p>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(244, 239, 231, 0.05)", padding: "0.5rem 1rem", borderRadius: "100px", border: "1px solid rgba(244, 239, 231, 0.1)" }}>
          <button style={{ background: "transparent", border: "none", color: "#f4efe7", cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ChevronLeft size={18} />
          </button>
          <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "0.95rem", letterSpacing: "1px" }}>
            {currentDay}
          </span>
          <button style={{ background: "transparent", border: "none", color: "#f4efe7", cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0.5rem", minWidth: "750px" }}>
          <thead>
            <tr>
              <th style={{ width: "15%", padding: "1rem", textAlign: "left", fontFamily: "'Special Elite', cursive", opacity: "0.5", fontSize: "0.8rem", textTransform: "uppercase" }}>Time Slot</th>
              {COURTS.map(court => (
                <th key={court} style={{ width: "21.25%", padding: "1rem", background: "rgba(244, 239, 231, 0.05)", borderRadius: "12px", fontFamily: "'Londrina Solid', cursive", fontSize: "1.5rem", fontWeight: "400", letterSpacing: "1px" }}>
                  {court}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIME_SLOTS.map(slot => (
              <tr key={slot}>
                <td style={{ padding: "1rem", fontFamily: "'Special Elite', cursive", fontSize: "0.85rem", color: "#d7ff53" }}>
                  {slot}
                </td>
                {COURTS.map(court => {
                  const booking = getBooking(court, slot);
                  return (
                    <td key={court} style={{ 
                      padding: "1rem", 
                      borderRadius: "16px",
                      background: booking ? "#16372f" : "rgba(255, 255, 255, 0.02)",
                      border: booking ? "1.5px solid rgba(215, 255, 83, 0.3)" : "1.5px dashed rgba(244, 239, 231, 0.05)",
                      transition: "all 0.3s ease",
                      verticalAlign: "top",
                      minHeight: "80px"
                    }}>
                      {booking ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                          <span style={{ fontSize: "0.95rem", fontWeight: "700" }}>{booking.patron}</span>
                          <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "0.75rem", color: "#d7ff53", letterSpacing: "1px" }}>
                            {booking.type}
                          </span>
                        </div>
                      ) : (
                        <span style={{ fontSize: "0.8rem", opacity: "0.2", fontFamily: "'Montserrat', sans-serif" }}>Available</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingsCalendar;
