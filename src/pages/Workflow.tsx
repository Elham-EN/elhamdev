import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Lightbulb,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    duration: "1–3 days",
    icon: MessageSquare,
    description:
      "We start with a deep-dive call to understand your vision, goals, target audience, and constraints. No assumptions — just questions that uncover what truly matters.",
    deliverables: [
      "Project brief & goals",
      "Target audience analysis",
      "Tech feasibility check",
      "Transparent quote & timeline",
    ],
  },
  {
    number: "02",
    title: "Strategy & Planning",
    duration: "3–5 days",
    icon: Lightbulb,
    description:
      "We translate your idea into a clear roadmap — defining scope, milestones, the tech stack, and the MVP feature set so every decision is intentional.",
    deliverables: [
      "Product roadmap",
      "Feature prioritization",
      "Tech stack selection",
      "Sprint plan",
    ],
  },
  {
    number: "03",
    title: "Design & Prototyping",
    duration: "1–2 weeks",
    icon: PenTool,
    description:
      "Our designers craft pixel-perfect, on-brand interfaces with interactive prototypes — so you can feel the product before a single line of code is shipped.",
    deliverables: [
      "Wireframes & user flows",
      "High-fidelity UI design",
      "Interactive prototype",
      "Design system",
    ],
  },
  {
    number: "04",
    title: "Development",
    duration: "2–8 weeks",
    icon: Code2,
    description:
      "We build in focused sprints with weekly demos. You see real progress, give feedback early, and watch your product come to life — no surprises at the end.",
    deliverables: [
      "Weekly sprint demos",
      "Clean, scalable codebase",
      "Live staging environment",
      "Continuous progress updates",
    ],
  },
  {
    number: "05",
    title: "Testing & QA",
    duration: "3–7 days",
    icon: TestTube2,
    description:
      "Every feature is rigorously tested across devices, browsers, and edge cases. We hunt down bugs before your users ever meet them.",
    deliverables: [
      "Cross-device testing",
      "Performance optimization",
      "Security audit",
      "User acceptance testing",
    ],
  },
  {
    number: "06",
    title: "Launch & Deployment",
    duration: "1–3 days",
    icon: Rocket,
    description:
      "We handle the entire launch — domain setup, hosting, analytics, monitoring — and make sure your product goes live smoothly and securely.",
    deliverables: [
      "Production deployment",
      "Domain & SSL setup",
      "Analytics integration",
      "Launch checklist complete",
    ],
  },
  {
    number: "07",
    title: "Support & Iteration",
    duration: "Ongoing",
    icon: LifeBuoy,
    description:
      "Launch is just the beginning. We monitor, maintain, and iterate based on real user data — helping your product grow alongside your business.",
    deliverables: [
      "24/7 monitoring",
      "Bug fixes & updates",
      "Feature enhancements",
      "Growth analytics",
    ],
  },
];

const principles = [
  {
    icon: Users,
    title: "You're in the loop",
    description: "Weekly demos and a shared dashboard keep you informed at every step.",
  },
  {
    icon: Clock,
    title: "Predictable timelines",
    description: "Clear milestones and honest estimates — we deliver when we say we will.",
  },
  {
    icon: Sparkles,
    title: "Quality without compromise",
    description: "Clean code, polished design, and a product that's built to scale.",
  },
];

const Workflow = () => {
  useEffect(() => {
    document.title = "Our Workflow | CodeHelm";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Discover CodeHelm's proven 7-step workflow — from discovery to launch and beyond. Transparent, collaborative, and built for results.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* Hero */}
        <section className="container px-4 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">How we work</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Our <span className="text-primary">Workflow</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A transparent, battle-tested process that turns ambitious ideas into shipped products.
              No surprises — just steady, visible progress from kickoff to launch.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="container px-4 pb-16 md:pb-24">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Steps timeline */}
        <section className="container px-4 pb-20 md:pb-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                The 7-Step Journey
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From first conversation to long-term partnership — here's exactly what to expect.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line - desktop */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

              <div className="space-y-12 md:space-y-20">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const isLeft = i % 2 === 0;
                  return (
                    <div
                      key={step.number}
                      className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                        isLeft ? "" : "md:[&>*:first-child]:order-2"
                      }`}
                    >
                      {/* Content card */}
                      <div className={isLeft ? "md:text-right" : "md:text-left"}>
                        <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xl transition-all group">
                          <div
                            className={`flex items-center gap-3 mb-4 ${
                              isLeft ? "md:justify-end" : "md:justify-start"
                            }`}
                          >
                            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary font-bold">
                              STEP {step.number}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                              <Clock className="w-3 h-3" />
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-5">
                            {step.description}
                          </p>
                          <ul
                            className={`space-y-2 ${
                              isLeft ? "md:items-end" : "md:items-start"
                            } flex flex-col`}
                          >
                            {step.deliverables.map((d) => (
                              <li
                                key={d}
                                className={`flex items-center gap-2 text-sm text-foreground ${
                                  isLeft ? "md:flex-row-reverse" : ""
                                }`}
                              >
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Center icon node */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                        <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>

                      {/* Mobile icon */}
                      <div className="md:hidden flex justify-center mt-6">
                        <div className="w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Empty spacer for alternating layout */}
                      <div className="hidden md:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container px-4 pb-24">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/30 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                Ready to start your project?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's hop on a quick call and map out the perfect path for your idea.
              </p>
              <Button asChild size="lg" className="rounded-none px-8 font-bold">
                <a href="/#contact" className="inline-flex items-center gap-2">
                  GET IN TOUCH
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Workflow;
