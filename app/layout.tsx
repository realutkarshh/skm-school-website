import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SKM Public School - Humanity First | Best School in Banka, Bihar",
  description:
    "SKM Public School, located in Dadhi Pakaria, Shambhuganj, Banka district, Bihar. A technology-driven institution with ultra-modern campus, fostering holistic development with our motto 'Humanity First'. Admissions open for 2024-25.",
  keywords:
    "SKM Public School, Banka school, Bihar education, CBSE school Banka, best school Shambhuganj, technology-driven education, holistic development, Dadhi Pakaria school",
  authors: [{ name: "SKM Public School" }],
  creator: "SKM Public School",
  publisher: "SKM Public School",
  robots: "index, follow",
  openGraph: {
    title: "SKM Public School - Humanity First | Best School in Banka, Bihar",
    description:
      "Technology-driven institution in Banka, Bihar, fostering holistic development with innovative teaching methodologies and state-of-the-art infrastructure.",
    url: "https://skmpublicschool.edu",
    siteName: "SKM Public School",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKM Public School - Humanity First",
    description: "Best school in Banka, Bihar with ultra-modern campus and innovative education",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="_H_9odAXcxjnAQzR9LQDnG7kEIbzIiEB3HlINdIk9XU" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
