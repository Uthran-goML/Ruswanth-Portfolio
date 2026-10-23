import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import SectionLabel from "../components/SectionLabel"
import MasterButton from "../components/MasterButton"
import CTASection from "../components/CTASection"
import TextEffect from "../components/TextEffect"
import aboutImg from '../assets/AboutMe_Section.webp';
import { gearList, testimonials } from "../data/content"

export default function AboutSection() {
    const reduceMotion = useReducedMotion()
    const featuredTestimonial = testimonials[0]

    return (
        <div className="about-page-root">
            {/* Scroll marker */}
            <div id="about-scroll-marker" className="scroll-marker" aria-hidden="true" />

            {/* 1. HERO SECTION */}
            <section className="about-hero-section">
                <div className="about-hero-inner">
                    {/* Left: Circular Black-and-White Portrait */}
                    <div className="about-portrait-col">
                        <div className="about-circle-portrait-wrap">
                            <img
                                src={aboutImg}
                                alt="Ruswanth portrait"
                                className="about-circle-portrait-img"
                            />
                        </div>
                    </div>

                    {/* Right: Copy stack with label, heading with character text effect, concise bio, CTA */}
                    <div className="about-hero-copy-col">
                        <SectionLabel>About Me</SectionLabel>
                        <h1 className="about-hero-heading">
                            <TextEffect text="a little about myself" tokenization="character" delay={0.5} />
                        </h1>
                        <p className="about-hero-bio">
                           I’m <strong>Raswanth Srinivasan, a Visual Designer with 3+ years of experience</strong> building bold brand identities, impactful marketing visuals, and intuitive digital experiences. I turn complex ideas into clear, compelling designs that help businesses stand out, connect with audiences, and grow.
                           </p>
                        <p className="about-hero-bio">
                           From <strong>logo design and brand identity to UI/UX design, website design, Shopify stores, and digital marketing creatives</strong>, I combine strategic thinking, visual storytelling, and AI-powered creative workflows to deliver design that looks exceptional and works with purpose.
                           </p>
                        <p className="about-hero-bio">
                          With a background in Computer Science Engineering and hands-on experience designing for AI and technology brands, I bridge creativity and technology to solve real-world problems through design. My approach is simple: <strong>make complex ideas clear, make brands memorable, and make every pixel count.</strong>
                          </p>
                        <div className="about-hero-actions">
                            {/* <MasterButton to="/portfolio" variant="dark">
                                View portfolio
                            </MasterButton>
                            <MasterButton to="/contact" variant="light">
                                Get in touch
                            </MasterButton> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. EDITORIAL TEXT COLUMNS (matching FbAuh6ntu: opacity 0, y: 40, spring 1s 0.2s) */}
           

            {/* 3. GEAR & TOOLS SECTION (matching CrJBenxOD: opacity 0, y: 40, spring 1s 0.2s) */}
            {/* <section className="about-gear-section">
                <motion.div
                    className="section-center-header"
                    initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                >
                    <SectionLabel>Equipment</SectionLabel>
                    <h2 className="section-title">Gear and tools I use</h2>
                    <p className="section-subtitle">
                        A reliable, minimalist location kit optimized for agile movement, tonal nuance, and technical consistency.
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
            </section> */}

            {/* 4. CLOSING CTA */}
            {/* <CTASection
                title="Let’s create work with clarity and staying power"
                subtitle="Available for worldwide commissions, seasonal lookbooks, and campaign direction."
            /> */}
        </div>
    )
}