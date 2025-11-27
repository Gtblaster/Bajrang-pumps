import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle2, ArrowRight } from "lucide-react";
import submersiblePump from "@assets/generated_images/submersible_pump_product_shot.png";
import monoblockPump from "@assets/generated_images/monoblock_pump_product_shot.png";
import borewellPump from "@assets/generated_images/borewell_pump_product_shot.png";
import agriculturePump from "@assets/generated_images/agriculture_pump_product_shot.png";
import industrialPump from "@assets/generated_images/industrial_pump_product_shot.png";

interface Product {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  features: string[];
  image: string;
}

const products: Product[] = [
  {
    id: "submersible-1",
    name: "ProMax Submersible Pump",
    category: "submersible-pumps",
    categoryLabel: "Submersible Pumps",
    description: "High-performance submersible pump designed for deep well applications with exceptional durability.",
    features: [
      "Stainless steel construction",
      "Energy efficient motor",
      "Anti-corrosion coating",
      "High water discharge",
    ],
    image: submersiblePump,
  },
  {
    id: "submersible-2",
    name: "AquaForce Submersible",
    category: "submersible-pumps",
    categoryLabel: "Submersible Pumps",
    description: "Premium quality submersible pump with advanced motor technology for continuous operation.",
    features: [
      "Copper winding motor",
      "Thermal overload protection",
      "Long service life",
      "Low maintenance",
    ],
    image: submersiblePump,
  },
  {
    id: "monoblock-1",
    name: "PowerFlow Monoblock",
    category: "monoblock-pumps",
    categoryLabel: "Monoblock Pumps",
    description: "Compact single-unit design combining pump and motor for efficient water transfer.",
    features: [
      "Self-priming capability",
      "Compact design",
      "High suction lift",
      "Silent operation",
    ],
    image: monoblockPump,
  },
  {
    id: "monoblock-2",
    name: "UltraJet Monoblock",
    category: "monoblock-pumps",
    categoryLabel: "Monoblock Pumps",
    description: "Heavy-duty monoblock pump ideal for domestic and commercial water supply systems.",
    features: [
      "Cast iron body",
      "Brass impeller",
      "Energy efficient",
      "Easy installation",
    ],
    image: monoblockPump,
  },
  {
    id: "borewell-1",
    name: "DeepWell Borewell Pump",
    category: "borewell-pumps",
    categoryLabel: "Borewell Pumps",
    description: "Specialized pump designed for high-depth borewell applications with consistent water flow.",
    features: [
      "Multi-stage design",
      "High head capacity",
      "Stainless steel shaft",
      "Corrosion resistant",
    ],
    image: borewellPump,
  },
  {
    id: "borewell-2",
    name: "TurboLift Borewell",
    category: "borewell-pumps",
    categoryLabel: "Borewell Pumps",
    description: "Premium borewell pump with advanced hydraulics for maximum water extraction efficiency.",
    features: [
      "Noryl impellers",
      "Sand resistant",
      "Low power consumption",
      "2-year warranty",
    ],
    image: borewellPump,
  },
  {
    id: "agriculture-1",
    name: "AgroMax Irrigation Pump",
    category: "agriculture-pumps",
    categoryLabel: "Agriculture Pumps",
    description: "Heavy-duty pump designed for agricultural irrigation with high water discharge capacity.",
    features: [
      "High flow rate",
      "Diesel/Electric options",
      "Portable design",
      "All-weather operation",
    ],
    image: agriculturePump,
  },
  {
    id: "agriculture-2",
    name: "FarmPro Centrifugal",
    category: "agriculture-pumps",
    categoryLabel: "Agriculture Pumps",
    description: "Reliable centrifugal pump perfect for farm irrigation and water transfer applications.",
    features: [
      "Large capacity",
      "Low maintenance",
      "Fuel efficient",
      "Robust construction",
    ],
    image: agriculturePump,
  },
  {
    id: "industrial-1",
    name: "IndustroPump Heavy Duty",
    category: "industrial-pumps",
    categoryLabel: "Industrial Pumps",
    description: "Industrial-grade pump built for demanding applications in manufacturing and processing.",
    features: [
      "Heavy-duty motor",
      "High pressure output",
      "Chemical resistant",
      "Continuous duty rated",
    ],
    image: industrialPump,
  },
  {
    id: "industrial-2",
    name: "MaxFlow Industrial",
    category: "industrial-pumps",
    categoryLabel: "Industrial Pumps",
    description: "High-capacity industrial pump for large-scale water management and processing facilities.",
    features: [
      "Large bore design",
      "Flanged connections",
      "TEFC motor",
      "5-year warranty",
    ],
    image: industrialPump,
  },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "submersible-pumps", label: "Submersible Pumps" },
  { id: "monoblock-pumps", label: "Monoblock Pumps" },
  { id: "borewell-pumps", label: "Borewell Pumps" },
  { id: "agriculture-pumps", label: "Agriculture Pumps" },
  { id: "industrial-pumps", label: "Industrial Pumps" },
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

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <AnimatedSection delay={index * 100}>
      <Card 
        className="h-full flex flex-col overflow-hidden card-hover border-card-border"
        data-testid={`card-product-${product.id}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover img-zoom"
          />
          <Badge 
            className="absolute top-3 left-3 bg-primary text-primary-foreground"
            data-testid={`badge-category-${product.id}`}
          >
            {product.categoryLabel}
          </Badge>
        </div>
        
        <CardContent className="flex-1 p-5">
          <h3 
            className="text-lg font-bold text-foreground mb-2"
            data-testid={`text-product-name-${product.id}`}
          >
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <ul className="space-y-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="p-5 pt-0">
          <Link href="/enquiry" className="w-full">
            <Button 
              className="w-full bg-accent text-white border-accent-border"
              data-testid={`button-enquiry-${product.id}`}
            >
              Enquiry
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </AnimatedSection>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen pt-20" data-testid="page-products">
      <section className="py-12 lg:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4"
              data-testid="text-products-title"
            >
              Our Products
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Explore our comprehensive range of premium quality pumps designed for 
              various applications. Each pump is built with precision and tested for reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background border-b border-border sticky top-16 z-40 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 min-w-max">
            {categories.map((category) => (
              <a
                key={category.id}
                href={category.id === "all" ? "#" : `#${category.id}`}
                className="inline-block"
                data-testid={`link-category-${category.id}`}
              >
                <Badge 
                  variant="secondary"
                  className="cursor-pointer px-4 py-2 text-sm whitespace-nowrap"
                >
                  {category.label}
                </Badge>
              </a>
            ))}
          </div>
        </div>
      </section>

      {categories.slice(1).map((category) => (
        <section 
          key={category.id} 
          id={category.id}
          className="py-12 lg:py-16 bg-background scroll-mt-32"
          data-testid={`section-${category.id}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-8">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-accent rounded-full" />
                <h2 
                  className="text-2xl lg:text-3xl font-bold text-foreground"
                  data-testid={`text-section-title-${category.id}`}
                >
                  {category.label}
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === category.id)
                .map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 lg:py-20 bg-card" data-testid="section-products-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need Help Choosing the Right Pump?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Our expert team is here to help you find the perfect pump solution 
                for your specific requirements. Get in touch today!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/enquiry">
                  <Button 
                    size="lg" 
                    className="bg-accent text-white border-accent-border min-w-[180px]"
                    data-testid="button-products-enquire"
                  >
                    Get Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 min-w-[180px]"
                    data-testid="button-products-contact"
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
