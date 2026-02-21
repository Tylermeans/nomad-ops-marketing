import type { Metadata } from "next"
import { Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free website audit or talk to us about your project. Honest advice about your website, on us.",
  alternates: {
    canonical: "https://nomad-ops.com/contact",
  },
  openGraph: {
    title: "Contact | Nomad Ops",
    description:
      "Get a free website audit or talk to us about your project. Honest advice about your website, on us.",
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
                    <Mail className="h-5 w-5 text-copper" aria-hidden="true" />
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
                    <Clock className="h-5 w-5 text-copper" aria-hidden="true" />
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
