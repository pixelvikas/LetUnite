import React, { useState } from "react";
import fullLogo from "../assets/fullLogo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar glass">
        {/* Logo */}
        <div className="logo-section">
          <img src={fullLogo} alt="Let's Unite" className="logo-img" />
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links desktop">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">Careers</a>
          <a href="#">Industries</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>

          {/* Hamburger */}
          <button
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu glass ${open ? "show" : ""}`}>
        <nav>
          <a onClick={() => setOpen(false)} href="#">
            Home
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Careers
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Industries
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Testimonials
          </a>
          <a onClick={() => setOpen(false)} href="#">
            FAQ
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Contact
          </a>
        </nav>

        <div className="mobile-actions">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      {/* Styles */}
      <style>{`
/* ================= RESET ================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ================= GLASS EFFECT ================= */
.glass {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

/* ================= NAVBAR ================= */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 56px;
  z-index: 100;
}

/* Logo */
.logo-img {
  height: 44px;
}

/* ================= DESKTOP NAV ================= */
.nav-links.desktop {
  display: flex;
  gap: 28px;
}

.nav-links a {
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  text-decoration: none;
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: #2e7d32;
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-links a.active {
  color: #2e7d32;
  font-weight: 600;
}

/* ================= ACTIONS ================= */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

.login-btn {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.signup-btn {
  padding: 8px 20px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(
    135deg,
    #64a057 0%,
    #849223 50%,
    #9e5516 100%
  );
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.signup-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(100, 160, 87, 0.45);
}

/* ================= HAMBURGER ================= */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: #111827;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ================= MOBILE MENU ================= */
.mobile-menu {
  position: fixed;
  inset: 0;
  padding-top: 96px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: all 0.35s ease;
  z-index: 90;
}

.mobile-menu.show {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.mobile-menu nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
}

.mobile-menu nav a {
  font-size: 22px;
  font-weight: 500;
  color: #111827;
  text-decoration: none;
}

.mobile-actions {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 1024px) {
  .nav-links.desktop {
    display: none;
  }

  .login-btn,
  .signup-btn {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .navbar {
    padding: 0 24px;
  }
}
      `}</style>
    </>
  );
};

export default Navbar;
