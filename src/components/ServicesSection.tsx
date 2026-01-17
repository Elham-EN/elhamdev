import { Code2, Palette, Search, ShoppingCart, Settings, MonitorSmartphone } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web Design",
    description: "Beautiful, modern, and user-friendly website designs that leave a lasting impression on your visitors and perfectly represent your brand.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web solutions built with the latest technologies to ensure your website is fast, secure, and scalable.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your visibility in search engines and attract more organic traffic with comprehensive SEO strategies.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Striking visual and branding elements that enhance your website's appeal and strengthen your brand identity.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Full-fledged webshops that make selling your products online easy, secure, and profitable.",
  },
  {
    icon: Settings,
    title: "Automation Systems",
    description: "Custom automation solutions to streamline your business processes, save time, and reduce operational costs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/20">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">
            What I Offer
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground font-serif uppercase tracking-tight">
            My Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Custom digital solutions that perfectly match your business needs. From elegant designs to advanced development. 
            Whether you're looking for a <span className="font-semibold text-foreground">freelance web designer</span>, 
            an <span className="font-semibold text-foreground">affordable web designer</span>, 
            or an experienced <span className="font-semibold text-foreground">software developer</span>, you've come to the right place.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            In short: digital solutions that save time and costs and increase your revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-card-foreground uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
