import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import TopNavigation from "./TopNavigation"
import BottomNavigation from "./BottomNavigation"
import Footer from "./Footer"
import { AnimatePresence } from "framer-motion"

export default function AppShell({ children }) {
    const location = useLocation()
    const [showBottomNav, setShowBottomNav] = useState(false)

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [location.pathname])

    useEffect(() => {
        // Bottom navigation should only be controlled
        // on the homepage.
        if (location.pathname !== "/") {
            setShowBottomNav(true)
            return
        }

        const heroSection = document.querySelector(
".home-hero-section")

        if (!heroSection) {
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Hero visible → hide bottom nav
                // Hero passed → show bottom nav
                setShowBottomNav(!entry.isIntersecting)
            },
            {
                threshold: 0,
            }
        )

        observer.observe(heroSection)

        return () => {
            observer.disconnect()
        }
    }, [location.pathname])

    return (
        <div className="site-app-wrapper">
            <a
                href="#main-content"
                className="skip-to-content-link"
            >
                Skip to main content
            </a>

            {/* Top Navigation */}
            {/* <TopNavigation /> */}

            {/* Routed Page Content */}
            <main
                id="main-content"
                className="site-main-content"
            >
                {children}
            </main>

            {/* Shared Footer */}
            {/* <Footer /> */}

            {/* Bottom Navigation */}
           <AnimatePresence>
    {showBottomNav && <BottomNavigation />}
</AnimatePresence>
        </div>
    )
}