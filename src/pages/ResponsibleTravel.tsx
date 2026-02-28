import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Sun, ShieldCheck, Award, ChevronRight, Check } from "lucide-react";
import destAmazon from "@/assets/dest-amazon.jpg";

const ResponsibleTravel = () => {
    const trustPillars = [
        {
            title: "Your Money Is Fully Protected",
            icon: <ShieldCheck className="w-8 h-8" />,
            description: "With over 15 years of experience, we are a fully licensed and responsible travel agency. We maintain a strong financial position with zero debt and strict financial controls, giving you complete confidence."
        },
        {
            title: "Our Prices",
            icon: <Award className="w-8 h-8" />,
            description: "We offer exceptional value for money—guaranteed. If you find a better offer for the same level of service, we will be pleased to review it and offer you a better price."
        },
        {
            title: "Design Together",
            icon: <Sun className="w-8 h-8" />,
            description: "Enjoy the exact holiday you envision. We offer 15 carefully crafted luxury private itineraries, all fully customizable to match your travel dreams and expectations."
        }
    ];

    const normativePoints = [
        "DRIT (Regional Directorate of Industry and Tourism) Compliance",
        "PROMPERU Quality and Legality Standards",
        "Partnership with leading financial institutions",
        "Zero debt financial stability"
    ];

    return (
        <Layout>
            {/* 1. Immersive Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={destAmazon} alt="Amazon Rainforest" className="w-full h-full object-cover scale-105" />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-accent font-black uppercase tracking-[0.4em] text-sm mb-6 block drop-shadow-lg">
                            Commitment to Excellence
                        </span>
                        <h1 className="font-heading text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none drop-shadow-2xl">
                            Travel <span className="text-accent italic">Responsible</span>
                        </h1>
                        <p className="text-white/80 text-xl md:text-3xl font-medium leading-relaxed max-w-2xl border-l-4 border-accent pl-8 py-2">
                            Excellence in every journey, backed by 15 years of personalized and sustainable expertise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Core Pillars */}
            <section className="py-24 lg:py-40 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
                        {trustPillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-12 bg-card border border-border/40 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4"
                            >
                                <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform duration-500">
                                    {pillar.icon}
                                </div>
                                <h3 className="font-heading text-2xl font-black text-foreground mb-6 uppercase tracking-tight">{pillar.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed font-medium">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-4">
                                <h2 className="font-heading text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase">
                                    Normative Compliance
                                </h2>
                                <div className="h-1.5 w-32 bg-primary px-0" />
                            </div>
                            <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                                We guarantee that all our services comply with the requirements established by the DRIT and PROMPERU, to provide peace of mind with respect to the legality and quality of our tourist services.
                            </p>
                            <ul className="space-y-6">
                                {normativePoints.map((point, i) => (
                                    <li key={i} className="flex items-center gap-6 text-foreground font-black text-xs uppercase tracking-[0.2em]">
                                        <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary">
                                            <Check className="w-5 h-5" />
                                        </div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-foreground p-12 md:p-20 rounded-[4rem] text-background space-y-10 relative overflow-hidden group shadow-[0_64px_96px_-32px_rgba(0,0,0,0.5)]"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-all duration-1000" />
                            <h3 className="font-heading text-3xl font-black text-[#e6c64f] uppercase tracking-widest">
                                Sustainable Tourism
                            </h3>
                            <p className="text-background/60 text-xl leading-relaxed font-medium italic">
                                "Sustainable tourism is a fundamental aspect for Andean Majesty, given our commitment to preserving the environment, promoting community development and respecting local culture."
                            </p>
                            <div className="pt-8">
                                <button className="bg-[#e6c64f] text-black font-black uppercase tracking-[0.3em] px-10 py-5 rounded-2xl hover:brightness-110 active:scale-95 transition-all text-xs">
                                    Our Sustainability Charter
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Value Section */}
            <section className="py-24 bg-muted/20 border-t border-border/50">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-12">
                    <h2 className="font-heading text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase">
                        Our Promises
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-12 rounded-[3rem] shadow-xl space-y-6">
                            <h4 className="font-heading text-xl font-black text-primary uppercase tracking-tight">Best Price Guarantee</h4>
                            <p className="text-muted-foreground text-base leading-relaxed font-medium">
                                Thanks to our long-standing partnerships, we secure competitive rates and offer exclusive pricing without compromising quality.
                            </p>
                        </div>
                        <div className="bg-white p-12 rounded-[3rem] shadow-xl space-y-6">
                            <h4 className="font-heading text-xl font-black text-primary uppercase tracking-tight">Financial Security</h4>
                            <p className="text-muted-foreground text-base leading-relaxed font-medium">
                                Solid financial management ensures the seamless execution of every journey. Zero debt, confirmed future bookings, and absolute security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section id="expert" className="py-24 bg-foreground text-background">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-background uppercase tracking-tight">
                            Speak to an expert
                        </h2>
                        <p className="text-[#e6c64f] font-bold text-xl uppercase tracking-widest font-heading">
                            Plan your sustainable journey today
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl text-foreground"
                    >
                        <form className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground ml-1">How can we help?</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your dream trip..."
                                    className="w-full border-b-2 border-border py-4 focus:outline-none focus:border-primary transition-colors text-lg italic placeholder:text-muted-foreground/30 resize-none font-medium"
                                ></textarea>
                            </div>
                            <button className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-[0.4em] px-12 py-5 rounded-2xl hover:brightness-110 active:scale-95 transition-all shadow-xl text-sm">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default ResponsibleTravel;
