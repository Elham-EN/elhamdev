import { Mail, Phone, MapPin, Clock, Linkedin, Github, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 400"
          className="absolute bottom-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C200,50 400,150 720,100 C1040,50 1240,150 1440,100 L1440,400 L0,400 Z"
            className="fill-primary"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-serif">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? The best way to reach me is directly by email or phone. I typically respond within 24 hours.
          </p>

          {/* Main Contact Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:elham@codehelm.com.au"
              className="group bg-card rounded-xl p-8 border border-border shadow-lg hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Email</h3>
              <p className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                elham@codehelm.com.au
              </p>
            </a>

            <a
              href="tel:0470257110"
              className="group bg-card rounded-xl p-8 border border-border shadow-lg hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Mobile</h3>
              <p className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                0470 257 110
              </p>
            </a>
          </div>

          {/* Secondary Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span>Available Worldwide (Remote)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <span>Response within 24 hours</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
