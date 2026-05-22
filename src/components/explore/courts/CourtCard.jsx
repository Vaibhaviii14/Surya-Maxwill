import SlotPickerPreview from "./SlotPickerPreview";

function CourtCard({ court }) {
  return (
    <div className="court-showcase">
      {/* Visual Image Layer with Overlay and Fallback Gradient */}
      <div
        className="court-image-wrapper"
        style={{
          background: "linear-gradient(135deg, #1f2937 0%, #4c1d95 100%)", // Charcoal to Amethyst fallback
          backgroundSize: "cover"
        }}
      >
        <img
          src={court.image}
          alt={court.name}
          className="court-image w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://placehold.co/800x600/4A154B/F5F5DC?text=Surya+Maxwill+Pickleball'; }}
        />
        {/* Overlay removed for crisp edges */}
      </div>

      {/* Court Metadata & Slots */}
      <div className="court-details">
        <div className="court-badges flex flex-wrap gap-3 mb-6">
          <span className="court-badge border border-current px-3 py-1 rounded-full">{court.surface}</span>
          <span className="court-badge border border-current px-3 py-1 rounded-full">{court.hours}</span>
          <span className="court-badge border border-current px-3 py-1 rounded-full">{court.location}</span>
        </div>

        <h2 className="court-name font-londrina text-4xl mb-4">{court.name}</h2>
        <p className="court-description font-special-elite tracking-wider text-lg opacity-90 mb-6">{court.description}</p>

        <SlotPickerPreview slots={court.slots} />
      </div>
    </div>
  );
}

export default CourtCard;
