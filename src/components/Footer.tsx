import { Heart, Home, Folder, BookOpen, Mail, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { label: "Home", href: "#", icon: Home },
    { label: "Projects", href: "#portfolio", icon: Folder },
    { label: "Services", href: "#services", icon: BookOpen },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <footer className="py-16 border-t border-border bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Socials */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wide text-sm">
              Socials
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wide text-sm">
              Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Latest Projects */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wide text-sm">
              Latest Projects
            </h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                E-Commerce Platform
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                SaaS Dashboard
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Fitness Tracking App
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Healthcare Portal
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-1 text-primary hover:underline mt-2">
                All Projects →
              </a>
            </div>
          </div>

          {/* Misc */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wide text-sm">
              Misc
            </h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">E</span>
            </div>
            <span className="font-bold text-foreground">Elham Dev</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Elham Dev. Made with
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
