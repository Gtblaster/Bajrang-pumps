import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      )}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              data-testid="link-logo"
            >
              <div className="relative">
                <Droplets className={cn(
                  "h-8 w-8 transition-colors",
                  isScrolled || location !== "/" ? "text-primary" : "text-white"
                )} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-subtle" />
              </div>
              <span className={cn(
                "text-xl lg:text-2xl font-bold tracking-tight transition-colors",
                isScrolled || location !== "/" ? "text-foreground" : "text-white"
              )}>
                Bajrang <span className="text-accent">Pumps</span>
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors cursor-pointer relative py-2",
                    location === link.href
                      ? "text-accent"
                      : isScrolled || location !== "/"
                      ? "text-foreground hover:text-primary"
                      : "text-white/90 hover:text-white",
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100",
                    location === link.href && "after:scale-x-100"
                  )}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/enquiry">
              <Button 
                className="bg-accent text-white border-accent-border"
                data-testid="button-get-quote"
              >
                Get Quote
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden",
              isScrolled || location !== "/" ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-lg transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {navLinks.map((link, index) => (
            <Link key={link.href} href={link.href}>
              <span
                className={cn(
                  "text-2xl font-semibold transition-all cursor-pointer",
                  location === link.href ? "text-accent" : "text-foreground hover:text-primary"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/enquiry">
            <Button 
              size="lg" 
              className="mt-4 bg-accent text-white border-accent-border"
              data-testid="button-mobile-get-quote"
            >
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
