import { useState } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Category = "All" | "Development" | "Deployment" | "MVP Process" | "Distribution";

const categories: Category[] = ["All", "Development", "Deployment", "MVP Process", "Distribution"];

const blogs: {
  title: string;
  excerpt: string;
  category: Exclude<Category, "All">;
  date: string;
  readTime: string;
  illustration: "team" | "robot" | "person";
}[] = [
  {
    title: "Modern Web Development Stack: Building with React, Next.js, and TypeScript",
    excerpt:
      "A complete guide to choosing the right stack for scalable, maintainable, and performant web apps in 2025.",
    category: "Development",
    date: "Apr 12, 2026",
    readTime: "8 min read",
    illustration: "team",
  },
  {
    title: "Deploying Full-Stack Apps: From Local to Production in Minutes",
    excerpt:
      "Best practices for CI/CD, environment management, and zero-downtime deployments using modern cloud platforms.",
    category: "Deployment",
    date: "Apr 04, 2026",
    readTime: "6 min read",
    illustration: "robot",
  },
  {
    title: "MVP in 30 Days: How We Validate Ideas Fast Without Cutting Corners",
    excerpt:
      "Our proven framework for shipping a Minimum Viable Product that real users love — and that founders can iterate on.",
    category: "MVP Process",
    date: "Mar 28, 2026",
    readTime: "10 min read",
    illustration: "person",
  },
  {
    title: "Mobile App Distribution: App Store, Play Store, and Beyond",
    excerpt:
      "Everything you need to know about submitting, marketing, and growing your mobile app across platforms.",
    category: "Distribution",
    date: "Mar 18, 2026",
    readTime: "7 min read",
    illustration: "team",
  },
  {
    title: "Why TypeScript Is Non-Negotiable for Serious Product Teams",
    excerpt:
      "How types eliminate entire bug categories, speed up onboarding, and make refactoring fearless.",
    category: "Development",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    illustration: "person",
  },
  {
    title: "Edge Functions & Serverless: The New Default for Backend",
    excerpt:
      "When to use edge runtimes, how to architect for global low-latency, and pitfalls to avoid.",
    category: "Deployment",
    date: "Mar 02, 2026",
    readTime: "9 min read",
    illustration: "robot",
  },
  {
    title: "From Prototype to Paying Customers: Distribution Channels That Work",
    excerpt:
      "Practical channels indie founders and small teams use to get their first 100 customers without big budgets.",
    category: "Distribution",
    date: "Feb 22, 2026",
    readTime: "8 min read",
    illustration: "person",
  },
  {
    title: "User Interviews That Actually Change Your Roadmap",
    excerpt:
      "How to run lean discovery interviews during the MVP process and turn insights into shipped features.",
    category: "MVP Process",
    date: "Feb 14, 2026",
    readTime: "6 min read",
    illustration: "team",
  },
  {
    title: "AI-Assisted Development: Shipping 10x Faster with Claude & Gemini",
    excerpt:
      "Workflows, guardrails, and prompts our team uses to accelerate development while keeping code quality high.",
    category: "Development",
    date: "Feb 04, 2026",
    readTime: "7 min read",
    illustration: "robot",
  },
];

const Illustration = ({ variant }: { variant: "team" | "robot" | "person" }) => {
  // Themed SVG illustrations using design tokens (primary = brand yellow)
  if (variant === "team") {
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="400" height="300" fill="hsl(var(--card))" />
        <circle cx="100" cy="130" r="28" fill="hsl(var(--primary))" opacity="0.9" />
        <rect x="72" y="160" width="56" height="80" rx="8" fill="hsl(var(--primary))" opacity="0.8" />
        <rect x="160" y="100" width="120" height="90" rx="10" fill="hsl(var(--muted))" stroke="hsl(var(--primary))" strokeWidth="2" />
        <rect x="172" y="115" width="96" height="6" rx="3" fill="hsl(var(--primary))" />
        <rect x="172" y="130" width="70" height="6" rx="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
        <rect x="172" y="145" width="80" height="6" rx="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
        <circle cx="320" cy="140" r="26" fill="hsl(var(--primary))" opacity="0.9" />
        <rect x="294" y="168" width="52" height="72" rx="8" fill="hsl(var(--primary))" opacity="0.7" />
      </svg>
    );
  }
  if (variant === "robot") {
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="400" height="300" fill="hsl(var(--card))" />
        <rect x="150" y="90" width="100" height="110" rx="14" fill="hsl(var(--primary))" />
        <circle cx="180" cy="130" r="10" fill="hsl(var(--background))" />
        <circle cx="220" cy="130" r="10" fill="hsl(var(--background))" />
        <rect x="175" y="160" width="50" height="8" rx="4" fill="hsl(var(--background))" />
        <rect x="190" y="60" width="20" height="30" fill="hsl(var(--primary))" />
        <circle cx="200" cy="58" r="6" fill="hsl(var(--primary))" />
        <rect x="120" y="120" width="30" height="60" rx="6" fill="hsl(var(--primary))" opacity="0.7" />
        <rect x="250" y="120" width="30" height="60" rx="6" fill="hsl(var(--primary))" opacity="0.7" />
        <rect x="160" y="210" width="30" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.85" />
        <rect x="210" y="210" width="30" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.85" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="300" fill="hsl(var(--card))" />
      <circle cx="200" cy="100" r="32" fill="hsl(var(--primary))" />
      <rect x="160" y="135" width="80" height="110" rx="10" fill="hsl(var(--primary))" opacity="0.85" />
      <circle cx="120" cy="80" r="14" fill="hsl(var(--primary))" opacity="0.4" />
      <circle cx="300" cy="70" r="10" fill="hsl(var(--primary))" opacity="0.4" />
      <circle cx="320" cy="180" r="16" fill="hsl(var(--primary))" opacity="0.4" />
      <path d="M80 220 Q140 180 200 220 T 340 220" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
  );
};

const Blogs = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? blogs : blogs.filter((b) => b.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">Insights</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground font-serif tracking-tight">
              The CodeHelm Blog
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Practical guides on development, deployment, the MVP process, and distribution —
              written by builders who ship.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all border-2 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((blog, idx) => (
              <article
                key={idx}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Illustration */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Illustration variant={blog.illustration} />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-card-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group/btn">
                    Read article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">
              No articles in this category yet — check back soon.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
