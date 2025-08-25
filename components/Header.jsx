"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "skills", "education", "references"]
      const scrollPosition = window.scrollY + 100

      if (scrollPosition > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0f0921]/90 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white flex items-center">
          <span className="text-purple-500 mr-1">K</span>
          <span>Tong</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            <li>
              <a href="#hero" className={`nav-link ${activeSection === "hero" ? "active" : ""}`}>
                Home
              </a>
            </li>
            <li>
              <a href="#experience" className={`nav-link ${activeSection === "experience" ? "active" : ""}`}>
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className={`nav-link ${activeSection === "skills" ? "active" : ""}`}>
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className={`nav-link ${activeSection === "education" ? "active" : ""}`}>
                Education
              </a>
            </li>
            <li>
              <a href="#references" className={`nav-link ${activeSection === "references" ? "active" : ""}`}>
                References
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="#contact"
          className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </header>
  )
}
