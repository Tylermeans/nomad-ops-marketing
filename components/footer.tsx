import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-stone/10 bg-charcoal text-warm-white/70">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-5">
              <Image
                src="/logo-light.svg"
                alt="Nomad Ops"
                width={120}
                height={62}
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              A remote web design agency for small businesses. Built from the
              road, delivered with precision. Your website should work as hard as
              you do.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-medium text-warm-white mb-4 tracking-wide uppercase text-[11px]">
              Navigate
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-warm-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-medium text-warm-white mb-4 tracking-wide uppercase text-[11px]">
              Get in Touch
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@nomad-ops.com"
                  className="hover:text-warm-white transition-colors"
                >
                  hello@nomad-ops.com
                </a>
              </li>
              <li>Remote — available worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-warm-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-white/40">
          <p>
            &copy; {new Date().getFullYear()} Nomad Ops. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-warm-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-warm-white transition-colors">
              Terms
            </Link>
          </div>
          <p className="italic">Built from the road.</p>
        </div>
      </div>
    </footer>
  )
}
