import React, { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

function Word({ word, index, total, progress, reduceMotion }) {
    // Distribute unblurring across scroll progress [0, 0.85]
    // Early words start sharp or transition early; later words transition later
    const start = Math.max(0, (index / total) * 0.25)
    const end = Math.min(1, start + 0.02)

    const opacity = useTransform(progress, [start, end], [0.2, 1])
    const blur = useTransform(progress, [start, end], [5, 0])
    const filter = useTransform(blur, (v) => `blur(${v}px)`)

    if (reduceMotion) {
        return <span className="blur-reveal-word">{word}&nbsp;</span>
    }

    return (
        <motion.span
            className="blur-reveal-word"
            style={{
                opacity,
                filter,
                display: "inline-block",
                willChange: "filter, opacity",
            }}
        >
            {word}&nbsp;
        </motion.span>
    )
}

export default function StickyBlurReveal({
    text = "Every photograph should make an impact. I capture moments that blend artistry, storytelling, and emotion to create visuals that stand out.",
    scrollProgress,
}) {
    const reduceMotion = useReducedMotion()
    const words = text.split(" ")

    return (
        <h2 className="sticky-blur-heading">
            {words.map((w, idx) => (
                <Word
                    key={`${w}-${idx}`}
                    word={w}
                    index={idx}
                    total={words.length}
                    progress={scrollProgress}
                    reduceMotion={reduceMotion}
                />
            ))}
        </h2>
    )
}










// import React, { useRef } from "react"
// import {
//     motion,
//     useScroll,
//     useTransform,
//     useReducedMotion,
// } from "framer-motion"

// function Word({ word, index, total, progress, reduceMotion }) {
//     // Distribute unblurring across scroll progress [0, 0.85]
//     // Early words start sharp or transition early; later words transition later
//     const start = Math.max(0, (index / total) * 0.8)
//     const end = Math.min(1, start + 0.02)

//     const opacity = useTransform(progress, [start, end], [0.2, 1])
//     const blur = useTransform(progress, [start, end], [5, 0])
//     const filter = useTransform(blur, (v) => `blur(${v}px)`)

//     if (reduceMotion) {
//         return (
//             <span className="blur-reveal-word">
//                 {word}&nbsp;
//             </span>
//         )
//     }

//     return (
//         <motion.span
//             className="blur-reveal-word"
//             style={{
//                 opacity,
//                 filter,
//                 display: "inline-block",
//                 willChange: "filter, opacity",
//             }}
//         >
//             {word}&nbsp;
//         </motion.span>
//     )
// }

// export default function StickyBlurReveal({
//     text = "Every photograph should make an impact. I capture moments that blend artistry, storytelling, and emotion to create visuals that stand out.",
//     scrollProgress,
// }) {
//     const headingRef = useRef(null)
//     const reduceMotion = useReducedMotion()

//     /*
//      * Start the reveal only when the heading enters
//      * the viewport.
//      *
//      * "start 90%" means:
//      * the TOP of the heading reaches 90% of
//      * the viewport height.
//      */
//     const { scrollYProgress: headingProgress } = useScroll({
//         target: headingRef,
//         offset: ["start 50%", "start 20%"],
//     })

//     /*
//      * Use the heading's viewport progress as the
//      * reveal progress.
//      */
//     const revealProgress = useTransform(
//         headingProgress,
//         [0, 1],
//         [0, 1]
//     )

//     const words = text.split(" ")

//     return (
//         <h2
//             ref={headingRef}
//             className="sticky-blur-heading"
//         >
//             {words.map((w, idx) => (
//                 <Word
//                     key={`${w}-${idx}`}
//                     word={w}
//                     index={idx}
//                     total={words.length}
//                     progress={revealProgress}
//                     reduceMotion={reduceMotion}
//                 />
//             ))}
//         </h2>
//     )
// }
