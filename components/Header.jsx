"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ["hero", "experience", "skills", "education", "references"]
          const scrollPosition = window.scrollY + 100

          setScrolled(scrollPosition > 50)

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
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-white flex items-center group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="group-hover:text-blue-400 transition-colors">Tong</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-1">
              {[
                { id: "hero", label: "Home" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "education", label: "Education" },
                { id: "references", label: "References" },
              ].map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={`nav-link ${activeSection === item.id ? "active" : ""}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg glass-effect flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-effect rounded-xl p-4">
            <nav className="space-y-2">
              {[
                { id: "hero", label: "Home" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "education", label: "Education" },
                { id: "references", label: "References" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-blue-600/20 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full btn-primary text-center mt-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hire Me
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
