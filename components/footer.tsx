import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Logo from "@/public/logo.jpg"


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-8 w-8">
                <Image
                  src={Logo}
                  alt="SKM Public School Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold">SKM Public School</span>
            </div>
            <p className="text-gray-300 mb-4">
              "Humanity First" - A technology-driven institution in Banka, Bihar, nurturing young minds into confident,
              compassionate, and capable future leaders since 1985.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-blue-400 cursor-pointer hover:text-blue-300" />
              <Twitter className="h-5 w-5 text-blue-400 cursor-pointer hover:text-blue-300" />
              <Instagram className="h-5 w-5 text-pink-400 cursor-pointer hover:text-pink-300" />
              <Youtube className="h-5 w-5 text-red-400 cursor-pointer hover:text-red-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="/academics" className="text-gray-300 hover:text-white">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/fees" className="text-gray-300 hover:text-white">
                  Fees Structure
                </Link>
              </li> */}
              <li>
                <Link href="/docs" className="text-gray-300 hover:text-white">
                  Documents
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Academics</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Primary School</span>
              </li>
              <li>
                <span className="text-gray-300">Middle School</span>
              </li>
              <li>
                <span className="text-gray-300">High School</span>
              </li>
              <li>
                <span className="text-gray-300">Senior Secondary</span>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300 text-sm">Dadhi Pakaria, Shambhuganj, Banka district, Bihar-813211</span>
              </div>
              <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Admission/General Inquiry : +91 6205781139</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Principal Office : +91 9031626286</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Director Office : +91 9955932207</span>
                </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">principal.skmps@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} SKM Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
