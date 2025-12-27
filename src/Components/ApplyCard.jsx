import React from "react";
import logo from "../assets/logo.svg";
import bgline from "../assets/bgline.svg";

const ApplyCard = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="apply-overlay" onClick={onClose} />

      {/* Side Panel */}
      <div className="apply-panel">
        {/* Decorative Background Lines */}
        <img src={bgline} alt="" className="bg-line top-left" />
        <img src={bgline} alt="" className="bg-line bottom-right" />

        {/* Header */}
        <div className="apply-top">
          <div className="side-brand">
            <img src={logo} alt="Let's Unite" className="logo" />
            <div className="side-brand-text">
              <h4>Let’s Unite</h4>
              <span>One World One Family</span>
            </div>
          </div>

          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Title */}
        <h2 className="apply-title">Ready To Join The Logistics Industry?</h2>
        <p className="apply-subtitle">
          Submit Your Profile, Our Team Will Contact You For Suitable Openings
        </p>

        {/* Form */}
        <form className="apply-form">
          <div className="grid">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="tel" placeholder="Contact Number" />
            <input type="email" placeholder="Email Id" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Upload Resume" />
          </div>

          <textarea placeholder="Message" rows="4" />

          <button type="submit" className="apply-btn">
            Apply Now
          </button>
        </form>
      </div>

      {/* Styles */}
      <style>{`
/* OVERLAY */
.apply-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  z-index: 99;
}

/* PANEL (DESKTOP) */
.apply-panel {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: min(520px, 100%);
  padding: 32px;
  background: linear-gradient(160deg, #141414, #050505);
  color: #fff;
  z-index: 100;
  border-radius: 24px 0 0 24px;
  box-shadow: -30px 0 70px rgba(0,0,0,0.7);
  animation: slideIn 0.4s ease forwards;
  overflow: hidden;
}

/* ANIMATION */
@keyframes slideIn {
  from { transform: translate(100%, -50%); }
  to { transform: translate(0, -50%); }
}

/* BACKGROUND LINES */
.bg-line {
  position: absolute;
  width: 130%;
  pointer-events: none;
}

.bg-line.top-left {
  top: -260px;
  left: -300px;
  transform: rotate(25deg);
}

.bg-line.bottom-right {
  bottom: -300px;
  right: -320px;
  transform: rotate(-20deg);
}

/* HEADER */
.apply-top {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.side-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.logo {
  height: 38px;
}

.side-brand-text h4 {
  font-size: 15px;
  font-weight: 600;
}

.side-brand-text span {
  font-size: 11px;
  opacity: 0.8;
}

.close-btn {
  position: absolute;
  right: 0;
  background: none;
  border: none;
  font-size: 22px;
  color: #fff;
  cursor: pointer;
}

/* TITLES */
.apply-title {
  text-align: center;
  margin-top: 20px;
  font-size: 22px;
  font-weight: 600;
}

.apply-subtitle {
  text-align: center;
  margin-top: 6px;
  font-size: 13px;
  color: #cfcfcf;
}

/* FORM */
.apply-form {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.apply-form input,
.apply-form textarea {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.18);
  padding: 12px 14px;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
}

.apply-form textarea {
  width: 100%;
  margin-top: 12px;
  resize: none;
}

.apply-form input::placeholder,
.apply-form textarea::placeholder {
  color: #bdbdbd;
}

/* BUTTON */
.apply-btn {
  margin-top: 22px;
  padding: 12px 36px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #6bbf59, #ff9800);
  color: #000;
  font-weight: 600;
  cursor: pointer;
}

/* TABLET */
@media (max-width: 900px) {
  .apply-panel {
    width: 440px;
    padding: 28px;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .apply-panel {
    top: auto;
    bottom: 0;
    transform: none;
    width: 100%;
    border-radius: 20px 20px 0 0;
    padding: 24px;
    animation: slideUp 0.35s ease forwards;
  }

  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  .grid {
    grid-template-columns: 1fr;
  }


}
      `}</style>
    </>
  );
};

export default ApplyCard;
