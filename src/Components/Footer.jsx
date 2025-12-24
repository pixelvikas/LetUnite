import React from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiArrowUp,
  FiMail,
} from "react-icons/fi";
import logo from "../assets/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-card">
        {/* ================= TOP ================= */}
        <div className="footer-top">
          {/* BRAND */}
          <div className="footer-brand">
            <div className="brand-row">
              <img src={logo} alt="Let’s Unite" />
              <div>
                <h4>Let’s Unite</h4>
                <span>One World · One Family</span>
              </div>
            </div>

            <h2>
              Let’s <span className="green-txt">Connect</span> &{" "}
              <span className="orange">Build</span> Careers Together
            </h2>

            <p>
              Discover jobs, hiring insights, and career growth opportunities
              curated by industry experts.
            </p>

            {/* Social */}
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="#" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" aria-label="YouTube">
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="footer-links">
            <div className="footer-col">
              <h5>Navigation</h5>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li>
                  <a href="tel:+02245158999">+91 2245 158 999</a>
                </li>
                <li>
                  <a href="mailto:info@letsunite.in">info@letsunite.in</a>
                </li>
                <li>Mumbai · Delhi · Chennai · Pune</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="footer-bottom">
          <span>© {year} Let’s Unite. All rights reserved.</span>

          <button
            className="scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
/* ================= FOOTER ================= */
.footer {
  padding: 120px 20px 40px;
  background: #ffffff;
}

.footer-card {
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 60px 40px;
  border-radius: 28px;
  background: linear-gradient(135deg, #1c1c1c, #222 55%, #2b2455);
  color: #ffffff;
  box-shadow: 0 40px 100px rgba(0,0,0,0.25);
}

/* ================= TOP ================= */
.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 80px;
}

/* BRAND */
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
  width: 46px;
}

.brand-row h4 {
  font-size: 18px;
  font-weight: 600;
}

.brand-row span {
  font-size: 12px;
  color: #9ca3af;
}

.footer-brand h2 {
  font-size: clamp(22px, 4vw, 30px);
  font-weight: 600;
  margin-bottom: 16px;
}

.green-txt { color: #8bc34a; }
.orange { color: #f59e0b; }

.footer-brand p {
  font-size: 14px;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 24px;
}

/* NEWSLETTER */
.newsletter {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.08);
  padding: 8px;
  border-radius: 999px;
  margin-bottom: 24px;
}

.newsletter input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
}

.newsletter button {
  padding: 8px 18px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg,#8bc34a,#f59e0b);
  color: #111;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

/* SOCIAL */
.social-icons {
  display: flex;
  gap: 14px;
  font-size: 18px;
}

.social-icons a {
  color: #ffffff;
  transition: transform 0.25s ease, color 0.25s ease;
}

.social-icons a:hover {
  color: #8bc34a;
  transform: translateY(-3px);
}

/* LINKS */
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
  margin-bottom: 10px;
  font-size: 14px;
}

.footer-col a {
  color: #d1d5db;
  text-decoration: none;
}

.footer-col a:hover {
  color: #8bc34a;
}

/* ================= BOTTOM ================= */
.footer-bottom {
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #9ca3af;
}

.scroll-top {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.15);
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.25s ease;
}

.scroll-top:hover {
  transform: translateY(-3px);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 900px) {
  .footer-top {
    flex-direction: column;
    gap: 60px;
  }

  .footer-links {
    gap: 50px;
  }
}

@media (max-width: 600px) {
  .footer-card {
    padding: 50px 24px 30px;
  }

  .footer-links {
    flex-direction: column;
    gap: 40px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
  }
}
      `}</style>
    </footer>
  );
};

export default Footer;
