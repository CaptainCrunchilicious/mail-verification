import { Shield } from 'lucide-react';
import './footerstyles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <div className="footer-brand">
            <Shield size={20} />
            Email Leak Checker
          </div>
          <p className="footer-text">
            Protect your online identity by checking if your email has been exposed in data breaches.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Email Leak Checker. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
