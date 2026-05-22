import { CheckCircle, AlertCircle, Calendar } from "lucide-react";

const ACTIVITIES = [
  {
    id: 1,
    type: "booking",
    message: "New booking by Marcus Sterling",
    details: "Court 01 / Pavilion • 25 May, 18:00",
    time: "2 mins ago",
    amount: "₹1,200",
  },
  {
    id: 2,
    type: "booking",
    message: "New booking by Devon Lane",
    details: "Court 04 / Atrium • 23 May, 10:00",
    time: "15 mins ago",
    amount: "₹1,400",
  },
  {
    id: 3,
    type: "cancellation",
    message: "Cancellation by Alisha Sen",
    details: "Court 07 / Garden • 24 May, 15:00",
    time: "1 hour ago",
    amount: "-₹900 refunded",
  },
  {
    id: 4,
    type: "booking",
    message: "New booking by Sarah Jenkins",
    details: "Court 12 / Centre • 26 May, 09:00",
    time: "3 hours ago",
    amount: "₹2,800",
  }
];

function RecentActivityFeed() {
  return (
    <div className="dash-card" style={{ padding: "2.5rem" }}>
      <h3 style={{ fontFamily: "'Special Elite', cursive", fontSize: "1.2rem", letterSpacing: "3px", textTransform: "uppercase", color: "#d7ff53", marginBottom: "2rem" }}>
        Recent Club Activities
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {ACTIVITIES.map(activity => (
          <div key={activity.id} style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "flex-start",
            paddingBottom: "1.2rem",
            borderBottom: "1px solid rgba(244, 239, 231, 0.08)",
            gap: "1.5rem"
          }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ 
                marginTop: "0.2rem",
                color: activity.type === "booking" ? "#d7ff53" : "#ff5353"
              }}>
                {activity.type === "booking" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              </div>
              
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.2rem" }}>
                  {activity.message}
                </h4>
                <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "0.85rem", opacity: "0.8", color: "rgba(244, 239, 231, 0.8)" }}>
                  {activity.details}
                </p>
                <span style={{ fontSize: "0.75rem", opacity: "0.5", display: "inline-block", marginTop: "0.4rem" }}>
                  {activity.time}
                </span>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <span style={{ 
                fontFamily: "'Special Elite', cursive", 
                fontWeight: "700",
                color: activity.type === "booking" ? "#d7ff53" : "rgba(244, 239, 231, 0.5)"
              }}>
                {activity.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivityFeed;
