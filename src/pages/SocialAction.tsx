import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Globe, Users, Shield, Award, Activity, HeartHandshake, UserPlus } from "lucide-react";
import destPeru from "@/assets/dest-peru.jpg";

const SocialAction = () => {
    const values = [
        { title: "Commitment", icon: <Shield className="w-6 h-6" />, description: "Our long-term pledge to support the local communities of the Andes through education and sustainable work." },
        { title: "Sustainability", icon: <Globe className="w-6 h-6" />, description: "Ensuring our projects have a lasting positive impact on the environment and local culture." },
        { title: "Solidarity", icon: <Heart className="w-6 h-6" />, description: "Standing together with those we serve to create opportunities for a better future in the high mountains." },
        { title: "Respect", icon: <Users className="w-6 h-6" />, description: "Honoring the ancient traditions and wisdom of the communities that welcome our travelers." },
    ];

    const stats = [
        { title: "Years working", value: "15+", icon: <Award className="w-8 h-8" /> },
        { title: "Youth impacted", value: "2500+", icon: <Users className="w-8 h-8" /> },
        { title: "Normative Compliance", value: "100%", icon: <Shield className="w-6 h-6" /> },
        { title: "Social Impact", value: "High", icon: <HeartHandshake className="w-6 h-6" /> },
    ];

    return (
        <Layout>
            {/* 1. Immersive Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={destPeru} alt="Peru Community" className="w-full h-full object-cover scale-105" />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-accent font-black uppercase tracking-[0.4em] text-sm mb-6 block drop-shadow-lg">
                            Building a Brighter Future
                        </span>
                        <h1 className="font-heading text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none drop-shadow-2xl">
                            Knowing <span className="text-accent italic">&</span> Working
                        </h1>
                        <p className="text-white/80 text-xl md:text-3xl font-medium leading-relaxed max-w-2xl border-l-4 border-accent pl-8 py-2">
                            "El Yachay, El Munay and El Llankáy" — People who care for people.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Detailed Content */}
            <section className="py-24 lg:py-40 bg-background">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-tight border-l-8 border-primary pl-8">
                                Our Vision
                            </h2>
                            <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                                To be an indisputable reference agency of the Peruvian tourist industry recognized for its quality and passion in our services. Committed to sustainability and respect for local communities and the environment.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-tight border-l-8 border-primary pl-8">
                                Our Mission
                            </h2>
                            <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                                To offer our clients unique and enriching tourist experiences that allow them to discover the diversity and beauty of Peru, Bolivia and Chile in a complete and personalized way.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border/40 p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-all duration-1000" />
                        <div className="relative z-10 space-y-8">
                            <h3 className="font-heading text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">
                                Sustainable Tourism
                            </h3>
                            <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                                Sustainable tourism is a fundamental aspect for Leading Peru Travel. We are committed to preserving the environment, promoting community development, and respecting local culture. We contribute to the sustainable development of Peru ensures authentic and respectable experiences for our customers.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 text-foreground font-black text-sm uppercase tracking-widest">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-primary" /> Preserving Incan Heritage
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-primary" /> Community Empowerment
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-primary" /> Environmental Guardianship
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-primary" /> Authentic Culture Respect
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Commitment Grid */}
            <section className="py-24 bg-muted/20 border-t border-border/50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">A Legacy of Service</span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black text-foreground tracking-tighter">Why We Are Different</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="p-10 bg-card border border-border/40 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                    {v.icon}
                                </div>
                                <h3 className="font-heading text-xl font-black text-foreground mb-4 uppercase tracking-tight">{v.title}</h3>
                                <p className="text-muted-foreground text-base leading-relaxed font-medium">{v.description}</p>
                            </div>
                        ))}
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
