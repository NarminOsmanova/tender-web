"use client"

import Link from "next/link"
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react"

const navigation = [
  { name: "Haqqımızda", href: "/about" },
  { name: "Bizimlə əlaqə", href: "/contact" },
  { name: "Tez-tez verilən suallar", href: "/faq" },
  { name: "Müştəri rəyləri", href: "/testimonials" },
]

const socials = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-white w-full">
      <div className="container py-10 md:py-16 w-full px-4">
        <div className="flex flex-col gap-8 lg:gap-12">
          {/* Top section */}
          <div className="w-full max-w-[880px] mx-auto flex flex-col justify-between items-start md:items-center gap-8">
            <div className="space-y-8">
              {/* Logo and Navigation */}
              <div className="space-y-6 flex flex-col items-start md:items-center ">
                <Link href="/" className="text-2xl font-semibold">
                  Tender
                </Link>
                <nav className="flex gap-4 flex-col md:flex-row">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social Media */}
              <div className="flex gap-4 items-center justify-center">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 text-white hover:bg-zinc-700 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
           
          </div>

          {/* Bottom section - Copyright */}
          <div className="flex flex-col-reverse md:flex-row gap-4 justify-between w-full pt-8 border-t border-zinc-200 items-start md:items-center">
            <p className="text-zinc-600 pt-4">
              © Copyright 2025. All rights reserved.
            </p>
            <div className="mt-0 flex flex-col md:flex-row items-start md:items-center justify-center gap-4">
              <Link 
                href="tel:+994002222222" 
                className="flex  items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +994 00 222 22 22
              </Link>
              <Link 
                href="mailto:info.tender.az" 
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                info.tender.az
              </Link>

              <div className="flex items-center gap-2 text-zinc-600">
                <MapPin className="w-5 h-5 flex-shrink-0" />

                <a 
                // Google Maps link (URL encode the address)
                href="https://www.google.com/maps/search/?api=1&query=B%C9%99%C5%9Fir+B%C3%BCnyadov+k%C3%BC%C3%A7.+134"
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="flex items-center gap-3 group"
              >
                <span className="text-zinc-600 group-hover:text-zinc-900 transition-colors">Bəşir Bünyadov küç. 134</span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
