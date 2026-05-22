import { Trophy, Calendar, Award } from "lucide-react";

function PastTournamentCard({ tourney }) {
  return (
    <div className="tournament-card past">
      <div className="tourney-info">
        <h3 className="tourney-name">{tourney.name}</h3>
        
        <div className="tourney-meta">
          <div className="meta-item">
            <Calendar size={16} />
            <span>{tourney.date}</span>
          </div>
          <div className="meta-item">
            <Trophy size={16} />
            <span>{tourney.category}</span>
          </div>
        </div>
        
        <p className="tourney-desc">{tourney.description}</p>

        <div className="winner-highlight">
          <Award size={28} className="winner-icon" />
          <div>
            <div className="winner-label">CHAMPION</div>
            <div className="winner-name">{tourney.winner}</div>
          </div>
        </div>
      </div>

      <div className="tourney-action">
        <button className="tourney-btn secondary">
          View Results
        </button>
      </div>
    </div>
  );
}

export default PastTournamentCard;
