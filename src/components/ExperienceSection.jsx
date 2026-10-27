import React, { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"
import { MapPin } from "lucide-react"
import img1 from '../assets/Experience_Goml.svg'
import img2 from '../assets/Frame 34.svg'
import img3 from '../assets/Experience_Grannys.svg'

function PostageStampLogo({ company }) {
    if (company === "GoML (Neuralgo.ai)") {
        return (
            <div className="exp-stamp">
                <div className="exp-stamp__inner exp-stamp__inner--mygate">
                    <img className="goml_img" src={img1} alt="" srcSet="" />
                </div>
            </div>
        )
    }
    if (company === "Madhatter Creative") {
        return (
            <div className="exp-stamp">
                <div className="exp-stamp__inner exp-stamp__inner--gida">
                   <img src={img2} alt="" />
                </div>
            </div>
        )
    }
    if (company === "Granny's Things") {
        return (
            <div className="exp-stamp">
                <div className="exp-stamp__inner exp-stamp__inner--gida">
                 <img src={img3} alt="" />
                </div>
            </div>
        )
    }

    return (
        <div className="exp-stamp">
            <div className="exp-stamp__inner exp-stamp__inner--aurochs">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <path d="M7 13C8.5 10 11.5 9 14.5 10C16.5 10.8 17.5 12.5 20.5 11.8C22.5 11.2 23.5 9.8 24.5 8.8C24 10.8 23.5 12.5 21.5 13.5C23.5 14.5 24.5 15.5 24.5 17.2C22.5 17.2 20.8 16.2 19 15.2C18 17.2 16 18 13 18C11 18 9.2 17.2 8.2 15.2C7.2 16.5 6.2 18 4.2 19C4.8 17 5.5 15 6.2 13.2C6.8 12.5 7 12.2 7 13Z" fill="#DC2626" />
                    <text x="16" y="27" textAnchor="middle" fill="#DC2626" fontSize="5" fontWeight="900" letterSpacing="0.6" fontFamily="sans-serif">AUROCHS</text>
                </svg>
            </div>
        </div>
    )
}

function ExperienceCard({ exp }) {
    return (
        <div className="exp-card">
            <div className="exp-card__header">
                <PostageStampLogo company={exp.company} />
                <div className="exp-card__meta">
                    <h3 className="exp-card__role">{exp.role}</h3>
                    <span className="exp-card__company">{exp.company}</span>
                </div>
                <div className="exp-card__location">
                    <MapPin size={13} className="exp-pin-icon" />
                    <span>{exp.location}</span>
                </div>
            </div>
            <ul className="exp-card__bullets">
                {exp.descriptions.map((desc, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
            </ul>
        </div>
    )
}

function DatePill({ dates, isCurrent }) {
    if (isCurrent) {
        return (
            <div className="exp-date-pill exp-date-pill--current">
                <span>Aug '24 - <strong className="exp-date-present">Present</strong></span>
            </div>
        )
    }
    return (
        <div className="exp-date-pill">
            <span>{dates}</span>
        </div>
    )
}

export default function ExperienceSection({ experiences = [] }) {
    const reduceMotion = useReducedMotion()
    const sectionRef = useRef(null)
    const trackRef = useRef(null)
    const [scrollRange, setScrollRange] = useState(0)

    // Measure travel distance for horizontal glide
    useEffect(() => {
        const updateRange = () => {
            if (trackRef.current) {
                const trackWidth = trackRef.current.scrollWidth
                const windowWidth = window.innerWidth
                const maxRange = Math.max(0, trackWidth - windowWidth + 140)
                setScrollRange(maxRange)
            }
        }

        updateRange()
        const timer = setTimeout(updateRange, 150)
        const ro = new ResizeObserver(updateRange)
        if (trackRef.current) ro.observe(trackRef.current)
        window.addEventListener("resize", updateRange)

        return () => {
            clearTimeout(timer)
            ro.disconnect()
            window.removeEventListener("resize", updateRange)
        }
    }, [experiences])

    // Track vertical scroll progress through this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    })

    // Spring physics for buttery-smooth horizontal glide
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 75,
        damping: 24,
        restDelta: 0.001,
    })

    // Horizontal translation
    const x = useTransform(smoothProgress, (p) => (reduceMotion ? 0 : -p * scrollRange))

    return (
        <section className="exp-section" ref={sectionRef} id="experience">
            <div className="exp-sticky-viewport">
                {/* Header matching Framer site exactly */}
                <div className="exp-header">
                    <div className="exp-eyebrow">
                        <span className="exp-eyebrow-arrow">♦</span>
                        <span>EXPERIENCE</span>
                    </div>
                    <h2 className="exp-heading">the journey so far</h2>
                    <p className="exp-subheading">
                        From brand identities to AI-powered visual experiences — 3 roles across 3+ years, and counting.
                    </p>
                </div>

                {/* Timeline viewport */}
                <div className="exp-timeline-viewport">
                    {/* Continuous central axis line across full canvas */}
                    <div className="exp-axis-line" />

                    <motion.div
                        ref={trackRef}
                        className="exp-timeline-track"
                        style={{ x }}
                    >
                        {experiences.map((exp, idx) => {
                            // Exact alternation from Sanjay Menon's Framer website:
                            // Card 0: BELOW line, Pill ABOVE
                            // Card 1: ABOVE line, Pill BELOW
                            // Card 2: BELOW line, Pill ABOVE
                            // Card 3: ABOVE line, Pill BELOW
                            const isTop = idx % 2 === 1
                            const isCurrent = exp.current

                            return (
                                <div
                                    key={exp.id || idx}
                                    className={`exp-node exp-node--${isTop ? "top" : "bottom"}`}
                                >
                                    {/* TOP HALF */}
                                    <div className="exp-node__top">
                                        {isTop ? (
                                            <>
                                                <ExperienceCard exp={exp} />
                                                <div className="exp-stem exp-stem--to-axis" />
                                            </>
                                        ) : (
                                            <>
                                                <div className="exp-pill-anchor">
                                                    <DatePill dates={exp.dates} isCurrent={isCurrent} />
                                                </div>
                                                <div className={`exp-stem exp-stem--to-axis ${isCurrent ? "exp-stem--current" : ""}`} />
                                            </>
                                        )}
                                    </div>

                                    {/* CENTER AXIS NODE (Directly on horizontal line) */}
                                    <div className="exp-axis-node">
                                        <div className={`exp-axis-dot ${isCurrent ? "exp-axis-dot--current" : ""}`} />
                                    </div>

                                    {/* BOTTOM HALF */}
                                    <div className="exp-node__top">
                                        {isTop ? (
                                            <>
                                                <div className="exp-stem exp-stem--from-axis" />
                                                <div className="exp-pill-anchor">
                                                    <DatePill dates={exp.dates} isCurrent={isCurrent} />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className={`exp-stem exp-stem--from-axis ${isCurrent ? "exp-stem--current" : ""}`} />
                                                <ExperienceCard exp={exp} />
                                            </>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
