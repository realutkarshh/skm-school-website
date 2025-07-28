"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "@/public/logo.jpg"

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/docs", label: "Docs" },
  { href: "/fees", label: "Fees Structure" },
  { href: "/academics", label: "Academics" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10">
            <Image
              src={Logo}
              alt="SKM Public School Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-blue-600">SKM Public School</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700">Admission Enquiry</Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium transition-colors hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 mt-4">Admission Enquiry</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
