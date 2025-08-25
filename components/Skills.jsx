"use client"

import { useState, useEffect, useRef } from "react"

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState({})
  const skillsRef = useRef({})

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "ReactJS", level: 75 },
        { name: "Vue.js", level: 70 },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Python", level: 85 },
        { name: "PHP", level: 75 },
        { name: "Java", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "REST APIs", level: 80 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Linux", level: 80 },
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 60 },
        { name: "Photoshop", level: 75 },
        { name: "Illustrator", level: 70 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId
            setVisibleSkills((prev) => ({ ...prev, [skillId]: true }))
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" },
    )

    Object.values(skillsRef.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-6">
            <span className="text-blue-400 text-2xl font-bold mr-3">02</span>
            <span className="text-gray-300">Skills & Expertise</span>
          </div>
          <h2 className="section-title text-center">Technical Proficiency</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My technical skills and expertise across various technologies and frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-professional animate-on-scroll"
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="text-center mb-6">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"></div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillId = `${categoryIndex}-${skillIndex}`
                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div
                        ref={(el) => (skillsRef.current[skillId] = el)}
                        data-skill-id={skillId}
                        className="skill-bar"
                      >
                        <div
                          className="skill-progress"
                          style={{
                            width: visibleSkills[skillId] ? `${skill.level}%` : "0%",
                            transitionDelay: `${skillIndex * 50}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile/Scrum",
              "Database Design",
              "System Architecture",
              "Code Review",
              "Technical Documentation",
              "Problem Solving",
              "Team Leadership",
              "Project Management",
            ].map((skill, index) => (
              <span
                key={index}
                className="glass-effect px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-blue-600/20 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
