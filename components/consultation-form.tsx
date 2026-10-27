"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { submitConsultation, getFormToken } from "@/app/actions/submit-consultation"
import { useToast } from "@/hooks/use-toast"

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string
      reset: (id?: string) => void
    }
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

interface ConsultationFormProps {
  darkMode?: boolean
}

export default function ConsultationForm({ darkMode = true }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    legalMatter: "",
    message: "",
    website: "", // Honeypot field - bots will fill this
  })
  const [isLoading, setIsLoading] = useState(false)
  const [formToken, setFormToken] = useState("")
  const [turnstileToken, setTurnstileToken] = useState("")
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | undefined>(undefined)
  const { toast } = useToast()

  const refreshToken = () => getFormToken().then(setFormToken).catch(() => {})

  useEffect(() => {
    refreshToken()
  }, [])

  const renderTurnstile = () => {
    if (!TURNSTILE_SITE_KEY || !window.turnstile || !turnstileRef.current || widgetId.current) return
    widgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: darkMode ? "dark" : "light",
      callback: (t: string) => setTurnstileToken(t),
      "expired-callback": () => setTurnstileToken(""),
    })
  }

  useEffect(() => {
    renderTurnstile()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      toast({
        title: "Almost there",
        description: "Please complete the security check.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await submitConsultation({ ...formData, formToken, turnstileToken })

      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          legalMatter: "",
          message: "",
          website: "",
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Something went wrong",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
      // Each token is single-use from the user's point of view
      setTurnstileToken("")
      if (widgetId.current) window.turnstile?.reset(widgetId.current)
      refreshToken()
    }
  }

  return (
    <Card
      className={`border-t-4 border-t-yellow-600 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <CardHeader>
        <CardTitle className={`transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Request Legal Consultation
        </CardTitle>
        <CardDescription className={`transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Fill out the form below and we&apos;ll get back to you within 24 hours to schedule your consultation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {TURNSTILE_SITE_KEY && (
            <Script
              src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
              strategy="afterInteractive"
              onLoad={renderTurnstile}
            />
          )}
          {/* Honeypot field - moved off-screen (not display:none, which bots detect) */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className={`text-sm font-medium mb-2 block transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                maxLength={50}
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className={`text-sm font-medium mb-2 block transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                maxLength={50}
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className={`text-sm font-medium mb-2 block transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className={`text-sm font-medium mb-2 block transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="+234 814 794 0885"
            />
          </div>
          <div>
            <label
              htmlFor="legalMatter"
              className={`text-sm font-medium mb-2 block transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Legal Matter
            </label>
            <select
              id="legalMatter"
              name="legalMatter"
              value={formData.legalMatter}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors duration-300 ${
                darkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
              }`}
              required
            >
              <option value="">Select a practice area</option>
              <option value="Litigation (Civil & Criminal)">Litigation (Civil & Criminal)</option>
              <option value="Corporate & Commercial Law">Corporate & Commercial Law</option>
              <option value="Financial Services Regulation">Financial Services Regulation</option>
              <option value="Estate Administration & Probate">Estate Administration & Probate</option>
              <option value="Legal Advisory Services">Legal Advisory Services</option>
              <option value="Property & Real Estate Law">Property & Real Estate Law</option>
              <option value="Arbitration & ADR">Arbitration & ADR</option>
              <option value="Intellectual Property Law">Intellectual Property Law</option>
              <option value="Family Law">Family Law</option>
              <option value="Employment Law">Employment Law</option>
              <option value="Insolvency & Debt Recovery">Insolvency & Debt Recovery</option>
              <option value="Maritime & Shipping Law">Maritime & Shipping Law</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className={`text-sm font-medium mb-2 block transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Describe Your Legal Matter
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="Please provide details about your legal matter..."
              minLength={20}
              maxLength={3000}
              required
            ></textarea>
          </div>
          {TURNSTILE_SITE_KEY && <div ref={turnstileRef} className="min-h-[65px]" />}
          <Button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
            disabled={isLoading || !formToken}
          >
            {isLoading ? "Submitting..." : "Request Consultation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
