import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* OTP Description */}
        <div className="footer-about">
          <h4>OTP Studios</h4>
          <p>
            Capturing your best moments with passion and precision. From weddings to personal shoots, 
            we make your memories last forever.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p><Phone size={16} className="footer-icon" /> Phone: +91 81433 30111</p>
          <p><Phone size={16} className="footer-icon" /> Phone: +91 97034 50304</p>
          <p><Mail size={16} className="footer-icon" /> <strong>Email:</strong> <a href="mailto:ontargetportraits@gmail.com">ontargetportraits@gmail.com</a></p>
          <p><MapPin size={16} className="footer-icon" /> <strong>Address:</strong> OTP Studios, Plot No 201, Bramanapalli, Manneguda, Ranga Reddy, Telangana, 501510</p>

          {/* Social Links */}
          <div className="footer-socials">
            <a href="https://instagram.com/ontargetportraits" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} OTP Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
