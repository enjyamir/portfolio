import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__icon footer__icon--facebook" 
            aria-label="Facebook"
          >
            f
          </a>
          <a 
            href="https://figma.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__icon footer__icon--figma" 
            aria-label="Figma"
          >
            F
          </a>
          <a 
            href="https://behance.net" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__icon footer__icon--behance" 
            aria-label="Behance"
          >
            Be
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__icon footer__icon--instagram" 
            aria-label="Instagram"
          >
            📷
          </a>
        </div>

        <div className="footer__logo" aria-label="EA Logo">EA</div>

        <nav className="footer__nav" aria-label="Footer Navigation">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/about" className="footer__link">About</Link>
          <Link to="/projects" className="footer__link">Projects</Link>
          <Link to="/contact" className="footer__link">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}