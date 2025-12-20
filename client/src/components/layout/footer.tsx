import { Link } from "wouter";
import { Droplets, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/enquiry", label: "Get Quote" },
];

const productLinks = [
  { href: "/products#submersible", label: "Submersible Pumps" },
  { href: "/products#monoblock", label: "Monoblock Pumps" },
  { href: "/products#borewell", label: "Borewell Pumps" },
  { href: "/products#agriculture", label: "Agriculture Pumps" },
  { href: "/products#industrial", label: "Industrial Pumps" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="space-y-4">
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer" data-testid="link-footer-logo">
                  <Droplets className="h-8 w-8 text-accent" />
                  <span className="text-xl font-bold tracking-tight">
                    Bajrang <span className="text-accent">Pumps</span>
                  </span>
                </div>
              </Link>
              <p className="text-background/70 text-sm leading-relaxed">
                Trusted manufacturer of premium quality submersible and industrial pumps. 
                Delivering reliable water solutions since 1995.
              </p>
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-md bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span 
                        className="text-background/70 hover:text-accent transition-colors cursor-pointer text-sm"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Our Products</h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span 
                        className="text-background/70 hover:text-accent transition-colors cursor-pointer text-sm"
                        data-testid={`link-footer-product-${link.label.toLowerCase().split(" ")[0]}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-background/70 text-sm">
                    A/P Kadakozer,<br />
                    Tal. Chandwad,<br />
                    Dist. Nashik,<br />
                    Maharashtra 423117, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <a 
                    href="tel:+918263015851" 
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                    data-testid="link-footer-phone"
                  >
                    +91 82630 15851
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <a 
                    href="mailto:thoratenterprises27@gmail.com" 
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                    data-testid="link-footer-email"
                  >
                    thoratenterprises27@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-background/70 text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Bajrang Pumps. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-background/60 hover:text-accent transition-colors text-sm"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-accent transition-colors text-sm"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
