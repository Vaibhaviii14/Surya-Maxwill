import { Trophy, Calendar, MapPin, ArrowRight } from "lucide-react";

function UpcomingTournamentCard({ tourney }) {
  return (
    <div className="tournament-card">
      <div className="tourney-info">
        <h3 className="tourney-name">
          {tourney.name}
        </h3>
        
        <div className="tourney-meta">
          <div className="meta-item">
            <Calendar size={16} color="#d7ff53" />
            <span style={{ color: "#d7ff53" }}>{tourney.date}</span>
          </div>
          <div className="meta-item">
            <Trophy size={16} />
            <span>{tourney.category}</span>
          </div>
          <div className="meta-item">
            <MapPin size={16} />
            <span>{tourney.location}</span>
          </div>
        </div>
        
        <p className="tourney-desc">{tourney.description}</p>
      </div>

      <div className="tourney-action">
        <div className="tourney-prize">
          <div className="prize-label">Expected Prize Pool</div>
          <div className="prize-amount">{tourney.prize}</div>
        </div>
        
        <button className="tourney-btn">
          Join Registry <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default UpcomingTournamentCard;
