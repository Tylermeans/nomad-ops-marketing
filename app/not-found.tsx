import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
        <p className="text-copper text-sm font-medium tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
          Page not found.
        </h1>
        <p className="mt-6 text-lg text-stone max-w-lg mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-warm-white hover:bg-copper-dark transition-colors"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-stone/30 px-7 py-3.5 text-sm font-medium text-charcoal hover:bg-cream transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
