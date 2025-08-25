export default function Experience() {
  const experiences = [
    {
      title: "Odoo Developer",
      company: "Biz Solution Co,. Ltd",
      location: "Phnom Penh",
      period: "Jun 2024 - Present",
      status: "Current",
      description: [
        "Junior developer that started from: 16-Jun-2024, to: Present",
        "Using Python language & XML to develop a system like HRMS, CRMs, Sales, Payrolls, Accounting, Dealers...",
        "Prepared Database structed and Data analysis that got requirement from PO & Clients.",
        "Working with Rest-API & GIT",
      ],
    },
    {
      title: "Office Assistant",
      company: "Cambodia Mekong University (CMU)",
      location: "Phnom Penh",
      period: "2022 - 2024",
      status: "Completed",
      description: [
        "Office Assistant in Department Academic Affairs (DAA)",
        "Working experience maybe 17months.",
        "Provide/Solve student requesting form and problems.",
        "Classroom technical support (Network, Sound, LCD, Computer).",
        "Designer and also Video Editor for events.",
      ],
    },
    {
      title: "Customer Services",
      company: "Fat Aunty Restaurant",
      location: "Phnom Penh",
      period: "2021 - 2022",
      status: "Completed",
      description: ["Customer's Service & Casher (9months)"],
    },
    {
      title: "Online",
      company: "Galaxy Chrey Thoum Casino",
      location: "Kandal, Chrey Thoum",
      period: "2021",
      status: "Completed",
      description: [
        "Senior's Online as employee (7months).",
        "Manager Indonesia Online bank (Deposit and Withdraw).",
        "Also, the Trainer junior's Khmer new staffs",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-[#0a0612]">
      <div className="container mx-auto px-4">
        {/* Section Header with Step Design */}
        <div className="flex items-center mb-16">
          <div className="flex items-center bg-gradient-to-r from-purple-600 to-purple-500 rounded-full px-6 py-3 mr-6">
            <span className="text-white text-2xl font-bold mr-3">01</span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Experience</h2>
            <p className="text-gray-400">My professional journey and career progression</p>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
                {/* Step Number Circle */}
                <div className="absolute left-0 top-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 z-10">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>

                {/* Step Content Card */}
                <div className="ml-24 bg-[#1a103a] rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20 hover:transform hover:scale-[1.02] border border-purple-900/20">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.status === "Current"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                        }`}
                      >
                        {exp.status}
                      </span>
                      {exp.status === "Current" && (
                        <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <span className="text-purple-400 font-medium text-sm bg-purple-500/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Job Title and Company */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                      {exp.title}
                      <svg
                        className="w-5 h-5 text-purple-400 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8zM8 14v.01M12 14v.01M16 14v.01"
                        />
                      </svg>
                    </h3>
                    <div className="flex items-center text-gray-300 mb-1">
                      <svg
                        className="w-4 h-4 text-purple-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <svg
                        className="w-4 h-4 text-purple-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex items-start group">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover:bg-purple-500/30 transition-colors duration-200">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        </div>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Progress Arrow for non-last items */}
                  {index < experiences.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* End of Timeline Indicator */}
          <div className="relative mt-12">
            <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <div className="ml-24 bg-gradient-to-r from-purple-600/10 to-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-2">Looking Forward</h3>
              <p className="text-gray-400">
                Ready to take on new challenges and contribute to innovative projects. Open to opportunities that allow
                me to grow and make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
