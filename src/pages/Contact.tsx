import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronRight, ChevronLeft, User, Globe, Plane, Info, Calendar as CalendarIcon, Users } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import heroCusco from "@/assets/hero-cusco.jpg";
import { tours } from "@/data/tours";
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
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);

  const initialTour = searchParams.get("tour") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    destinations: initialTour,
    dates: "",
    duration: "",
    travelers: "",
    budget: "",
    message: ""
  });

  // Auto-fill duration when a tour is selected
  useEffect(() => {
    if (form.destinations) {
      const selectedTour = tours.find(t => t.title === form.destinations);
      if (selectedTour) {
        setForm(prev => ({ ...prev, duration: `${selectedTour.duration} Days` }));
      }
    }
  }, [form.destinations]);

  const isStepValid = () => {
    if (step === 1) {
      return form.name && form.email && form.phone && form.country;
    }
    if (step === 2) {
      return form.destinations && form.dates && form.travelers && form.duration;
    }
    if (step === 3) {
      return form.message;
    }
    return false;
  };

  const nextStep = () => {
    if (isStepValid()) {
      setDirection(1);
      setStep(s => Math.min(s + 1, 3));
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(s => Math.max(s - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;

    const msg = encodeURIComponent(
      `Hi! I'm interested in a luxury tour.\n\n` +
      `👤 ABOUT ME:\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Country: ${form.country}\n\n` +
      `🌎 TRIP PLAN:\n` +
      `Tour/Destinations: ${form.destinations}\n` +
      `Travel Dates: ${form.dates}\n` +
      `Duration: ${form.duration}\n` +
      `Travelers: ${form.travelers}\n\n` +
      `✨ DETAILS:\n` +
      `Budget range: ${form.budget || "Not specified"}\n` +
      `Special wishes: ${form.message}`
    );
    window.open(`https://wa.me/51984509207?text=${msg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Your travel designer will receive this immediately!" });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={heroCusco} alt="Cusco landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center container mx-auto px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl lg:text-7xl font-bold text-background mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-background font-medium mb-4"
          >
            Let’s make your perfect vacation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-background/90 text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            <p>Your trip will be personalised, just for you, by one of our expert travel designers.</p>
            <p>So let us know as much as you can about your wishes and your needs. Then we can create your bespoke trip, with accommodation, activities and expert local guides, all to suit you.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Form Sidebar / Steps */}
              <div className="lg:col-span-4 space-y-8">
                <div className="space-y-12 relative">
                  {/* Step Indicators */}
                  {[
                    { n: 1, title: "About You", icon: User },
                    { n: 2, title: "Your Trip", icon: Plane },
                    { n: 3, title: "Many Details", icon: Info }
                  ].map((s) => (
                    <div key={s.n} className="flex items-center gap-6 group relative z-10">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl transition-all duration-500 border-2 ${step === s.n
                        ? "bg-foreground text-background border-foreground shadow-luxury scale-110"
                        : step > s.n
                          ? "bg-primary/20 text-foreground border-primary/20"
                          : "bg-background text-foreground/30 border-border group-hover:border-foreground/20"
                        }`}>
                        <s.icon className={`w-6 h-6 ${step === s.n ? "animate-pulse" : ""}`} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${step === s.n ? "text-primary" : "text-foreground/40"}`}>Step 0{s.n}</span>
                        <span className={`text-xl font-bold transition-colors ${step === s.n ? "text-foreground" : "text-foreground/40"}`}>{s.title}</span>
                      </div>
                    </div>
                  ))}
                  {/* Vertical Progress Line */}
                  <div className="absolute left-7 top-6 bottom-6 w-0.5 bg-border -z-0" />
                  <motion.div
                    className="absolute left-7 top-6 w-0.5 bg-primary -z-0 origin-top"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: (step - 1) / 2 }}
                    transition={{ duration: 0.5 }}
                    style={{ height: 'calc(100% - 48px)' }}
                  />
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-heading text-xl font-bold mb-4">Need immediate help?</h3>
                  <div className="space-y-4">
                    <a href="https://wa.me/51984509207" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <span className="font-medium">+51 984 509 207</span>
                    </a>
                    <a href="mailto:leadingperu@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">leadingperu@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="lg:col-span-8">
                <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-luxury border border-border/50 relative overflow-hidden">
                  <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()} className="relative z-10">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={step}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="space-y-8"
                      >
                        {step === 1 && (
                          <div className="space-y-6">
                            <div className="space-y-2">
                              <h2 className="text-3xl font-bold tracking-tight">About You</h2>
                              <p className="text-muted-foreground">Please provide your full name and contact information.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-foreground/70">Your full name</label>
                                <input
                                  required
                                  value={form.name}
                                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                                  className="w-full bg-background border-b-2 border-border p-4 text-xl focus:border-primary focus:outline-none transition-colors"
                                  placeholder="John Doe"
                                />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <label className="text-sm font-bold uppercase tracking-wider text-foreground/70">Your email</label>
                                  <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full bg-background border-b-2 border-border p-4 text-xl focus:border-primary focus:outline-none transition-colors"
                                    placeholder="email@example.com"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-bold uppercase tracking-wider text-foreground/70">Your phone number</label>
                                  <input
                                    required
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className="w-full bg-background border-b-2 border-border p-4 text-xl focus:border-primary focus:outline-none transition-colors"
                                    placeholder="+1 234 567 890"
                                  />
                                  <span className="text-[10px] uppercase font-bold text-muted-foreground opacity-60">Include full country dialling code</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-foreground/70">Country</label>
                                <input
                                  required
                                  value={form.country}
                                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                                  className="w-full bg-background border-b-2 border-border p-4 text-xl focus:border-primary focus:outline-none transition-colors"
                                  placeholder="Where are you traveling from?"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {step === 2 && (
                          <div className="space-y-6">
                            <div className="space-y-2">
                              <h2 className="text-3xl font-bold tracking-tight">Your Trip</h2>
                              <p className="text-muted-foreground">Tell us where you want to go and for how long.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-8">
                              <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-foreground/70 flex items-center gap-2">
                                  <Plane className="w-4 h-4 text-primary" /> Preferred Destinations / Tour
                                </label>
                                <select
                                  value={form.destinations}
                                  onChange={(e) => setForm({ ...form, destinations: e.target.value })}
                                  className="w-full bg-background border-b-2 border-border p-4 text-xl focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                                >
                                  <option value="">Select a Tour or Destination</option>
                                  <optgroup label="Peru Tours">
                                    {tours.filter(t => t.country === "Peru").map(t => (
                                      <option key={t.id} value={t.title}>{t.title}</option>
                                    ))}
                                  </optgroup>
                                  <optgroup label="Other Destinations">
                                    <option value="Bolivia">Bolivia (Salt Flats & Andes)</option>
                                    <option value="Ecuador">Ecuador (Galápagos & Amazon)</option>
                                    <option value="Chile">Chile (Atacama & Patagonia)</option>
                                    <option value="Custom Bespoke Journey">Custom Bespoke Journey</option>
                                  </optgroup>
                                </select>
                                <p className="text-[10px] uppercase font-bold text-muted-foreground opacity-60">Optimized for your selected experience</p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <label className="text-sm font-bold uppercase tracking-wider text-foreground/70 flex items-center gap-2">
                                    <CalendarIcon className="w-4 h-4 text-primary" /> When? (Travel Dates)
                                  </label>
                                  <input
                                    type="date"
                                    value={form.dates}
                                    onChange={(e) => setForm({ ...form, dates: e.target.value })}
                                    className="w-full bg-background border-b-2 border-border p-4 text-xl focus:border-primary focus:outline-none transition-colors cursor-pointer"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-bold uppercase tracking-wider text-foreground/70 flex items-center gap-2">
                                    <Users className="w-4 h-4 text-primary" /> Number of Travelers
                                  </label>
                                  <input
                                    value={form.travelers}
                                    onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                                    className="w-full bg-background border-b-2 border-border p-4 text-xl focus:border-primary focus:outline-none transition-colors"
                                    placeholder="Ex: 2 Adults, 1 Child"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-foreground/70">Duration (Approx Days)</label>
                                <input
                                  value={form.duration}
                                  onChange={(e) => setForm({ ...form, duration: e.target.value })}
                                  className="w-full bg-background border-b-2 border-border p-4 text-xl focus:border-primary focus:outline-none transition-colors"
                                  placeholder="Ex: 7-10 days"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {step === 3 && (
                          <div className="space-y-6">
                            <div className="space-y-2">
                              <h2 className="text-3xl font-bold tracking-tight">Many Details</h2>
                              <p className="text-muted-foreground">The more we know, the better we can craft your journey.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-foreground/70">Estimated Budget (Optional)</label>
                                <input
                                  value={form.budget}
                                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                                  className="w-full bg-background border-b-2 border-border p-4 text-xl focus:border-primary focus:outline-none transition-colors"
                                  placeholder="Ex: $5,000 - $8,000 per person"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-foreground/70">Any special wishes or requirements?</label>
                                <textarea
                                  rows={6}
                                  value={form.message}
                                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                                  className="w-full bg-background border-2 border-border rounded-2xl p-4 text-lg focus:border-primary focus:outline-none transition-colors resize-none"
                                  placeholder="Dietary needs, physical limitations, or specific luxury requests..."
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="flex items-center gap-2 text-foreground/60 font-bold hover:text-foreground transition-colors py-2 px-4"
                        >
                          <ChevronLeft className="w-5 h-5" /> Back
                        </button>
                      ) : <div />}

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!isStepValid()}
                          className="flex items-center gap-2 bg-foreground text-background py-4 px-10 rounded-2xl font-bold hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-30 disabled:translate-y-0 disabled:cursor-not-allowed"
                        >
                          Next: {step === 1 ? "Your Trip" : "Many Details"} <ChevronRight className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={!isStepValid()}
                          className="flex items-center gap-3 bg-primary text-primary-foreground py-4 px-12 rounded-2xl font-bold hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-30 disabled:translate-y-0 disabled:cursor-not-allowed"
                        >
                          Create My Bespoke Trip <Send className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold border-b-4 border-primary inline-block pb-2 mb-4">Common Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know before we start planning.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-3xl px-8 border border-border shadow-sm overflow-hidden">
                <AccordionTrigger className="hover:no-underline py-6 font-heading font-bold text-xl text-foreground text-left group">
                  <span className="group-hover:text-primary transition-colors">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-[17px] leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="font-heading text-4xl font-bold">Our Headquarters</h2>
                <p className="text-muted-foreground text-lg">Visit us in the historic heart of Cusco.</p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-card rounded-3xl border border-border/50">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Cusco, Peru</h4>
                    <p className="text-muted-foreground">Calle Fierro 478, Cercado, Cusco</p>
                    <p className="text-primary font-medium mt-2">Open Daily: 9am - 7pm</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-card rounded-3xl border border-border/50">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">USA Support</h4>
                    <p className="text-muted-foreground">Bespoke assistance for North American travelers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border-8 border-card relative group">
              <iframe
                title="Leading Peru Travel office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.1!2d-71.9785!3d-13.5183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCusco%2C+Peru!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
