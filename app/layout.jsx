import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Khon Tong | Professional CV</title>
        <meta name="description" content="Professional CV of Khon Tong" />
      </head>
      <body className={`${inter.className} bg-[#0f0921] text-white`}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
