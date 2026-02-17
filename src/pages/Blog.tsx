import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Calendar, Search, ArrowRight, Instagram, Mail, Phone, MapPin, Star } from "lucide-react";

// Image imports (using existing assets)
import heroImg from "@/assets/hero-cusco.jpg";
import destPeru from "@/assets/dest-peru.jpg";
import destBolivia from "@/assets/dest-bolivia.jpg";
import destEcuador from "@/assets/dest-ecuador.jpg";
import destChile from "@/assets/dest-chile.jpg";
import tourColca from "@/assets/tour-colca.jpg";
import tourTiticaca from "@/assets/tour-titicaca.jpg";

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "How to Prepare for the Inca Trail",
            date: "May 15, 2024",
            excerpt: "The Inca Trail to Machu Picchu is one of the most famous hikes in the world. Preparation is key to enjoying this once-in-a-lifetime experience...",
            image: destPeru,
        },
        {
            id: 2,
            title: "Exploring the Salar de Uyuni",
            date: "April 28, 2024",
            excerpt: "Discover the world's largest salt flat in Bolivia. A surreal landscape that looks like a giant mirror under the sky...",
            image: destBolivia,
        },
        {
            id: 3,
            title: "The Best Time to Visit Galapagos",
            date: "April 12, 2024",
            excerpt: "Planning a trip to the enchanted islands? Here's our guide on when to go and what wildlife you'll see during each season...",
            image: destEcuador,
        },
        {
            id: 4,
            title: "Hiking in Torres del Paine",
            date: "March 25, 2024",
            excerpt: "The crown jewel of Chilean Patagonia. Whether you do the W trek or the O circuit, the views are absolutely breathtaking...",
            image: destChile,
        },
        {
            id: 5,
            title: "Colca Canyon: Beyond the Condors",
            date: "March 10, 2024",
            excerpt: "While seeing condors is a highlight, the Colca Canyon offers much more in terms of culture, thermal baths, and stunning landscapes...",
            image: tourColca,
        },
        {
            id: 6,
            title: "Lake Titicaca: Living Traditions",
            date: "February 22, 2024",
            excerpt: "Visit the Uros floating islands and the Taquile island to experience traditions that have been preserved for centuries...",
            image: tourTiticaca,
        },
    ];

    const recentPosts = posts.slice(0, 3);

    const recommendedTours = [
        { title: "Magnificent Peru", duration: "10 Days", location: "Peru", image: destPeru },
        { title: "Bolivia Highlights", duration: "7 Days", location: "Bolivia", image: destBolivia },
        { title: "Galapagos Adventure", duration: "5 Days", location: "Ecuador", image: destEcuador },
    ];

    return (
        <Layout>
            {/* 2. Hero/Banner Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImg}
                        alt="Peruvian Landscape"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-heading text-5xl md:text-7xl font-bold mb-4"
                    >
                        Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Insights, travel tips, and stories from the heart of the Andes.
                    </motion.p>
                </div>
            </section>

            {/* 3. Main Content Section */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Left Column: Posts Grid */}
                        <div className="lg:w-3/4">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {posts.map((post, index) => (
                                    <motion.article
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-luxury border border-border/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <div className="aspect-[16/10] overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-widest">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </div>
                                            <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="mt-auto">
                                                <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                                                    Read More <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>

                            {/* Pagination Placeholder */}
                            <div className="mt-16 flex justify-center gap-3">
                                {[1, 2, 3].map((num) => (
                                    <button
                                        key={num}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border ${num === 1
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "bg-background text-foreground border-border hover:bg-muted"
                                            }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                                <button className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-muted font-bold text-lg">
                                    {">"}
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Sidebar */}
                        <aside className="lg:w-1/4 space-y-12">
                            {/* Search Widget */}
                            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                                <h4 className="font-heading text-lg font-bold mb-4 uppercase tracking-wider border-b border-border pb-2 text-foreground">
                                    Search
                                </h4>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        className="w-full bg-muted/50 border border-border rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                </div>
                            </div>

                            {/* Recent Posts Widget */}
                            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                                <h4 className="font-heading text-lg font-bold mb-4 uppercase tracking-wider border-b border-border pb-2 text-foreground">
                                    Recent Posts
                                </h4>
                                <div className="space-y-4">
                                    {recentPosts.map((post) => (
                                        <div key={post.id} className="flex gap-3 group cursor-pointer">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-border/50">
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h5 className="text-sm font-bold leading-snug text-foreground/80 group-hover:text-primary transition-colors line-clamp-2">
                                                    {post.title}
                                                </h5>
                                                <span className="text-[10px] text-muted-foreground uppercase mt-1 tracking-tighter">{post.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Categories Widget */}
                            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                                <h4 className="font-heading text-lg font-bold mb-4 uppercase tracking-wider border-b border-border pb-2 text-foreground">
                                    Categories
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Adventure", "Culture", "Machu Picchu", "Patagonia", "Tips", "Wildlife"].map((cat) => (
                                        <button key={cat} className="px-3 py-1.5 bg-muted/50 hover:bg-primary hover:text-primary-foreground text-xs font-bold rounded-full transition-colors text-foreground/70">
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Widget */}
                            <div className="bg-foreground text-background p-8 rounded-2xl shadow-luxury relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
                                <div className="relative z-10">
                                    <h4 className="font-heading text-xl font-bold mb-3 border-b border-background/10 pb-2 text-accent">
                                        Newsletter
                                    </h4>
                                    <p className="text-sm text-background/70 mb-6 leading-relaxed">
                                        Subscribe to receive latest travel news and exclusive offers.
                                    </p>
                                    <div className="space-y-3">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full bg-background/10 border border-background/20 rounded-lg py-3 px-4 text-sm text-background focus:outline-none focus:border-primary"
                                        />
                                        <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all active:scale-95">
                                            Subscribe Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Instagram Feed Placeholder */}
                            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                                <h4 className="font-heading text-lg font-bold mb-4 uppercase tracking-wider border-b border-border pb-2 text-foreground">
                                    Follow Us
                                </h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {[destPeru, destBolivia, destEcuador, destChile, tourColca, tourTiticaca].map((img, i) => (
                                        <div key={i} className="aspect-square rounded-lg overflow-hidden border border-border/50 group cursor-pointer relative">
                                            <img src={img} alt="Instagram" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Instagram className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>

            {/* 4. Recommended Journeys Section */}
            <section className="py-20 bg-muted/30 border-y border-border/50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">Recommended Journeys</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                        <p className="mt-4 text-muted-foreground uppercase tracking-widest text-sm font-bold">Handcrafted travel experiences</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {recommendedTours.map((tour, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group bg-card rounded-2xl overflow-hidden shadow-luxury border border-border/50"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        {tour.duration}
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-2 block">{tour.location}</span>
                                    <h3 className="font-heading text-xl font-bold text-foreground mb-6 uppercase tracking-tight">{tour.title}</h3>
                                    <button className="w-full bg-foreground text-background py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all">
                                        View Tour
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Awards Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">Our Awards</h2>
                        <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">World Travel Awards Recognition</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple Logo Placeholders */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-muted/50 rounded-full flex items-center justify-center border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                                    <Star className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter mt-4 text-center">Award {i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default Blog;
