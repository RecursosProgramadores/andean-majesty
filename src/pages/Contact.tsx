import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import heroCusco from "@/assets/hero-cusco.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  { q: "How far in advance should I book?", a: "We recommend booking at least 3-6 months in advance for peak season (June-August). However, we can often accommodate shorter notice requests depending on availability." },
  { q: "Are your tours suitable for children?", a: "Absolutely! We design family-friendly itineraries with adjusted pacing and activities. Many families travel with us and have incredible experiences." },
  { q: "What's included in the price?", a: "Our all-inclusive packages typically include accommodation, all meals, private guides, transportation, entrance fees, and 24/7 concierge support. Specific inclusions vary by tour." },
  { q: "Can I customize a tour?", a: "Yes! Every itinerary is 100% customizable. Tell us your interests, pace, and preferences, and we'll craft the perfect trip for you." },
  { q: "What about altitude sickness?", a: "Our itineraries are designed with gradual acclimatization in mind. We also provide coca tea and guidance on altitude adjustment. Our guides are trained in altitude management." },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", destinations: "", dates: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! My name is ${form.name}. I'm interested in a luxury tour.\n\nDestinations: ${form.destinations}\nDates: ${form.dates}\nMessage: ${form.message}\n\nEmail: ${form.email}\nPhone: ${form.phone}`
    );
    window.open(`https://wa.me/51941345282?text=${msg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "We'll get back to you within 24 hours!" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={heroCusco} alt="Cusco landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-background">Contact Us</h1>
          <p className="mt-3 text-background/80 text-lg">Let's start planning your dream adventure</p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                  <input id="name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Your full name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email *</label>
                    <input id="email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone</label>
                    <input id="phone" type="tel" maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="+1 234 567 890" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="destinations" className="block text-sm font-medium text-foreground mb-1">Preferred Destinations</label>
                    <input id="destinations" maxLength={200} value={form.destinations} onChange={(e) => setForm({ ...form, destinations: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Machu Picchu, Uyuni…" />
                  </div>
                  <div>
                    <label htmlFor="dates" className="block text-sm font-medium text-foreground mb-1">Travel Dates</label>
                    <input id="dates" maxLength={100} value={form.dates} onChange={(e) => setForm({ ...form, dates: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="June 2026, flexible…" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea id="message" required maxLength={1000} rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none" placeholder="Tell us about your dream trip…" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-luxury">
                  <Send className="w-4 h-4" /> Send via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <a href="mailto:leadingperu@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span>leadingperu@gmail.com</span>
                  </a>
                  <a href="https://wa.me/51941345282" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <span>+51 941 345 282 (WhatsApp)</span>
                  </a>
                  <a href="tel:+51941345282" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span>+51 941 345 282</span>
                  </a>
                  <div className="flex items-start gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span>Calle Fierro 478, Cercado, Cusco, Peru</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-card">
                <iframe
                  title="Leading Peru Travel office location in Cusco"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.1!2d-71.9785!3d-13.5183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCusco%2C+Peru!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl px-6 border border-border">
                <AccordionTrigger className="hover:no-underline py-4 font-heading font-bold text-foreground text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
