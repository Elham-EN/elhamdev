import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Projects" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-end gap-3">
      <div className="bg-background/20 backdrop-blur-md border border-border/30 rounded-full py-4 px-3 shadow-lg">
        <ul className="flex flex-col gap-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="group flex items-center gap-3 relative"
              >
                {/* Label - appears on hover */}
                <span
                  className={`text-xs font-medium whitespace-nowrap transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                    activeSection === section.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {section.label}
                </span>

                {/* Dot indicator */}
                <span
                  className={`relative flex items-center justify-center w-3 h-3 transition-all duration-300 ${
                    activeSection === section.id ? "scale-100" : "scale-75 group-hover:scale-100"
                  }`}
                >
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeSection === section.id
                        ? "bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                        : "bg-muted-foreground/40 group-hover:bg-muted-foreground/60"
                    }`}
                  />
                  {activeSection === section.id && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SectionNav;
