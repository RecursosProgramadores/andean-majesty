import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Check, X, ArrowLeft, MessageCircle, Calendar, Star, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { tours } from "@/data/tours";

const TourDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showStickyBar, setShowStickyBar] = useState(false);

  const tour = tours.find((t) => t.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past the hero (approx 400px)
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!tour) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">Tour Not Found</h1>
          <Link to="/tours" className="mt-4 inline-block text-primary hover:underline">← Back to Tours</Link>
        </div>
      </Layout>
    );
  }

  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in the ${tour.title} tour. Obtain my personalized quote.`);
  const phoneNumber = "51941345282";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={tour.image} alt={`${tour.title} luxury tour`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-10">
          <Link to="/tours" className="inline-flex items-center gap-1 text-background/70 hover:text-background text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Tours
          </Link>
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-background">{tour.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="flex items-center gap-1 text-background/80 text-sm"><MapPin className="w-4 h-4" />{tour.destinations.join(" • ")}</span>
            <span className="flex items-center gap-1 text-background/80 text-sm"><Clock className="w-4 h-4" />{tour.duration} days</span>
            {tour.badge && <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">{tour.badge}</span>}
          </div>
          <p className="mt-2 text-accent font-bold text-2xl">From USD ${tour.price.toLocaleString()}</p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">About This Tour</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-8">{tour.description}</p>

                {tour.gallery && tour.gallery.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    {tour.gallery.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="aspect-video rounded-xl overflow-hidden shadow-luxury"
                      >
                        <img src={img} alt={`${tour.title} view ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Itinerary Timeline (Overview) */}
                <div className="mt-12 space-y-0 border-b border-border pb-12">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-8">Itinerary Overview</h3>
                  {tour.itinerary.map((day, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 md:gap-10 group"
                    >
                      {/* Day label */}
                      <div className="w-14 md:w-20 pt-1 text-sm font-bold text-foreground shrink-0 uppercase tracking-widest flex items-center h-fit">
                        Día {day.day}
                      </div>

                      {/* Timeline Line & Dot */}
                      <div className="relative flex flex-col items-center shrink-0">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#e6c64f] mt-2.5 z-10 border-2 border-background shadow-sm" />
                        {idx < tour.itinerary.length - 1 && (
                          <div className="w-[3px] h-full bg-[#e6c64f]/50 absolute top-4" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pb-10 pt-1">
                        <h4 className="font-heading font-bold text-xl text-foreground mb-2 leading-tight">
                          {day.title}
                        </h4>
                        {day.summary && (
                          <p className="text-muted-foreground text-sm lg:text-[15px] italic leading-relaxed max-w-2xl">
                            {day.summary}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Detailed Experience (Redesigned Timeline) */}
              <div className="space-y-12">
                <h2 className="font-heading text-3xl font-bold text-foreground">Detailed Experience</h2>

                <div className="relative space-y-20">
                  {/* Vertical Line across all items */}
                  <div className="absolute left-[2.45rem] md:left-[3.2rem] top-10 bottom-10 w-[2.5px] bg-foreground" />

                  {tour.itinerary.map((day) => {
                    const [highlight, ...rest] = day.description.split('\n\n');
                    return (
                      <div key={day.day} className="relative pl-16 md:pl-24">
                        {/* Day Badge */}
                        <div className="absolute left-0 top-0 w-[5rem] md:w-[6.5rem] flex justify-center z-10">
                          <div className="bg-foreground text-background w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-xs md:text-sm shadow-xl transition-transform hover:scale-110">
                            Día {day.day}
                          </div>
                        </div>

                        {/* Event Content */}
                        <div className="space-y-4">
                          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight">
                            {day.title}
                          </h3>

                          <div className="text-muted-foreground leading-relaxed text-[15px] lg:text-base">
                            {/* All Caps Highlight */}
                            <p className="font-bold text-foreground mb-6 uppercase tracking-tight leading-snug border-l-4 border-primary/20 pl-4 py-1">
                              {highlight}
                            </p>

                            {/* Floating image on the right */}
                            {day.image && (
                              <div className="w-full md:w-[350px] md:float-right md:ml-8 md:mb-6 mb-8 rounded-2xl overflow-hidden shadow-luxury group relative">
                                <img
                                  src={day.image}
                                  alt={day.title}
                                  className="w-full aspect-video md:aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              </div>
                            )}

                            {/* Main Body Text (Wrapped around image) */}
                            <div className="whitespace-pre-line text-foreground/80 font-normal">
                              {rest.join('\n\n')}
                            </div>

                            {/* Clearfix */}
                            <div className="clear-both pt-4 md:pt-0"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Included / Not Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-border mt-20">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">What's Included</h3>
                  <div className="space-y-3">
                    {tour.included.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-foreground text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {tour.notIncluded && tour.notIncluded.length > 0 && (
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-6">What's Not Included</h3>
                    <div className="space-y-3">
                      {tour.notIncluded.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-muted-foreground group">
                          <X className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Tour Summary Card */}
                <div className="bg-card rounded-2xl p-6 shadow-luxury border border-border/50 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-150" />
                  <div className="relative z-10 space-y-4">
                    {tour.subtitle && (
                      <h3 className="font-heading text-xl font-bold text-foreground border-b border-border pb-3">
                        {tour.subtitle}
                      </h3>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-foreground/80">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">{tour.duration} días / {tour.nights || (tour.duration - 1)} noches</span>
                      </div>

                      <div className="flex items-start gap-3 text-foreground/80">
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Destinos visitados:</p>
                          <span className="text-sm leading-snug block">{tour.destinations.join(", ")}</span>
                        </div>
                      </div>

                      {tour.styleSummary && (
                        <div className="flex items-start gap-3 text-foreground/80">
                          <Star className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Estilo:</p>
                            <span className="text-sm leading-snug block">{tour.styleSummary}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA Card */}
                <div className="bg-[#1B262C] text-white rounded-2xl p-8 shadow-luxury space-y-8 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl transition-opacity duration-700 group-hover:opacity-50"></div>
                  <div className="relative z-10">
                    <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Exclusive Offer</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white/50 text-sm font-medium">From</span>
                      <p className="text-primary font-bold text-4xl md:text-5xl font-heading">USD ${tour.price.toLocaleString()}</p>
                    </div>
                    <p className="text-white/40 text-xs mt-2 uppercase tracking-tighter">per person • all-inclusive luxury</p>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <a
                      href={`https://wa.me/51941345282?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-5 rounded-xl font-bold hover:brightness-110 shadow-button transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <MessageCircle className="w-6 h-6" /> Inquire via WhatsApp
                    </a>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center w-full bg-primary text-primary-foreground py-5 rounded-xl font-bold hover:brightness-110 shadow-button transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Request Custom Quote
                    </Link>
                  </div>

                  <div className="text-[10px] text-white/30 text-center relative z-10 uppercase tracking-widest font-bold">
                    No commitment required. We'll respond within 24 hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar for Mobile */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border p-4 z-50 lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.15)]"
          >
            <div className="container mx-auto">
              <div className="flex flex-col gap-4">
                <div className="text-center">
                  <h3 className="text-md md:text-lg font-bold text-foreground leading-tight tracking-tight px-4">
                    {tour.subtitle} - {tour.duration} Días / {tour.nights || (tour.duration - 1)} Noches
                  </h3>
                </div>

                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/51941345282?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-[#25D366] text-white rounded-xl font-bold text-base md:text-lg shadow-button hover:brightness-110 active:scale-95 transition-all duration-200 uppercase tracking-wide px-4 text-center"
                  >
                    Cotización personalizada
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Padding for Mobile Sticky Bar */}
      <div className="h-40 lg:hidden"></div>
    </Layout>
  );
};

export default TourDetail;
