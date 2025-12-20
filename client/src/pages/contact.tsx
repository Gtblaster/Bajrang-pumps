import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { 
  Phone, Mail, MapPin, Clock, Send, 
  CheckCircle2, Loader2, MessageCircle 
} from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 82630 15851",
    link: "tel:+9182630 15851",
  },
  {
    icon: Mail,
    title: "Email",
    content: "thoratenterprises27@gmail.com",
    link: "mailto:thoratenterprises27@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "A/P Kadakozer Tal. Chandwad Dist.Nashik 423117,Maharashtra India",
    link: "https://maps.app.goo.gl/eswhqu35uwzWQ8pd8",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday - Saturday: 9:00 AM - 6:00 PM",
    link: null,
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

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen pt-20" data-testid="page-contact">
      <section className="py-12 lg:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4"
              data-testid="text-contact-title"
            >
              Contact Us
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help. 
              Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <Card className="h-full border-card-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. Our team will contact you shortly.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsSubmitted(false)}
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                                  data-testid="input-contact-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid sm:grid-cols-2 gap-5">
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
                                    data-testid="input-contact-email"
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
                                    placeholder="+91 12345 67890" 
                                    {...field}
                                    data-testid="input-contact-phone"
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
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="How can we help you?" 
                                  rows={5}
                                  {...field}
                                  data-testid="input-contact-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full bg-accent text-white border-accent-border"
                          disabled={mutation.isPending}
                          data-testid="button-contact-submit"
                        >
                          {mutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            <div className="space-y-6">
              <AnimatedSection delay={100}>
                <Card className="border-card-border">
                  <CardContent className="p-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {contactInfo.map((info) => (
                        <div key={info.title} className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {info.title}
                            </h4>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="text-muted-foreground text-sm hover:text-primary transition-colors"
                                target={info.title === "Address" ? "_blank" : undefined}
                                rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                                data-testid={`link-contact-${info.title.toLowerCase()}`}
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground text-sm">
                                {info.content}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="border-card-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.8447!2d74.2397!3d20.3447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddf0e0e0e0e0e0%3A0x0!2zMjDCsDIwJzQxLjAiTiA3NMKwMTQnMjMuMCJF!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bajrang Pumps Location - Kadakozer, Chandwad, Nashik"
                        data-testid="map-google"
                      />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <Card className="border-card-border bg-accent/5">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">
                      Quick Response via WhatsApp
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Get instant responses to your queries on WhatsApp
                    </p>
                    <a
                      href="https://wa.me/918263015851?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20pumps."
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-whatsapp-contact"
                    >
                      <Button className="bg-[#25D366] text-white border-[#25D366]">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
