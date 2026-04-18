import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Target,
  Heart,
  Rocket,
  Lightbulb,
  HandshakeIcon,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Code2,
  Globe,
  Zap,
  User,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Client-First Mindset",
    description:
      "Your success is mine. I listen deeply, communicate honestly, and treat every project as if it were my own.",
  },
  {
    icon: ShieldCheck,
    title: "Built on Trust",
    description:
      "Transparent pricing, honest timelines, and zero hidden surprises. I say what I'll do — and I do it.",
  },
  {
    icon: Lightbulb,
    title: "Always Learning",
    description:
      "Tech moves fast. I stay sharp on the latest tools, frameworks, and best practices so your product never falls behind.",
  },
  {
    icon: Zap,
    title: "Ship with Quality",
    description:
      "Speed matters — but never at the expense of stability, security, or polish. I move fast and build right.",
  },
  {
    icon: HandshakeIcon,
    title: "Long-Term Partnership",
    description:
      "Launch is just the beginning. I stick around to support, iterate, and grow alongside your business.",
  },
  {
    icon: Sparkles,
    title: "Crafted with Care",
    description:
      "Every pixel, every line of code, every interaction — designed and built with intention and attention to detail.",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About Codehelm | Web & Mobile Development Studio";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Meet Codehelm — a modern web and mobile development studio crafting fast, beautiful, and scalable digital products for ambitious teams worldwide.";
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
              <Compass className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Our story</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              About <span className="text-primary">Codehelm</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We're a small studio with a big mission — to help founders, startups, and brands turn
              bold ideas into shipped, scalable, beautifully crafted software.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="container px-4 pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="p-6 rounded-2xl border border-border bg-card text-center hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="font-heading text-3xl md:text-4xl font-black text-foreground">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Story */}
        <section className="container px-4 pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary font-bold">
                OUR STORY
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
                Built by makers,
                <br />
                <span className="text-primary">for makers.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Codehelm started with a simple frustration — too many great ideas were getting
                  lost in slow, overpriced, overcomplicated development cycles.
                </p>
                <p>
                  So we built the studio we always wished existed: lean, fast, modern, and obsessed
                  with quality. A team that treats your product like our own and ships work we're
                  genuinely proud of.
                </p>
                <p>
                  Today, we partner with founders, startups, and established brands across the
                  globe — turning ambitious ideas into web and mobile products that move people.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/30 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.2),transparent_70%)]" />
                <div className="relative grid grid-cols-2 gap-4 w-full max-w-xs">
                  <div className="aspect-square rounded-2xl bg-background border border-border flex items-center justify-center">
                    <Code2 className="w-10 h-10 text-primary" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-primary flex items-center justify-center">
                    <Rocket className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-primary flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-background border border-border flex items-center justify-center">
                    <Globe className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container px-4 pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To make world-class web and mobile development accessible — helping ambitious teams
                ship faster, scale smarter, and stand out in crowded markets.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where great ideas aren't held back by slow development — where every founder
                has a trusted partner to bring their vision to life with speed and craft.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container px-4 pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary font-bold">
                WHAT WE STAND FOR
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that shape every project, every conversation, every line of code.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
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
                Let's build something great together.
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Whether you have a fully scoped project or just a spark of an idea — we'd love to hear about it.
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

export default About;
