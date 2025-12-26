import { useEffect, useState } from "react";
import "./style.css";
import bgline from "../assets/bgline.svg";
import { FiPlus, FiMinus } from "react-icons/fi";
import workbg from "../assets/workbg.png";
import logo from "../assets/logo.svg";
import earth from "../assets/earth.png";
import bannerimg from "../assets/banner.png";
import { FiArrowRight } from "react-icons/fi";
import {
  FiSend,
  FiShoppingBag,
  FiPackage,
  FiThermometer,
} from "react-icons/fi";
import { MdFactory } from "react-icons/md";

import {
  FiTarget,
  FiUsers,
  FiBriefcase,
  FiUser,
  FiTrendingUp,
  FiBarChart2,
} from "react-icons/fi";
import {
  FiUserPlus,
  FiUploadCloud,
  FiSearch,
  FiCheckCircle,
} from "react-icons/fi";
import { FiFileText, FiTruck, FiHome, FiBox } from "react-icons/fi";
const Home = () => {
  /* Dummy testimonial data */

  const testimonialsData = [
    {
      quote:
        "I used to struggle with job platforms, but Let’s Unite makes it feel easy and personal. It actually understands what I’m looking for.",
      name: "Aditya Sharma",
      role: "Marketing Coordinator",
    },
    {
      quote:
        "The industry focus is what sets Let’s Unite apart. Every opportunity feels relevant and curated for logistics professionals.",
      name: "Neha Verma",
      role: "Supply Chain Analyst",
    },
    {
      quote:
        "From resume support to quality employers, the experience has been smooth and professional throughout.",
      name: "Rohit Mehta",
      role: "Operations Manager",
    },
  ];

  const [index, setIndex] = useState(0);

  const faqs = [
    {
      question: "How do I apply for a job on Let’s Unite?",
      answer:
        "To apply for a job on Let’s Unite, simply sign up for a free account and complete your profile. Then, browse through curated job listings based on your skills and interests. When you find a job you like, click “Apply Now” to send your CV instantly. You’ll also get personalized job alerts sent directly to your dashboard.",
    },
    {
      question: "What is Let’s Unite?",
      answer:
        "Let’s Unite is a logistics-focused hiring platform that connects skilled professionals with trusted employers across freight, supply chain, and logistics industries.",
    },
    {
      question: "How can I get better job matches?",
      answer:
        "Complete your profile accurately, upload an updated CV, and regularly engage with job listings to receive more relevant and personalized job recommendations.",
    },
    {
      question: "How often are new jobs posted on Let’s Unite?",
      answer:
        "New job opportunities are added daily as employers post openings across various logistics and supply chain roles.",
    },
    {
      question: "Can I save job listings for later?",
      answer:
        "Yes, you can bookmark job listings and access them anytime from your dashboard for easy future reference.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  /* Auto rotate testimonials */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const { quote, name, role } = testimonialsData[index];
  return (
    <div className="page-wrapper">
      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        {/* Hero background (LEFT) */}
        <img src={bgline} alt="" className="hero-bg" />

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-green">Connecting People</span> Who Move{" "}
            <br />
            The World
          </h1>

          <p className="hero-description">
            At Let’s Unite, we’re redefining how the freight, logistics, and
            supply chain industry discovers talent.
            <br />
            Our mission is simple, to unite people, purpose, and performance
            across the global logistics network.
          </p>

          <button className="hero-btn">Apply Now</button>
          {/* 🔑 MOVED ECOSYSTEM CARD HERE */}
          <div className="ecosystem-wrapper">
            <div className="ecosystem-card">
              <h2 className="ecosystem-title">
                Powered By Namami Group, <br />
                India’s Integrated Logistics Ecosystem.
              </h2>

              <p className="ecosystem-subtitle">
                “We Operate Across Logistics (My Ocean Logistics), Training (All
                About Cargo), And Media Intelligence (Ocean Tech Journal).”
              </p>

              <div className="ecosystem-stats">
                <Stat
                  value="10K+"
                  text="Job Matches Made Through Let’s Unite"
                />
                <Stat value="3K+" text="Verified Employers Onboard" />
                <Stat value="100%" text="Industry-Focused" />
                <Stat value="24/7" text="Dedicated Support Journey" />
              </div>

              <button className="ecosystem-btn">Join Us Today</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services">
        {/* Decorative BG */}
        <img src={bgline} alt="" className="services-bg" />

        <div className="services-header">
          <span className="services-eyebrow">For Employers</span>

          <h2 className="services-title">
            Find A <span>Talent</span> That Keeps Your Supply Chain Moving
          </h2>

          <p className="services-description">
            In logistics, every role matters — from cargo handlers to operations
            managers and digital supply chain analysts.
            <br />
            We help you hire faster, smarter, and more accurately with
            pre-screened candidates who understand your business.
          </p>
        </div>

        <h3 className="services-subtitle">
          Our <span>Services</span> Include
        </h3>

        <div className="services-grid">
          <Service
            icon={<FiTarget />}
            text="End-To-End Recruitment For Freight & Logistics Roles"
            variant="blue"
          />
          <Service
            icon={<FiUsers />}
            text="Leadership & Executive Search"
            variant="green"
          />
          <Service
            icon={<FiBriefcase />}
            text="Contract Staffing & Project-Based Hiring"
            variant="purple"
          />
          <Service
            icon={<FiTrendingUp />}
            text="Talent Mapping & Market Insights"
            variant="mint"
          />
          <Service
            icon={<FiBarChart2 />}
            text="Salary Benchmarking & Industry Analytics"
            variant="violet"
          />
        </div>
      </section>

      <section className="jobseekers" id="career">
        <div className="jobseekers-header">
          <span className="eyebrow">For Job Seekers</span>

          <h2 className="title">
            Build A <span>Career</span> That Moves The World
          </h2>

          <p className="description">
            The logistics industry never stops — and neither should your career.
            <br />
            At Let’s Unite, we connect you with top freight forwarders, shipping
            lines, logistics tech companies, and supply chain leaders across
            India and beyond.
          </p>
        </div>

        <div className="jobseekers-grid">
          <JobCard
            icon={<FiFileText />}
            title="Freight Operations & Documentation"
            count="68 Jobs Available"
            variant="service-blue"
          />
          <JobCard
            icon={<FiTrendingUp />}
            title="Sales & Business Development"
            count="98 Jobs Available"
            variant="orange"
          />
          <JobCard
            icon={<FiUser />}
            title="Customs Brokerage & Compliance"
            count="51 Jobs Available"
            variant="purple"
          />
          <JobCard
            icon={<FiTruck />}
            title="Transport & Fleet Coordination"
            count="58 Jobs Available"
            variant="pink"
          />
          <JobCard
            icon={<FiHome />}
            title="Warehouse & Inventory Management"
            count="65 Jobs Available"
            variant="service-violet"
          />
          <JobCard
            icon={<FiBox />}
            title="Supply Chain Planning & Procurement"
            count="53 Jobs Available"
            variant="green"
          />
        </div>
      </section>

      <section className="how-it-works">
        {/* Decorative Plane */}
        <img src={workbg} alt="" className="work-bg" />

        {/* Heading */}
        <div className="how-header">
          <span className="how-eyebrow">How it works</span>

          <h2>
            How{" "}
            <span className="logo-badge">
              <img src={logo} alt="logo" />
            </span>{" "}
            <span className="brand">Let’s Unite</span> Works
          </h2>

          <p className="how-subtitle">
            A simple, guided process to help you discover and apply for the
            right logistics opportunities.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-wrapper">
          <Step
            icon={<FiUserPlus />}
            title="Add Basic Details"
            text="Create your profile with essential details for quick verification."
          />

          <Connector />

          <Step
            icon={<FiUploadCloud />}
            title="Upload CV / Resume"
            text="Upload your resume so we can match you with relevant roles."
          />

          <Connector />

          <Step
            icon={<FiSearch />}
            title="Find Suitable Job"
            text="Explore opportunities curated specifically for your profile."
          />

          <Connector />

          <Step
            icon={<FiCheckCircle />}
            title="Apply & Track"
            text="Apply with confidence and track your application progress."
          />
        </div>
      </section>

      <section className="logistics-banner">
        <div className="banner-card">
          {/* Decorative background INSIDE card */}
          <img src={bgline} alt="" className="banner-bg" />

          {/* Left visual */}
          <div className="banner-visual">
            <img src={bannerimg} alt="Logistics Illustration" />
          </div>

          {/* Right content */}
          <div className="banner-content">
            <h2>
              Finally, A Hiring Platform That <br />
              <span>Speaks Logistics</span>
            </h2>

            <ul className="banner-points">
              <li>
                <FiCheckCircle /> Access exclusive logistics job openings.
              </li>
              <li>
                <FiCheckCircle /> Get resume & interview support.
              </li>
              <li>
                <FiCheckCircle /> Build your network within the industry.
              </li>
              <li>
                <FiCheckCircle /> Grow your career with industry insights &
                training.
              </li>
            </ul>

            <button className="banner-btn">
              Start Exploring Now <FiArrowRight />
            </button>
          </div>
        </div>
      </section>
      <section className="industries" id="industries">
        {/* Decorative background */}
        <img src={bgline} alt="" className="industry-bg" />

        {/* Header */}
        <div className="industries-header">
          <span className="industries-eyebrow">Our Expertise</span>
          <h2>
            <span>Industries</span> We Serve
          </h2>
          <p>
            From freight forwarders to Fortune 500 supply chain networks — we
            unite talent with opportunity across the logistics ecosystem.
          </p>
        </div>

        {/* Grid */}
        <div className="industries-grid">
          <IndustryCard icon={<FiSend />} title="Air Freight" variant="blue" />
          <IndustryCard
            icon={<FiSend />}
            title="Ocean Freight"
            variant="mint"
          />
          <IndustryCard
            icon={<FiTruck />}
            title="Road Transport"
            variant="violet"
          />
          <IndustryCard
            icon={<FiPackage />}
            title="Rail Cargo"
            variant="mint"
          />
          <IndustryCard
            icon={<FiShoppingBag />}
            title="E-Commerce Fulfillment"
            variant="violet"
          />
          <IndustryCard
            icon={<FiSend />}
            title="Contract Logistics"
            variant="mint"
          />
          <IndustryCard
            icon={<FiThermometer />}
            title="Cold Chain & Pharma Logistics"
            variant="violet"
          />
          <IndustryCard
            icon={<MdFactory />}
            title="Manufacturing Supply Chains"
            variant="mint"
          />
        </div>
      </section>
      <section className="testimonials" id="testimonials">
        {/* Header */}

        {/* Globe */}
        <div className="globe-wrapper">
          <div className="testimonials-header">
            <h2>
              What Our <span>Users</span> Say
            </h2>

            <div className="quote-wrapper fade">
              <span className="quote left">“</span>

              <p className="quote-text">{quote}</p>

              <span className="quote right">”</span>
            </div>

            <h4 className="user-name fade">{name}</h4>
            <p className="user-role fade">{role}</p>
          </div>
          <img src={earth} alt="Earth" className="globe rotating" />
        </div>
      </section>

      <section className="mission-statement">
        <p>
          At Let’s Unite, we combine industry expertise with deep recruitment
          experience to{" "}
          <span>connect employers with skilled professionals</span> who
          understand the pulse of freight and supply chain operations.
        </p>
      </section>
      <section className="faq-section" id="faq">
        {/* Decorative background */}
        <img src={bgline} alt="" className="faq-bg" />

        {/* Header */}
        <div className="faq-header">
          <h2>
            Frequently <br />
            Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-wrapper">
        <div className="cta-card">
          <img src={bgline} alt="" className="banner-bg" />

          {/* Decorative wave */}

          <h2>Ready To Join The Logistics Industry?</h2>

          <p>
            Students | Freshers | Interns | Trained Candidates | Experienced
            Professionals
          </p>

          <button className="cta-btn">Contact Us</button>
        </div>
      </section>

      <style>
        {`
        /* ================= GLOBAL ================= */
.page-wrapper {
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
}

/* ================= HERO ================= */
.hero {
  position: relative;
  min-height: 110vh;
  background: linear-gradient(180deg, #ffffff 0%, #f6fde9 100%);
  padding-top: 140px;
  z-index: 1;
}

/* Hero BG (LEFT) */
.hero-bg {
  position: absolute;
  top: -320px;
  left: -320px;
  width: 720px;
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding-bottom: 160px;
}

.hero-title {
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
}

.hero-title .title-green {
  color: #7a8f2a;
}

.hero-description {
  max-width: 720px;
  margin: 24px auto 32px;
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;
}

.hero-btn {
  padding: 12px 28px;
  border-radius: 999px;
  border: none;
    font-family: "Overlock", sans-serif;

  background: linear-gradient(135deg, #64a057, #849223, #9e5516);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
/* ================= ECOSYSTEM ================= */
.ecosystem-wrapper {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
  position: relative;
  z-index: 3;
  padding: 0 20px; /* mobile side padding */
}

.ecosystem-card {
  max-width: 1100px;
  width: 100%;
  background: linear-gradient(135deg, #111, #1c1c1c);
  border-radius: 24px;
  padding: 64px;
  text-align: center;
  color: #fff;
}

/* ================= STATS GRID ================= */
.ecosystem-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin: 48px 0;
}

.stat-item h3 {
  font-size: 28px;
  color: #8bc34a;
  margin-bottom: 6px;
}

.stat-item p {
  font-size: 13px;
  color: #cbd5e1;
  line-height: 1.5;
}

/* ================= BUTTON ================= */
.ecosystem-btn {
  padding: 12px 30px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #64a057, #849223, #9e5516);
  color: #fff;
  font-weight: 600;
    font-family: "Overlock", sans-serif;

  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.ecosystem-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

/* ================= RESPONSIVE ================= */

/* -------- Tablets (≤ 1024px) -------- */
@media (max-width: 1024px) {
  .ecosystem-card {
    padding: 48px;
  }

  .ecosystem-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  .stat-item h3 {
    font-size: 26px;
  }
}

/* -------- Mobile (≤ 768px) -------- */
@media (max-width: 768px) {
  .ecosystem-wrapper {
    margin-bottom: 80px;
  }

  .ecosystem-card {
    padding: 36px 24px;
    border-radius: 20px;
  }

  .ecosystem-stats {
    grid-template-columns: 1fr;
    gap: 24px;
    margin: 36px 0;
  }

  .stat-item h3 {
    font-size: 24px;
  }

  .stat-item p {
    font-size: 14px;
  }

  .ecosystem-btn {
    width: 100%;
    padding: 14px 0;
  }
}

/* -------- Small Mobile (≤ 480px) -------- */
@media (max-width: 480px) {
  .ecosystem-card {
    padding: 28px 18px;
  }

  .stat-item h3 {
    font-size: 22px;
  }
}
/* ================= SERVICES ================= */
.services {
  position: relative;
  margin-top: -200px;
  padding: 100px 20px 120px;
  background: #ffffff;
  z-index: 3;
  overflow: hidden;
}

.services-bg {
  position: absolute;
  top: -280px;
  right: -240px;
  width: 560px;
  transform: rotate(180deg);
  pointer-events: none;
  opacity: 0.25;
  z-index: 1;
}

/* ================= HEADER ================= */
.services-header {
  max-width: 880px;
  margin: 0 auto 64px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.services-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 14px;
  display: inline-block;
}

.services-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 600;
  line-height: 1.25;
  color: #111827;
}

.services-title span {
  color: #7a8f2a;
}

.services-description {
  max-width: 720px;
  margin: 18px auto 0;
  font-size: 15px;
  line-height: 1.75;
  color: #6b7280;
}

/* ================= SUBTITLE ================= */
.services-subtitle {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin: 88px 0 52px;
  color: #7a8f2a;
}

.services-subtitle span {
  color: #c46a1c;
}

/* ================= SERVICES GRID ================= */
.services-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 26px;
  position: relative;
  z-index: 2;
}

/* ================= CARD ================= */
.service-card {
  min-height: 230px;
  border-radius: 18px;
  padding: 30px 22px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.08);
}

/* ================= ICON ================= */
.service-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  color: #fff;
  font-size: 22px;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
}

/* ================= TEXT ================= */
.service-text {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  color: #1f2937;
  max-width: 180px;
}

/* ================= CARD VARIANTS ================= */
.blue {
  background: linear-gradient(180deg, #f2f6ff, #e6efff);
}
.blue .service-icon {
  background: linear-gradient(135deg, #4f8cff, #6ea8ff);
}

.green {
  background: linear-gradient(180deg, #e9fbf2, #dcf7ea);
}
.green .service-icon {
  background: linear-gradient(135deg, #3ccf91, #6be3b6);
}

.purple {
  background: linear-gradient(180deg, #f4f1ff, #ebe6ff);
}
.purple .service-icon {
  background: linear-gradient(135deg, #7a5cff, #9c85ff);
}

.mint {
  background: linear-gradient(180deg, #ebfcfb, #def8f6);
}
.mint .service-icon {
  background: linear-gradient(135deg, #28c7c1, #63e0da);
}

.violet {
  background: linear-gradient(180deg, #f2f1ff, #e7e3ff);
}
.violet .service-icon {
  background: linear-gradient(135deg, #6f5cff, #9b8cff);
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 1024px) {
  .services {
    padding-top: 220px;
  }

  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobile */
@media (max-width: 768px) {
  .services {
    margin-top: -140px;
    padding: 20px 16px 100px;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }

  .services-subtitle {
    margin: 64px 0 40px;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    min-height: 210px;
  }

  .service-text {
    max-width: 220px;
  }
}
/* ================= JOB SEEKERS ================= */
.jobseekers {
  position: relative;
  padding: 20px 20px 240px;
  background: #ffffff;
  overflow: visible;
  z-index: 2;
}

/* ================= HEADER ================= */
.jobseekers-header {
  max-width: 880px;
  margin: 0 auto 72px;
  text-align: center;
}

.eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 14px;
  display: inline-block;
}

.title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 600;
  line-height: 1.25;
  color: #111827;
}

.title span {
  color: #7a8f2a;
}

.description {
  max-width: 720px;
  margin: 18px auto 0;
  font-size: 15px;
  line-height: 1.75;
  color: #6b7280;
}

/* ================= GRID ================= */
.jobseekers-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

/* ================= CARD ================= */
.job-card {
  border-radius: 16px;
  padding: 26px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  gap: 18px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.job-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.08);
}

/* ================= ICON ================= */
.job-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 20px;
  flex-shrink: 0;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

/* ================= TEXT ================= */
.job-card h4 {
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.job-card p {
  font-size: 13px;
  line-height: 1.5;
  color: #6b7280;
}

/* ================= VARIANTS ================= */
.service-blue {
  border-color: #cfe0ff;
}
.service-blue .job-icon {
  background: linear-gradient(135deg, #4f8cff, #7aa8ff);
}

.orange {
  border-color: #ffe2c4;
}
.orange .job-icon {
  background: linear-gradient(135deg, #ff9f43, #ffc278);
}

.purple {
  border-color: #e3d8ff;
}
.purple .job-icon {
  background: linear-gradient(135deg, #8b5cf6, #a78bfa);
}

.pink {
  border-color: #f5d0fe;
}
.pink .job-icon {
  background: linear-gradient(135deg, #e879f9, #f0abfc);
}

.service-violet {
  border-color: #ddd6fe;
}
.service-violet .job-icon {
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
}

.green {
  border-color: #bbf7d0;
}
.green .job-icon {
  background: linear-gradient(135deg, #22c55e, #4ade80);
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 1024px) {
  .jobseekers {
    padding-bottom: 200px;
  }

  .jobseekers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 640px) {
  .jobseekers {
    padding: 20px 16px 160px;
  }

  .jobseekers-header {
    margin-bottom: 56px;
  }

  .jobseekers-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .job-card {
    padding: 22px;
  }
}
/* ================= HOW IT WORKS ================= */
.how-it-works {
  position: relative;
  margin-top: -160px;
  padding: 120px 20px 120px;
  background: linear-gradient(180deg, #f8fbfa, #eef4f0);
  overflow: visible;
  z-index: 4;
}

/* Decorative background */
.work-bg {
  position: absolute;
  top: -108px;
  left: 30px;
  width: 450px;
  pointer-events: none;
  z-index: 2;
}

/* ================= HEADER ================= */
.how-header {
  text-align: center;
  margin-bottom: 88px;
  position: relative;
  z-index: 3;
}

.how-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 14px;
  display: inline-block;
}

.how-header h2 {
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 600;
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.brand {
  font-weight: 700;
  color: #5b3a1e;
}

.how-subtitle {
  max-width: 640px;
  margin: 18px auto 0;
  font-size: 15px;
  line-height: 1.75;
  color: #64748b;
}

/* Logo badge */
.logo-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
}

.logo-badge img {
  width: 46px;
}

/* ================= STEPS ================= */
.steps-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
}

/* Step card */
.step {
  width: 260px;
  padding: 36px 24px;
  border-radius: 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.65);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  will-change: transform;
}

.step:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.08);
}

/* Icon */
.step-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e9f4ec, #d7eadc);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4b5e1f;
  font-size: 22px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

/* Text */
.step h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #0f172a;
}

.step p {
  font-size: 13px;
  line-height: 1.6;
  color: #64748b;
}

/* Active step */
.step.active {
  background: #ffffff;
  transform: translateY(-14px);
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.14);
}

.step.active .step-icon {
  background: linear-gradient(135deg, #4b5e1f, #7a9b2f);
  color: #ffffff;
}

/* ================= CONNECTOR ================= */
.connector {
  width: 96px;
  position: relative;
  flex-shrink: 0;
}

.connector::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 12px;
  right: 12px;
  border-top: 2px dashed #cbd5e1;
  transform: translateY(-50%);
}

/* ================= RESPONSIVE ================= */

/* Tablet & below */
@media (max-width: 1024px) {
  .steps-wrapper {
    flex-direction: column;
    gap: 24px;
  }

  .connector {
    width: 100%;
    height: 42px;
  }

  .connector::before {
    top: 0;
    left: 50%;
    right: auto;
    height: 100%;
    border-top: none;
    border-left: 2px dashed #cbd5e1;
    transform: translateX(-50%);
  }

  .step {
    width: 100%;
    max-width: 420px;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .how-it-works {
    margin-top: -120px;
    padding: 96px 16px 96px;
  }

  .how-header {
    margin-bottom: 64px;
  }

  .work-bg {
    width: 300px;
    top: -60px;
    left: -40px;
  }

  .step {
    padding: 30px 20px;
  }
}
/* ================= LOGISTICS BANNER ================= */
.logistics-banner {
  position: relative;
  padding: 120px 20px;
  background: #ffffff;
  overflow: hidden;
}

/* Decorative curved background */
.banner-bg {
  position: absolute;
  bottom: 40px;
  left: -140px;
  width: 620px;
  transform: rotate(190deg);
  pointer-events: none;
  z-index: 0;
}

/* ================= BANNER CARD ================= */
.banner-card {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 48px;

  padding: 56px 48px 56px 0;
  border-radius: 24px;

  background: linear-gradient(135deg, #1b1b1b 0%, #1f1f1f 55%, #2a2355 100%);

  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.28);
  overflow: hidden;
}

/* ================= VISUAL ================= */
.banner-visual {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.banner-visual img {
  width: 100%;
  max-width: 520px;
  z-index: 99;
  height: auto;
  margin-left: -12px;
}

/* ================= CONTENT ================= */
.banner-content {
  flex: 1;
  color: #ffffff;
  padding-right: 16px;
}

.banner-content h2 {
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
}

.banner-content h2 span {
  color: #8bc34a;
}

/* ================= POINTS ================= */
.banner-points {
  list-style: none;
  padding: 0;
  margin: 0 0 36px;
}

.banner-points li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  line-height: 1.6;
  color: #e5e7eb;
  margin-bottom: 14px;
}

.banner-points li svg {
  color: #8bc34a;
  font-size: 18px;
  flex-shrink: 0;
}

/* ================= CTA ================= */
.banner-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-family: "Overlock", sans-serif;

  background: linear-gradient(135deg, #7aa83d, #a96a1f);
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.banner-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(139, 195, 74, 0.35);
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 900px) {
  .logistics-banner {
    padding: 100px 16px;
  }

  .banner-card {
    flex-direction: column;
    gap: 36px;
    padding: 40px 28px;
    text-align: center;
  }

  .banner-visual {
    justify-content: center;
  }

  .banner-visual img {
    max-width: 420px;
    margin-left: 0;
  }

  .banner-points li {
    justify-content: center;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .logistics-banner {
    padding: 80px 14px;
  }

  .banner-content h2 {
    font-size: 22px;
  }

  .banner-btn {
    width: 100%;
    justify-content: center;
  }
}
/* ================= INDUSTRIES ================= */
.industries {
  position: relative;
  padding: 140px 20px;
  background: #ffffff;
  overflow: hidden;
}

/* Decorative background */
.industry-bg {
  position: absolute;
  top: 10px;
  left: -240px;
  width: 520px;
  pointer-events: none;
  opacity: 0.35;
}

/* ================= HEADER ================= */
.industries-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 96px;
}

.industries-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7a8f2a;
  margin-bottom: 14px;
  display: inline-block;
}

.industries-header h2 {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 600;
  color: #111827;
  margin-bottom: 18px;
}

.industries-header h2 span {
  color: #7a8f2a;
}

.industries-header p {
  font-size: 16px;
  line-height: 1.75;
  color: #6b7280;
}

/* ================= GRID ================= */
.industries-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

/* ================= CARD ================= */
.industry-card {
  position: relative;
  height: 170px;
  border-radius: 20px;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  text-align: center;

  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);

  transition: transform 0.35s ease, box-shadow 0.35s ease;
  will-change: transform;
}

.industry-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.45), transparent);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.industry-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 28px 64px rgba(0, 0, 0, 0.12);
}

.industry-card:hover::after {
  opacity: 1;
}

/* ================= ICON ================= */
.industry-icon {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 22px;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.16);
}

/* ================= TITLE ================= */
.industry-card h4 {
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  line-height: 1.4;
}

/* ================= VARIANTS ================= */
.blue {
  background: linear-gradient(135deg, #edf3ff, #f8faff);
}
.blue .industry-icon {
  background: linear-gradient(135deg, #4f8cff, #7aa8ff);
}

.mint {
  background: linear-gradient(135deg, #e9fcf7, #f4fffb);
}
.mint .industry-icon {
  background: linear-gradient(135deg, #34d399, #6ee7b7);
}

.violet {
  background: linear-gradient(135deg, #f3efff, #faf8ff);
}
.violet .industry-icon {
  background: linear-gradient(135deg, #8b5cf6, #a78bfa);
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 1024px) {
  .industries-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 640px) {
  .industries {
    padding: 100px 16px;
  }

  .industries-header {
    margin-bottom: 72px;
  }

  .industries-header h2 {
    font-size: 30px;
  }

  .industries-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}
/* ================= TESTIMONIALS ================= */
.testimonials {
  position: relative;
  padding: 80px 20px 0;
  background: #ffffff;
  text-align: center;
  overflow: hidden;
}

/* ================= HEADER ================= */
.testimonials-header {
  max-width: 820px;
  margin: 0 auto 56px;
  position: relative;
  z-index: 2;
}

.testimonials-header h2 {
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 600;
  color: #111827;
  margin-bottom: 28px;
}

.testimonials-header h2 span {
  color: #7a8f2a;
}

/* ================= QUOTE ================= */
.quote-wrapper {
  position: relative;
  max-width: 720px;
  margin: 0 auto 28px;
  padding: 0 48px;
}

.quote {
  position: absolute;
  font-size: 44px;
  color: #7a8f2a;
  font-weight: 700;
  line-height: 1;
  opacity: 0.8;
}

.quote.left {
  left: 0;
  top: -12px;
}

.quote.right {
  right: 0;
  bottom: -12px;
}

.quote-text {
  font-size: 16px;
  line-height: 1.9;
  color: #4b5563;
}

/* ================= USER ================= */
.user-name {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-top: 16px;
}

.user-role {
  font-size: 13px;
  color: #6b7280;
}

/* ================= GLOBE ================= */
.globe-wrapper {
  position: relative;
  height: 460px; /* shows top half only */
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.globe {
  width: 100%;
  max-width: 900px;
  position: absolute;
  bottom: -105%;
  transform-origin: center center;
}

/* ================= ANIMATIONS ================= */

/* Fade-in testimonial text */
.fade {
  animation: fadeUp 0.6s ease-in-out both;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Continuous globe rotation */
.rotating {
  animation: spinEarth 40s linear infinite;
}

@keyframes spinEarth {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 768px) {
  .testimonials {
    padding-top: 64px;
  }

  .quote-wrapper {
    padding: 0 32px;
  }

  .quote-text {
    font-size: 14px;
    line-height: 1.8;
  }

  .globe {
    max-width: 100%;
    bottom: -110%;
  }
  .globe-wrapper {
    height: 215px;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .quote-wrapper {
    padding: 0 24px;
  }

  .quote {
    font-size: 36px;
  }

  .user-name {
    font-size: 15px;
  }
}

/* ================= MISSION STATEMENT ================= */
.mission-statement {
  background: #f6fbfa; /* subtle mint tint like image */
  padding: 64px 20px;
  text-align: center;
}

.mission-statement p {
  max-width: 980px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.65;
  font-weight: 500;
  color: #111827;
}

/* Highlighted phrase */
.mission-statement p span {
  color: #7a8f2a;
  font-weight: 600;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 768px) {
  .mission-statement p {
    font-size: 17px;
    line-height: 1.6;
  }
}
/* ================= FAQ ================= */
.faq-section {
  position: relative;
  padding: 140px 20px;
  background: #ffffff;
  overflow: hidden;
}

/* Decorative background */
.faq-bg {
  position: absolute;
  top: 0;
  right: -260px;
  width: 580px;
  transform: rotate(180deg);
  pointer-events: none;
  opacity: 0.35;
}

/* ================= HEADER ================= */
.faq-header {
  text-align: center;
  margin-bottom: 88px;
  position: relative;
  z-index: 2;
}

.faq-header h2 {
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 600;
  line-height: 1.25;
  color: #111827;
}

/* ================= FAQ LIST ================= */
.faq-list {
  max-width: 860px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* ================= ITEM ================= */
.faq-item {
  padding: 26px 28px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  margin-bottom: 18px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.06);
}

/* ================= QUESTION ================= */
.faq-question {
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Overlock", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  cursor: pointer;
  text-align: left;
}

.faq-question svg {
  font-size: 18px;
  color: #7a8f2a;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

/* ================= ANSWER ================= */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}

.faq-answer p {
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.75;
  color: #6b7280;
}

/* ================= ACTIVE ================= */
.faq-item.active {
  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.08);
}

.faq-item.active .faq-answer {
  max-height: 260px;
}

.faq-item.active .faq-question svg {
  transform: rotate(180deg);
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 768px) {
  .faq-section {
    padding: 50px 16px;
  }

  .faq-header {
    margin-bottom: 64px;
  }

  .faq-list {
    padding: 0;
  }

  .faq-item {
    padding: 22px 20px;
  }

  .faq-question {
    font-size: 14px;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .faq-header h2 {
    font-size: 24px;
  }

  .faq-answer p {
    font-size: 13px;
  }
}

/* ================= CTA ================= */
.cta-wrapper {
  padding: 120px 20px;
  background: #ffffff;
}

/* ================= CARD ================= */
.cta-card {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  padding: 64px 48px;
  border-radius: 22px;
  text-align: center;

  background: linear-gradient(135deg, #1b1b1b 0%, #202020 55%, #2c2456 100%);

  color: #ffffff;
  overflow: hidden;
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.28);
}

/* ================= DECORATIVE GLOW ================= */
.cta-wave {
  position: absolute;
  top: -60px;
  left: -100px;
  width: 420px;
  height: 420px;

  background: radial-gradient(
    circle at center,
    rgba(255, 200, 100, 0.35),
    rgba(255, 100, 200, 0.15),
    transparent 70%
  );

  filter: blur(36px);
  opacity: 0.8;
  pointer-events: none;
}

/* ================= CONTENT ================= */
.cta-card h2 {
  font-size: clamp(22px, 4vw, 34px);
  font-weight: 600;
  margin-bottom: 16px;
  line-height: 1.3;
}

.cta-card p {
  font-size: 15px;
  color: #d1d5db;
  margin-bottom: 32px;
  line-height: 1.7;
}

/* ================= BUTTON ================= */
.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Overlock", sans-serif;

  padding: 14px 34px;
  border-radius: 999px;
  border: none;
  cursor: pointer;

  background: linear-gradient(135deg, #7aa83d, #a96a1f);
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;

  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(122, 168, 61, 0.45);
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 768px) {
  .cta-wrapper {
    padding: 100px 16px;
  }

  .cta-card {
    padding: 52px 28px;
  }

  .cta-card p {
    font-size: 14px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .cta-card {
    padding: 44px 22px;
  }

  .cta-btn {
    width: 100%;
  }
}
`}
      </style>
    </div>
  );
};

const Stat = ({ value, text }) => (
  <div className="stat-item">
    <h3>{value}</h3>
    <p>{text}</p>
  </div>
);

const Service = ({ icon, text, variant }) => (
  <div className={`service-card ${variant}`}>
    <div className="service-icon">{icon}</div>
    <p className="service-text">{text}</p>
  </div>
);

const JobCard = ({ icon, title, count, variant }) => {
  return (
    <div className={`job-card ${variant}`}>
      <div className="job-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{count}</p>
    </div>
  );
};

const IndustryCard = ({ icon, title, variant }) => {
  return (
    <div className={`industry-card ${variant}`}>
      <div className="industry-icon">{icon}</div>
      <h4>{title}</h4>
    </div>
  );
};

const Step = ({ icon, title, text, active }) => (
  <div className={`step ${active ? "active" : ""}`}>
    <div className="step-icon">{icon}</div>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

const Connector = () => <div className="connector" />;

export default Home;
