import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const navLinks = [{
  label: "Services",
  href: "#services"
}, {
  label: "Portfolio",
  href: "#portfolio"
}, {
  label: "Testimonials",
  href: "#testimonials"
}, {
  label: "Contact",
  href: "#contact"
}];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
      <div className="container px-4">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:block">​Elham Dev </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>)}
              <Button asChild className="w-full mt-2">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</a>
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;