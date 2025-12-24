import React from "react";
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import logo from "../assets/logo.svg"; // your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left section */}
        <div className="footer-brand">
          <div className="brand-row">
            <img src={logo} alt="Let's Unite" />
            <div>
              <h4>Let’s Unite</h4>
              <span>One World One Family</span>
            </div>
          </div>

          <h2>
            Let’s <span className="green">Connect</span> And{" "}
            <span className="orange">Build</span> Together.
          </h2>

          <p>
            Follow us on social media to never miss a job opportunity, career
            insights, and expert hiring tips.
          </p>

          <div className="social-icons">
            <FiInstagram />
            <FiLinkedin />
            <FiTwitter />
            <FiYoutube />
          </div>
        </div>

        {/* Right section */}
        <div className="footer-links">
          <div className="footer-col">
            <h5>Navigation</h5>
            <ul>
              <li>Home</li>
              <li>Careers</li>
              <li>Testimonials</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Our address</h5>
            <ul>
              <li>+02245158999</li>
              <li>info@letsunite.in</li>
              <li>Mumbai | Delhi | Chennai | Ahmedabad | Pune</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © Copyrights 2025 Let’s Unite. All rights reserved.
      </div>

      <style>
        {`
        /* ================= FOOTER ================= */
.footer {
  padding: 100px 20px 40px;
  background: #ffffff;
  color: #111827;
}

/* Top layout */
.footer-top {
  max-width: 1200px;
  margin: 0 auto 60px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
}

/* Brand section */
.footer-brand {
  max-width: 520px;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.brand-row img {
  width: 44px;
  height: 44px;
}

.brand-row h4 {
  font-size: 18px;
  font-weight: 600;
}

.brand-row span {
  font-size: 12px;
  color: #6b7280;
}

/* Headline */
.footer-brand h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 14px;
}

.green {
  color: #7a8f2a;
}

.orange {
  color: #c46a1c;
}

/* Description */
.footer-brand p {
  font-size: 14px;
  line-height: 1.7;
  color: #6b7280;
  margin-bottom: 18px;
}

/* Social icons */
.social-icons {
  display: flex;
  gap: 14px;
  font-size: 18px;
  color: #111827;
}

.social-icons svg {
  cursor: pointer;
  transition: color 0.25s ease, transform 0.25s ease;
}

.social-icons svg:hover {
  color: #7a8f2a;
  transform: translateY(-2px);
}

/* Right columns */
.footer-links {
  display: flex;
  gap: 80px;
}

.footer-col h5 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 14px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col li {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
}

/* Bottom */
.footer-bottom {
  text-align: center;
  font-size: 13px;
  color: #6b7280;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 900px) {
  .footer-top {
    flex-direction: column;
    gap: 60px;
  }

  .footer-links {
    gap: 60px;
  }
}

@media (max-width: 600px) {
  .footer-links {
    flex-direction: column;
    gap: 40px;
  }

  .footer-brand h2 {
    font-size: 22px;
  }
}
`}
      </style>
    </footer>
  );
};

export default Footer;
