import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Webleadr",
    description: "A SaaS platform that allows users to effortlessly acquire web design clients as leads and get businesses without websites from anywhere.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["marketing"],
    link: "#",
  },
  {
    title: "Gympouch",
    description: "A gym administration app to manage appointments, store workouts and prices, and more.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    tags: ["fitness"],
    link: "#",
  },
  {
    title: "Eyefine",
    description: "Web application with a CRM for photographers and real estate agents. The platform makes it easier to photograph houses, share the photos, and follow up.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tags: ["photography CRM"],
    link: "#",
  },
  {
    title: "Food Delivery App",
    description: "Mobile-first food ordering platform with real-time order tracking and restaurant management system.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    tags: ["food delivery"],
    link: "#",
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling, telemedicine integration, and medical records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    tags: ["healthcare"],
    link: "#",
  },
  {
    title: "E-Learning Platform",
    description: "Comprehensive learning management system with video courses, progress tracking, and certification.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    tags: ["education"],
    link: "#",
  },
];

const PortfolioSection = () => {
  const displayedProjects = projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden">
      {/* Left Red Sidebar */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-64 bg-primary">
        <div className="h-full flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-4xl uppercase tracking-widest transform -rotate-90 whitespace-nowrap">
            Projects
          </span>
        </div>
      </div>

      <div className="container px-4 lg:pl-72">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">
            Achievements
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground font-serif uppercase tracking-tight">
            Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Here are examples of websites and web applications developed for my clients. 
            Get inspired by completed projects: from sleek <span className="font-semibold text-foreground">business websites</span> to 
            <span className="font-semibold text-foreground"> advanced web applications</span>. With an eye for 
            optimal speed and SEO, ensuring your online success.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-card-foreground uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <div className="flex gap-1">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-[10px] font-bold">N</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-0 rounded-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Visit website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="gap-2 rounded-none border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-wide"
          >
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
