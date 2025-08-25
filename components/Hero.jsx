"use client"

import { useState, useEffect, useCallback } from "react"

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const roles = ["Odoo Developer", "Full Stack Developer", "Software Engineer", "IT Professional"]

  const switchRole = useCallback(() => {
    setIsTyping(false)
    setTimeout(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
      setIsTyping(true)
    }, 300)
  }, [roles.length])

  useEffect(() => {
    const interval = setInterval(switchRole, 2500)
    return () => clearInterval(interval)
  }, [switchRole])

  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 flex items-center relative">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl floating-element"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 mb-4">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-gray-300">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Khon Tong
              </span>
            </h1>

            <div className="mb-8">
              <p className="text-xl text-gray-400 mb-4">I'm a passionate</p>
              <div className="text-2xl font-semibold text-blue-400 h-8">
                <span className={isTyping ? "typing-effect" : ""}>{roles[currentRole]}</span>
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Currently pursuing a bachelor's degree in Information Technology at Cambodian Mekong University.
              Specializing in creating innovative solutions and passionate about technology.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#experience" className="btn-primary group">
                <span>View My Work</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="glass-effect px-6 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          <div className="relative animate-on-scroll lg:justify-self-end">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Simplified profile card */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-blue-500/20">
                {/* Profile photo */}
                <div className="relative mb-6">
                  <div className="w-64 h-64 mx-auto relative">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl">
                      <img
                        src="/profile-photo.jpg"
                        alt="Khon Tong - Professional Developer"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>

                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-800">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    {/* Verification badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Profile info */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2 text-white">Khon Tong</h2>
                  <p className="text-blue-400 mb-4 text-lg font-medium">Senior Developer</p>

                  {/* Social links */}
                  <div className="flex justify-center space-x-3 mb-4">
                    <a
                      href="mailto:Khonthong21@mekong.edu.kh"
                      className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                    <a
                      href="tel:088 814 9829"
                      className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://t.me/KhonTong_Dev"
                      className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Contact info */}
                  <div className="space-y-1 text-sm text-gray-300">
                    <p>Khonthong21@mekong.edu.kh</p>
                    <p>Phnom Penh, Cambodia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
