import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nomad Ops collects, uses, and protects your information. Updated February 2026.",
  alternates: {
    canonical: "https://nomad-ops.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Nomad Ops",
    description:
      "How Nomad Ops collects, uses, and protects your information.",
    url: "https://nomad-ops.com/privacy",
    siteName: "Nomad Ops",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <p className="text-copper text-sm font-medium tracking-widest uppercase mb-4">
          Legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-stone">Last updated: February 2026</p>

        <div className="mt-12 space-y-10 text-stone leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Information We Collect
            </h2>
            <p>
              When you use our contact form, we collect the information you
              provide: your name, email address, website URL, and message. We
              do not collect information automatically beyond what is described
              in the Cookies &amp; Analytics section below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              How We Use It
            </h2>
            <p>
              We use the information you submit to respond to your inquiry,
              provide website audits you&apos;ve requested, and communicate
              about potential projects. We do not sell, rent, or share your
              personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Email Processing
            </h2>
            <p>
              Contact form submissions are delivered via{" "}
              <strong className="text-charcoal">Resend</strong>, a third-party
              email delivery service. Resend processes your data solely to
              deliver the message to us. You can review their privacy practices
              at resend.com/legal/privacy-policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Cookies &amp; Analytics
            </h2>
            <p>
              We use Google Tag Manager (GTM) and may use Google Analytics to
              understand how visitors interact with our site. These tools may
              place cookies on your device to collect anonymized usage data such
              as pages visited, time on site, and referral source. We may also
              use cookies for A/B testing to improve site performance. You can
              disable cookies in your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Data Retention
            </h2>
            <p>
              We do not store form submissions in a database. Your contact
              information lives only in the email delivered to us and any
              replies we send. We retain this correspondence as long as it is
              relevant to an ongoing or potential business relationship.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Third-Party Services
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-charcoal">Resend</strong> — email
                delivery for contact form submissions
              </li>
              <li>
                <strong className="text-charcoal">
                  Google Analytics / Google Tag Manager
                </strong>{" "}
                — anonymized site usage analytics
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or
              deletion of any personal data we hold about you. To exercise
              these rights, contact us at the email below and we will respond
              promptly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy, email us at{" "}
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
