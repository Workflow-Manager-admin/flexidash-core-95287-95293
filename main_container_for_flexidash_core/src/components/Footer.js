import React from 'react';
import '../styles/MainContainer.css';

// PUBLIC_INTERFACE
/**
 * Footer component for the FlexiDash main container
 * Displays copyright information and links with enhanced styling
 */
function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="flexidash-footer">
      <div className="footer-content">
        <div className="footer-copyright">
          © {currentYear} KAVIA AI. All Rights Reserved.
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
