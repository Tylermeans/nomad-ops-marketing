import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import "./globals.css"

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

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
  alternates: {
    canonical: "https://nomad-ops.com",
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
      {GTM_ID && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              title="Google Tag Manager"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-copper focus:text-warm-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
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
              logo: "https://nomad-ops.com/logo.svg",
              email: "hello@nomad-ops.com",
              priceRange: "$$",
              areaServed: "Worldwide",
              serviceType: [
                "Web Design",
                "Web Development",
                "SEO Optimization",
                "Website Audit",
                "A/B Testing",
                "Branding and Design",
              ],
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  )
}
