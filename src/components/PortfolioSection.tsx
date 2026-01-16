import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    type: "Web App",
  },
  {
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI recommendations.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "TensorFlow"],
    type: "Mobile App",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for SaaS companies with real-time data visualization and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Next.js", "TypeScript", "Chart.js"],
    type: "Web App",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects I've worked on recently. Each one represents a unique challenge solved.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/2]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Type Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm"
                >
                  {project.type}
                </Badge>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
