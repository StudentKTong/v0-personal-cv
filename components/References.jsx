export default function References() {
  const references = [
    {
      name: "Mut Kvan Sam At Veasna",
      position: "Dean of the College of Science and Technology and Cambodia Mekong University",
      contact: "093777032",
    },
    {
      name: "Khim Chandara",
      position:
        "Vice Chief of Document Data and Information Management System at Economic, Social and Cultural Council (ECOSOCC) of Office of the Council of Ministers (OCM)",
      contact: "017 27 17 27, 086 27 17 2",
    },
  ]

  return (
    <section id="references" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <span className="text-purple-500 text-4xl font-bold mr-4">04</span>
          <h2 className="section-title">References</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {references.map((ref, index) => (
            <div key={index} className="card animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-bold text-white mb-2">{ref.name}</h3>
              <p className="text-gray-300 mb-4">{ref.position}</p>
              <div className="flex items-center text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{ref.contact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
