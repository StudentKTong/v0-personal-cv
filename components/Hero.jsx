export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300">
                Khon Tong
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Currently a freshman at Cambodian Mekong University, pursuing a bachelor's degree in Information
              Technology. I'm motivated to adapt, find opportunities, and gain experience. I hope to be the person your
              company needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="bg-[#1a103a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#251352] transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative animate-on-scroll">
            <div className="w-full h-[400px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-[#1a103a] rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold">KT</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Khon Tong</h2>
                  <p className="text-purple-400 mb-4">Odoo Developer</p>

                  <div className="flex justify-center space-x-4 mb-6">
                    <a
                      href="mailto:Khonthong21@mekong.edu.kh"
                      className="w-10 h-10 rounded-full bg-[#0f0921] flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
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
                      className="w-10 h-10 rounded-full bg-[#0f0921] flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    </a>
                  </div>

                  <div className="text-sm text-gray-300">
                    <p>Khonthong21@mekong.edu.kh</p>
                    <p>088 814 9829</p>
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
