import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2, Loader2, Send, Droplets, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";

const enquiryFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  productCategory: z.string().min(1, "Please select a product category"),
  message: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquiryFormSchema>;

const productCategories = [
  { value: "submersible-pumps", label: "Submersible Pumps" },
  { value: "monoblock-pumps", label: "Monoblock Pumps" },
  { value: "borewell-pumps", label: "Borewell Pumps" },
  { value: "agriculture-pumps", label: "Agriculture Pumps" },
  { value: "industrial-pumps", label: "Industrial Pumps" },
];

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918263015851?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20pumps."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
      data-testid="button-whatsapp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="font-medium hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}

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

export default function Enquiry() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      productCategory: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: EnquiryFormData) => {
      // Save to database and Excel file only
      const response = await apiRequest("POST", "/api/enquiry", data);
      
      // Send enquiry via WhatsApp
      const selectedCategory = productCategories.find(cat => cat.value === data.productCategory)?.label || data.productCategory;
      
      const whatsappMessage = `Hello! New product enquiry:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Product Category: ${selectedCategory}

${data.message ? `Additional Requirements: ${data.message}` : ''}

Sent from Bajrang Pumps website`;
      
      const whatsappUrl = `https://wa.me/918263015851?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      return response;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Enquiry Submitted!",
        description: "Your enquiry has been saved and sent via WhatsApp. Our sales team will contact you shortly.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or use WhatsApp chat.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: EnquiryFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen pt-20" data-testid="page-enquiry">
      <section className="py-12 lg:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4"
              data-testid="text-enquiry-title"
            >
              Get a Quote
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Interested in our pumps? Fill out the enquiry form below and our 
              sales team will get back to you with the best pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-enquiry-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="border-card-border">
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Product Enquiry Form</CardTitle>
                <p className="text-muted-foreground">
                  Select your preferred pump type and provide your details. 
                  We'll respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-accent" />
                    </div>
                    <h3 
                      className="text-2xl font-bold text-foreground mb-3"
                      data-testid="text-enquiry-success"
                    >
                      Enquiry Submitted Successfully!
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      Thank you for your interest in Bajrang Pumps. Our sales team 
                      will contact you shortly with the best pricing and options.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setIsSubmitted(false)}
                        data-testid="button-new-enquiry"
                      >
                        Submit Another Enquiry
                      </Button>
                      <Link href="/products">
                        <Button data-testid="button-browse-products">
                          Browse Products
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="productCategory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Category</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-product-category">
                                  <SelectValue placeholder="Select a pump category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {productCategories.map((category) => (
                                  <SelectItem 
                                    key={category.value} 
                                    value={category.value}
                                    data-testid={`option-${category.value}`}
                                  >
                                    {category.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                {...field}
                                data-testid="input-enquiry-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="your@email.com" 
                                  {...field}
                                  data-testid="input-enquiry-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel" 
                                  placeholder="+91 98765 43210" 
                                  {...field}
                                  data-testid="input-enquiry-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Requirements (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your specific requirements, quantity, or any questions you have..." 
                                rows={4}
                                {...field}
                                data-testid="input-enquiry-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full bg-accent text-white border-accent-border"
                        disabled={mutation.isPending}
                        data-testid="button-enquiry-submit"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Enquiry
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>

                      <p className="text-center text-muted-foreground text-sm">
                        By submitting this form, you agree to be contacted by our sales team.
                      </p>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card" data-testid="section-enquiry-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Submit Enquiry</h3>
                <p className="text-muted-foreground text-sm">
                  Fill out the form with your requirements and contact details.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Get Quote</h3>
                <p className="text-muted-foreground text-sm">
                  Our team will analyze your needs and provide the best pricing.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Place Order</h3>
                <p className="text-muted-foreground text-sm">
                  Confirm your order and get your pumps delivered nationwide.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
