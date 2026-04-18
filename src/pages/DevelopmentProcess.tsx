import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Search,
  LayoutGrid,
  Database,
  Code2,
  GitBranch,
  ShieldCheck,
  Gauge,
  CloudUpload,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Zap,
  Lock,
} from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Requirements Engineering",
    icon: Search,
    description:
      "We translate fuzzy ideas into precise technical specifications — user stories, acceptance criteria, and edge cases mapped before any code is written.",
    points: [
      "User story mapping",
      "Acceptance criteria",
      "Edge case discovery",
      "Risk assessment",
    ],
  },
  {
    number: "02",
    title: "Architecture & System Design",
    icon: LayoutGrid,
    description:
      "We design scalable, maintainable architectures — choosing the right patterns, services, and boundaries so your product grows without rewrites.",
    points: [
      "System architecture diagrams",
      "API contracts (REST/GraphQL)",
      "Component hierarchy",
      "Scalability planning",
    ],
  },
  {
    number: "03",
    title: "Database & Schema Design",
    icon: Database,
    description:
      "Data is the foundation. We model schemas with normalization, indexing, and RLS policies in mind — built for performance and security from day one.",
    points: [
      "Entity relationship modeling",
      "Indexing strategy",
      "Row-level security policies",
      "Migration-first workflow",
    ],
  },
  {
    number: "04",
    title: "Implementation",
    icon: Code2,
    description:
      "We write clean, typed, well-structured code with reusable components, strong conventions, and small focused modules — code your future team will thank you for.",
    points: [
      "TypeScript everywhere",
      "Atomic component design",
      "Design system tokens",
      "Self-documenting code",
    ],
  },
  {
    number: "05",
    title: "Version Control & Code Review",
    icon: GitBranch,
    description:
      "Every change goes through Git branches, pull requests, and peer review — keeping history clean and quality consistently high.",
    points: [
      "Feature branch workflow",
      "Pull request reviews",
      "Conventional commits",
      "Protected main branch",
    ],
  },
  {
    number: "06",
    title: "Testing & Quality Assurance",
    icon: ShieldCheck,
    description:
      "Unit, integration, and end-to-end tests catch regressions early. Type safety and linting enforce quality automatically — not just at the end.",
    points: [
      "Unit & integration tests",
      "End-to-end testing",
      "Static type checking",
      "Automated linting",
    ],
  },
  {
    number: "07",
    title: "Performance Optimization",
    icon: Gauge,
    description:
      "We profile, measure, and optimize — bundle splitting, lazy loading, image optimization, and caching layers for sub-second load times.",
    points: [
      "Lighthouse audits",
      "Code splitting & lazy loading",
      "Image & asset optimization",
      "Caching strategies",
    ],
  },
  {
    number: "08",
    title: "CI/CD & Deployment",
    icon: CloudUpload,
    description:
      "Automated pipelines build, test, and deploy on every push. Preview environments per branch let you review changes before they ship to production.",
    points: [
      "Automated build & test",
      "Preview deployments",
      "Zero-downtime releases",
      "Rollback safety net",
    ],
  },
  {
    number: "09",
    title: "Monitoring & Iteration",
    icon: RefreshCw,
    description:
      "Post-launch, we monitor errors, performance, and user behavior — feeding insights back into the next sprint for continuous improvement.",
    points: [
      "Error tracking",
      "Performance monitoring",
      "User analytics",
      "Continuous iteration",
    ],
  },
];

const pillars = [
  {
    icon: Cpu,
    title: "Engineering Excellence",
    description: "Clean architecture, typed code, and patterns built to scale with your business.",
  },
  {
    icon: Zap,
    title: "Speed Without Shortcuts",
    description: "We move fast — but never at the cost of stability, security, or code quality.",
  },
  {
    icon: Lock,
    title: "Security by Default",
    description: "Auth, RLS, secret management, and input validation baked into every layer.",
  },
];

const DevelopmentProcess = () => {
  useEffect(() => {
    document.title = "Our Development Process | CodeHelm";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Inside CodeHelm's engineering process — from architecture and database design to CI/CD and monitoring. Built for scale, speed, and security.";
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
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Engineering at CodeHelm</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Our Development <span className="text-primary">Process</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              How we engineer software — from the first architecture diagram to the last
              production deploy. Disciplined, modern, and built to last.
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="container px-4 pb-16 md:pb-24">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((p) => {
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

        {/* Phases grid */}
        <section className="container px-4 pb-20 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                The 9 Engineering Phases
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A repeatable, battle-tested process that scales from MVPs to enterprise systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phases.map((phase) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={phase.number}
                    className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Number watermark */}
                    <span className="absolute top-4 right-5 font-heading font-black text-5xl text-primary/10 group-hover:text-primary/20 transition-colors">
                      {phase.number}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {phase.description}
                    </p>

                    <ul className="space-y-2 pt-4 border-t border-border">
                      {phase.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container px-4 pb-24">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/30 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                Have a project in mind?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's talk architecture, stack, and scope — and turn your idea into shipped software.
              </p>
              <Button asChild size="lg" className="rounded-none px-8 font-bold">
                <a href="/#contact" className="inline-flex items-center gap-2">
                  START A PROJECT
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

export default DevelopmentProcess;
