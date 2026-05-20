import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ball from "../assets/ball.png";

gsap.registerPlugin(ScrollTrigger);

function TransitionSection() {

  const ballRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".transition-wrapper",
        start: "top top",
        end: "+=2200",
        scrub: 1,
        pin: true,
      }
    });

    // BALL ANIMATION
    tl.fromTo(
      ballRef.current,
      {
        x: -500,
        y: 100,
        scale: 0.2,
        rotate: 0,
        opacity: 0
      },
      {
        x: window.innerWidth * 0.75,
        y: 0,
        scale: 1.8,
        rotate: 1080,
        opacity: 1,
        ease: "none"
      }
    );

    // FIRST SECTION MOVE OUT
    tl.to(
      ".first-panel",
      {
        x: -300,
        opacity: 0,
      },
      0
    );

    // SECOND SECTION ENTER
    tl.fromTo(
      ".second-panel",
      {
        x: 500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      },
      0.3
    );

    // BG COLOR TRANSITION
    tl.to(
      "body",
      {
        backgroundColor: "#2f5d50",
      },
      0
    );

  }, []);

  return (
    <section className="transition-wrapper">

      {/* ROLLING BALL */}
      <img
        ref={ballRef}
        src={ball}
        alt=""
        className="rolling-ball"
      />

      {/* FIRST PANEL */}
      <div className="first-panel">
        <h2>
          Precision.
          <br />
          In Motion.
        </h2>
      </div>

      {/* SECOND PANEL */}
      <div className="second-panel">

        <div className="second-content">
          <h2>
            Built
            <br />
            For Flow.
          </h2>

          <p>
            Experience immersive coaching,
            luxury courts and next-level play.
          </p>
        </div>

      </div>
    </section>
  );
}

export default TransitionSection;