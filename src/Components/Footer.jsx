import React from "react";
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import logo from "../assets/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <div className="brand-row">
            <img src={logo} alt="Let’s Unite" />
            <div>
              <h4>Let’s Unite</h4>
              <span>One World One Family</span>
            </div>
          </div>

          <h2 className="footer-heading">
            Let’s <span className="footer-green">Connect</span> And{" "}
            <span className="footer-green">Build</span> Together.
          </h2>

          <p className="footer-text">
            Follow us on social media to never miss a job opportunity, career
            insights, and expert hiring tips.
          </p>

          <div className="footer-social">
            <a href="#">
              <FiInstagram />
            </a>
            <a href="#">
              <FiLinkedin />
            </a>
            <a href="#">
              <FiTwitter />
            </a>
            <a href="#">
              <FiYoutube />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
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

      {/* BOTTOM */}
      <div className="footer-bottom">
        Copyrights {year} Let’s Unite. All rights reserved.
      </div>

      {/* STYLES */}
      <style>{`
/* ================= FOOTER ================= */
.footer {
  background: #ffffff;
  padding: 100px 20px 40px;
  border-top: 1px solid #e5e7eb;
  color: #111827;
  font-family: inherit;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 80px;
}

/* LEFT */
.footer-left {
  max-width: 520px;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.brand-row img {
  width: 42px;
}

.brand-row h4 {
  font-size: 16px;
  font-weight: 600;
}

.brand-row span {
  font-size: 12px;
  color: #6b7280;
}

.footer-heading {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
}

.footer-green {
  color: #7a8f2a;
}

.footer-text {
  font-size: 14px;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 20px;
}

.footer-social {
  display: flex;
  gap: 16px;
  font-size: 18px;
}

.footer-social a {
  color: #374151;
  transition: color 0.2s ease;
}

.footer-social a:hover {
  color: #7a8f2a;
}

/* RIGHT */
.footer-right {
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
  color: #4b5563;
  margin-bottom: 10px;
}

/* BOTTOM */
.footer-bottom {
  margin-top: 60px;
  text-align: center;
  font-size: 13px;
  color: #6b7280;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .footer-container {
    flex-direction: column;
    gap: 60px;
  }

  .footer-right {
    gap: 60px;
  }
}

@media (max-width: 600px) {
  .footer-right {
    flex-direction: column;
    gap: 40px;
  }

  .footer-heading {
    font-size: 24px;
  }
}
      `}</style>
    </footer>
  );
};

export default Footer;
