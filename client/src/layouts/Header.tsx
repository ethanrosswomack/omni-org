import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import logoTriquetra from "@/assets/logo-triquetra.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Podcast", href: "#podcast" },
  { label: "Store", href: "#store" },
  { label: "Contact", href: "#contact" }
];

const pageLinks = [
  { label: "Store", href: "/store" },
  { label: "About Us", href: "/about-us" },
  { label: "Dossier", href: "/dossier" },
  { label: "Network Map", href: "/network-map" },
  { label: "Contact Us", href: "/contact-us" }
];

const teamLinks = [
  { label: "Team Portal", href: "/backend/", external: true }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu when changing location
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling to section
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 overflow-hidden">
              <img 
                src={logoTriquetra} 
                alt="Omniversal Media Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              OMNIVERSAL MEDIA
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="nav-link relative text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            
            <div className="relative group">
              <button
                className="nav-link relative text-foreground hover:text-primary transition-colors flex items-center"
              >
                Pages
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-card border border-border hidden group-hover:block">
                <div className="py-1">
                  {pageLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <hr className="my-1 border-border" />
                  {teamLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-slate-400 hover:bg-primary/10 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <ThemeToggle />
          </nav>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute inset-x-0 top-16 p-4 bg-card border-b border-border transition-all duration-300 transform z-50",
        isMobileMenuOpen 
          ? "translate-y-0 opacity-100 pointer-events-auto" 
          : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-foreground hover:text-primary transition-colors px-2 py-1"
            >
              {link.label}
            </button>
          ))}
          
          <div className="pt-2 border-t border-border">
            <div className="font-medium px-2 py-1 text-sm text-muted-foreground mb-2">
              Pages
            </div>
            {pageLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-foreground hover:text-primary transition-colors px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
            {teamLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-primary transition-colors px-2 py-1 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
