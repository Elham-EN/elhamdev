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
    <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
      <div className="bg-background/40 backdrop-blur-md border border-primary/20 rounded-2xl py-3 px-3 shadow-2xl">
        <ul className="flex flex-col gap-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-300 group ${
                  activeSection === section.id
                    ? "bg-primary/20"
                    : "hover:bg-primary/10"
                }`}
              >
                {/* Dot indicator */}
                <span className="relative flex items-center justify-center w-2 h-2 flex-shrink-0">
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeSection === section.id
                        ? "bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                        : "bg-foreground/30 group-hover:bg-foreground/50"
                    }`}
                  />
                  {activeSection === section.id && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                  )}
                </span>

                {/* Label - always visible */}
                <span
                  className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                    activeSection === section.id
                      ? "text-primary"
                      : "text-foreground/70 group-hover:text-foreground"
                  }`}
                >
                  {section.label}
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
