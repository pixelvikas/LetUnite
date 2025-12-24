import { useEffect, useState } from "react";
import "./style.css";
import bgline from "../assets/bgline.svg";
import { FiPlus, FiMinus } from "react-icons/fi";
import workbg from "../assets/workbg.svg";
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
      <section className="hero">
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

      <section className="jobseekers">
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
            variant="blue"
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
            variant="violet"
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
            active
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
      <section className="industries">
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
      <section className="testimonials">
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
      <section className="faq-section">
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
