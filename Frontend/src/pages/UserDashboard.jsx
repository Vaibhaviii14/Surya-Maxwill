import { useState } from "react";
import DashboardLayout from "../components/dashboard/shared/DashboardLayout";
import UpcomingBookings from "../components/dashboard/user/UpcomingBookings";
import BookingHistory from "../components/dashboard/user/BookingHistory";
import CourtDetailsModal from "../components/dashboard/user/CourtDetailsModal";

// Dummy Data
const DUMMY_UPCOMING_BOOKINGS = [
  {
    id: "b1",
    courtName: "Court 01 / Pavilion",
    date: "25 May, 2026",
    time: "18:00 - 19:30",
    location: "South Wing, Ground Floor",
    surface: "Indoor Cushioned",
  },
  {
    id: "b2",
    courtName: "Court 12 / Centre",
    date: "28 May, 2026",
    time: "08:00 - 10:00",
    location: "Main Arena",
    surface: "Show Court",
  }
];

const DUMMY_HISTORY = [
  {
    id: "h1",
    courtName: "Court 04 / Atrium",
    date: "2026-05-18T10:00:00Z",
    time: "10:00 - 11:30",
    status: "Completed",
    price: "₹1,400"
  },
  {
    id: "h2",
    courtName: "Court 07 / Garden",
    date: "2026-05-12T16:00:00Z",
    time: "16:00 - 17:00",
    status: "Completed",
    price: "₹900"
  },
  {
    id: "h3",
    courtName: "Court 01 / Pavilion",
    date: "2026-05-05T19:00:00Z",
    time: "19:00 - 21:00",
    status: "Completed",
    price: "₹2,400"
  }
];

function UserDashboard() {
  const [selectedBooking, setSelectedBooking] = useState(null);

  return (
    <DashboardLayout userType="user">
      {/* White Section for Header & Upcoming Bookings */}
      <div className="bg-white text-green-800 py-12">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20 font-special-elite tracking-wider">
          <div className="mb-12">
            <h1 className="font-medium text-3xl md:text-5xl mb-2 text-green-800">Welcome, Marcus.</h1>
            <p className="font-special-elite tracking-wider text-green-800/80">Your patron portal for exclusive court access.</p>
          </div>

          <UpcomingBookings 
            bookings={DUMMY_UPCOMING_BOOKINGS} 
            onSelectBooking={setSelectedBooking} 
          />
        </div>
      </div>

      {/* Green Section for Booking History */}
      <div className="bg-green-800 text-white py-12 border-t-2 border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20 font-special-elite tracking-wider">
          <BookingHistory history={DUMMY_HISTORY} />
        </div>
      </div>

      {selectedBooking && (
        <CourtDetailsModal 
          booking={selectedBooking} 
          onClose={() => setSelectedBooking(null)} 
        />
      )}
    </DashboardLayout>
  );
}

export default UserDashboard;
