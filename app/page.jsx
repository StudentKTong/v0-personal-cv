"use client"

import { useEffect, useRef } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Activities from "../components/Activities"
import References from "../components/References"
import Footer from "../components/Footer"

export default function Home() {
  const animatedElementsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => {
      observer.observe(el)
      animatedElementsRef.current.push(el)
    })

    return () => {
      animatedElementsRef.current.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Activities />
      <References />
      <Footer />
    </main>
  )
}
