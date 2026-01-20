import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web development, including custom web applications, responsive website design, API development, database architecture, and cloud deployment. I work with modern technologies like React, Node.js, TypeScript, and various cloud platforms.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple landing page might take 1-2 weeks, while a full-featured web application could take 2-3 months. I provide detailed timelines during the project planning phase and keep you updated throughout development.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "I offer flexible pricing options including fixed-price quotes for well-defined projects and hourly rates for ongoing work or projects with evolving requirements. I provide transparent estimates upfront and ensure there are no hidden costs.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, I offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements. I'm committed to ensuring your project runs smoothly long after launch.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "I believe in transparent and frequent communication. We can use your preferred channels—whether that's Slack, email, or video calls. I provide regular progress updates, and you'll have direct access to me for any questions or feedback throughout the project.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? Here are some of the most common inquiries I receive from clients.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Get in touch
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
