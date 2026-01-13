import { Link } from "wouter";
import { 
  Target, Eye, Award, Shield, Users, Factory, 
  Wrench, Clock, CheckCircle2, ArrowRight,
  Calendar, MapPin, Truck, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import manufacturingImage from "@assets/generated_images/manufacturing_facility_interior.png";
import submersiblePump from "@assets/generated_images/submersible_pump_product_shot.png";

const timeline = [
  {
    year: "2021",
    title: "Company Founded",
    description: "Bajrang Pumps was established with a vision to provide quality water solutions to India.",
    icon: Calendar,
  },
  {
    year: "2022",
    title: "First Manufacturing Unit",
    description: "Opened our first state-of-the-art manufacturing facility in Nashik, Maharashtra.",
    icon: Factory,
  },
  {
    year: "2025",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2024 certification for quality management systems.",
    icon: Award,
  },
  {
    year: "2025",
    title: "Pan-India Expansion",
    description: "Expanded dealer network to cover all major states across India.",
    icon: MapPin,
  },
  {
    year: "2025",
    title: "Export Operations",
    description: "Started exporting pumps to all Over Maharashtra.",
    icon: Truck,
  },
  {
    year: "2025",
    title: "5 Years of Excellence",
    description: "Celebrating three decades of trust and quality service to customers.",
    icon: Star,
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide innovative, reliable, and energy-efficient water pumping solutions that meet the diverse needs of our customers while maintaining the highest standards of quality and service.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the most trusted and preferred pump manufacturer in India, known for technological excellence, customer satisfaction, and sustainable manufacturing practices.",
  },
];

const qualityPoints = [
  {
    icon: Shield,
    title: "ISO 9001:2025 Certified",
    description: "Our manufacturing processes meet international quality standards.",
  },
  {
    icon: Wrench,
    title: "100% Quality Testing",
    description: "Every pump undergoes rigorous testing before dispatch.",
  },
  {
    icon: Award,
    title: "Premium Materials",
    description: "We use only the finest grade materials for all components.",
  },
  {
    icon: Clock,
    title: "1-Year Warranty",
    description: "Comprehensive warranty coverage for peace of mind.",
  },
];

const achievements = [
  { value: "5+", label: "Years Experience" },
  { value: "1,000+", label: "Happy Customers" },
  { value: "5+", label: "Dealers Nationwide" },
  { value: "1K+", label: "Pumps Delivered" },
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

export default function About() {
  return (
    <div className="min-h-screen pt-20" data-testid="page-about">
      <section className="py-12 lg:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4"
              data-testid="text-about-title"
            >
              About Bajrang Pumps
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Three decades of excellence in manufacturing reliable, efficient, 
              and innovative water pumping solutions for India and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-company-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Powering India's Water Needs Since 2021
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2021, Bajrang Pumps started as a small workshop with a big dream - 
                to manufacture world-class pumps that would serve the diverse water needs of India. 
                What began as a family enterprise has grown into one of the most trusted pump 
                manufacturers in the India.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Over the past three decades, we have continuously evolved, embracing new technologies 
                and manufacturing practices while staying true to our core values of quality, 
                reliability, and customer satisfaction. Today, our pumps serve Thousands of homes, 
                farms, and industries across India and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our state-of-the-art manufacturing facility in Nashik combines traditional 
                craftsmanship with modern automation to produce pumps that meet the highest 
                international standards. Every pump that leaves our factory carries with it 
                our promise of excellence.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10" />
                <img
                  src={manufacturingImage}
                  alt="Bajrang Pumps Manufacturing Facility"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card" data-testid="section-mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              What Drives Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Mission & Vision
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 150}>
                <Card className="h-full border-card-border">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 
                      className="text-xl font-bold text-foreground mb-4"
                      data-testid={`text-${value.title.toLowerCase().replace(" ", "-")}`}
                    >
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-quality">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/5 rounded-2xl -z-10" />
                <img
                  src={submersiblePump}
                  alt="Premium Quality Pump"
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-white/80">Quality Tested</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Quality Assurance
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Manufacturing Excellence
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Bajrang Pumps, quality is embedded in every step of our manufacturing process. 
                From raw material selection to final testing, we maintain stringent quality 
                controls to ensure every pump meets our exacting standards.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {qualityPoints.map((point, index) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <point.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary" data-testid="section-achievements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-white/70 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Achievements
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Numbers That Speak
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div 
                    className="text-3xl lg:text-4xl font-bold text-white mb-2"
                    data-testid={`text-achievement-${stat.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card" data-testid="section-timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Milestones & Achievements
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            
            <div className="space-y-8 lg:space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 100}>
                  <div className={cn(
                    "relative flex flex-col lg:flex-row gap-6 lg:gap-12",
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}>
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center z-10">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>

                    <div className={cn(
                      "lg:w-1/2",
                      index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    )}>
                      <Card className="border-card-border">
                        <CardContent className="p-6">
                          <div className="flex lg:hidden items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                              <item.icon className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-accent font-bold text-lg">{item.year}</span>
                          </div>
                          <span className="hidden lg:inline-block text-accent font-bold text-lg mb-2">
                            {item.year}
                          </span>
                          <h3 
                            className="text-lg font-bold text-foreground mb-2"
                            data-testid={`text-timeline-${item.year}`}
                          >
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-warranty">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="bg-card border-card-border overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <Shield className="h-7 w-7 text-accent" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      Warranty & Support
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      We stand behind every pump we manufacture. Our comprehensive 1-year warranty 
                      covers manufacturing defects and ensures you receive prompt support when needed.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "1-Year Comprehensive Warranty",
                        "Technical Support",
                        "Genuine Parts",
                        "Authorized Service Centers",
                        "Quick Replacement Policy",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center lg:text-right">
                    <Users className="h-32 w-32 text-primary/20 mx-auto lg:ml-auto" />
                    <div className="mt-6">
                      <Link href="/contact">
                        <Button size="lg" data-testid="button-contact-support">
                          Contact Support
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card" data-testid="section-about-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Join Our Growing Family
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Experience the Bajrang Pumps difference. Contact us today to learn more 
                about our products and become part of our success story.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/products">
                  <Button 
                    size="lg" 
                    className="bg-accent text-white border-accent-border min-w-[180px]"
                    data-testid="button-about-products"
                  >
                    View Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 min-w-[180px]"
                    data-testid="button-about-contact"
                  >
                    Get in Touch
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
