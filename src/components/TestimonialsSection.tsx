import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc",
    content: "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and the quality exceeded our expectations.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, AppFlow",
    content: "The mobile app they built for us has a 4.8 rating on both app stores. Their attention to detail and user experience expertise is remarkable.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, HealthTrack",
    content: "From concept to launch, they guided us through every step. Our fitness app is now used by over 50,000 active users. Highly recommended!",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Thompson",
    role: "CTO, FinanceHub",
    content: "Exceptional technical skills combined with great communication. They transformed our outdated system into a modern, scalable platform.",
    rating: 5,
    avatar: "DT",
  },
  {
    name: "Lisa Wang",
    role: "Marketing Director, StyleCo",
    content: "The website they created for us increased our conversion rate by 40%. Their understanding of UX and branding is outstanding.",
    rating: 5,
    avatar: "LW",
  },
  {
    name: "James Parker",
    role: "Founder, EduLearn",
    content: "Our learning management system was delivered on time and within budget. The ongoing support has been incredible. A true professional!",
    rating: 5,
    avatar: "JP",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/20">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">
            Client Reviews
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground font-serif uppercase tracking-tight">
            What Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            I've had the privilege of working with amazing clients. Here's what they have to say.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Group testimonials into slides */}
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map(
                (_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1"
                  >
                    {testimonials
                      .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                      .map((testimonial, index) => (
                        <div
                          key={index}
                          className="relative bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300"
                        >
                          {/* Quote Icon */}
                          <div className="absolute -top-4 left-8">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                              <Quote className="w-5 h-5 text-primary-foreground" />
                            </div>
                          </div>

                          {/* Stars */}
                          <div className="flex gap-1 mb-4 pt-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                            ))}
                          </div>

                          {/* Content */}
                          <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                            "{testimonial.content}"
                          </p>

                          {/* Author */}
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <p className="font-semibold text-card-foreground">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full w-12 h-12 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full w-12 h-12 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
