import { motion } from "framer-motion";
import { Heart, Eye, Leaf, Target } from "lucide-react";
import Layout from "@/components/Layout";
import aboutTeam from "@/assets/about-team.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={aboutTeam} alt="Leading Peru Travel team with local Peruvian community" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-background">About Us</h1>
          <p className="mt-3 text-background/80 text-lg max-w-xl mx-auto">15+ years of passion, expertise, and commitment to unforgettable travel experiences.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeInUp}>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Leading Peru Travel was born from a deep passion for sharing the wonders of South America with the world. For over 15 years, we have been crafting all-inclusive luxury packages to Machu Picchu and beyond — creating journeys that go far deeper than typical tourism.
                </p>
                <p>
                  Founded in Cusco, the ancient capital of the Inca Empire, our team of expert local guides and travel designers brings an insider's perspective to every itinerary. We believe that true luxury isn't just about 5-star hotels and first-class trains — it's about authentic connections with the land, the people, and the living culture of Peru, Bolivia, Chile, and Ecuador.
                </p>
                <p>
                  What sets us apart is our deep commitment to community-based tourism. We partner directly with indigenous communities, ensuring that tourism becomes a force for positive change — supporting education, preserving traditions, and creating sustainable livelihoods for generations to come.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="bg-background rounded-xl p-8 shadow-card">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create extraordinary travel experiences that connect discerning travelers with the authentic soul of South America — through luxury, culture, and responsible tourism that benefits local communities.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="bg-background rounded-xl p-8 shadow-card">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be South America's most trusted luxury travel partner — recognized worldwide for our personalized service, cultural authenticity, and commitment to sustainable development in the communities we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div {...fadeInUp}>
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Commitment to Sustainability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every trip with Leading Peru Travel supports local communities directly. We employ local guides, source meals from regional producers, and allocate a portion of every booking to community education and infrastructure projects. We believe that the best travel experiences are those that leave a positive footprint — for travelers and for the places they visit.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <Heart className="w-5 h-5 text-destructive" />
              <span className="text-foreground font-semibold">Travel with purpose. Travel with us.</span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
