import React, { useState, useEffect } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';
import './Arena.css';
import img1 from '../../assets/gallery/pickleball1.jpg';
import img2 from '../../assets/gallery/pickleball2.jpg';
import img3 from '../../assets/gallery/pickleball6.jpg';
import img4 from '../../assets/gallery/pickleball4.jpg';
const coaches = [
  {
    id: 1,
    name: 'MARCUS REED',
    role: 'HEAD PRO / NUTRITION',
    quote: '"Greatness isn\'t just a skill, it\'s a lifestyle."',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'SARAH CHEN',
    role: 'HEAD STRATEGIST',
    quote: '"Master the mental game to own the court."',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'ELIAS VOSS',
    role: 'BOOTCAMP SPECIALIST',
    quote: '"The basics done perfectly become elite."',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    name: 'JACKSON TY',
    role: 'POWER ANALYST',
    quote: '"Fuel your motion with precision power."',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 5,
    name: 'LEO VARGAS',
    role: 'ENDURANCE COACH',
    quote: '"Push past your limits."',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 6,
    name: 'MIA TANG',
    role: 'AGILITY EXPERT',
    quote: '"Speed kills, control dominates."',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600',
  }
];

function Arena() {
  const [sliderCoaches, setSliderCoaches] = useState(coaches);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    setSliderCoaches(prev => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setSliderCoaches(prev => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
  };

  return (
    <>
      <Navbar />
      <div className="arena-page">
        {/* HERO GALLERY */}
        <section className="arena-hero container">
          <div className="arena-hero-header">
            <div className="arena-title-wrapper">
              <span className="arena-badge">ESTABLISHED 2024</span>
              <h1 className="arena-title">THE GALLERY.</h1>
            </div>
            <div className="arena-hero-desc">
              <p>Precision engineered for elite performance. Where high-end hospitality meets the intensity of professional play.</p>
            </div>
          </div>

          <div className="arena-gallery">
            <div className="gallery-item item-main">
              <img src={img1} alt="Match Play" />
            </div>
            <div className="gallery-item item-ball">
              <img src={img2} alt="Pickleball" />
            </div>
            <div className="gallery-item item-lounge">
              <img src={img3} alt="Lounge Area" />
            </div>
            <div className="gallery-item item-team">
              <img src={img4} alt="Team Play" />
            </div>
          </div>
        </section>

        {/* ELITE SQUAD SLIDER */}
        <section className="elite-squad-section">
          <div className="elite-header">
            <span className="elite-subtitle">THE MASTERS OF MOTION</span>
            <h2 className="elite-title">ELITE SQUAD.</h2>
          </div>

          <div className="slider-wrapper">
            <div className="slider-container">
              <div className="slide">
                {sliderCoaches.map(coach => (
                  <div
                    key={coach.id}
                    className="item"
                    style={{ backgroundImage: `url(${coach.image})` }}
                  >
                    <div className="content">
                      <div className="name">{coach.name}</div>
                      <div className="des">{coach.role} - {coach.quote}</div>
                      <button>See More</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="button">
                <button className="next" onClick={handleNext}>&rarr;</button>
              </div>
            </div>
          </div>
        </section>

        {/* INNER CIRCLE CTA */}
        <section className="inner-circle-section container">
          <div className="inner-circle-card">
            <h2>JOIN THE INNER CIRCLE.</h2>
            <p>Get exclusive access to court reservations, elite training clinics, and club events before anyone else.</p>
            <form className="inner-circle-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="YOUR EMAIL ADDRESS" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Arena;
