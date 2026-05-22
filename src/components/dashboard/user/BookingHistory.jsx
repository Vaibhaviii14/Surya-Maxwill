import { format } from "date-fns";

function BookingHistory({ history }) {
  if (!history || history.length === 0) {
    return <p className="dash-subtitle">No past bookings found.</p>;
  }

  return (
    <div style={{ marginTop: "4rem" }}>
      <h2 className="section-title">Past History</h2>
      
      <div className="history-list">
        {history.map((record) => (
          <div key={record.id} className="history-item">
            <div className="history-date">
              {format(new Date(record.date), "MMM dd, yyyy")}
            </div>
            <div className="history-court">
              {record.courtName}
            </div>
            <div className="history-time" style={{ opacity: 0.8 }}>
              {record.time}
            </div>
            <div className="history-status">
              <span className="dash-card-badge completed" style={{ fontSize: "0.6rem" }}>
                {record.status}
              </span>
            </div>
            <div className="history-price" style={{ fontFamily: "'Special Elite', cursive" }}>
              {record.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingHistory;
