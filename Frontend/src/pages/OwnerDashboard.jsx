import DashboardLayout from "../components/dashboard/shared/DashboardLayout";
import StatCards from "../components/dashboard/owner/StatCards";
import RevenueChart from "../components/dashboard/owner/RevenueChart";
import BookingsCalendar from "../components/dashboard/owner/BookingsCalendar";
import RecentActivityFeed from "../components/dashboard/owner/RecentActivityFeed";

function OwnerDashboard() {
  return (
    <DashboardLayout userType="owner">
      <div className="dash-header">
        <h1 className="dash-title font-oi font-normal tracking-[2px] leading-[1.1] text-green-800">Command Center.</h1>
        <p className="dash-subtitle">Real-time luxury club statistics & management.</p>
      </div>

      <StatCards />

      <div className="dash-grid-two-cols">
        <RevenueChart />
        <RecentActivityFeed />
      </div>

      <BookingsCalendar />
    </DashboardLayout>
  );
}

export default OwnerDashboard;
