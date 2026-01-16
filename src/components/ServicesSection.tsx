import { Code2, Smartphone, Database, Zap, Palette, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with React, Next.js, and cutting-edge technologies.",
    features: ["React & Next.js", "TypeScript", "Tailwind CSS", "REST & GraphQL APIs"],
    accent: "primary" as const,
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps that deliver native performance with React Native and Flutter.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Publishing"],
    accent: "accent" as const,
  },
  {
    icon: Database,
    title: "Backend Solutions",
    description: "Scalable server architectures and database solutions that power your applications.",
    features: ["Node.js", "PostgreSQL", "Firebase", "Cloud Deployment"],
    accent: "primary" as const,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience as the priority.",
    features: ["Figma Prototypes", "Design Systems", "User Research", "Accessibility"],
    accent: "accent" as const,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing applications with expert performance tuning and optimization.",
    features: ["Load Time Analysis", "Code Splitting", "Caching Strategies", "SEO"],
    accent: "primary" as const,
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and security patches to keep your applications running smoothly.",
    features: ["24/7 Monitoring", "Security Updates", "Bug Fixes", "Feature Updates"],
    accent: "accent" as const,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, I provide end-to-end development services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  service.accent === "primary" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-accent/10 text-accent"
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        service.accent === "primary" ? "bg-primary" : "bg-accent"
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/* Hover gradient border effect */}
              <div className={`absolute inset-x-0 bottom-0 h-1 transition-opacity opacity-0 group-hover:opacity-100 ${
                service.accent === "primary" 
                  ? "bg-gradient-to-r from-primary to-primary/50" 
                  : "bg-gradient-to-r from-accent to-accent/50"
              }`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
