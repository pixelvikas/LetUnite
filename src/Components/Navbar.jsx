import React, { useEffect, useState } from "react";
import fullLogo from "../assets/fullLogo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = [
        "home",
        "career",
        "industries",
        "testimonials",
        "faq",
        "contact",
      ];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "glass" : "transparent"}`}>
        {/* Logo */}
        <button className="logo-section" onClick={() => handleScrollTo("home")}>
          <img src={fullLogo} alt="Let's Unite" className="logo-img" />
        </button>

        {/* Desktop Nav */}
        <nav className="nav-links desktop">
          {[
            ["home", "Home"],
            ["career", "Careers"],
            ["industries", "Industries"],
            ["testimonials", "Testimonials"],
            ["faq", "FAQ"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleScrollTo(id)}
              className={activeSection === id ? "active" : ""}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>

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

      {/* Mobile Menu */}
      <div className={`mobile-menu glass ${open ? "show" : ""}`}>
        <nav>
          {[
            ["home", "Home"],
            ["career", "Careers"],
            ["industries", "Industries"],
            ["testimonials", "Testimonials"],
            ["faq", "FAQ"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button key={id} onClick={() => handleScrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="mobile-actions">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
/* RESET */
button {
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

/* NAVBAR */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 76px;
  padding: 0 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  transition: all 0.35s ease;
}

.navbar.transparent {
  background: transparent;
}

.navbar.glass {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
}

.logo-img {
  height: 44px;
}

/* DESKTOP NAV */
.nav-links.desktop {
  display: flex;
  gap: 28px;
}

.nav-links button {
  font-size: 16px;
  font-weight: 500;
  color: #111827;
  position: relative;
}

.nav-links button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: #2e7d32;
  transition: width 0.3s ease;
}

.nav-links button:hover::after,
.nav-links button.active::after {
  width: 100%;
}

.nav-links button.active {
  color: #2e7d32;
  font-weight: 600;
}

/* ACTIONS */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

.signup-btn {
  padding: 8px 22px;
  border-radius: 999px;
  background: linear-gradient(135deg, #64a057, #849223, #9e5516);
  color: #fff;
  font-weight: 600;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  z-index: 110; /* ABOVE MENU */
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: #111827;
  transition: all 0.3s ease;
}
.hamburger span {
  width: 24px;
  height: 2px;
  background: #111827;
}

/* MOBILE MENU */
.mobile-menu {
  position: fixed;
  inset: 0;
  padding-top: 96px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.35s ease;
}

.mobile-menu.show {
  opacity: 1;
  pointer-events: auto;
}

.mobile-menu nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
}

.mobile-menu nav button {
  font-size: 22px;
  font-weight: 500;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .nav-links.desktop,
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


/* HAMBURGER ANIMATION */
.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* MOBILE MENU */
.mobile-menu {
  position: fixed;
  inset: 0;
  padding-top: 96px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: all 0.35s ease;
  z-index: 99; /* BELOW NAVBAR */
}

/* SHOW STATE */
.mobile-menu.show {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

/* GLASS EFFECT */
.glass {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
      `}</style>
    </>
  );
};

export default Navbar;
