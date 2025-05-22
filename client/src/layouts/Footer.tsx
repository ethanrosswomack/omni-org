import { Link } from "wouter";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  Headphones,
  Podcast
} from "lucide-react";
import logoTriquetra from "@/assets/logo-triquetra.png";

const services = [
  { label: "Video Production", href: "#" },
  { label: "Livestream Production", href: "#" },
  { label: "Audio Production", href: "#" },
  { label: "Creative Direction", href: "#" },
  { label: "Immersive Media", href: "#" },
  { label: "Digital Marketing", href: "#" }
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Careers", href: "#" },
  { label: "News & Insights", href: "#" },
  { label: "Contact", href: "#contact" }
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" }
];

const socialLinks = [
  { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
  { icon: <Podcast className="h-5 w-5" />, href: "#", label: "Podcast" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="h-8 w-8 overflow-hidden">
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
            <p className="text-muted-foreground mb-4">
              Creating immersive media experiences that transport, transform, and inspire.
            </p>
            <p className="text-primary italic text-sm mb-6">
              "You fully in your Magic is the Medicine for this Earth."
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-6">Podcast</h3>
              <div className="flex items-center space-x-2 mb-3">
                <Headphones className="h-5 w-5 text-primary" />
                <a 
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Beneath The Surface
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Join us for deep conversations exploring consciousness, spirituality, and our interconnected existence.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Omniversal Media, LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
