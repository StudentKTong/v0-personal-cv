"use client"

import { useState, useEffect } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    publicKey: "V-RDLgdmV9J2yUqSO",
    serviceId: "service_d2rwwa6",
    templateId: "template_gza57xy",
  }

  useEffect(() => {
    // Load EmailJS SDK
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
    script.async = true
    script.onload = () => {
      try {
        window.emailjs.init(EMAILJS_CONFIG.publicKey)
        console.log("EmailJS initialized successfully")
      } catch (error) {
        console.error("EmailJS initialization error:", error)
      }
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (submitStatus?.type === "error") {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Check if EmailJS is loaded
      if (!window.emailjs) {
        throw new Error("EmailJS not loaded")
      }

      // Send email using EmailJS
      const result = await window.emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
        name: formData.name,
        user_name: formData.name,
        from_name: formData.name,
        user_email: formData.email,
        from_email: formData.email,
        reply_to: formData.email,
        message: formData.message,
        user_message: formData.message,
        to_email: "khontong21@mekong.edu.kh",
        to_name: "Khon Tong",
      })

      console.log("Email sent successfully:", result)

      setSubmitStatus({
        type: "success",
        message: "🎉 Thank you! Your message has been sent successfully. I'll get back to you soon!",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Email sending error:", error)

      let errorMessage = "❌ Failed to send message. Please try again or contact me directly."

      if (error.text) {
        if (error.text.includes("template ID not found")) {
          errorMessage = "📧 Template configuration error. Please contact me directly using the methods below."
        } else if (error.text.includes("Public Key is invalid")) {
          errorMessage = "🔑 Email service configuration error. Please contact me directly."
        } else if (error.text.includes("Service ID")) {
          errorMessage = "⚙️ Email service setup error. Please use the direct contact methods below."
        } else if (error.text.includes("rate limit")) {
          errorMessage = "⏰ Too many requests. Please wait a moment and try again."
        }
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
      <p className="text-gray-400 mb-6 text-sm">
        I'll receive your message directly in my inbox and respond as soon as possible.
      </p>

      {submitStatus && (
        <div
          className={`mb-6 p-4 rounded-lg border ${
            submitStatus.type === "success"
              ? "bg-green-500/20 text-green-400 border-green-500/30"
              : "bg-red-500/20 text-red-400 border-red-500/30"
          }`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3 mt-0.5">
              {submitStatus.type === "success" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <p className="text-sm leading-relaxed">{submitStatus.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-[#1a103a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 disabled:opacity-50 transition-all duration-200 border border-transparent hover:border-purple-500/30"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-[#1a103a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 disabled:opacity-50 transition-all duration-200 border border-transparent hover:border-purple-500/30"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project, question, or how I can help you..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-[#1a103a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 disabled:opacity-50 resize-vertical transition-all duration-200 border border-transparent hover:border-purple-500/30"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending Message...
            </>
          ) : (
            <>
              <span>Send Message</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </>
          )}
        </button>
      </form>

      {/* Direct Contact Methods */}
      <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
        <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Direct Contact Methods
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Reach out to me directly through any of these channels for immediate response:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="mailto:khontong21@mekong.edu.kh"
            className="flex items-center p-3 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors group"
          >
            <span className="text-purple-400 mr-3 text-xl">📧</span>
            <div>
              <div className="text-purple-400 font-medium group-hover:text-purple-300">Email</div>
              <div className="text-xs text-gray-400">khontong21@mekong.edu.kh</div>
            </div>
          </a>
          <a
            href="tel:+85588814982"
            className="flex items-center p-3 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors group"
          >
            <span className="text-purple-400 mr-3 text-xl">📱</span>
            <div>
              <div className="text-purple-400 font-medium group-hover:text-purple-300">Phone</div>
              <div className="text-xs text-gray-400">088 814 9829</div>
            </div>
          </a>
          <a
            href="https://t.me/KhonTong_Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors group"
          >
            <span className="text-purple-400 mr-3 text-xl">💬</span>
            <div>
              <div className="text-purple-400 font-medium group-hover:text-purple-300">Telegram</div>
              <div className="text-xs text-gray-400">@KhonTong_Dev</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
