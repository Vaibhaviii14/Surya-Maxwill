import { useNavigate } from 'react-router-dom';
import img1 from "../../assets/gallery/pickleball6.jpg";
import img2 from "../../assets/gallery/pickleball5.jpg";
import img3 from "../../assets/gallery/pickleball3.jpg";
import img4 from "../../assets/gallery/pickleball7.jpeg";

function Experience() {
  const navigate = useNavigate();

  return (
    <section className="experience-section">
      <div className="experience-container">

        {/* LEFT GRID */}

        <div className="experience-grid">

          <img
            src={img1}
            alt=""
            className="grid-img large"
          />

          <img
            src={img2}
            alt=""
            className="grid-img small"
          />

          <img
            src={img3}
            alt=""
            className="grid-img small"
          />

          <img
            src={img4}
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