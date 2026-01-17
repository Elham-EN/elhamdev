import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, Send, Linkedin, Github, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

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

      {/* Top Content */}
      <div className="container px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background rounded-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background rounded-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background resize-none rounded-none"
                  />
                </div>

                <Button type="submit" className="w-full gap-2 rounded-none uppercase tracking-wide" size="lg">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Right Column - Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-serif">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Do you have any questions or would you like to request a free quote for a website, 
                logo, or anything else? Feel free to contact me, and I'll be happy to assist you.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">hello@elhamdev.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Available Worldwide (Remote)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section on Primary Background */}
      <div className="relative z-10 bg-primary py-16">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-foreground font-serif uppercase">
            Contact
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Do you have any questions or would you like to request a free quote for a website, 
            logo, or anything else? Feel free to contact me, and I'll be happy to assist you.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-none border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary uppercase tracking-wide"
            asChild
          >
            <a href="mailto:hello@elhamdev.com">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
