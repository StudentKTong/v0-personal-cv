import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Khon Tong | Professional Odoo Developer & IT Specialist in Cambodia</title>
        <meta
          name="description"
          content="Khon Tong - Professional Odoo Developer and IT Specialist from Cambodia Mekong University. Expert in Python, JavaScript, React, and full-stack development. Available for hire in Phnom Penh, Cambodia."
        />
        <meta
          name="keywords"
          content="Khon Tong, Odoo Developer, Python Developer, Cambodia Developer, IT Specialist, Full Stack Developer, Phnom Penh, Cambodia Mekong University, Web Developer, Software Engineer"
        />
        <meta name="author" content="Khon Tong" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/" />
        <meta property="og:title" content="Khon Tong | Professional Odoo Developer & IT Specialist" />
        <meta
          property="og:description"
          content="Professional Odoo Developer and IT Specialist from Cambodia. Expert in Python, JavaScript, React, and full-stack development."
        />
        <meta property="og:image" content="/profile-photo.jpg" />
        <meta property="og:site_name" content="Khon Tong CV" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-domain.com/" />
        <meta property="twitter:title" content="Khon Tong | Professional Odoo Developer & IT Specialist" />
        <meta
          property="twitter:description"
          content="Professional Odoo Developer and IT Specialist from Cambodia. Expert in Python, JavaScript, React, and full-stack development."
        />
        <meta property="twitter:image" content="/profile-photo.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/profile-photo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/profile-photo.jpg" />
        <meta name="theme-color" content="#A594F9" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://your-domain.com/" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Khon Tong",
              jobTitle: "Odoo Developer",
              description: "Professional Odoo Developer and IT Specialist",
              url: "https://your-domain.com",
              image: "/profile-photo.jpg",
              email: "khontong21@mekong.edu.kh",
              telephone: "+855-88-814-9829",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Phnom Penh",
                addressCountry: "Cambodia",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Cambodia Mekong University",
              },
              worksFor: {
                "@type": "Organization",
                name: "Biz Solution Co., Ltd",
              },
              knowsAbout: ["Python", "Odoo", "JavaScript", "React", "Web Development", "Software Engineering"],
              sameAs: ["https://t.me/KhonTong_Dev"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-gradient-to-br from-[#0a0612] via-[#1a0b2e] to-[#2d1b4e] text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.app",
}
