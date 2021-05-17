import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";

const fadeTransition = {
  in: { opacity: 0 },
  animate: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  duration: 5,
};

export const Home = () => {
  return (
    <motion.section
      className="home"
      initial="in"
      animate="animate"
      exit="out"
      transition={pageTransition}
      variants={fadeTransition}>
      <div className="container">
          <h2 className="home-title">
            hello, I'm
            {/* seperating the word me */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="me">
              Victory
            </motion.div>
          </h2>
          <motion.p
            className="home-text"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}>
            Software Engineer, Technical Writer and Content Creator
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 200 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ duration: 3 }}
            className="cta">
            <Link to="mailto:victoryndukwu7@gmail.com">Get in touch</Link>
          </motion.button>
      </div>
    </motion.section>
  );
};
