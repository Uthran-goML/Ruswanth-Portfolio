import React from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import logo from '../assets/Secondary logo.svg'

import Corners from "./Corners"
import TextEffect from "./TextEffect"
import { siteInfo } from "../data/content"
import PolaroidStack from "./PolaroidStack"

export default function Footer() {
    const reduceMotion = useReducedMotion()

    const flourishImages = [
        "/images/cta-polaroid-1.svg",
        "/images/cta-polaroid-2.svg",
        "/images/cta-polaroid-3.svg",
    ]
    const ctaImages = [
        { src: "/images/cta-card-left.jpg", caption: "Coastal Serenity" },
        { src: "/images/cta-card-center.jpg", caption: "Studio Portrait" },
        { src: "/images/cta-card-right.jpg", caption: "Aura Skincare" },
    ]
    const showPolaroids = true;

    return (
        <footer className="site-footer">
            {/* Upper visual flourish: 3 overlapping portrait cards */}
            <div className="footer-flourish-container" aria-hidden="true">
                {showPolaroids && (
                    <motion.div
                        className="cta-polaroid-wrap"
                        initial={!reduceMotion ? { opacity: 0, y: 35 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <PolaroidStack images={ctaImages} variant="cta" />
                    </motion.div>
                )}
            </div>

            {/* Social links row with northeast arrows */}
            <motion.div
                className="footer-social-row"
                initial={!reduceMotion ? { opacity: 0, y: 30 } : {}}
                whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", duration: 1, bounce: 0.2 }}
            >
                <div className="footer-social-links">
                    {siteInfo.socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-pill"
                        >
                            <span>{s.label}</span>
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </motion.div>

            {/* Lower footer grid matching Q7ZmhpX1j (opacity 0, y: 40, spring 1s 0.2s) */}
            <motion.div
                className="footer-lower-grid"
                initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", duration: 1, bounce: 0.2 }}
            >
                {/* Left logo lockup surrounded by four corner brackets */}
                <div className="footer-brand-col">
                    <div className="footer-aperture-lockup">
                        <div className="footer-lockup-frame">
                            <span className="footer-lockup-title">
                                <img src={logo} alt="" /></span>
                            <Corners variant="all" />
                        </div>
                    </div>
                    <p className="footer-brand-desc">{siteInfo.bio}</p>
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} {siteInfo.name} · All rights reserved.
                    </p>
                </div>

                {/* Right: two compact link columns: Pages and Information */}
                <div className="footer-links-columns">
                    <div className="footer-col">
                        <h4 className="footer-col-heading">Pages</h4>
                        <ul className="footer-col-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            {/* <li><Link to="/blog">Journal & Articles</Link></li> */}
                            <li><Link to="/about">About Raswanth</Link></li>
                            {/* <li><Link to="/contact">Direct Inquiry</Link></li> */}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-heading">Information</h4>
                        <ul className="footer-col-list">
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                            <li>
                                <a href={`mailto:${siteInfo.email}`}>
                                    {siteInfo.email}
                                </a>
                            </li>
                            <li className="footer-location-item">
                                Berlin & London Studio
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}