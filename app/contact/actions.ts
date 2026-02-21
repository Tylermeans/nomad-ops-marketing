"use server"

import { Resend } from "resend"

export type FormState = {
  success: boolean
  fieldErrors: Record<string, string>
  error: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  // Honeypot — bots fill this, real users never see it
  if (formData.get("company")) {
    return { success: true, fieldErrors: {}, error: "" }
  }

  const name = formData.get("name")?.toString().trim() ?? ""
  const email = formData.get("email")?.toString().trim() ?? ""
  const website = formData.get("website")?.toString().trim() ?? ""
  const message = formData.get("message")?.toString().trim() ?? ""

  // Validate required fields
  const fieldErrors: Record<string, string> = {}
  if (!name) fieldErrors.name = "Name is required."
  if (!email) fieldErrors.email = "Email is required."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    fieldErrors.email = "Enter a valid email address."
  if (!message) fieldErrors.message = "Message is required."

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors, error: "" }
  }

  try {
    await resend.emails.send({
      from: "Nomad Ops <notifications@nomad-ops.com>",
      to: "hello@nomad-ops.com",
      replyTo: email,
      subject: `New contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        website ? `Website: ${website}` : null,
        "",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    })
  } catch {
    return {
      success: false,
      fieldErrors: {},
      error: "Something went wrong. Please email us directly at hello@nomad-ops.com.",
    }
  }

  return { success: true, fieldErrors: {}, error: "" }
}
