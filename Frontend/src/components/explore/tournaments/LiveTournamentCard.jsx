import { Trophy, Calendar, MapPin, Play } from "lucide-react";

function LiveTournamentCard({ tourney }) {
  return (
    <div className="tournament-card">
      <div className="tourney-info">
        <div className="live-indicator">
          <div className="pulse-dot"></div> LIVE NOW
        </div>
        
        <h3 className="tourney-name">{tourney.name}</h3>
        
        <div className="tourney-meta">
          <div className="meta-item">
            <Trophy size={16} color="#d7ff53" />
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
          <div className="prize-label">Prize Pool</div>
          <div className="prize-amount">{tourney.prize}</div>
        </div>
        
        <button className="tourney-btn">
          <Play size={18} /> Watch Stream
        </button>
      </div>
    </div>
  );
}

export default LiveTournamentCard;
