import Link from "next/link"
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experiences", href: "/experiences" },
  { name: "Scholarly Activities", href: "/scholarly-activities" },
  { name: "Publications", href: "/publications" },
  { name: "Honors & Awards", href: "/awards" },
  { name: "Skills & Courses", href: "/skills" },
  { name: "Volunteering", href: "/volunteering" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Chittagong University, Hathazari- 4331, Chittagong, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>20401026@std.cu.ac.bd</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(+88) 1625 144740</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-primary-light transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-dark text-center text-sm">
          <p>© 2025 MD AMIR HOSSEN</p>
        </div>
      </div>
    </footer>
  )
}
