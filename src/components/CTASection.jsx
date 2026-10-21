import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import MasterButton from "./MasterButton"
import PolaroidStack from "./PolaroidStack"

export default function CTASection({
    title = "You bring the chaos.I'll bring the creativity.",
    subtitle = "Let's turn big ambitions into bold identities, killer visuals, and digital experiences worth remembering.",
    buttonLabel = "Get in touch",
    showPolaroids = true,
}) {
    const reduceMotion = useReducedMotion()

    const ctaImages = [
        { src: "/images/cta-polaroid-1.svg", caption: "Paris Studio" },
        { src: "/images/cta-polaroid-2.svg", caption: "London Editorial" },
        { src: "/images/cta-polaroid-3.svg", caption: "Comporta Lookbook" },
    ]

    return (
        <section className="cta-section">
            <motion.div
                className="cta-content"
                initial={!reduceMotion ? { opacity: 0, y: 30 } : {}}
                whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="cta-heading">You bring the chaos,<br/>I'll bring the creativity.</h2>
                <p className="cta-subtitle">{subtitle}</p>
                <div className="cta-button-wrap">
                    <MasterButton to="/contact" variant="dark">
                        {buttonLabel}
                    </MasterButton>
                </div>
            </motion.div>

            {showPolaroids && (
                <div className="cta-polaroid-wrap">
                    <PolaroidStack images={ctaImages} variant="cta" />
                </div>
            )}
        </section>
    )
}
