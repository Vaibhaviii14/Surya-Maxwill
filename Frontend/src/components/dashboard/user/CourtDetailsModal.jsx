import { X, MapPin, Info, Users, Clock } from "lucide-react";

function CourtDetailsModal({ booking, onClose }) {
  if (!booking) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={32} />
        </button>

        <h3 className="modal-title">{booking.courtName}</h3>

        <div className="modal-info-grid">
          <div className="modal-info-item">
            <h4><MapPin size={16} className="inline mr-2" /> Location</h4>
            <p>{booking.location || "North Wing, Level 1"}</p>
          </div>
          <div className="modal-info-item">
            <h4><Info size={16} className="inline mr-2" /> Surface</h4>
            <p>{booking.surface || "Indoor Cushioned"}</p>
          </div>
          <div className="modal-info-item">
            <h4><Clock size={16} className="inline mr-2" /> Date & Time</h4>
            <p>{booking.date} • {booking.time}</p>
          </div>
          <div className="modal-info-item">
            <h4><Users size={16} className="inline mr-2" /> Match Type</h4>
            <p>Doubles / Social</p>
          </div>
        </div>

        <div className="mt-8 border-t border-[#1f4d42] pt-6 opacity-80" style={{ marginBottom: "2rem", borderTop: "1px solid rgba(31, 77, 66, 0.2)", paddingTop: "1.5rem" }}>
          <h4 style={{ fontFamily: "'Special Elite', cursive", fontSize: "0.9rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Amenities</h4>
          <p style={{ fontFamily: "'Montserrat', sans-serif" }}>Complimentary towels, smart scoring screens, filtered water station, and shaded viewing gallery.</p>
        </div>

        <button className="w-full border-none bg-green-800 text-white hover:bg-green-900 py-4 px-6 rounded-full text-lg font-special-elite tracking-wider font-semibold cursor-pointer transition-colors" onClick={onClose}>
          Close Details
        </button>
      </div>
    </div>
  );
}

export default CourtDetailsModal;
