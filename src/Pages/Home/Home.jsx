import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import "./Home.css";

import dev from "../../Resources/Illustrations/dev.svg";

export const Home = () => {
  let title = useRef(null);
  let text = useRef(null);
  let me = useRef(null);
  let pic = useRef(null);
  let cta = useRef(null);

  useEffect(() => {
    TweenMax.from(title, 3, { x: -200, opacity: 0, ease: Power3.easeOut });
    TweenMax.from(text, 3, { y: 200, opacity: 0, ease: Power3.easeOut });
    TweenMax.from(cta, 3, { y: 200, opacity: 0, ease: Power3.easeOut });
    TweenMax.from(me, 5, {
      y: -200,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 3.5,
    });
    TweenMax.from(pic, 5, {
      y: 200,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 2.5,
    });
  }, []);

  return (
    <section className="home">
      <div className="container">
        <div className="textarea">
          <h2
            className="home-title"
            ref={(el) => {
              title = el;
            }}
          >
            Hello, I'm
            {/* seperating the word me */}
            <div
              className="purple-text me"
              ref={(el) => {
                me = el;
              }}
            >
              Victory
            </div>
          </h2>
          <p
            className="home-text"
            ref={(el) => {
              text = el;
            }}
          >
            A frontend Web developer, I do not just build user-centric,
            responsive websites, I create remarkable experiences on the
            internet. <br />I am currently open to remote, full time, and
            contract gigs. Feel free to contact me whenever you like.
          </p>
          <button
            className="cta"
            ref={(el) => {
              cta = el;
            }}
          >
            <a href="mailto:victoryndukwu7@gmail.com">contact me</a>
          </button>
        </div>
        <img
          className="illustration"
          src={dev}
          alt="dev"
          ref={(el) => {
            pic = el;
          }}
        />
      </div>
    </section>
  );
};
