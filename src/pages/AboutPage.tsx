import React from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import taylorAvatar from "../assets/taylor_morgan.jpg"
import {gearList} from '../data/content.js'
import SectionLabel from '../components/sectionLabel.jsx'
import Footer from '../components/Footer.jsx'
import CTASection from "../components/CTASection.jsx"
import Ruswanthlogo from "../assets/Secondary logo.svg"
import logo from '../assets/Logomark.png'

export function ApertureLogo({ size = 28 }: { size?: number }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="about-top-logo"
      style={{ width: size, height: size }}
      aria-hidden="true"
      whileHover={!reduceMotion ? { rotate: 180 } : {}}
      transition={{ type: "spring", duration: 1, bounce: 0.2 }}
    >
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
        <line x1="9.69" y1="8" x2="21.17" y2="8" />
        <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
        <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
        <line x1="14.31" y1="16" x2="2.83" y2="16" />
        <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
      </svg>
    </motion.div>
  )
}

export const AboutPage: React.FC = () => {
  const reduceMotion = useReducedMotion()

  return (
    <div className="about-page-wrapper">
      {/* Top Header Navigation */}
      <header className="about-top-bar">
        <Link to="/" className="about-top-brand" aria-label="August Renner - Photographer">
          <img src={Ruswanthlogo} alt="" />
        </Link>

        <Link to="/" aria-label="Aperture Home">
          <img src={logo} alt="" />
        </Link>

        <Link to="/contact" className="about-top-contact-btn">
          Contact
        </Link>
      </header>

      {/* 1. Main Hero Section */}
      <main className="about-main-hero">
        <motion.div
          className="about-main-container"
          initial={!reduceMotion ? { opacity: 0, y: 24 } : {}}
          animate={!reduceMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left: Empty circle for image */}
          <div className="about-circle-col">
            <motion.div
              className="about-empty-circle"
              aria-label="Profile image placeholder"
              initial={!reduceMotion ? { scale: 0.94, opacity: 0 } : {}}
              animate={!reduceMotion ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              {/* Empty circle for image — drop an <img> here when ready */}
            </motion.div>
          </div>

          {/* Right: Content stack */}
          <div className="about-content-col">
            <span className="about-badge-pill">About me</span>

            <h1 className="about-main-heading">
              Hey, I'm
              <br />
              Raswanth Srinivasan
            </h1>

            <p className="about-main-bio">
            Visual Designer with 3+ years of experience in branding, graphic design,
             UI/UX, and digital experiences, blending creative strategy with AI-powered design.
            </p>

            <Link to="/portfolio" className="about-cta-btn">
              View portfolio
            </Link>
          </div>
        </motion.div>
      </main>

      {/* 2. Editorial Narrative & Testimonial Section */}
      <section className="about-editorial-section">
        <motion.div
          className="about-editorial-container"
          initial={!reduceMotion ? { opacity: 0, y: 32 } : {}}
          whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left Column: Biography with Drop Cap */}
          <div className="about-editorial-bio-col">
            <p className="about-editorial-dropcap-p">
              <span className="about-editorial-dropcap">I</span>
              'm Raswanth Srinivasan, a Visual Designer with 3+ years of experience in brand identity, graphic design, UI/UX design, website design, 
              packaging, and digital marketing. I create impactful visual identities, engaging digital experiences, and strategic marketing creatives that help businesses stand out and connect with their audiences.
            </p>
            {/* <p className="about-editorial-p">
              My approach is simple: create thoughtful images that feel honest,
              intentional, and lasting. Whether it's a personal project or a
              brand campaign, I aim to deliver work that doesn't just look good
              — it holds attention. And I'd love to create something meaningful
              with you next.
            </p> */}
          </div>

          {/* Right Column: Featured Quote with Client Avatar */}
          <div className="about-editorial-quote-col">
            <blockquote className="about-editorial-dropcap-p">
              My approach combines creative strategy, visual storytelling, and 
              AI-powered design workflows to transform complex ideas into clear, 
              memorable brand experiences. From logo design and branding to web interfaces 
              and marketing campaigns, I create purposeful, cohesive designs that strengthen brand recognition, improve user experiences, and deliver meaningful impact.
            </blockquote>

            {/* <div className="about-editorial-author">
              <img
                src={taylorAvatar}
                alt="Taylor Morgan"
                className="about-editorial-avatar"
              />
              <div className="about-editorial-author-info">
                <span className="about-editorial-author-name">Taylor Morgan</span>
                <span className="about-editorial-author-role">Field & Form Studio</span>
              </div>
            </div> */}
          </div>
        </motion.div>
         <section className="about-gear-section">
                         <motion.div
                             className="section-center-header"
                             initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                             whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                         >
                             <SectionLabel>Tools and expertise</SectionLabel>
                             <h2 className="section-title">My creative toolkit</h2>
                             <p className="section-subtitle">
                                 My creative toolkit brings ideas to life through thoughtful design, the right tools, and a little creative experimentation.
                                 </p>
                         </motion.div>
         
                         <motion.div
                             className="gear-table-container"
                             initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                             whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                             viewport={{ once: true, amount: 0.2 }}
                             transition={{ type: "spring", duration: 1, bounce: 0.2, delay: 0.1 }}
                         >
                             {gearList.map((g, idx) => (
                                 <div key={idx} className="gear-table-row">
                                     <span className="gear-category">{g.category}</span>
                                     <strong className="gear-item">{g.item}</strong>
                                 </div>
                             ))}
                         </motion.div>
                     </section>
                     <CTASection/>
                     <Footer/>
      </section>
      
    </div>
  )
}

export default AboutPage