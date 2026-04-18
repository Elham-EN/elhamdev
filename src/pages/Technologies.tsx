import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  FileCode2,
  Braces,
  FileType,
  Palette,
  Wind,
  Atom,
  Triangle,
  Smartphone,
  Bot,
  Apple,
  Database,
  Flame,
  CreditCard,
  Server,
  Code2,
  Leaf,
  Layers,
  FileText,
  Sparkles,
  Boxes,
  Link2,
  BookOpenCheck,
  Network,
  Gem,
  Brain,
  TerminalSquare,
} from "lucide-react";

type Tech = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type TechGroup = {
  title: string;
  subtitle: string;
  items: Tech[];
};

const groups: TechGroup[] = [
  {
    title: "Web Development",
    subtitle: "The languages and frameworks behind fast, modern, type-safe websites.",
    items: [
      {
        name: "TypeScript",
        icon: FileType,
        description:
          "Adds static typing to JavaScript, catching bugs early and making large codebases easier to maintain and refactor.",
      },
      {
        name: "JavaScript",
        icon: Braces,
        description:
          "The language of the web — powers interactivity in every modern browser and runs on virtually every device.",
      },
      {
        name: "HTML",
        icon: FileCode2,
        description:
          "The semantic foundation of every website. Accessible, SEO-friendly markup is the base of everything we ship.",
      },
      {
        name: "CSS",
        icon: Palette,
        description:
          "Gives sites their look and feel. We use it for responsive layouts, animations, and pixel-perfect design.",
      },
      {
        name: "Tailwind CSS",
        icon: Wind,
        description:
          "Utility-first CSS framework that lets us build consistent, responsive UIs quickly without writing custom stylesheets.",
      },
      {
        name: "React.js",
        icon: Atom,
        description:
          "The most popular UI library — component-based, reactive, and backed by a massive ecosystem for building scalable interfaces.",
      },
      {
        name: "Next.js",
        icon: Triangle,
        description:
          "Production-grade React framework with server rendering, routing, and built-in performance and SEO optimizations.",
      },
    ],
  },
  {
    title: "Mobile Development",
    subtitle: "Native and cross-platform tools for fast, polished mobile experiences.",
    items: [
      {
        name: "React Native + Expo",
        icon: Smartphone,
        description:
          "Build iOS and Android apps from a single React codebase. Expo speeds up development with OTA updates and a rich SDK.",
      },
      {
        name: "Android + Kotlin",
        icon: Bot,
        description:
          "Google's official language for Android. Modern, concise, and gives us full access to native platform performance and APIs.",
      },
      {
        name: "iOS + SwiftUI",
        icon: Apple,
        description:
          "Apple's modern declarative UI framework — perfect for crafting smooth, native iOS experiences that feel right at home.",
      },
    ],
  },
  {
    title: "Backend & Cloud",
    subtitle: "Databases, APIs, payments, and CMS tools that power the products we build.",
    items: [
      {
        name: "Supabase",
        icon: Database,
        description:
          "Open-source Firebase alternative with Postgres, auth, storage, and edge functions — our go-to for full-stack apps.",
      },
      {
        name: "Firebase",
        icon: Flame,
        description:
          "Google's BaaS platform — great for realtime data, auth, and push notifications, especially in mobile projects.",
      },
      {
        name: "Stripe",
        icon: CreditCard,
        description:
          "The industry standard for payments, subscriptions, and checkout — secure, developer-friendly, and globally trusted.",
      },
      {
        name: "Node.js",
        icon: Server,
        description:
          "JavaScript runtime for building fast, scalable APIs and server-side logic with the same language used on the front end.",
      },
      {
        name: "ASP.NET Core + C#",
        icon: Code2,
        description:
          "Microsoft's high-performance, cross-platform framework for enterprise-grade APIs and backends with strong typing.",
      },
      {
        name: "PostgreSQL",
        icon: Database,
        description:
          "Powerful, reliable open-source relational database — our default for anything that needs structured data and complex queries.",
      },
      {
        name: "MongoDB",
        icon: Leaf,
        description:
          "Flexible NoSQL document database, great for projects with evolving schemas or heavy unstructured data.",
      },
    ],
  },
  {
    title: "CMS",
    subtitle: "Headless content management for marketing sites, blogs, and editorial workflows.",
    items: [
      {
        name: "Payload",
        icon: Layers,
        description:
          "TypeScript-first headless CMS with a powerful admin UI and full code control — perfect for custom content models.",
      },
      {
        name: "Sanity",
        icon: Sparkles,
        description:
          "Real-time, structured content platform with a flexible studio editors love and a rich querying API for developers.",
      },
      {
        name: "Strapi",
        icon: Boxes,
        description:
          "Open-source Node.js headless CMS — quick to set up, easy to self-host, and customizable for any content workflow.",
      },
    ],
  },
  {
    title: "AI",
    subtitle: "Modern AI tooling and models we use to ship intelligent features and accelerate development.",
    items: [
      {
        name: "LangChain",
        icon: Link2,
        description:
          "Framework for orchestrating LLMs with tools, memory, and chains — perfect for building agents and complex AI workflows.",
      },
      {
        name: "RAG",
        icon: BookOpenCheck,
        description:
          "Retrieval-Augmented Generation grounds AI responses in your own data, delivering accurate, context-aware answers with citations.",
      },
      {
        name: "Vector Databases",
        icon: Network,
        description:
          "Store and search embeddings at scale (Pinecone, Supabase pgvector, Weaviate) to power semantic search and RAG pipelines.",
      },
      {
        name: "Gemini Model",
        icon: Gem,
        description:
          "Google's multimodal Gemini models — strong reasoning, long context windows, and native image and video understanding.",
      },
      {
        name: "OpenAI Model",
        icon: Brain,
        description:
          "GPT models for chat, reasoning, vision, and function-calling — the most battle-tested LLMs for production AI features.",
      },
      {
        name: "Claude Code",
        icon: TerminalSquare,
        description:
          "Anthropic's agentic coding tool that plugs into our workflow for faster, higher-quality development and automated refactors.",
      },
    ],
  },
];

const Technologies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="container px-4">
          {/* Page header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-block bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-md mb-4">
              Our Stack
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Technologies we build with
            </h1>
            <p className="text-lg text-muted-foreground">
              A carefully chosen toolbox for crafting fast, reliable, and scalable
              products — from marketing websites to mobile apps and full backend systems.
            </p>
          </div>

          {/* Groups */}
          <div className="space-y-20">
            {groups.map((group) => (
              <section key={group.title}>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {group.title}
                  </h2>
                  <p className="text-muted-foreground">{group.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <Card
                        key={tech.name}
                        className="p-6 border-border bg-card hover:border-primary transition-colors group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <h3 className="font-bold text-foreground text-lg">
                            {tech.name}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tech.description}
                        </p>
                      </Card>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Technologies;
