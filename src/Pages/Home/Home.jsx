import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="textarea">
          <h2 className="home-title">
            Hello, I'm
            {/* seperating the word me */}
            <div className="me">Victory</div>
          </h2>
          <motion.p
            className="home-text"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 1.5}}
            >
            Software Engineer, focused on front end web development. I do not just build user-centric, responsive
            websites, I create remarkable experiences on the internet. <br />I
            am currently open to remote, full time, and contract gigs. Feel free
            to contact me whenever you like.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 200 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ duration: 3 }}
            className="cta">
            <Link to="mailto:victoryndukwu7@gmail.com">Get in touch</Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
