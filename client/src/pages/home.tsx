import { Link } from "wouter";
import { Shield, Zap, Droplets, Gauge, ArrowRight, CheckCircle2, Award, Users, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroImage from "@assets/generated_images/hero_background_pump_station.png";
import submersiblePump from "@assets/generated_images/submersible_pump_product_shot.png";
import monoblockPump from "@assets/generated_images/monoblock_pump_product_shot.png";
import borewellPump from "@assets/generated_images/borewell_pump_product_shot.png";

const features = [
  {
    icon: Shield,
    title: "Durable Build",
    description: "Heavy-duty construction with premium materials ensuring long-lasting performance in demanding conditions.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Advanced motor technology that reduces power consumption while maintaining optimal water output.",
  },
  {
    icon: Droplets,
    title: "Anti-Rust Coating",
    description: "Special corrosion-resistant coating protects against rust and extends pump lifespan significantly.",
  },
  {
    icon: Gauge,
    title: "High Water Flow",
    description: "Engineered for maximum water discharge capacity with consistent pressure maintenance.",
  },
];

const stats = [
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Users, value: "1K+", label: "Happy Customers" },
  { icon: Factory, value: "10+", label: "Dealers Nationwide" },
  { icon: Droplets, value: "1000+", label: "Pumps Delivered" },
];

const productShowcase = [
  {
    image: submersiblePump,
    name: "Submersible Pumps",
    description: "Deep well water solutions",
  },
  {
    image: monoblockPump,
    name: "Monoblock Pumps",
    description: "Compact & powerful design",
  },
  {
    image: borewellPump,
    name: "Borewell Pumps",
    description: "High-depth performance",
  },
];

function AnimatedSection({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-down">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Trusted by 1000+ customers across India</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up"
              data-testid="text-hero-title"
            >
              Reliable Submersible Pumps for{" "}
              <span className="text-accent">Every Need</span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
              data-testid="text-hero-subtitle"
            >
              Premium quality water pumps engineered for durability, efficiency, and performance. 
              From agriculture to industry, we power India's water needs.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/products">
                <Button 
                  size="lg" 
                  className="bg-accent text-white border-accent-border min-w-[180px]"
                  data-testid="button-view-products"
                >
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/enquiry">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 min-w-[180px]"
                  data-testid="button-hero-get-quote"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built for Performance & Reliability
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our pumps are designed with cutting-edge technology and premium materials 
              to deliver exceptional performance in any environment.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <Card className="h-full card-hover border-card-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-feature-${feature.title.toLowerCase().replace(" ", "-")}`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card" data-testid="section-products-showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Products
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Premium Pump Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our range of high-quality pumps designed for various applications 
              and industries.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productShowcase.map((product, index) => (
              <AnimatedSection key={product.name} delay={index * 150}>
                <Link href="/products">
                  <Card className="group overflow-hidden cursor-pointer card-hover border-card-border">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover img-zoom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-1" data-testid={`text-product-${product.name.toLowerCase().split(" ")[0]}`}>
                          {product.name}
                        </h3>
                        <p className="text-white/80 text-sm">{product.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link href="/products">
              <Button size="lg" data-testid="button-explore-products">
                Explore All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1" data-testid={`text-stat-${stat.label.toLowerCase().replace(" ", "-")}`}>
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-quality">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Quality Assurance
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Engineered for Excellence
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Bajrang Pumps, quality is not just a promise - it's our foundation. 
                Every pump undergoes rigorous testing and quality checks before reaching our customers. 
                We use only premium-grade materials and state-of-the-art manufacturing processes.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "ISO 9001:2025 Certified Manufacturing",
                  "100% Quality Testing Before Dispatch",
                  "Premium Grade Stainless Steel Components",
                  "2-Year Comprehensive Warranty",
                  "24/7 Customer Support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button variant="outline" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10" />
                <img
                  src={submersiblePump}
                  alt="Premium Submersible Pump"
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-white/80">Years of Trust</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Contact our team of experts today and find the perfect pump solution for your needs. 
                We offer competitive pricing and nationwide delivery.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/enquiry">
                  <Button 
                    size="lg" 
                    className="bg-accent text-white border-accent-border min-w-[180px]"
                    data-testid="button-cta-enquire"
                  >
                    Enquire Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 min-w-[180px]"
                    data-testid="button-cta-contact"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
