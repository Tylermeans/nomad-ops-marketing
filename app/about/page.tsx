import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Code, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Nomad Ops is a remote web design agency. We build results-driven websites for small businesses from wherever the road takes us.",
}

export default function AboutPage() {
  return (
    <>
      {/* Header with image placeholder */}
      <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-copper text-sm font-medium tracking-widest uppercase mb-4">
                About
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight leading-[1.1]">
                Built from the road.
                <br />
                Delivered with precision.
              </h1>
              <p className="mt-6 text-lg text-stone leading-relaxed">
                Nomad Ops is a remote web design agency built on one principle:{" "}
                <strong className="text-charcoal">
                  your website should bring you customers.
                </strong>{" "}
                Not just look nice. Not just exist. Actually work.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/van-remote-work.jpg"
                alt="Remote workspace with laptop and coffee — working from the road"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
              The problem we kept seeing.
            </h2>
            <div className="space-y-5 text-stone leading-relaxed text-lg">
              <p>
                Small businesses were paying thousands for websites that looked
                fine but didn&apos;t actually do anything. No traffic from
                Google. No leads from visitors. Just a digital brochure
                collecting dust.
              </p>
              <p>
                The agencies building these sites didn&apos;t care about results
                because they were already paid. The business owners didn&apos;t
                know what &ldquo;good&rdquo; looked like because no one showed
                them the data.
              </p>
              <p>
                We started Nomad Ops to do it differently. We analyze your
                website with the same tools Google uses. We show you exactly
                what&apos;s broken and what it&apos;s costing you. Then we fix
                it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="text-copper text-sm font-medium tracking-widest uppercase mb-3">
                How we work
              </p>
              <h2 className="text-3xl font-bold text-charcoal mb-8">
                Different by design.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream shrink-0">
                    <Code className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Data-driven decisions
                    </h3>
                    <p className="text-sm text-stone mt-1 leading-relaxed">
                      Every design decision is backed by performance data, SEO
                      analysis, and conversion best practices. We don&apos;t
                      guess — we measure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream shrink-0">
                    <MapPin className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Remote-first, globally available
                    </h3>
                    <p className="text-sm text-stone mt-1 leading-relaxed">
                      We work remotely with clients everywhere. Video calls when
                      you need them, fast async communication when you
                      don&apos;t. No overhead. No waiting.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream shrink-0">
                    <Heart className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Small business focus
                    </h3>
                    <p className="text-sm text-stone mt-1 leading-relaxed">
                      We work exclusively with small businesses and local service
                      providers. We understand your constraints, your goals, and
                      what moves the needle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/camper-sunset.jpg"
                alt="Camper van at sunset — the nomadic lifestyle meets professional craft"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32 bg-charcoal text-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-copper-light text-sm font-medium tracking-widest uppercase mb-3">
              What we believe
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Principles, not platitudes.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[
              {
                title: "Results over aesthetics",
                text: "A beautiful site that doesn't rank or convert is a failure. Performance first, then make it look great.",
              },
              {
                title: "Radical transparency",
                text: "You see the data. You own the code. You understand what we're doing and why. No black boxes.",
              },
              {
                title: "Honest recommendations",
                text: "If a $500 fix solves your problem, we won't sell you a $5,000 rebuild. We'd rather earn your trust.",
              },
              {
                title: "Speed is a feature",
                text: "Fast sites rank higher, convert better, make users happier. We obsess over performance.",
              },
              {
                title: "You own everything",
                text: "Your code, your domain, your hosting, your content. Leave anytime with everything. No hostages.",
              },
              {
                title: "Long-term thinking",
                text: "We succeed when you succeed. That's why we focus on ongoing optimization, not just one-time builds.",
              },
            ].map((value) => (
              <div key={value.title}>
                <h3 className="font-semibold text-warm-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-warm-white/60 leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal">
            Let&apos;s talk about your website.
          </h2>
          <p className="mt-4 text-lg text-stone max-w-xl mx-auto">
            Whether you need a new site or want to improve your current one,
            we&apos;d love to hear about your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-warm-white hover:bg-copper-dark transition-colors mt-8"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
