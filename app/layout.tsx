import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Nomad Ops — Websites That Work as Hard as You Do",
    template: "%s | Nomad Ops",
  },
  description:
    "Remote web design agency for small businesses. We build fast, SEO-optimized websites that rank on Google and turn visitors into paying customers. Free website audit.",
  keywords: [
    "web design agency",
    "small business website",
    "SEO web design",
    "remote web designer",
    "website redesign",
    "local SEO",
    "website audit",
    "freelance web developer",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Nomad Ops — Websites That Work as Hard as You Do",
    description:
      "Remote web design agency. Fast, SEO-optimized websites that bring small businesses real customers.",
    url: "https://nomad-ops.com",
    siteName: "Nomad Ops",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />

        {/* JSON-LD: Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Nomad Ops",
              description:
                "Remote web design agency for small businesses. We build fast, SEO-optimized websites that rank and convert.",
              url: "https://nomad-ops.com",
              email: "hello@nomad-ops.com",
              priceRange: "$$",
              areaServed: "Worldwide",
              serviceType: [
                "Web Design",
                "Web Development",
                "SEO Optimization",
                "Website Audit",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
