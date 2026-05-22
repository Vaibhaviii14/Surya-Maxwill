import { useState } from "react";
import LiveTournamentCard from "./LiveTournamentCard";
import UpcomingTournamentCard from "./UpcomingTournamentCard";
import PastTournamentCard from "./PastTournamentCard";

const DUMMY_TOURNAMENTS = {
  live: [
    {
      id: "t1",
      name: "Surya Open Invitationals",
      category: "Men's Pro Pickleball Doubles",
      location: "Centre Court",
      description: "The semi-finals are underway. Witness top national pickleball players battle it out in intense kitchen-line exchanges.",
      prize: "₹2,50,000",
    }
  ],
  upcoming: [
    {
      id: "t2",
      name: "The Maxwill Classic",
      date: "Oct 15 - Oct 18, 2026",
      category: "Mixed Doubles Elite",
      location: "The Pavilion",
      description: "Registration is open for the annual Maxwill Pickleball Classic. Secure your team's spot and dink against the region's finest.",
      prize: "₹1,00,000",
    },
    {
      id: "t3",
      name: "Futures Challenger Series",
      date: "Nov 02 - Nov 05, 2026",
      category: "Amateur Pickleball Singles",
      location: "The Atrium",
      description: "A perfect proving ground for rising talent. Compete in our climate-controlled indoor pickleball arena.",
      prize: "₹50,000",
    }
  ],
  past: [
    {
      id: "t4",
      name: "Summer Slam '26",
      date: "August 2026",
      category: "Pro Singles",
      description: "An incredible weekend of high-intensity pickleball that concluded with a 3-game thriller in the finals.",
      winner: "Vikram Rathore",
    }
  ]
};

function TournamentTabs() {
  const [activeTab, setActiveTab] = useState("live");

  return (
    <section className="tournaments-section">
      <div className="tournaments-header">
        <h2 className="tournaments-title font-thin">The Tournament Hub.</h2>
        <div className="tournament-tabs">
          <button 
            className={`tournament-tab ${activeTab === "live" ? "active" : ""}`}
            onClick={() => setActiveTab("live")}
          >
            Live & Ongoing
          </button>
          <button 
            className={`tournament-tab ${activeTab === "upcoming" ? "active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Events
          </button>
          <button 
            className={`tournament-tab ${activeTab === "past" ? "active" : ""}`}
            onClick={() => setActiveTab("past")}
          >
            Hall of Fame
          </button>
        </div>
      </div>

      <div className="tournaments-grid">
        {activeTab === "live" && DUMMY_TOURNAMENTS.live.map(t => (
          <LiveTournamentCard key={t.id} tourney={t} />
        ))}
        {activeTab === "upcoming" && DUMMY_TOURNAMENTS.upcoming.map(t => (
          <UpcomingTournamentCard key={t.id} tourney={t} />
        ))}
        {activeTab === "past" && DUMMY_TOURNAMENTS.past.map(t => (
          <PastTournamentCard key={t.id} tourney={t} />
        ))}
        
        {activeTab === "live" && DUMMY_TOURNAMENTS.live.length === 0 && (
          <div style={{ color: "rgba(244, 239, 231, 0.5)", fontFamily: "'Special Elite', cursive" }}>
            No live tournaments at the moment.
          </div>
        )}
      </div>
    </section>
  );
}

export default TournamentTabs;
