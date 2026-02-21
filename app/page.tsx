import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Monitor,
  Search,
  Zap,
  BarChart3,
  Smartphone,
  Shield,
  ChevronDown,
} from "lucide-react"

// ============================================================================
// HERO — Full-bleed with image placeholder
// ============================================================================

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background image */}
      <Image
        src="/images/hero-desert-road.jpg"
        alt="Desert road stretching into the horizon at golden hour"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-copper-light text-sm font-medium tracking-widest uppercase mb-6">
            Remote web design agency
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-white leading-[1.08] tracking-tight">
            Your website should work
            <br />
            <span className="text-copper-light">as hard as you do.</span>
          </h1>

          <p className="mt-6 text-lg text-warm-white/80 leading-relaxed max-w-lg">
            We build websites that rank on Google, convert visitors into
            customers, and make your phone ring. No fluff. Just results.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-warm-white hover:bg-copper-light transition-colors"
            >
              Get Your Free Website Audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-7 py-3.5 text-sm font-medium text-warm-white hover:bg-warm-white/10 transition-colors"
            >
              See What We Do
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce" aria-hidden="true">
        <ChevronDown className="h-5 w-5 text-warm-white/40" />
      </div>
    </section>
  )
}

// ============================================================================
// INTRO — Editorial statement
// ============================================================================

function Intro() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-copper text-sm font-medium tracking-widest uppercase mb-4">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
            Most small business websites are invisible.
          </h2>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            You paid someone to build a website. It looks okay. But it
            doesn&apos;t show up on Google. It doesn&apos;t bring in leads. It
            loads slowly on phones. And honestly? You&apos;re a little
            embarrassed to send people to it.
          </p>
          <p className="mt-4 text-lg text-stone leading-relaxed">
            That&apos;s not a website problem. That&apos;s a business problem.
            And it&apos;s the one we solve.
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// SPLIT SECTION — Image + text
// ============================================================================

function SplitFeature({
  eyebrow,
  heading,
  text,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  eyebrow: string
  heading: string
  text: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Image */}
      <div
        className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div className={reverse ? "lg:order-1" : ""}>
        <p className="text-copper text-sm font-medium tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
          {heading}
        </h2>
        <p className="mt-4 text-stone leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function WhatWeDo() {
  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 space-y-24">
        <SplitFeature
          eyebrow="Design that converts"
          heading="Websites built for your customers, not just for looks."
          text="Every layout decision, every button placement, every line of copy is designed to move visitors toward action. We don't build digital brochures — we build sales tools."
          imageSrc="/images/design-process.svg"
          imageAlt="Box and whisker chart showing design iteration improving conversion scores across rounds"
        />
        <SplitFeature
          eyebrow="SEO from day one"
          heading="Show up when people search for what you do."
          text="Technical SEO isn't something we bolt on after. Site structure, page speed, meta tags, local search optimization — it's all built into the foundation. Your site launches ready to rank."
          imageSrc="/images/seo-growth.svg"
          imageAlt="Organic traffic growth chart showing 380% increase after site launch"
          reverse
        />
        <SplitFeature
          eyebrow="Built for speed"
          heading="Performance that moves the needle."
          text="Slow websites lose customers and Google penalizes them. We obsess over Core Web Vitals — optimized images, clean code, edge caching — so your site loads fast and keeps visitors engaged."
          imageSrc="/images/lighthouse-phone.svg"
          imageAlt="iPhone displaying a website with perfect Lighthouse performance score of 100"
        />
      </div>
    </section>
  )
}

// ============================================================================
// SERVICES — Minimal grid
// ============================================================================

function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Web Design & Dev",
      description: "Custom sites built from scratch. No templates, no page builders, no compromises.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Technical audits, on-page optimization, and local SEO that gets you found.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Designed for phones first. Because that's where your customers are.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Fast page loads, Core Web Vitals, and server optimization.",
    },
    {
      icon: BarChart3,
      title: "Website Audits",
      description: "Comprehensive analysis of what's working and what's costing you customers.",
    },
    {
      icon: Shield,
      title: "Ongoing Support",
      description: "Security, updates, monitoring. Your site stays fast and safe.",
    },
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-copper text-sm font-medium tracking-widest uppercase mb-3">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Everything your website needs. Nothing it doesn&apos;t.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((s) => (
            <div key={s.title} className="group">
              <s.icon className="h-6 w-6 text-copper mb-4" aria-hidden="true" />
              <h3 className="font-semibold text-charcoal mb-2">{s.title}</h3>
              <p className="text-sm text-stone leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-copper hover:text-copper-dark transition-colors"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PROCESS — Horizontal steps
// ============================================================================

function Process() {
  const steps = [
    {
      num: "01",
      title: "Audit",
      text: "We analyze your current site with the same tools Google uses. You get a detailed report — free, yours to keep regardless.",
    },
    {
      num: "02",
      title: "Strategy",
      text: "Based on the data, we design a plan tailored to your goals. You see mockups before we write any code.",
    },
    {
      num: "03",
      title: "Build",
      text: "Clean code, fast hosting, SEO baked in. We handle everything from development to launch.",
    },
    {
      num: "04",
      title: "Grow",
      text: "After launch, we monitor, optimize, and improve. Your site gets better over time — not worse.",
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-charcoal text-warm-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-copper-light text-sm font-medium tracking-widest uppercase mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Simple process. Serious results.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s) => (
            <div key={s.num}>
              <span className="text-4xl font-bold text-copper/50" aria-hidden="true">
                {s.num}
              </span>
              <h3 className="font-semibold text-warm-white mt-3 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-warm-white/80 leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// NOMAD IDENTITY — Full-bleed image moment
// ============================================================================

function NomadIdentity() {
  return (
    <section className="relative py-32 sm:py-40">
      {/* Background image */}
      <Image
        src="/images/desert-highway.jpg"
        alt="Golden desert highway at dusk, sense of freedom and movement"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/60" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 text-center">
        <p className="text-copper-light text-sm font-medium tracking-widest uppercase mb-6">
          Why &ldquo;Nomad&rdquo;?
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white max-w-3xl mx-auto leading-tight">
          Great work doesn&apos;t need a corner office.
        </h2>
        <p className="mt-6 text-lg text-warm-white/80 max-w-2xl mx-auto leading-relaxed">
          We work from the road. Coffee shops in Colorado, coworking spaces in
          Costa Rica, an Airstream somewhere in between. The location changes.
          The quality of work doesn&apos;t. You get a senior team without the
          agency overhead — and the flexibility to communicate on your schedule.
        </p>
      </div>
    </section>
  )
}

// ============================================================================
// FAQ — AEO optimized
// ============================================================================

function FAQ() {
  const faqs = [
    {
      question: "How much does a small business website cost?",
      answer:
        "Most projects start at $2,500. We provide a clear, fixed-price quote after the initial audit so there are no surprises. You'll know exactly what you're getting and what it costs before we start.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Most projects launch in 4-6 weeks from kickoff. That includes design, development, SEO setup, and testing. Larger sites with custom features may take 8-10 weeks. We'll give you a timeline during the strategy phase.",
    },
    {
      question: "Do I really need a new website?",
      answer:
        "Maybe not. That's why we start with a free audit — we'll tell you honestly what would make the biggest impact, even if the answer is 'fix a few things and keep what you have.'",
    },
    {
      question: "What's included in the free website audit?",
      answer:
        "We analyze your site's performance (load speed, Core Web Vitals), SEO health (rankings, technical issues, meta tags), mobile experience, accessibility, and security. You get a detailed report with prioritized recommendations — not a generic template.",
    },
    {
      question: "Will my website show up on Google?",
      answer:
        "SEO is built into every site we create — technical, on-page, and local. We can't guarantee #1 rankings, but we build the foundation that makes ranking possible.",
    },
    {
      question: "Do you work with businesses outside the US?",
      answer:
        "Yes. We're fully remote and work across every time zone. Async communication plus scheduled calls when you need them.",
    },
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left */}
          <div className="lg:col-span-4">
            <p className="text-copper text-sm font-medium tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-charcoal">
              Questions we get asked a lot.
            </h2>
            <p className="mt-4 text-stone">
              If yours isn&apos;t here,{" "}
              <Link href="/contact" className="text-copper hover:text-copper-dark underline underline-offset-2">
                just ask
              </Link>
              . We&apos;re straightforward people.
            </p>
          </div>

          {/* Right — FAQ list */}
          <div className="lg:col-span-8 divide-y divide-stone/15">
            {faqs.map((faq, i) => (
              <div key={i} className="py-7 first:pt-0 last:pb-0">
                <h3 className="font-semibold text-charcoal text-lg">
                  {faq.question}
                </h3>
                <p className="mt-3 text-stone leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQPage schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}

// ============================================================================
// CTA
// ============================================================================

function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
          Find out what&apos;s holding your website back.
        </h2>
        <p className="mt-4 text-lg text-stone max-w-2xl mx-auto">
          Get a free, honest audit of your website. We&apos;ll show you
          what&apos;s working, what isn&apos;t, and exactly what to fix first.
        </p>

        {/* Stat grid */}
        <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <p className="text-4xl font-bold text-copper">53%</p>
            <p className="mt-2 text-sm text-stone">
              of mobile users leave if a page takes over 3 seconds to load
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-copper">75%</p>
            <p className="mt-2 text-sm text-stone">
              of searchers never look past Google&apos;s first page
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-copper">60%+</p>
            <p className="mt-2 text-sm text-stone">
              of your visitors are on their phone right now
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-8 py-4 text-sm font-semibold text-warm-white hover:bg-copper-dark transition-colors"
          >
            Get Your Free Audit
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <p className="mt-5 text-sm text-stone">
          Takes 30 seconds. Your report lands within 24 hours.
        </p>
      </div>
    </section>
  )
}

// ============================================================================
// PAGE
// ============================================================================

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhatWeDo />
      <Services />
      <Process />
      <NomadIdentity />
      <FAQ />
      <CTA />
    </>
  )
}
