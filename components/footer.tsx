import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light tracking-wide mb-4">Cortland Partners</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading law firm providing exceptional legal services across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/team", label: "Team" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>75 Iwaya Road, Onike, Yaba, Lagos State</span>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <Phone size={16} />
                <div className="space-y-1">
                  <a href="tel:+2348147940885" className="hover:text-foreground transition-colors block">
                    +234 814 794 0885
                  </a>
                  <a href="tel:+2348165387065" className="hover:text-foreground transition-colors block">
                    +234 816 538 7065
                  </a>
                </div>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@cortlandpartnersng.com" className="hover:text-foreground transition-colors">
                  info@cortlandpartnersng.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-4">Business Hours</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Monday - Friday: 9 AM - 5 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">© 2025 Cortland Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
