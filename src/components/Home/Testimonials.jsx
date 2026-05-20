import { useState } from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

function Testimonials() {

  const testimonials = [

    {
      quote:
        "Surya Maxwill completely changed how I play. The coaching here is on another level.",

      name: "Rahul Shrivastava",

      role: "Member since 2023",
    },

    {
      quote:
        "We hosted our company retreat here and everyone left obsessed with the experience.",

      name: "Ananya Patel",

      role: "Corporate Client",
    },

    {
      quote:
        "Within months I was competing in local tournaments confidently.",

      name: "Nidhi Kulkarni",

      role: "Member since 2024",
    },

    {
      quote:
        "The courts genuinely feel international and insanely premium.",

      name: "Aarav Mehta",

      role: "Tournament Player",
    },

    {
      quote:
        "The community here keeps me coming back every single week.",

      name: "Sanya Kapoor",

      role: "Club Member",
    },

    {
      quote:
        "Probably the most aesthetic sports club in the city.",

      name: "Dev Malhotra",

      role: "Lifestyle Member",
    },
  ];

  const [cards, setCards] = useState(testimonials);

  const nextCard = () => {

    const updated = [...cards];

    const first = updated.shift();

    updated.push(first);

    setCards(updated);
  };

  return (

    <section className="testimonials-section">

      <div className="container">

        {/* TOP */}

        <div className="testimonials-top">

          <div>

            <div className="testimonials-tag">
              OUR COMMUNITY
            </div>

            <h2>
              Loved By Players
              <br />
              Across India.
            </h2>

          </div>

        </div>

        {/* STACK AREA */}

        <div className="deck-area">

          {/* CARDS */}

          <div className="deck-wrapper">

            <AnimatePresence>

              {cards.map((item, index) => {

                if(index > 3) return null;

                return (

                  <motion.div
                    key={item.name}

                    className="testimonial-card"

                    initial={{
                      scale:0.9,
                      opacity:0,
                      x:120,
                    }}

                    animate={{

                      scale:
                        index === 0
                          ? 1
                          : index === 1
                          ? 0.95
                          : index === 2
                          ? 0.91
                          : 0.87,

                      y:index * 18,

                      x:index * 14,

                      rotate:index * -2,

                      opacity:1,

                      zIndex:10 - index,
                    }}

                    exit={{
                      x:-900,
                      rotate:-18,
                      opacity:0,
                      transition:{
                        duration:0.65,
                        ease:"easeInOut",
                      }
                    }}

                    transition={{
                      type:"spring",
                      stiffness:120,
                      damping:18,
                    }}
                  >

                    {/* STARS */}

                    <div className="stars">
                      ★★★★★
                    </div>

                    {/* TEXT */}

                    <p>
                      “{item.quote}”
                    </p>

                    {/* USER */}

                    <div className="testimonial-user">

                      <div className="user-circle">
                        {item.name[0]}
                      </div>

                      <div>

                        <h4>
                          {item.name}
                        </h4>

                        <span>
                          {item.role}
                        </span>

                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </AnimatePresence>

          </div>

          {/* BUTTON */}

          <button
            className="next-button"
            onClick={nextCard}
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;