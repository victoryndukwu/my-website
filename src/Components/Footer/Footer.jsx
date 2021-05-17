import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.css';

export const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <ul className="footer-menu">
          <a className="footer-link" href="https://twitter.com/N__Victory">
            <FaTwitter className='footer-icon' />
          </a>
          <a className="footer-link" href="https://github.com/victoryndukwu">
            <FaGithub className='footer-icon' />
          </a>
          <a className="footer-link" href="https://www.linkedin.com/in/victory-ndukwu-520163145/">
            <FaLinkedin className='footer-icon' />
          </a>
        </ul>
      </div>
    </section>
  );
};
