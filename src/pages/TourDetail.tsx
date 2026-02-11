import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Check, ArrowLeft, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { tours } from "@/data/tours";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TourDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = tours.find((t) => t.slug === slug);

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
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              </motion.div>

              {/* Itinerary */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Day-by-Day Itinerary</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {tour.itinerary.map((day) => (
                    <AccordionItem key={day.day} value={`day-${day.day}`} className="bg-card rounded-xl px-6 border border-border">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4 text-left">
                          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                            {day.day}
                          </span>
                          <span className="font-heading font-bold text-foreground">{day.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-14 text-muted-foreground">
                        {day.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Included */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What's Included</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.included.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div>
              <div className="sticky top-24 bg-card rounded-xl p-6 shadow-card space-y-6">
                <div>
                  <p className="text-muted-foreground text-sm">Starting from</p>
                  <p className="text-accent font-bold text-3xl font-heading">USD ${tour.price.toLocaleString()}</p>
                  <p className="text-muted-foreground text-xs mt-1">per person • all-inclusive</p>
                </div>
                <a
                  href={`https://wa.me/51941345282?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(tour.title)}%20tour`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> Inquire via WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Request Custom Quote
                </Link>
                <div className="text-xs text-muted-foreground text-center">
                  No commitment required. We'll respond within 24 hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TourDetail;
