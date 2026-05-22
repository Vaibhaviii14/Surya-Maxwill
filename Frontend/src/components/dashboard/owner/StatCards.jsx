import { DollarSign, Calendar, TrendingUp } from "lucide-react";

function StatCards({ stats }) {
  const localStats = stats || [
    {
      title: "Total Revenue",
      value: "₹4,82,500",
      change: "+12.4% vs last week",
      icon: <DollarSign size={24} color="#d7ff53" />,
    },
    {
      title: "Active Bookings Today",
      value: "42 Sessions",
      change: "+8% vs yesterday",
      icon: <Calendar size={24} color="#d7ff53" />,
    },
    {
      title: "Court Utilization Rate",
      value: "84.2%",
      change: "+3.1% peak efficiency",
      icon: <TrendingUp size={24} color="#d7ff53" />,
    }
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
      {localStats.map((stat, idx) => (
        <div key={idx} className="dash-card">
          <div className="dash-card-header" style={{ marginBottom: "1rem" }}>
            <span style={{ fontFamily: "'Special Elite', cursive", color: "rgba(244, 239, 231, 0.7)", letterSpacing: "1px", fontSize: "0.95rem" }}>
              {stat.title}
            </span>
            <div style={{ background: "rgba(215, 255, 83, 0.1)", padding: "0.6rem", borderRadius: "50%" }}>
              {stat.icon}
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Londrina Solid', cursive", fontSize: "3.5rem", fontWeight: "400", color: "#d7ff53", lineHeight: "1", marginBottom: "0.5rem" }}>
              {stat.value}
            </h3>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", opacity: "0.8" }}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatCards;
