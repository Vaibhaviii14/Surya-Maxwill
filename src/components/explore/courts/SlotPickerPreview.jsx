import { Clock } from "lucide-react";

function SlotPickerPreview({ slots }) {
  return (
    <div className="slot-picker-container">
      <h4 className="slot-picker-title">
        <Clock size={16} /> Fast-Book Available Slots
      </h4>
      <div className="slot-picker-scroll">
        {slots.map((slot, index) => (
          <div 
            key={index} 
            className={`slot-item ${slot.available ? "available" : "booked"}`}
          >
            <span>{slot.time}</span>
            {slot.available && (
              <div className="slot-action-btn">
                SECURE
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlotPickerPreview;
