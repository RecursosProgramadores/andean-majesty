import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Calendar, Search, ArrowRight, Instagram, Mail, Phone, MapPin, Star, ChevronLeft, Share2, Twitter, Link as LinkIcon } from "lucide-react";
import { allBlogPosts } from "@/data/blogs";
import { BlogPost } from "@/types/blog";

// Image imports (using existing assets)
import heroImg from "@/assets/hero-cusco.jpg";
import destPeru from "@/assets/dest-peru.jpg";
import facebookIcon from "@/assets/logos/facebook.svg";
import destBolivia from "@/assets/dest-bolivia.jpg";
import destEcuador from "@/assets/dest-ecuador.jpg";
import destChile from "@/assets/dest-chile.jpg";

import { Link } from "react-router-dom";

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Scroll to top when post is selected
    useEffect(() => {
        if (selectedPost) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [selectedPost]);

    const filteredPosts = allBlogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const recommendedTours = [
        {
            title: "Magnificent Peru",
            duration: "6 Days",
            location: "Peru",
            image: destPeru,
            slug: "lima-to-machu-picchu-memorable-journey",
            badge: "Best Seller",
        },
        {
            title: "Bolivia Highlights",
            duration: "11 Days",
            location: "Bolivia",
            image: destBolivia,
            slug: "memorable-bolivia-experience",
            badge: "Top Rated",
        },
        {
            title: "Galapagos Adventure",
            duration: "14 Days",
            location: "Ecuador",
            image: destEcuador,
            slug: "galapagos-machu-picchu-nature-wonders",
            badge: "Nature Choice",
        },
    ];

    return (
        <Layout>
            <AnimatePresence mode="wait">
                {!selectedPost ? (
                    <motion.div
                        key="blog-list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Hero Section */}
                        <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src={heroImg}
                                    alt="Peruvian Landscape"
                                    className="w-full h-full object-cover scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
                            </div>
                            <div className="relative z-10 text-center text-white px-4">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6 inline-block"
                                >
                                    Travel Insights
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="font-heading text-6xl md:text-8xl font-black mb-6 tracking-tighter"
                                >
                                    The Journal
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg md:text-2xl font-medium max-w-2xl mx-auto text-white/90"
                                >
                                    Stories, guides, and inspiration for the discerning adventurer.
                                </motion.p>
                            </div>
                        </section>

                        {/* Main Grid */}
                        <section className="py-20 lg:py-28 bg-background">
                            <div className="container mx-auto px-4 lg:px-8">
                                <div className="flex flex-col lg:flex-row gap-16">
                                    {/* Left Column: Posts Grid */}
                                    <div className="lg:w-3/4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            {filteredPosts.map((post, index) => (
                                                <motion.article
                                                    key={post.id}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                                    onClick={() => setSelectedPost(post)}
                                                    className="group cursor-pointer flex flex-col bg-card rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/40 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-3"
                                                >
                                                    <div className="aspect-[3/4] overflow-hidden relative">
                                                        <img
                                                            src={post.image}
                                                            alt={post.title}
                                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />

                                                        <div className="absolute top-6 left-6">
                                                            <span className="bg-primary/90 backdrop-blur-md text-primary-foreground px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                                                                {post.category}
                                                            </span>
                                                        </div>

                                                        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                                            <h3 className="font-heading text-2xl lg:text-3xl font-black mb-3 text-background group-hover:text-primary-foreground transition-colors leading-tight">
                                                                {post.title}
                                                            </h3>
                                                            <div className="flex items-center gap-2 text-[10px] text-background/70 font-black uppercase tracking-[0.2em]">
                                                                <Calendar className="w-3.5 h-3.5 text-primary" />
                                                                {post.date}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="p-10 pt-8 flex-1 flex flex-col">
                                                        <p className="text-muted-foreground/80 text-base leading-relaxed mb-8 line-clamp-3 font-medium">
                                                            {post.excerpt}
                                                        </p>
                                                        <div className="mt-auto flex items-center justify-between">
                                                            <span className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                                                                Read Story <ArrowRight className="w-4 h-4" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </motion.article>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sidebar */}
                                    <aside className="lg:w-1/4 space-y-16">
                                        <div className="bg-card/50 backdrop-blur-sm p-10 rounded-[3rem] border border-border/40 shadow-xl">
                                            <h4 className="font-heading text-xl font-black mb-8 uppercase tracking-[0.2em] border-l-4 border-primary pl-4">
                                                Search
                                            </h4>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    placeholder="Explore journeys..."
                                                    className="w-full bg-muted/30 border border-border/60 rounded-2xl py-4 pl-5 pr-12 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                                                />
                                                <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            </div>
                                        </div>

                                        <div className="bg-foreground text-background p-12 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-[100px] group-hover:bg-primary/30 transition-all duration-1000" />
                                            <div className="relative z-10">
                                                <Star className="text-primary w-12 h-12 mb-6 animate-pulse" />
                                                <h4 className="font-heading text-2xl font-black mb-4 border-b border-background/10 pb-4 text-white uppercase tracking-tight">
                                                    Traveler Guide
                                                </h4>
                                                <p className="text-base text-background/70 mb-10 leading-relaxed font-medium">
                                                    Join our community of world travelers for exclusive luxury insights.
                                                </p>
                                                <div className="space-y-5">
                                                    <input
                                                        type="email"
                                                        placeholder="email@example.com"
                                                        className="w-full bg-background/5 border border-background/10 rounded-2xl py-5 px-6 text-sm text-white focus:outline-none focus:border-primary placeholder:text-background/30 transition-all"
                                                    />
                                                    <button className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:brightness-110 shadow-2xl active:scale-[0.98] transition-all">
                                                        Go Premium
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </section>
                    </motion.div>
                ) : selectedPost && (
                    <motion.div
                        key="post-detail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-background min-h-screen relative"
                    >
                        {/* Scroll Progress Bar */}
                        <motion.div
                            className="fixed top-16 lg:top-[calc(5.5rem+1.6rem)] left-0 right-0 h-1 bg-primary z-[60] origin-left"
                            style={{ scaleX }}
                        />

                        {/* Sticky Post Header / Quick Actions */}
                        <div className="sticky top-16 lg:top-[calc(5rem+1.5rem)] z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 py-4 shadow-sm">
                            <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all group py-2 px-4 rounded-full hover:bg-primary/5 border border-transparent hover:border-primary/10"
                                >
                                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Return to Journal
                                </button>

                                <div className="flex items-center gap-4 border-l border-border/50 ml-4 pl-4 md:ml-6 md:pl-6">
                                    <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mr-2">Share story</span>
                                    <div className="flex gap-4">
                                        <a href="https://www.facebook.com/Machupicchutraveltour" target="_blank" rel="noopener noreferrer">
                                            <img src={facebookIcon} alt="Facebook" className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-primary transition-all hover:scale-110 opacity-70 hover:opacity-100" />
                                        </a>
                                        <Twitter className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-primary transition-all hover:scale-110" />
                                        <Share2 className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-primary transition-all hover:scale-110" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Article Header */}
                        <header className="container mx-auto px-4 lg:px-0 max-w-4xl py-20 lg:py-32 text-center">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-8">
                                <span className="bg-primary/10 text-primary border border-primary/20 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em]">
                                    {selectedPost.category}
                                </span>
                            </motion.div>
                            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-12 leading-[1.1] tracking-tighter">
                                {selectedPost.title}
                            </h1>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground border-y border-border/60 py-10 font-black tracking-widest uppercase">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-primary" /> {selectedPost.date}
                                </div>
                                <div className="hidden md:block w-2h-2 rounded-full bg-border" />
                                <div className="text-foreground flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Star className="w-4 h-4 text-primary" />
                                    </div>
                                    Andean Majesty Editorial
                                </div>
                            </div>
                        </header>

                        {/* Article Banner */}
                        <div className="container mx-auto px-4 lg:px-0 max-w-6xl mb-24 lg:mb-32">
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-[600px] object-cover rounded-[4rem] shadow-[0_48px_96px_-24px_rgba(0,0,0,0.3)]"
                            />
                        </div>

                        {/* Article Content */}
                        <div className="container mx-auto px-4 lg:px-0 max-w-3xl pb-32">
                            <div className="prose prose-stone prose-lg md:prose-2xl max-w-none text-muted-foreground/90 font-medium">
                                {selectedPost.sections.map((section, idx) => (
                                    <div key={idx} className="mb-16">
                                        {section.title && (
                                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 mt-20 leading-tight tracking-tight border-l-8 border-primary pl-8">
                                                {section.title}
                                            </h2>
                                        )}
                                        <p className="leading-[1.8] mb-8 whitespace-pre-wrap">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Author Footer */}
                            <div className="mt-32 p-12 rounded-[4rem] bg-card border border-border/40 flex flex-col md:flex-row items-center md:items-start gap-10 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-primary/10 transition-all duration-1000" />
                                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center shrink-0 shadow-inner">
                                    <Star className="text-primary w-12 h-12" />
                                </div>
                                <div className="text-center md:text-left space-y-5 relative z-10">
                                    <h4 className="font-heading text-2xl font-black uppercase tracking-tight text-foreground">Beyond Travel Excellence</h4>
                                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                                        At Andean Majesty, we don't just plan trips; we craft timeless stories. Our editorial team brings you the deepest insights into South America's luxury landscape.
                                    </p>
                                    <div className="flex justify-center md:justify-start gap-6 pt-4">
                                        <Instagram className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
                                        <a href="https://www.facebook.com/Machupicchutraveltour" target="_blank" rel="noopener noreferrer">
                                            <img src={facebookIcon} alt="Facebook" className="w-6 h-6 cursor-pointer hover:text-primary transition-colors opacity-70 hover:opacity-100" />
                                        </a>
                                        <Twitter className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
                                        <LinkIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Recommended Section (Surprise Refinement) */}
            <section className="py-32 bg-muted/20 border-t border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block"
                        >
                            Curated Selection
                        </motion.span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tighter">Recommended Journeys</h2>
                        <div className="w-32 h-2 bg-primary mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
                        <p className="mt-6 text-muted-foreground uppercase tracking-[0.2em] text-xs font-black max-w-xl mx-auto">Handcrafted by experts for the dreamers of the Andes</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {recommendedTours.map((tour, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -15 }}
                                className="group relative bg-card rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 transition-all duration-700 hover:shadow-[0_64px_96px_-32px_rgba(0,0,0,0.25)]"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />

                                    {/* Floating Badge */}
                                    <div className="absolute top-8 left-8 z-20">
                                        <span className="bg-white/95 backdrop-blur-md text-foreground px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                                            {tour.badge}
                                        </span>
                                    </div>

                                    {/* Duration Tag */}
                                    <div className="absolute top-8 right-8 z-20">
                                        <div className="bg-primary/95 text-primary-foreground px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {tour.duration}
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="absolute bottom-10 left-10 right-10 text-white z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                                        <div className="flex items-center gap-3 mb-3">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-90">{tour.location}</span>
                                        </div>
                                        <h3 className="font-heading text-3xl font-black uppercase tracking-tight leading-none mb-4">{tour.title}</h3>
                                    </div>
                                </div>
                                <div className="p-10 pt-4">
                                    <Link
                                        to={`/tours/${tour.slug}`}
                                        className="w-full flex items-center justify-center gap-3 bg-foreground text-background px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all group-hover:scale-[1.02] active:scale-95 shadow-xl"
                                    >
                                        Explore Tour <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Blog;
