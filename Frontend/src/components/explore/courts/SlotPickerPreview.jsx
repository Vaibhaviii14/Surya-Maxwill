import React, { useRef } from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";

function SlotPickerPreview({ slots }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -150 : 150;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="slot-picker-container">
      <h4 className="slot-picker-title">
        <Clock size={16} /> Fast-Book Available Slots
      </h4>
      
      <div className="slot-picker-wrapper-relative">
        {/* Left Scroll Button */}
        <button 
          className="slot-scroll-btn left" 
          onClick={() => scroll("left")}
          aria-label="Scroll slots left"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Scrollable Container */}
        <div className="slot-picker-scroll" ref={scrollRef}>
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

        {/* Right Scroll Button */}
        <button 
          className="slot-scroll-btn right" 
          onClick={() => scroll("right")}
          aria-label="Scroll slots right"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default SlotPickerPreview;
