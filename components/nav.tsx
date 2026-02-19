"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone/10 bg-warm-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Nomad Ops"
              width={120}
              height={62}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors ${
                    active
                      ? "text-charcoal font-medium"
                      : "text-stone hover:text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + mobile */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-warm-white hover:bg-charcoal-light transition-colors"
            >
              Free Audit
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="h-5 w-5 text-charcoal" />
              ) : (
                <Menu className="h-5 w-5 text-charcoal" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden pb-6 pt-2 space-y-1">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 text-sm tracking-wide ${
                    active
                      ? "text-charcoal font-medium"
                      : "text-stone"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
