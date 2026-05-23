"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { submitConsultation } from "@/app/actions/submit-consultation"
import { useToast } from "@/hooks/use-toast"

interface ConsultationFormProps {
  darkMode: boolean
}

export default function ConsultationForm({ darkMode }: ConsultationFormProps) {
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
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Bot protection: Check honeypot field
    if (formData.website) {
      console.log("[v0] Honeypot field filled - likely bot submission")
      toast({
        title: "Error",
        description: "Invalid form submission detected",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await submitConsultation(formData)

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
          {/* Honeypot field - hidden from users but catches bots */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
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
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Request Consultation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
