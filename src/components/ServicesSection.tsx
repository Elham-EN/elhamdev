import { Smartphone, Globe, Rocket, Server, Brain } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native-quality iOS & Android apps from a single codebase using React Native + Expo. Figma to working app, with App Store and Play Store deployment included.",
    features: [
      "Single codebase (React Native + Expo) for iOS & Android",
      "App Store & Play Store deployment",
      "Convert Figma UI/UX into a working app",
    ],
  },
  {
    icon: Globe,
    title: "Web App Development & Web Design",
    description:
      "From SaaS platforms and internal tools to e-commerce stores and high-converting landing pages — fully custom, responsive, and SEO-ready.",
    features: [
      "SaaS apps, internal business tools & web applications",
      "E-commerce & online stores",
      "SEO-optimized landing pages that convert visitors into customers",
      "Custom web application development",
      "Animations & responsive design",
    ],
  },
  {
    icon: Rocket,
    title: "MVP to Production",
    description:
      "Turn vibe-coded MVPs (built with Lovable, Bolt, v0, etc.) into production-grade applications powered by Next.js + Supabase — secure, scalable, and ready to ship.",
    features: [
      "Refactor Lovable / Bolt / v0 MVPs",
      "Production stack: Next.js + Supabase",
      "Auth, RLS, performance & scalability hardening",
    ],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Robust backends, REST & GraphQL APIs, third-party integrations, and database architecture designed to scale with your product.",
    features: [
      "REST & GraphQL APIs",
      "Database design & integrations",
      "Authentication, payments & webhooks",
    ],
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Bring intelligence into your product with LangChain, Gemini, and OpenAI — chatbots, RAG systems, AI agents, and custom AI-powered workflows.",
    features: [
      "LangChain pipelines & AI agents",
      "Gemini & OpenAI integrations",
      "RAG, embeddings & vector databases",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/20">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground font-serif uppercase tracking-tight">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            End-to-end product development — from{" "}
            <span className="font-semibold text-foreground">mobile apps</span> and{" "}
            <span className="font-semibold text-foreground">web platforms</span> to{" "}
            <span className="font-semibold text-foreground">AI-powered systems</span>.
            We design, build, and ship production-grade software that helps your
            business grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-8 border border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-card-foreground uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
