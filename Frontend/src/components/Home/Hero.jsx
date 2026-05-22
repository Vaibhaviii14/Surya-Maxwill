import { useEffect, useRef } from "react";

import paddles from "../../assets/paddles.png";
import ball from "../../assets/ball.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {

  const ballRef = useRef(null);

useEffect(() => {

  const ctx = gsap.context(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
      }
    });
  

    // BALL
    // BALL
tl.fromTo(
  ballRef.current,

  // STARTING STATE
  {
    x: 0,
    y: 0,
    scale: 0.7,
    rotation: 0,
  },

  // ENDING STATE
  {
    x: 850,
    y: -120,
    scale: 1.8,
    rotation: 720,
    ease: "none",
  },

  0
);

    // PADDLES OUT
    tl.to(
      ".hero-image-wrap",
      {
        opacity: 0,
        x: -200,
      },
      0
    );

    // HERO CONTENT OUT
    tl.to(
      ".hero-content",
      {
        opacity: 0,
        x: 150,
      },
      0
    );

    // BG CHANGE
    tl.to(
      ".hero-wrapper",
      {
        backgroundColor: "#2f5d50",
      },
      0
    );

    // NEXT SECTION
    tl.to(
      ".next-section",
      {
        opacity: 1,
      },
      0.3
    );

    tl.fromTo(
      ".next-section-content",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      },
      0.4
    );

  });

  return () => ctx.revert();

}, []);

  return (
    <div className="hero-section-outer">
      <section className="hero-wrapper">

        

        {/* BALL */}
        <img
          ref={ballRef}
          src={ball}
          alt=""
          className="rolling-ball"
        />

        {/* HERO */}
        <div className="hero container">

          {/* LEFT */}
          <div className="hero-image-wrap">
            <img
              src={paddles}
              alt=""
              className="paddles-img"
            />
          </div>

          {/* RIGHT */}
          <div className="hero-content">

            <div className="tag">
              INDIA'S PREMIUM PICKLEBALL CLUB
            </div>

            <h1>
              Play.
              <br />
              Train.
              <br />
              Dominate.
            </h1>

            <p>
              Elevate your game with luxury courts,
              elite coaching and cinematic experiences.
            </p>

          </div>
        </div>

        {/* NEXT SECTION */}
        <div className="next-section">

          <div className="container next-grid">

            {/* LEFT CONTENT */}
            <div className="next-section-content">

              <div className="mini-tag">
    PREMIUM EXPERIENCE
  </div>

  <h2>
    Precision in Motion
  </h2>

  <p>
    Experience immersive coaching,
    luxury courts and next-level
    play built for modern athletes.
  </p>

  <div className="stats-row">

    <div className="stat-item">
      <h3>12</h3>
      <span>Pro Courts</span>
    </div>

    <div className="stat-item">
      <h3>300+</h3>
      <span>Members</span>
    </div>

    <div className="stat-item">
      <h3>15</h3>
      <span>Certified Coaches</span>
    </div>

    <div className="stat-item">
      <h3>6</h3>
      <span>Years Strong</span>
    </div>

  </div>

            </div>

            {/* RIGHT EMPTY SPACE FOR BALL */}
            <div className="ball-space"></div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default Hero;