import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Info, GitBranch, Workflow } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const aboutDropdown = [
  {
    label: "About Codehelm",
    href: "/about",
    description: "Who we are and what drives us",
    icon: Info,
  },
  {
    label: "Our Development Process",
    href: "/about/process",
    description: "How we build great products",
    icon: GitBranch,
  },
  {
    label: "Our Workflow",
    href: "/about/workflow",
    description: "From idea to launch, step by step",
    icon: Workflow,
  },
];

const navLinks = [
  { label: "About", href: "/about", dropdown: aboutDropdown },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Technologies", href: "/technologies" },
  { label: "Blogs", href: "/blogs" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="container px-4">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="bg-primary text-primary-foreground font-logo font-bold text-xl px-4 py-1.5 rounded-lg">
              Codehelm
            </span>
          </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.href ||
                (link.dropdown && link.dropdown.some((i) => location.pathname === i.href));

              if (link.dropdown) {
                return (
                  <div key={link.href} className="relative group/dropdown py-6 -my-6">
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors relative ${
                        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/dropdown:rotate-180" />
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                          isActive ? "w-[calc(100%-1rem)]" : "w-0 group-hover/dropdown:w-[calc(100%-1rem)]"
                        }`}
                      />
                    </button>

                    {/* Dropdown menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-200">
                      <div className="w-80 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-2 relative">
                        {/* Arrow */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-background border-l border-t border-border rotate-45" />
                        {link.dropdown.map((item) => {
                          const Icon = item.icon;
                          const itemActive = location.pathname === item.href;
                          return (
                            <a
                              key={item.href}
                              href={item.href}
                              className={`flex items-start gap-3 p-3 rounded-xl transition-all relative z-10 group/item ${
                                itemActive ? "bg-primary/10" : "hover:bg-muted"
                              }`}
                            >
                              <div
                                className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                                  itemActive
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground group-hover/item:bg-primary group-hover/item:text-primary-foreground"
                                }`}
                              >
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-foreground">
                                  {item.label}
                                </div>
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {item.description}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild className="rounded-none px-6 font-bold">
              <a href="#contact">CONTACT</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.href ||
                  (link.dropdown && link.dropdown.some((i) => location.pathname === i.href));

                if (link.dropdown) {
                  return (
                    <div key={link.href} className="flex flex-col gap-1">
                      <div
                        className={`text-sm font-semibold py-2 border-l-2 pl-3 ${
                          isActive
                            ? "text-foreground border-primary"
                            : "text-muted-foreground border-transparent"
                        }`}
                      >
                        {link.label}
                      </div>
                      <div className="flex flex-col gap-1 pl-6">
                        {link.dropdown.map((item) => {
                          const itemActive = location.pathname === item.href;
                          return (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`text-sm py-1.5 transition-colors ${
                                itemActive
                                  ? "text-primary font-medium"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {item.label}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors py-2 border-l-2 pl-3 ${
                      isActive
                        ? "text-foreground border-primary"
                        : "text-muted-foreground hover:text-foreground border-transparent"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="flex items-center gap-3 pt-2">
                <ThemeToggle />
                <span className="text-sm text-muted-foreground">Toggle theme</span>
              </div>
              <Button asChild className="w-full mt-2 rounded-none font-bold">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  CONTACT
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
