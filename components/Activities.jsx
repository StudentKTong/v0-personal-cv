"use client"

import { useState } from "react"

export default function Activities() {
  const [selectedImage, setSelectedImage] = useState(null)

  const activities = [
    {
      id: 1,
      title: "Outstanding Student Award",
      description: "Received recognition for academic excellence at Cambodia Mekong University",
      category: "Achievement",
      date: "2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-cloud-photo-size-5-6154713235413124055-y.jpg-4jRuLTL8PyKM7D0YlZY0OXo3KcB5qG.jpeg",
    },
    {
      id: 2,
      title: "Environmental Activity",
      description: "Participated in tree planting initiative with fellow students",
      category: "Community Service",
      date: "2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-cloud-photo-size-5-6154713235413124056-y.jpg-yST1a65GST7OgAFLgUuY5F6IUcvu5F.jpeg",
    },
    {
      id: 3,
      title: "Award Ceremony",
      description: "Recognition ceremony for outstanding academic performance",
      category: "Achievement",
      date: "2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-cloud-photo-size-5-6154713235413124052-y.jpg-m80gczAuc2VAXg8QdkID3W1aiGsIMN.jpeg",
    },
  ]

  const categories = ["All", "Achievement", "Community Service", "Academic"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredActivities =
    activeCategory === "All" ? activities : activities.filter((activity) => activity.category === activeCategory)

  return (
    <section id="activities" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-6">
            <span className="text-purple-400 text-2xl font-bold mr-3">05</span>
            <span className="text-gray-300">Activities & Achievements</span>
          </div>
          <h2 className="section-title text-center">My Journey</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my academic achievements, community involvement, and memorable moments during my university
            journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg"
                  : "glass-effect text-gray-300 hover:text-white hover:bg-purple-600/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity, index) => (
            <div
              key={activity.id}
              className="gallery-item animate-on-scroll cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(activity)}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">{activity.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{activity.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-purple-600 px-2 py-1 rounded-full">{activity.category}</span>
                      <span className="text-xs text-gray-400">{activity.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-professional text-center animate-on-scroll">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Academic Excellence</h3>
            <p className="text-gray-400">Outstanding Student Award recipient for exceptional academic performance</p>
          </div>
          <div className="card-professional text-center animate-on-scroll" style={{ transitionDelay: "100ms" }}>
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Community Impact</h3>
            <p className="text-gray-400">Active participation in environmental and community service initiatives</p>
          </div>
          <div className="card-professional text-center animate-on-scroll" style={{ transitionDelay: "200ms" }}>
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Leadership</h3>
            <p className="text-gray-400">
              Demonstrated leadership qualities in academic and extracurricular activities
            </p>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-2xl overflow-hidden border border-purple-500/20">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 mb-4">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">
                  {selectedImage.category}
                </span>
                <span className="text-gray-400">{selectedImage.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
