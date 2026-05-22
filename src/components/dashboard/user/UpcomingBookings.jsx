import { Calendar, Clock } from "lucide-react";

function UpcomingBookings({ bookings, onSelectBooking }) {
  if (!bookings || bookings.length === 0) {
    return <p className="dash-subtitle">No upcoming bookings found.</p>;
  }

  return (
    <div>
      <h2 className="section-title">Upcoming Sessions</h2>
      
      <div className="upcoming-grid">
        {bookings.map((booking) => (
          <div 
            key={booking.id} 
            className="dash-card" 
            onClick={() => onSelectBooking(booking)}
          >
            <div className="dash-card-header">
              <h3 className="dash-card-title">{booking.courtName}</h3>
              <span className="dash-card-badge">Confirmed</span>
            </div>
            
            <div className="dash-card-content">
              <div className="dash-card-detail">
                <Calendar size={18} color="#d7ff53" />
                <span>{booking.date}</span>
              </div>
              <div className="dash-card-detail">
                <Clock size={18} color="#d7ff53" />
                <span>{booking.time}</span>
              </div>
            </div>
            
            <p className="dash-card-content mt-4" style={{ marginTop: "1.5rem", textAlign: "right" }}>
              View Details &rarr;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingBookings;
