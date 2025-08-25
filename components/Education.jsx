export default function Education() {
  const education = [
    {
      school: "Cambodian Mekong University",
      location: "Phnom Penh",
      degree: "Bachelor of Information Technology",
      period: "2021 - 2025",
      details: [
        "Student's year4 of Bachelor of Information Technology.",
        "Team leads group project, assignment, and homework.",
        "GPS 3.0 (Pending for more subjects).",
      ],
    },
    {
      school: "Hun Sen Kosh Thom High School",
      location: "Kandal province",
      degree: "Diploma Certification",
      period: "2017 - 2020",
      details: ["Auto-Pass session of Diploma Certification."],
    },
  ]

  return (
    <section id="education" className="py-20 bg-[#0a061a]">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <span className="text-purple-500 text-4xl font-bold mr-4">03</span>
          <h2 className="section-title">Education Background</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="card animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                <span className="text-purple-400">{edu.period}</span>
              </div>
              <p className="text-gray-300 mb-4">// {edu.location}</p>
              <p className="text-white font-medium mb-4">{edu.degree}</p>
              <ul className="space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-gray-400 flex items-start">
                    <span className="text-purple-500 mr-2">+</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
