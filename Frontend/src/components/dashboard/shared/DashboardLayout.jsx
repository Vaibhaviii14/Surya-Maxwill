import Navbar from "../../Home/Navbar";
import "../../../styles/dashboard.css";

function DashboardLayout({ children, userType = "user" }) {
  return (
    <div className="dashboard-wrapper">
      <Navbar />

      <main className="dash-content" style={{ paddingTop: "13rem" }}>
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
