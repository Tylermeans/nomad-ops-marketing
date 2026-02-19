import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Monitor,
  Search,
  Smartphone,
  BarChart3,
  Zap,
  Shield,
  Code,
  Palette,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, SEO optimization, performance tuning, and ongoing support for small businesses. Results-driven websites that rank and convert.",
}

const services = [
  {
    icon: Palette,
    title: "Custom Web Design",
    description:
      "No templates. Every site is designed from scratch based on your brand, your audience, and your goals. We focus on clean layouts, clear messaging, and designs that move visitors to action.",
    features: [
      "Brand-aligned visual design",
      "Conversion-focused layouts",
      "Unlimited design revisions",
      "Full mockups before development",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Clean, modern code built with the latest technologies. Fast page loads, smooth interactions, and rock-solid reliability. Every site is built to perform — not just to exist.",
    features: [
      "Next.js / React for speed",
      "Lighthouse scores 90+",
      "Accessibility compliance",
      "Clean, maintainable code",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Technical SEO done right from day one. Site structure, meta tags, schema markup, page speed, and local search optimization so Google finds and ranks your pages.",
    features: [
      "Technical SEO audit and fixes",
      "On-page optimization",
      "Local SEO setup",
      "Monthly ranking reports",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Over 60% of web traffic is mobile. We design for phones first, then scale up. Your site looks and works perfectly on every screen size.",
    features: [
      "Responsive on all devices",
      "Touch-optimized interactions",
      "Fast mobile load times",
      "Mobile-specific CTAs",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed is a ranking factor and a conversion factor. We optimize images, minimize code, leverage caching, and tune servers for sub-two-second loads.",
    features: [
      "Core Web Vitals optimization",
      "Image and asset compression",
      "CDN and edge caching",
      "Performance monitoring",
    ],
  },
  {
    icon: BarChart3,
    title: "Website Audits",
    description:
      "Comprehensive analysis of your current site — performance, SEO, mobile experience, accessibility, security. A clear report with prioritized, actionable recommendations.",
    features: [
      "Performance scoring",
      "SEO health check",
      "Mobile usability analysis",
      "Competitor comparison",
    ],
  },
  {
    icon: Shield,
    title: "Ongoing Maintenance",
    description:
      "Websites aren't set-and-forget. We handle security patches, content updates, performance monitoring, and backups so your site stays fast and safe.",
    features: [
      "Monthly security updates",
      "Content changes",
      "Uptime monitoring",
      "Regular backups",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Beyond the build. Content strategy, conversion rate optimization, and analytics to continuously improve how your website performs for your business.",
    features: [
      "Analytics setup",
      "Conversion tracking",
      "Monthly reviews",
      "Content recommendations",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-copper text-sm font-medium tracking-widest uppercase mb-4">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
              Everything your business needs for a website that actually works.
            </h1>
            <p className="mt-6 text-lg text-stone leading-relaxed">
              From design to SEO to ongoing support — we handle it all so you
              can focus on running your business. Every service is built around
              one question: does this bring you more customers?
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-stone/15 p-8 hover:border-copper/30 transition-colors bg-warm-white"
              >
                <s.icon className="h-6 w-6 text-copper mb-5" />
                <h2 className="text-xl font-semibold text-charcoal mb-3">
                  {s.title}
                </h2>
                <p className="text-stone leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-charcoal-light"
                    >
                      <div className="h-1 w-1 rounded-full bg-copper shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.title,
                description: s.description,
                provider: {
                  "@type": "ProfessionalService",
                  name: "Nomad Ops",
                },
              },
            })),
          }),
        }}
      />

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-lg text-stone max-w-xl mx-auto">
            Start with a free audit. We&apos;ll analyze your current site and
            tell you what would make the biggest difference.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-warm-white hover:bg-copper-dark transition-colors mt-8"
          >
            Get Your Free Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
