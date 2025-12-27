import React from "react";
import logo from "../assets/logo.svg";
import bgline from "../assets/bgline.svg";

const ContactPanel = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="contact-overlay" onClick={onClose} />

      {/* Panel */}
      <div className="contact-panel">
        {/* Decorative Lines */}
        <img src={bgline} alt="" className="bg-line top-left" />
        <img src={bgline} alt="" className="bg-line bottom-right" />

        {/* Header */}
        <div className="contact-top">
          <div className="card-brand">
            <img src={logo} alt="Let's Unite" />
            <div>
              <h4>Let’s Unite</h4>
              <span>One World One Family</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <h2 className="contact-title">We’d Love To Hear From You.</h2>
        <p className="contact-subtitle">
          Whether You’re A Logistics Professional Looking For The Right
          Opportunity Or A Company Seeking Trained Talent, Let’s Unite Is Here
          To Connect You.
        </p>

        <div className="contact-info">
          <div>
            <span>Contact Number</span>
            <strong>+02245158999</strong>
          </div>

          <div>
            <span>Email Id</span>
            <strong>Info@Letsunite.In</strong>
          </div>

          <div>
            <span>Office Address</span>
            <strong>Namami Family, Mumbai.</strong>
          </div>
        </div>

        <p className="contact-footer">
          Let’s Unite – Connecting People To The Logistics Of Tomorrow.
        </p>
      </div>

      {/* Styles */}
      <style>{`
/* OVERLAY */
.contact-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  z-index: 99;
}

/* PANEL */
.contact-panel {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 480px;
  padding: 36px;
  background: linear-gradient(160deg, #141414, #050505);
  color: #fff;
  border-radius: 24px 0 0 24px;
  box-shadow: -30px 0 70px rgba(0,0,0,0.7);
  z-index: 100;
  animation: slideIn 0.4s ease forwards;
  overflow: hidden;
}

/* SLIDE */
@keyframes slideIn {
  from { transform: translate(100%, -50%); }
  to { transform: translate(0, -50%); }
}

/* BG LINES */
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
  bottom: -280px;
  right: -300px;
  transform: rotate(-20deg);
}

/* HEADER */
.contact-top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.card-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.card-brand img {
  height: 36px;
}

.card-brand h4 {
  font-size: 15px;
  font-weight: 600;
}

.card-brand span {
  font-size: 11px;
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

/* TEXT */
.contact-title {
  margin-top: 24px;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
}

.contact-subtitle {
  margin-top: 10px;
  text-align: center;
  font-size: 13px;
  color: #cfcfcf;
  line-height: 1.6;
}

/* INFO */
.contact-info {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: center;
}

.contact-info span {
  font-size: 12px;
  color: #bdbdbd;
}

.contact-info strong {
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-top: 4px;
}

/* FOOTER */
.contact-footer {
  margin-top: 32px;
  text-align: center;
  font-size: 12px;
  color: #9ca3af;
}

/* MOBILE */
@media (max-width: 600px) {
  .contact-panel {
    width: 100%;
    bottom: 0;
    top: auto;
    transform: none;
    border-radius: 20px 20px 0 0;
    animation: slideUp 0.35s ease forwards;
  }

  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
}
      `}</style>
    </>
  );
};

export default ContactPanel;
