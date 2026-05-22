import { useNavigate } from 'react-router-dom';

function Experience() {
  const navigate = useNavigate();

  return (
    <section className="experience-section">
      <div className="experience-container">

        {/* LEFT GRID */}

        <div className="experience-grid">

          <img
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="grid-img large"
          />

          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="grid-img small"
          />

          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="grid-img small"
          />

          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="grid-img wide"
          />

        </div>

        {/* RIGHT CONTENT */}

        <div className="experience-content">

          <span className="experience-tag">
            THE EXPERIENCE
          </span>

          <h2>
            Cinematic.
            <br />
            By
            <br />
            Design.
          </h2>

          <p>
            Architecture, light and material chosen
            for atmosphere. Every match here feels
            like the cover of a magazine —
            because it should.
          </p>

          <button onClick={() => navigate('/arena')}>
            Enter The Gallery
          </button>

        </div>

      </div>

    </section>

  );
}

export default Experience;