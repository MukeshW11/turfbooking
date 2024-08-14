import React from 'react';
import '../refund/randr';
import '../Styles/Footer.css'; // Footer styles
// import ReturnRefundPolicy from '../refund/randr';

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-container">
        
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About</a></li>
            <li><a href="/ReturnRefundPolicy">Return and Refund policy</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: turfbay@turfbooker.com</p>
          <p>Phone: +91 9585698547</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TurfBooking. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;