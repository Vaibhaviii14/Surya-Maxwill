import CourtCard from "./CourtCard";

const DUMMY_COURTS = [
  {
    id: "c1",
    name: "The Amethyst Indoor Pickleball Court",
    image: "https://turftown.in/_next/image?url=https%3A%2F%2Fturftown.s3.ap-south-1.amazonaws.com%2Fsuper_admin%2Ftt-1744527410381.webp&w=3840&q=75",
    surface: "Premium Indoor Pickleball Hardcourt",
    hours: "06:00 - 23:00",
    location: "South Wing",
    description: "Designed for social and intermediate play, The Amethyst Indoor Pickleball Court features stadium-style seating and a specialized cushioned surface that reduces joint impact during intense dinking rallies at the kitchen line.",
    slots: [
      { time: "17:00", available: false },
      { time: "18:00", available: true },
      { time: "19:00", available: true },
      { time: "20:00", available: false },
      { time: "21:00", available: true },
    ]
  },
  {
    id: "c2",
    name: "Outdoor Coral Cushion Pickleball Area",
    image: "https://lakeshoresf.com/wp-content/uploads/2024/06/Discover-the-Best-Pickleball-Courts-in-Lincoln-Park.png",
    surface: "Championship Pickleball Arena",
    hours: "05:00 - 00:00",
    location: "Main Arena",
    description: "The crown jewel of our facility. Built to international pickleball tournament specifications, offering pristine acoustic characteristics and broadcast-level lighting for pro matches.",
    slots: [
      { time: "08:00", available: false },
      { time: "10:00", available: false },
      { time: "12:00", available: true },
      { time: "14:00", available: true },
      { time: "16:00", available: false },
    ]
  },
  {
    id: "c3",
    name: "The Charcoal Pro Pickleball Enclave",
    image: "https://img1.khelomore.com/venues/1834/coverphoto/1040x490/2025-07-10T08-52-55-739951Untitled-design.webp",
    surface: "Outdoor Cushion Pickleball Court",
    hours: "06:00 - 22:00",
    location: "North Wing",
    description: "A fast-paced surface enveloped in glass walls. The Charcoal Pro Pickleball Enclave provides exceptional natural light while remaining completely climate-controlled year-round for optimal pickleball action.",
    slots: [
      { time: "15:00", available: true },
      { time: "16:00", available: true },
      { time: "17:00", available: false },
      { time: "18:00", available: true },
      { time: "19:00", available: false },
    ]
  },
  {
    id: "c4",
    name: "The Maxwell Championship Arena",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_BD2tOoPw-_ENU1oNwKq9SCx2btxGjDBiA&s",
    surface: "Championship Pickleball Arena",
    hours: "07:00 - 23:00",
    location: "Center Stage",
    description: "Our premium broadcast-ready center court. Designed for high-stakes tournament finals and marquee matches, boasting exceptional surround aesthetics and spectator lounges.",
    slots: [
      { time: "16:00", available: false },
      { time: "17:00", available: true },
      { time: "18:00", available: false },
      { time: "19:00", available: true },
      { time: "20:00", available: true },
    ]
  }
];

function CourtList() {
  return (
    <div className="masonry-grid">
      {DUMMY_COURTS.map(court => (
        <CourtCard key={court.id} court={court} />
      ))}
    </div>
  );
}

export default CourtList;
