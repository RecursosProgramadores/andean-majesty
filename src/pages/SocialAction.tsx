import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Globe, Users, Shield, Award, Activity, HeartHandshake, UserPlus } from "lucide-react";

const SocialAction = () => {
    const values = [
        { title: "Commitment", icon: <Shield className="w-6 h-6" />, description: "Placeholder for Commitment description. Focusing on our long-term pledge to local communities." },
        { title: "Sustainability", icon: <Globe className="w-6 h-6" />, description: "Placeholder for Sustainability description. Ensuring our projects have a lasting positive impact." },
        { title: "Solidarity", icon: <Heart className="w-6 h-6" />, description: "Placeholder for Solidarity description. Standing together with those we serve to create opportunities." },
        { title: "Respect", icon: <Users className="w-6 h-6" />, description: "Placeholder for Respect description. Honoring the traditions and culture of every community." },
    ];

    const stats = [
        { label: "Years working", value: "15+", icon: <Award className="w-8 h-8" /> },
        { label: "Youth impacted", value: "2500+", icon: <Users className="w-8 h-8" /> },
        { label: "Sponsored tournaments", value: "45", icon: <Activity className="w-8 h-8" /> },
        { label: "Donated equipment", value: "1000+", icon: <HeartHandshake className="w-8 h-8" /> },
    ];

    const stories = [
        { name: "[Youth Name]", bio: "Placeholder bio for the first success story. How the project changed their life and their goals for the future." },
        { name: "[Youth Name]", bio: "Placeholder bio for the second success story. Highlighting educational or sporting achievements made possible by our programs." },
        { name: "[Youth Name]", bio: "Placeholder bio for the third success story. Focusing on community leadership and environmental stewardship." },
        { name: "[Youth Name]", bio: "Placeholder bio for the fourth success story. A personal narrative of resilience and growth through social action." },
        { name: "[Youth Name]", bio: "Placeholder bio for the fifth success story. Detailing the impact of mentorship and equipment donations." },
        { name: "[Youth Name]", bio: "Placeholder bio for the sixth success story. Future aspirations and the continuous support from our foundation." },
    ];

    return (
        <Layout>
            {/* 2. Hero / Título principal */}
            <section className="bg-white py-20 lg:py-32 border-b border-border/30">
                <div className="container mx-auto px-4 lg:px-8 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-heading text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight"
                    >
                        Social Action Projects in Peru
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed font-medium"
                    >
                        Empowering communities and preserving heritage through sustainable social initiatives and direct support programs across the Andes.
                    </motion.p>
                    <motion.a
                        href="#donate"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-primary text-primary-foreground font-bold uppercase tracking-[0.2em] px-10 py-5 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg"
                    >
                        Get Involved & Donate
                    </motion.a>
                </div>
            </section>

            {/* 3. Contenido Principal */}
            <section className="py-20 lg:py-32 bg-background overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="space-y-24">

                        {/* History */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="font-heading text-4xl font-bold text-foreground border-l-4 border-primary pl-6 py-2 uppercase tracking-wider">
                                Our History
                            </h2>
                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>Placeholder paragraph for our organization's history. Describing how we started our first social projects in Peru and the evolution of our commitment over the years.</p>
                                <p>Detailed historical context about the challenges faced by local communities and our initial responses. More placeholder text for narrative flow.</p>
                                <p>Third historical paragraph detailing growth and expanding scope of our social actions.</p>
                            </div>
                            <div className="bg-muted/30 p-8 rounded-2xl space-y-4">
                                <h3 className="font-heading text-2xl font-bold text-foreground uppercase tracking-tight">A Dream Come True</h3>
                                <p className="text-muted-foreground leading-relaxed">Narrative about achieving major milestones in our social programs. Placeholder text describing specific successes.</p>
                                <ul className="space-y-2">
                                    {["Community Center established", "Annual Scholarship Program launched", "Environmental conservation initiative expanded"].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-foreground font-semibold">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* About Us / Mission / Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="font-heading text-3xl font-bold text-foreground uppercase tracking-tight">About Us</h2>
                                <p className="text-muted-foreground leading-relaxed">Introductory paragraphs about our identity as a socially responsible travel agency. Placeholder content explaining our values.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="space-y-4">
                                    <h3 className="font-heading text-2xl font-bold text-primary uppercase tracking-widest">Our Mission</h3>
                                    <p className="text-muted-foreground leading-relaxed">Short paragraph mission statement placeholder. Defining our purpose in the social context of Peru.</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-heading text-2xl font-bold text-primary uppercase tracking-widest">Our Vision</h3>
                                    <p className="text-muted-foreground leading-relaxed">Short paragraph vision statement placeholder. Looking into the future of our impact.</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="text-center md:text-left">
                                <h3 className="font-heading text-3xl font-bold text-foreground mb-4 uppercase tracking-wider">Values We Promote</h3>
                                <p className="text-muted-foreground max-w-2xl">Introduction to the core humanitarian values that drive every project we undertake.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {values.map((v) => (
                                    <div key={v.title} className="p-8 bg-card border border-border/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                            {v.icon}
                                        </div>
                                        <h3 className="font-heading text-xl font-bold text-foreground mb-3 uppercase tracking-tight">{v.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Lines of Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="font-heading text-4xl font-bold text-foreground border-l-4 border-primary pl-6 py-2 uppercase tracking-wider">
                                Lines of Action
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Promotion of sports and healthy youth lifestyles in remote areas.",
                                    "Education initiatives and resource providing for local schools.",
                                    "Cultural and environmental preservation in Incan heritage sites.",
                                    "Direct social projects including infrastructure and healthcare support."
                                ].map((text, i) => (
                                    <div key={i} className="bg-muted/20 p-6 rounded-xl border border-border/30">
                                        <p className="text-foreground font-medium italic">"{text}"</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Impact Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="py-12"
                        >
                            <h2 className="font-heading text-4xl font-bold text-center mb-16 uppercase tracking-widest text-foreground">Our Impact</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {stats.map((s, i) => (
                                    <div key={i} className="text-center group">
                                        <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 shadow-lg">
                                            {s.icon}
                                        </div>
                                        <div className="text-4xl font-bold text-foreground tracking-tighter mb-2">{s.value}</div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stories */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-16"
                        >
                            <div className="text-center md:text-left">
                                <h2 className="font-heading text-4xl font-bold text-foreground mb-4 uppercase tracking-wider">Youth Stories</h2>
                                <p className="text-muted-foreground max-w-2xl">Voices from those whose lives have been transformed through our collective efforts.</p>
                            </div>
                            <div className="space-y-12">
                                {stories.map((s, i) => (
                                    <div key={i} className="relative pl-12 md:pl-16 border-l-2 border-border/50 pb-12 last:pb-0 last:border-0 group">
                                        <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-border group-hover:bg-primary transition-colors border-4 border-background" />
                                        <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{s.name}</h3>
                                        <p className="text-muted-foreground text-lg italic leading-relaxed">"{s.bio}"</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Collaboration */}
                        <div className="bg-accent/5 p-12 rounded-3xl border border-accent/20 space-y-12">
                            <div className="space-y-4">
                                <h2 className="font-heading text-3xl font-bold text-foreground uppercase tracking-tight text-center">Collaboration</h2>
                                <p className="text-muted-foreground text-center max-w-2xl mx-auto">Discover how you can contribute your time or resources to help us expand our reach.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h3 className="font-heading text-2xl font-bold text-primary uppercase tracking-widest flex items-center gap-3">
                                        <UserPlus className="w-6 h-6" /> Volunteers
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">Placeholder text for volunteer opportunities. How individuals can help on the ground in Cusco and beyond.</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-heading text-2xl font-bold text-primary uppercase tracking-widest flex items-center gap-3">
                                        <HeartHandshake className="w-6 h-6" /> Godparents
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">Details about our sponsorship program. How to become a godparent and support a youth's education and dreams.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Sección de Donación / Get Involved */}
            <section id="donate" className="py-24 bg-foreground text-background">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-background uppercase tracking-tight">
                            Get Involved and Donate
                        </h2>
                        <p className="text-[#e6c64f] font-bold text-xl uppercase tracking-widest font-heading">
                            Creating a legacy of hope together
                        </p>
                        <p className="text-background/60 text-lg max-w-2xl mx-auto pt-4">
                            Your contribution directly supports our educational and sporting programs. Every dollar counts towards creating a brighter future for the youth of Peru.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-foreground space-y-10"
                    >
                        <div>
                            <h3 className="font-heading text-2xl font-bold mb-8 uppercase tracking-[0.2em] border-b border-border pb-4">
                                Billing Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Donation Amount (USD)</label>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-muted-foreground">$</span>
                                        <input type="number" placeholder="50.00" className="w-full border border-border rounded-xl pl-10 pr-5 py-3 focus:outline-none focus:border-primary transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Payment Method</label>
                                    <select className="w-full border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-colors bg-background">
                                        <option>Credit Card</option>
                                        <option>PayPal</option>
                                        <option>Bank Transfer</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Message (Optional)</label>
                                    <textarea placeholder="Tell us why you're getting involved..." rows={3} className="w-full border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-colors resize-none" />
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-[0.3em] py-5 rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl text-lg">
                            Continue
                        </button>
                        <p className="text-center text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                            Secure SSL Transaction • Tax Deductible Receipt Provided
                        </p>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default SocialAction;
