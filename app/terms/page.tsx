import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Nomad Ops website and services. Updated February 2026.",
  alternates: {
    canonical: "https://nomad-ops.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Nomad Ops",
    description:
      "Terms and conditions for using the Nomad Ops website and services.",
    url: "https://nomad-ops.com/terms",
    siteName: "Nomad Ops",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <p className="text-copper text-sm font-medium tracking-widest uppercase mb-4">
          Legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-stone">Last updated: February 2026</p>

        <div className="mt-12 space-y-10 text-stone leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Agreement to Terms
            </h2>
            <p>
              By accessing or using the Nomad Ops website (nomad-ops.com), you
              agree to be bound by these terms and conditions. If you do not
              agree, please do not use the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Services
            </h2>
            <p>
              Nomad Ops provides web design, web development, SEO optimization,
              performance tuning, A/B testing, branding, website audits, and
              related digital services as described on our{" "}
              <a
                href="/services"
                className="text-copper hover:text-copper-dark transition-colors"
              >
                Services page
              </a>
              . Service availability, scope, and pricing may change at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Free Website Audit
            </h2>
            <p>
              The free website audit is a courtesy offering and does not
              constitute a binding agreement for further services.
              Recommendations provided in the audit are advisory and based on
              our professional assessment at the time. Results may vary based on
              implementation and other factors outside our control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Project Agreements
            </h2>
            <p>
              Formal projects (design, development, ongoing support) are
              governed by a separate contract or statement of work agreed upon
              by both parties before work begins. These terms do not replace
              project-specific agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Intellectual Property
            </h2>
            <p>
              Upon full payment, clients own all deliverables (code, designs,
              content) produced for their project. Nomad Ops retains the right
              to display completed work in our portfolio and marketing materials
              unless otherwise agreed in writing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Payment Terms
            </h2>
            <p>
              Payment schedules, methods, and amounts are defined in
              project-specific agreements. Standard terms typically include a
              deposit before work begins and milestone-based payments through
              project completion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Limitation of Liability
            </h2>
            <p>
              Nomad Ops provides services on an &ldquo;as is&rdquo; basis. To
              the maximum extent permitted by law, we shall not be liable for
              any indirect, incidental, special, or consequential damages
              arising from the use of our services or website, including but not
              limited to lost revenue, lost data, or business interruption.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the
              laws of the State of Ohio. Any disputes shall be resolved in
              the courts of the State of Ohio.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Contact
            </h2>
            <p>
              Questions about these terms? Email us at{" "}
              <a
                href="mailto:hello@nomad-ops.com"
                className="text-copper hover:text-copper-dark transition-colors"
              >
                hello@nomad-ops.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
