export default function Skills() {
  const skillCategories = [
    {
      title: "Web Bootcamps",
      skills: [
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "ReactJS", level: 70 },
        { name: "Vue", level: 65 },
        { name: "Node", level: 60 },
      ],
    },
    {
      title: "Key Skills",
      skills: [
        { name: "Python", level: 85 },
        { name: "PHP", level: 75 },
        { name: "Java", level: 70 },
        { name: "Linux", level: 80 },
        { name: "Virtual Machine", level: 75 },
        { name: "Network Administrator", level: 70 },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "C#", level: 60 },
        { name: "Photoshop", level: 75 },
        { name: "Illustrator", level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <span className="text-purple-500 text-4xl font-bold mr-4">02</span>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-bold mb-6 text-purple-400">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    {/* Changed from using .skill-bar class to inline styles */}
                    <div className="h-2 bg-[#1a103a] rounded-full overflow-hidden relative">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#9333ea] to-[#a855f7] rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
