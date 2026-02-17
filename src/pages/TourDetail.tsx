import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Check, X, ArrowLeft, ArrowRight, MessageCircle, Calendar, Star, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { tours } from "@/data/tours";

const TourDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [activeDay, setActiveDay] = useState(1);

  const tour = tours.find((t) => t.slug === slug);

  useEffect(() => {
    // Set initial active day when tour loads
    if (tour && tour.itinerary.length > 0) {
      setActiveDay(tour.itinerary[0].day);
    }
  }, [tour]);

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

  // Find the current active day data
  const activeDayData = tour.itinerary.find(d => d.day === activeDay) || tour.itinerary[0];
  const [highlight, ...rest] = activeDayData.description.split('\n\n');

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
                      className="flex gap-4 md:gap-10 group cursor-pointer"
                      onClick={() => {
                        setActiveDay(day.day);
                        window.scrollTo({
                          top: document.getElementById('detailed-experience')?.offsetTop ? document.getElementById('detailed-experience')!.offsetTop - 100 : 0,
                          behavior: 'smooth'
                        });
                      }}
                    >
                      {/* Day label */}
                      <div className={`w-14 md:w-20 pt-1 text-sm font-bold shrink-0 uppercase tracking-widest flex items-center h-fit transition-colors ${activeDay === day.day ? "text-primary scale-110" : "text-foreground"}`}>
                        Día {day.day}
                      </div>

                      {/* Timeline Line & Dot */}
                      <div className="relative flex flex-col items-center shrink-0">
                        <div className={`w-3.5 h-3.5 rounded-full mt-2.5 z-10 border-2 border-background shadow-sm transition-all duration-300 ${activeDay === day.day ? "bg-primary scale-150 ring-4 ring-primary/10" : "bg-[#e6c64f]"}`} />
                        {idx < tour.itinerary.length - 1 && (
                          <div className="w-[2px] h-full bg-[#e6c64f]/30 absolute top-4" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pb-10 pt-1">
                        <h4 className={`font-heading font-bold text-lg md:text-xl transition-colors ${activeDay === day.day ? "text-primary" : "text-foreground"}`}>
                          {day.title}
                        </h4>
                        {day.summary && (
                          <p className="text-muted-foreground text-sm lg:text-[14px] italic leading-relaxed max-w-2xl mt-1 line-clamp-2">
                            {day.summary}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Detailed Experience (Stacked Layout for maximum impact) */}
              <div id="detailed-experience" className="space-y-10 bg-background/50 rounded-[3rem] p-6 lg:p-12 border border-border/40 shadow-sm scroll-mt-24">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 pb-10 border-b border-border/60">
                  <div className="space-y-1">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tighter">Detailed Experience</h2>
                    <p className="text-muted-foreground text-[16px] font-medium italic">Immerse yourself in every moment of your journey.</p>
                  </div>
                  {/* Day Selector (Tabs) - More compact and luxury style */}
                  <div className="flex flex-wrap gap-1.5">
                    {tour.itinerary.map((day) => (
                      <button
                        key={day.day}
                        onClick={() => setActiveDay(day.day)}
                        className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${activeDay === day.day
                          ? "bg-foreground text-background border-foreground shadow-xl scale-105"
                          : "bg-white/80 text-foreground/40 border-border/50 hover:border-foreground/30 hover:text-foreground/70"
                          }`}
                      >
                        Día {day.day}
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDay}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-10"
                  >
                    {/* Event Content */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-6">
                        <div className="bg-[#1B262C] text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shadow-2xl shrink-0">
                          {activeDay}
                        </div>
                        <h3 className="font-heading text-2xl md:text-4xl font-black text-foreground leading-[1.1] tracking-tighter uppercase">
                          {activeDayData.title}
                        </h3>
                      </div>

                      <div className="space-y-6">
                        {/* All Caps Highlight - Always at the top */}
                        <p className="font-bold text-foreground text-xl md:text-2xl uppercase tracking-tight leading-snug border-l-8 border-primary pl-8 py-4 bg-primary/5 rounded-r-3xl mb-10">
                          {highlight}
                        </p>

                        <div className="block">
                          {/* Image Box - Floated for magazine wrap on desktop */}
                          {activeDayData.image && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="rounded-[2rem] overflow-hidden shadow-2xl group relative border-4 border-white w-full lg:w-[45%] lg:float-right lg:ml-10 lg:mb-8 mb-10 aspect-video lg:aspect-[4/3] z-10"
                            >
                              <img
                                src={activeDayData.image}
                                alt={activeDayData.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                              />
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-white text-xs font-bold uppercase tracking-widest">{activeDayData.title}</p>
                              </div>
                            </motion.div>
                          )}

                          {/* Main Body Text - Wraps around the image */}
                          <div className="whitespace-pre-line text-foreground/80 font-normal leading-relaxed text-[17px] md:text-xl">
                            {rest.join('\n\n')}
                          </div>

                          {/* Clearfix for the container */}
                          <div className="clear-both"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Tour Pricing */}
              <div className="pt-16 border-t border-border mt-20 space-y-6">
                <h2 className="font-heading text-3xl font-bold text-foreground uppercase tracking-tight">Tour Pricing</h2>
                <div className="space-y-4 max-w-3xl">
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    This exclusive, tailor-made experience has been meticulously crafted to align with your travel aspirations, comfort expectations, and individual passions.
                  </p>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    Your investment is thoughtfully adjusted according to your preferred accommodations, travel dates, and bespoke experiences, guaranteeing a smooth, sophisticated, and perfectly curated travel experience.
                  </p>
                  <Link
                    to={`/contact?tour=${encodeURIComponent(tour.title)}`}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline group"
                  >
                    👉 Get your personalized quote now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Included / Not Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-border mt-10">
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
