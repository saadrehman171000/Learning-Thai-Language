import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: {
    template: "Thai with Sarah | %s",
    default: "Thai with Sarah - Learn Thai with Clear, Friendly, and Practical Lessons",
  },
  description:
    "Master tones, script, and everyday Thai through bite-sized lessons, culture tips, and guided practice with Sarah.",
  keywords: ["Thai language", "learn Thai", "Thai lessons", "Thai tones", "Thai script"],
  authors: [{ name: "Sarah" }],
  creator: "Thai with Sarah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thaiwithsarah.com",
    title: "Thai with Sarah - Learn Thai with Clear, Friendly, and Practical Lessons",
    description:
      "Master tones, script, and everyday Thai through bite-sized lessons, culture tips, and guided practice with Sarah.",
    siteName: "Thai with Sarah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thai with Sarah - Learn Thai with Clear, Friendly, and Practical Lessons",
    description:
      "Master tones, script, and everyday Thai through bite-sized lessons, culture tips, and guided practice with Sarah.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Thai with Sarah",
              url: "https://thaiwithsarah.com",
              logo: "https://thaiwithsarah.com/images/thaiwithsarah-logo.png",
              description: "Learn Thai with clear, friendly, and practical lessons",
              founder: {
                "@type": "Person",
                name: "Sarah",
              },
              sameAs: ["https://instagram.com/thaiwithsarah", "https://youtube.com/@thaiwithsarah"],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
