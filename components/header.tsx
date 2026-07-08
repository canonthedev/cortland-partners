"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg'
        : 'bg-background border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className={`relative transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
            <img src="/logo.png" alt="Cortland Partners" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className={`font-bold tracking-tight hidden sm:block transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl'} text-foreground`}>Cortland</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </nav>

        {/* Dark Mode Toggle and CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 text-foreground hover:text-primary"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* CTA Button */}
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-primary text-black text-sm font-bold rounded hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Help
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 text-foreground hover:text-primary">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border my-2"></div>
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
                setIsOpen(false)
              }}
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 w-full text-left"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Help
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
