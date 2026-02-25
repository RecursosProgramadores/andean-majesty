import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { tours, destinations, testimonials } from "@/data/tours";
import { allBlogPosts } from "@/data/blogs";
import { Star, Clock, Shield, Users, Sparkles, MapPin, ArrowRight, ChevronLeft, ChevronRight, Quote, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-machu-picchu.jpg";
import destPeru from "@/assets/dest-peru.jpg";
import destBolivia from "@/assets/dest-bolivia.jpg";
import destChile from "@/assets/dest-chile.jpg";
import destEcuador from "@/assets/dest-ecuador.jpg";
import destAmazon from "@/assets/dest-amazon.jpg";
import tourColca from "@/assets/tour-colca.jpg";
import tourTiticaca from "@/assets/tour-titicaca.jpg";
import logoAATC from "@/assets/company/AATC.webp";
import logoMincetur from "@/assets/company/MINCETUR.png";
import logoPromPeru from "@/assets/company/PromPeru.png";
import logoCamaraCusco from "@/assets/company/camaracusco.png";
import logoDircetur from "@/assets/company/dircetur.png";
import logoFitur from "@/assets/company/logo-FITUR.png";
import logoMarcaPeru from "@/assets/company/marcaperu.png";

const partnerLogos = [
  { src: logoAATC, alt: "AATC" },
  { src: logoMincetur, alt: "MINCETUR" },
  { src: logoPromPeru, alt: "PromPeru" },
  { src: logoCamaraCusco, alt: "Camara Cusco" },
  { src: logoDircetur, alt: "Dircetur" },
  { src: logoFitur, alt: "FITUR" },
  { src: logoMarcaPeru, alt: "Marca Peru" },
];

const destImages: Record<string, string> = {
  Peru: destPeru,
  Bolivia: destBolivia,
  Chile: destChile,
  Ecuador: destEcuador,
};



const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const Index = () => {
  const featuredTours = tours.slice(0, 6);

  return (
    <Layout showPadding={false}>
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
              href="https://wa.me/51984509207?text=Hi!%20I'm%20interested%20in%20a%20luxury%20tour%20to%20Machu%20Picchu"
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
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Luxury experiences. Tailor-made trips
              </h2>
              <p className="text-primary font-bold text-lg mb-4 uppercase tracking-wider">
                Luxury South America Vacation Packages
              </p>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                Experience Peru through exclusive, custom-designed luxury journeys.
              </p>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />
            </motion.div>

            <motion.div {...fadeInUp} className="text-center mb-12">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">Why Choose Leading Peru Travel</h3>
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
        </div>
      </section>

      {/* FEATURED DESTINATIONS (COUNTRIES) */}
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
                  to={`/destinations/${dest.name.toLowerCase()}`}
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
                    <p className="text-primary text-xs font-semibold mt-2 uppercase tracking-widest">{dest.tourCount} tours available</p>
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
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={tour.image}
                      alt={`${tour.title} luxury tour`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                    {tour.badge && (
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-10">
                        {tour.badge}
                      </span>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="font-heading text-xl lg:text-2xl font-bold text-background leading-tight mb-2">{tour.title}</h3>
                      <div className="flex items-center gap-2 text-[10px] text-background/70 uppercase tracking-widest font-bold">
                        <MapPin className="w-3 h-3 text-primary" />
                        {tour.destinations.join(" • ")}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-4">
                    <p className="text-muted-foreground text-sm line-clamp-2">{tour.shortDescription}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div>
                        <span className="text-xs text-muted-foreground">From</span>
                        <p className="text-primary font-bold text-lg">USD ${tour.price.toLocaleString()}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-semibold">{tour.duration} days</span>
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



      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-32 bg-[#f8f5f0] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">Real Travelers, Real Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">Discover why hundreds of families and explorers choose Andean Majesty for their life-changing journeys.</p>
          </motion.div>

          <div className="relative group">
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: "-Infinity" }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-6 lg:gap-8 hover:[animation-play-state:paused]"
              >
                {/* Duplicate the array to create the infinite loop effect */}
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div
                    key={i}
                    className="shrink-0 w-[320px] md:w-[350px] lg:w-[400px] bg-white rounded-3xl p-8 shadow-card hover:shadow-luxury transition-all duration-500 flex flex-col h-full border border-black/5"
                  >
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className={`w-4 h-4 ${starIdx < t.rating ? "fill-[#e6c64f] text-[#e6c64f]" : "text-muted-foreground/20"}`}
                        />
                      ))}
                    </div>

                    <h3 className="font-heading font-bold text-lg mb-3 text-foreground line-clamp-1">"{t.title}"</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed italic mb-8 flex-grow">
                      "{t.text}"
                    </p>

                    <div className="mt-auto space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-foreground">{t.name}</p>
                          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-tight">{t.location}</p>
                        </div>
                      </div>

                      {t.response && (
                        <div className="bg-[#f8f5f0] p-4 rounded-2xl border-l-2 border-[#e6c64f]/50 mt-4">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#e6c64f] mb-2 flex items-center gap-1.5">
                            <Quote className="w-3 h-3 rotate-180" /> Our Response
                          </p>
                          <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
                            {t.response}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient Mask to soften edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f8f5f0] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8f5f0] to-transparent z-10 pointer-events-none" />

            <div className="mt-16 text-center">
              <a
                href="https://www.tripadvisor.com.pe/Attraction_Review-g8734342-d14029313-Reviews-Leading_Peru_Travel-San_Sebastian_Cusco_Region.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors border-b-2 border-primary/20 pb-2"
              >
                View all reviews on TripAdvisor <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOURNAL (BLOG TEASER) */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Latest from The Journal</h2>
            <p className="mt-3 text-muted-foreground">Stories, guides, and inspiration for the discerning adventurer.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allBlogPosts.slice(0, 3).map((post, i) => (
              <motion.article
                key={post.id}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
              >
                <Link to="/blog" className="block relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 backdrop-blur-md text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-3 font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {post.date}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="mt-auto inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all"
                  >
                    Read Story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all">
              Explore More Stories <ArrowRight className="w-4 h-4" />
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
              href="https://wa.me/51984509207?text=Hi!%20I'm%20interested%20in%20a%20luxury%20tour%20to%20Machu%20Picchu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-all"
            >
              WhatsApp Us
            </a>
          </motion.div>


        </div>
      </section>

      {/* ACCREDITATIONS SECTION */}
      <section className="py-16 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-[0.4em] mb-12 opacity-70">
              We are a legally accredited company
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
              {partnerLogos.map((logo, idx) => (
                <div key={idx} className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
