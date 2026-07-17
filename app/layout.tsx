import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ThemeProvider from "@/components/theme-provider"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cortland Partners NG – Law Firm in Lagos | Corporate & Property Lawyers",
  description:
    "Cortland Partners NG is a professional law firm in Lagos, Nigeria offering corporate law, real estate legal services, and business advisory.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "law firm Lagos",
    "corporate law Nigeria",
    "real estate lawyers Lagos",
    "business law Nigeria",
    "legal services Lagos",
  ],
  openGraph: {
    title: "Cortland Partners NG – Law Firm in Lagos | Corporate & Property Lawyers",
    description:
      "Cortland Partners NG is a professional law firm in Lagos, Nigeria offering corporate law, real estate legal services, and business advisory.",
    type: "website",
    url: "https://www.cortlandpartnersng.com",
  },
  alternates: {
    canonical: "https://www.cortlandpartnersng.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${geistSans.className} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
