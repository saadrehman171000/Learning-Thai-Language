import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Image
                  src="/images/thaiwithsarah-logo.png"
                  alt="Thai with Sarah"
                  width={140}
                  height={50}
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
            <p className="text-slate-300 max-w-xs leading-relaxed">
              Learn Thai with clear, friendly, and practical lessons. Master tones, script, and everyday conversation.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-sm">Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-red-400 animate-pulse" />
              <span className="text-sm">in Thailand</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Pricing", href: "/pricing" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning */}
          <div>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Learning
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Get Started", href: "/auth/signup" },
                { name: "Sign In", href: "/auth/signin" },
                { name: "Free Demo", href: "/auth/signup" },
                { name: "Study Plans", href: "/pricing" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Connect
            </h3>
            <div className="flex space-x-4 mb-6">
              {[
                { 
                  icon: Instagram, 
                  href: "https://instagram.com/thaiwithsarah", 
                  label: "Instagram",
                  gradient: "from-pink-500 to-purple-500"
                },
                { 
                  icon: Youtube, 
                  href: "https://youtube.com/@thaiwithsarah", 
                  label: "YouTube",
                  gradient: "from-red-500 to-pink-500"
                },
                { 
                  icon: Mail, 
                  href: "mailto:hello@thaiwithsarah.com", 
                  label: "Email",
                  gradient: "from-blue-500 to-cyan-500"
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-slate-400 text-sm">Questions? We're here to help!</p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 Thai with Sarah. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            {[
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
            ].map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
