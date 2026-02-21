"use client"

import { useActionState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { submitContactForm, type FormState } from "@/app/contact/actions"

const initialState: FormState = { success: false, fieldErrors: {}, error: "" }

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, initialState)

  if (state.success) {
    return (
      <div role="status" className="rounded-2xl border border-stone/15 p-8 sm:p-10 bg-warm-white text-center">
        <CheckCircle className="h-12 w-12 text-copper mx-auto mb-4" aria-hidden="true" />
        <h2 className="text-xl font-semibold text-charcoal mb-2">
          Message sent.
        </h2>
        <p className="text-stone leading-relaxed">
          We&apos;ll get back to you within a few hours. Check your inbox.
        </p>
      </div>
    )
  }

  return (
    <form
      action={action}
      className="rounded-2xl border border-stone/15 p-8 sm:p-10 bg-warm-white"
    >
      <h2 className="text-xl font-semibold text-charcoal mb-8">
        Send us a message
      </h2>

      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {state.error && (
        <p role="alert" className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </p>
      )}

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
            aria-describedby={state.fieldErrors.name ? "name-error" : undefined}
            aria-invalid={state.fieldErrors.name ? true : undefined}
            className="w-full rounded-lg border border-stone/20 bg-cream/50 px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none transition-all"
            placeholder="Your name"
          />
          {state.fieldErrors.name && (
            <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">{state.fieldErrors.name}</p>
          )}
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
            aria-describedby={state.fieldErrors.email ? "email-error" : undefined}
            aria-invalid={state.fieldErrors.email ? true : undefined}
            className="w-full rounded-lg border border-stone/20 bg-cream/50 px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none transition-all"
            placeholder="you@company.com"
          />
          {state.fieldErrors.email && (
            <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{state.fieldErrors.email}</p>
          )}
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
            className="w-full rounded-lg border border-stone/20 bg-cream/50 px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none transition-all"
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
            aria-describedby={state.fieldErrors.message ? "message-error" : undefined}
            aria-invalid={state.fieldErrors.message ? true : undefined}
            className="w-full rounded-lg border border-stone/20 bg-cream/50 px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none transition-all resize-none"
            placeholder="Tell us about your business and what you're looking for..."
          />
          {state.fieldErrors.message && (
            <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">{state.fieldErrors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-warm-white hover:bg-copper-dark transition-colors disabled:opacity-50"
        >
          {pending ? "Sending…" : "Send Message"}
          {!pending && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </button>

        <p className="text-xs text-stone text-center">
          No spam. No mailing list. Just a direct reply from us.
        </p>
      </div>
    </form>
  )
}
