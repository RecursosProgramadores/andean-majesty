import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, Shield, Users, Sparkles, MapPin, ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import { tours, destinations, testimonials } from "@/data/tours";
import heroImg from "@/assets/hero-machu-picchu.jpg";
import destPeru from "@/assets/dest-peru.jpg";
import destBolivia from "@/assets/dest-bolivia.jpg";
import destChile from "@/assets/dest-chile.jpg";
import destEcuador from "@/assets/dest-ecuador.jpg";
import destAmazon from "@/assets/dest-amazon.jpg";
import tourColca from "@/assets/tour-colca.jpg";
import tourTiticaca from "@/assets/tour-titicaca.jpg";

const destImages: Record<string, string> = {
  Peru: destPeru,
  Bolivia: destBolivia,
  Chile: destChile,
  Ecuador: destEcuador,
};

const galleryImages = [destPeru, destBolivia, destChile, destEcuador, destAmazon, tourColca, tourTiticaca, heroImg];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const Index = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const featuredTours = tours.slice(0, 6);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Machu Picchu at sunrise with golden mist over ancient Incan ruins"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-background leading-tight max-w-4xl mx-auto"
          >
            Luxury experiences. Tailor-made trips
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-background/85 font-body max-w-2xl mx-auto"
          >
            Experience Peru through exclusive, custom-designed luxury journeys. Over 15 years of passion creating unforgettable dream journeys.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#featured-tours"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all shadow-luxury"
            >
              Explore Luxury Packages
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/51941345282?text=Hi!%20I'm%20interested%20in%20a%20luxury%20tour%20to%20Machu%20Picchu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-background/50 text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-background/10 transition-all"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-8 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Clock, title: "15+ Years", desc: "Experience" },
              { icon: Sparkles, title: "Fully Personalized", desc: "Luxury Travel" },
              { icon: Users, title: "Sustainable", desc: "& Community-Focused" },
              { icon: Shield, title: "24/7", desc: "Concierge Support" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }} className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm lg:text-base">{item.title}</p>
                  <p className="text-muted-foreground text-xs lg:text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRAVEL WITH US (EXTENDED) */}
      <section className="py-16 lg:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Travel With Leading Peru Travel?
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                "With over 15 years of experience, Machu Picchu Travel Tour specializes in creating authentic, tailor-made journeys across Peru and South America. Our passion for excellence, deep destination knowledge, and meticulous attention to detail ensure every trip is thoughtfully designed and flawlessly executed.",
                "We work with expert local guides, carefully selected accommodations, and trusted partners to deliver meaningful experiences that go beyond traditional tourism. From cultural encounters to exclusive adventures and luxury escapes, each journey is crafted to reflect your interests, comfort, and travel style.",
                "At Machu Picchu Travel Tour, we believe travel should be personal, enriching, and unforgettable. From the moment you start planning until the end of your journey, our dedicated team is by your side—so you can explore with confidence, comfort, and peace of mind."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: i * 0.15 }}
                  className="bg-card p-6 lg:p-8 rounded-xl border border-border/50 shadow-luxury hover:shadow-card-hover transition-all duration-300 group flex flex-col"
                >
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg group-hover:text-foreground transition-colors">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Featured Destinations</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Explore the most breathtaking corners of South America with our expertly crafted luxury itineraries.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
              <motion.div key={dest.name} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}>
                <Link
                  to={`/tours?country=${dest.name}`}
                  className="group block relative overflow-hidden rounded-xl aspect-[3/4] shadow-card hover:shadow-card-hover transition-all duration-500"
                >
                  <img
                    src={destImages[dest.name]}
                    alt={`Luxury travel destination ${dest.name}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl font-bold text-background">{dest.name}</h3>
                    <p className="text-background/75 text-sm mt-1">{dest.description}</p>
                    <p className="text-accent text-xs font-semibold mt-2">{dest.tourCount} tours available</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section id="featured-tours" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Our Luxury Packages</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Handcrafted itineraries designed for discerning travelers seeking authentic South American experiences.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, i) => (
              <motion.div key={tour.id} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}>
                <Link to={`/tours/${tour.slug}`} className="group block bg-background rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={tour.image}
                      alt={`${tour.title} luxury tour`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {tour.badge && (
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {tour.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3" />
                      {tour.destinations.join(" • ")}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">{tour.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{tour.shortDescription}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div>
                        <span className="text-xs text-muted-foreground">From</span>
                        <p className="text-accent font-bold text-lg">USD ${tour.price.toLocaleString()}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{tour.duration} days</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="text-center mt-10">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-luxury"
            >
              View All Tours <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Why Choose Leading Peru Travel</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Luxury Experiences", desc: "5-star hotels, gourmet dining, first-class trains, and private transfers. Every detail curated for excellence." },
              { icon: Users, title: "Rural Community Tourism", desc: "Authentic connections with indigenous communities. Support sustainable development and cultural preservation." },
              { icon: MapPin, title: "Expert Local Guides", desc: "Bilingual guides with deep knowledge of history, culture, and nature. Born and raised in the places you'll visit." },
              { icon: Shield, title: "100% Customizable", desc: "Every itinerary is tailored to your preferences, pace, and interests. Your dream trip, your way." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }} className="text-center p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">What Our Travelers Say</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto relative">
            <motion.div key={testimonialIdx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="bg-background rounded-2xl p-8 lg:p-12 shadow-card text-center">
              <Quote className="w-10 h-10 text-accent/40 mx-auto mb-6" />
              <p className="text-foreground text-lg lg:text-xl leading-relaxed italic font-body">
                "{testimonials[testimonialIdx].text}"
              </p>
              <div className="mt-6 flex items-center justify-center gap-1">
                {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 font-heading font-bold text-foreground">{testimonials[testimonialIdx].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[testimonialIdx].location}</p>
            </motion.div>
            <div className="flex justify-center gap-3 mt-8">
              <button onClick={() => setTestimonialIdx((p) => (p - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Previous testimonial">
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)} className={`w-3 h-3 rounded-full transition-colors ${i === testimonialIdx ? "bg-primary" : "bg-primary/20"}`} aria-label={`Go to testimonial ${i + 1}`} />
              ))}
              <button onClick={() => setTestimonialIdx((p) => (p + 1) % testimonials.length)} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Travel Gallery</h2>
            <p className="mt-3 text-muted-foreground">A glimpse of the extraordinary experiences awaiting you.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {galleryImages.slice(0, 8).map((img, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.05 }} className={`overflow-hidden rounded-lg ${i === 0 || i === 5 ? "row-span-2" : ""}`}>
                <img src={img} alt={`South America luxury travel photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="text-center mt-8">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <img src={destAmazon} alt="Amazon rainforest background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h2 {...fadeInUp} className="font-heading text-3xl lg:text-5xl font-bold text-background max-w-3xl mx-auto">
            Ready for Your South American Adventure?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-background/80 text-lg max-w-xl mx-auto">
            Let our travel experts craft your perfect luxury itinerary. No obligation, just inspiration.
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all shadow-luxury">
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/51941345282?text=Hi!%20I'm%20interested%20in%20a%20luxury%20tour%20to%20Machu%20Picchu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-all"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
