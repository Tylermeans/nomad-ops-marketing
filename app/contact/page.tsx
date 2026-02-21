import type { Metadata } from "next"
import { Mail, MessageSquare, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free website audit or talk to us about your project. No pressure, no commitment — just honest advice about your website.",
  alternates: {
    canonical: "https://nomad-ops.com/contact",
  },
  openGraph: {
    title: "Contact | Nomad Ops",
    description:
      "Get a free website audit or talk to us about your project. No pressure, no commitment — just honest advice.",
    url: "https://nomad-ops.com/contact",
    siteName: "Nomad Ops",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-copper text-sm font-medium tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
              Let&apos;s talk.
            </h1>
            <p className="mt-6 text-lg text-stone leading-relaxed">
              Whether you want a free audit, have questions, or are ready to
              start — we&apos;re here.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left — info */}
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Start with a free website audit.
              </h2>
              <p className="text-stone leading-relaxed mb-10">
                Send us your website URL and we&apos;ll run a full analysis —
                performance, SEO, mobile, accessibility. You get a real report
                with specific recommendations. Not a sales pitch.
              </p>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream shrink-0">
                    <Mail className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Email</h3>
                    <a
                      href="mailto:hello@nomad-ops.com"
                      className="text-copper hover:text-copper-dark transition-colors"
                    >
                      hello@nomad-ops.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream shrink-0">
                    <MessageSquare className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Book a call
                    </h3>
                    <p className="text-sm text-stone">
                      15-minute intro — no pitch, just conversation about your
                      goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream shrink-0">
                    <Clock className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Response time
                    </h3>
                    <p className="text-sm text-stone">
                      We typically respond within a few hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="mt-12 p-8 rounded-2xl bg-cream">
                <h3 className="font-semibold text-charcoal mb-4">
                  What happens next?
                </h3>
                <ol className="space-y-3 text-sm text-stone">
                  <li className="flex gap-3">
                    <span className="font-bold text-copper">01</span>
                    You send us your website and tell us about your business.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-copper">02</span>
                    We run a full analysis — performance, SEO, mobile,
                    accessibility.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-copper">03</span>
                    You get a detailed audit with prioritized recommendations.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-copper">04</span>
                    We hop on a call to walk through it — if you want.
                  </li>
                </ol>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <form className="rounded-2xl border border-stone/15 p-8 sm:p-10 bg-warm-white">
                <h2 className="text-xl font-semibold text-charcoal mb-8">
                  Send us a message
                </h2>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-stone/20 bg-cream/50 px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:border-copper focus:ring-2 focus:ring-copper/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-stone/20 bg-cream/50 px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:border-copper focus:ring-2 focus:ring-copper/20 outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Website URL
                      <span className="text-stone/50 font-normal ml-1">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full rounded-lg border border-stone/20 bg-cream/50 px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:border-copper focus:ring-2 focus:ring-copper/20 outline-none transition-all"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-stone/20 bg-cream/50 px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:border-copper focus:ring-2 focus:ring-copper/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your business and what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-warm-white hover:bg-copper-dark transition-colors"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-xs text-stone/60 text-center">
                    No spam. No mailing list. Just a direct reply from us.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
