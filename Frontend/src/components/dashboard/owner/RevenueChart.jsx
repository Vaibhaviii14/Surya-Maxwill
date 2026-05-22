import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const DATA = [
  { day: "Mon", revenue: 45000, bookings: 32 },
  { day: "Tue", revenue: 52000, bookings: 38 },
  { day: "Wed", revenue: 48000, bookings: 35 },
  { day: "Thu", revenue: 61000, bookings: 44 },
  { day: "Fri", revenue: 75000, bookings: 55 },
  { day: "Sat", revenue: 95000, bookings: 70 },
  { day: "Sun", revenue: 106000, bookings: 82 },
];

function RevenueChart() {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: "#f4efe7",
          border: "2px solid #1f4d42",
          padding: "1rem 1.5rem",
          borderRadius: "16px",
          color: "#1f4d42",
          fontFamily: "'Special Elite', cursive",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }}>
          <p style={{ fontWeight: "700", marginBottom: "0.25rem" }}>{payload[0].payload.day}</p>
          <p style={{ color: "#1f4d42" }}>Revenue: <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>₹{payload[0].value.toLocaleString()}</span></p>
          <p style={{ color: "#53776d", fontSize: "0.85rem" }}>Bookings: {payload[0].payload.bookings} slots</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dash-card" style={{ padding: "2.5rem", minHeight: "400px", marginBottom: "3rem" }}>
      <h3 style={{ fontFamily: "'Special Elite', cursive", fontSize: "1.2rem", letterSpacing: "3px", textTransform: "uppercase", color: "#d7ff53", marginBottom: "2rem" }}>
        Weekly Revenue Analytics
      </h3>
      
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d7ff53" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#d7ff53" stopOpacity={0.0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(244, 239, 231, 0.05)" vertical={false} />
            <XAxis 
              dataKey="day" 
              stroke="rgba(244, 239, 231, 0.4)" 
              tick={{ fontFamily: "'Special Elite', cursive", fill: "#f4efe7", fontSize: 12 }} 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              stroke="rgba(244, 239, 231, 0.4)" 
              tick={{ fontFamily: "'Montserrat', sans-serif", fill: "#f4efe7", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `₹${value/1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#d7ff53" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;
