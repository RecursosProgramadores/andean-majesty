import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { TreePine, Wind, Droplets, Sun, Recycle, ShieldCheck, Award, MessageCircle, ChevronRight, Check } from "lucide-react";

const ResponsibleTravel = () => {
    const principles = [
        { title: "[Core Principle 1]", description: "Placeholder for the first core principle of responsible travel. Describing our commitment to local ecosystems and heritage." },
        { title: "[Core Principle 2]", description: "Placeholder for the second core principle. Focusing on fair trade, local economic support, and ethical employment." },
        { title: "[Core Principle 3]", description: "Placeholder for the third core principle. Detail about waste reduction and resource management during tours." },
        { title: "[Core Principle 4]", description: "Placeholder for the fourth core principle. Engaging with communities in a respectful and non-intrusive manner." },
        { title: "[Core Principle 5]", description: "Placeholder for the fifth core principle. Continuous education for both our staff and our valuable travelers." },
    ];

    const subSections = [
        { title: "[Sub-Section A]", description: "Detailed placeholder for an essential branch of our responsibility policy. Promoting local culture and traditions." },
        { title: "[Sub-Section B]", description: "Detailed placeholder for environmental protection initiatives. Carbon footprint monitoring and mitigation." },
        { title: "[Sub-Section C]", description: "Detailed placeholder for social development support. Investing back into the communities we visit." },
        { title: "[Sub-Section D]", description: "Detailed placeholder for animal welfare and wildlife protection standards during expeditions." },
    ];

    const stats = [
        { title: "Hectares Protected", value: "15,000", icon: <TreePine className="w-8 h-8" /> },
        { title: "Carbon Offset (Tons)", value: "1,200", icon: <Wind className="w-8 h-8" /> },
        { title: "Liters Savoured", value: "500K+", icon: <Droplets className="w-8 h-8" /> },
        { title: "Renewable Energy", value: "85%", icon: <Sun className="w-8 h-8" /> },
        { title: "Recycling Rate", value: "92%", icon: <Recycle className="w-8 h-8" /> },
    ];

    const practices = [
        { title: "[Sustainable Practice 1]", description: "Placeholder for practical implementation of sustainability in our offices and field operations." },
        { title: "[Sustainable Practice 2]", description: "Placeholder for our green supply chain management and local catering partnerships." },
        { title: "[Sustainable Practice 3]", description: "Placeholder for innovative waste-to-resource programs active in our mountain treks." },
    ];

    const tips = [
        "Always carry a reusable water bottle to minimize plastic waste in fragile Andean regions.",
        "Respect local customs and ask for permission before taking photos of people or sacred sites.",
        "Support the local economy by purchasing authentic handicrafts directly from artisans.",
        "Stay on marked trails to protect the local flora and prevent soil erosion in archaeological areas.",
        "Dispose of waste responsibly and carry out what you carry in, especially in remote campsites.",
        "Opt for eco-friendly sunscreens and repellents that don't harm the local water sources.",
        "Learn a few basic phrases in Quechua or Spanish to better connect with your local hosts.",
        "Choose travel operators who demonstrate a clear commitment to environmental and social ethics."
    ];

    return (
        <Layout>
            {/* 2. Hero / Sección superior */}
            <section className="bg-white py-20 lg:py-32 border-b border-border/30">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-heading text-5xl md:text-7xl font-bold mb-8 text-foreground tracking-tight"
                    >
                        Responsible Travel
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl text-primary font-bold border-l-4 border-primary pl-6 py-2 uppercase tracking-wide mb-12"
                    >
                        Pioneering sustainable tourism for a better Peru.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <a href="#expert" className="inline-flex items-center gap-2 text-foreground font-bold uppercase tracking-widest hover:text-primary transition-colors group">
                            Speak with a sustainability expert <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="space-y-6">
                            <h2 className="font-heading text-3xl font-bold text-foreground">Our Philosophy</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                Placeholder for our deeper commitment paragraph. Explaining the bridge between tourism and conservation, ensuring that every journey contributes positively to the destination.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                            {principles.map((p, i) => (
                                <div key={i} className="space-y-3">
                                    <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" /> {p.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Contenido Principal */}
            <section className="py-24 bg-background overflow-hidden font-sans">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <div className="space-y-24">

                        {/* Sección Principal 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <h2 className="font-heading text-4xl font-bold text-foreground border-b border-border pb-6 uppercase tracking-wider">
                                Our Environmental Commitment
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                                Placeholder for the introductory narrative on environmental stewardship. How we actively protect the Peruvian wilderness while showcasing its beauty.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                {subSections.map((s, i) => (
                                    <div key={i} className="space-y-3 group">
                                        <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {s.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats Block */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-muted/30 p-12 md:p-16 rounded-[2.5rem] space-y-16 border border-border/50"
                        >
                            <div className="max-w-3xl">
                                <h2 className="font-heading text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">Active Conservation Impact</h2>
                                <p className="text-muted-foreground text-lg">Measurable milestones achieved through our dedicated sustainable travel initiatives and community partnerships.</p>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                                {stats.map((s, i) => (
                                    <div key={i} className="text-center md:text-left group">
                                        <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform mx-auto md:mx-0">
                                            {s.icon}
                                        </div>
                                        <div className="text-4xl font-bold text-foreground tracking-tighter mb-1">{s.value}</div>
                                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">{s.title}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-foreground font-bold italic border-l-4 border-primary pl-6 py-2 text-xl">
                                "Our goal is not just to travel, but to ensure that the wonders of Peru remain for generations to come."
                            </p>
                        </motion.div>

                        {/* Prácticas Sostenibles */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-16"
                        >
                            <h2 className="font-heading text-4xl font-bold text-foreground border-b border-border pb-6 uppercase tracking-wider">
                                Sustainable Practices in the Field
                            </h2>
                            <div className="space-y-12">
                                {practices.map((p, i) => (
                                    <div key={i} className="space-y-4">
                                        <h3 className="font-heading text-2xl font-bold text-primary flex items-center gap-4">
                                            <span className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-xs">0{i + 1}</span>
                                            {p.title}
                                        </h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed pl-14">
                                            {p.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-foreground text-background p-12 rounded-3xl text-center">
                                <h2 className="font-heading text-3xl font-bold mb-4 uppercase tracking-widest text-[#e6c64f]">Llamado a la Acción</h2>
                                <p className="text-background/60 text-lg max-w-2xl mx-auto italic">
                                    "Join us in our mission to travel better. Every small action you take during your journey contributes to the legacy of sustainability."
                                </p>
                            </div>
                        </motion.div>

                        {/* Tips Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-4">
                                <h2 className="font-heading text-4xl font-bold text-foreground uppercase tracking-tight">Consejos para Viajar Responsablemente</h2>
                                <p className="text-muted-foreground max-w-2xl">Practical guidelines to help you minimize your footprint and maximize your positive impact on local communities.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {tips.map((tip, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/30 transition-all">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                                            {tip}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Awards & Certifications */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-12 border-t border-border/30">
                            <div className="space-y-8">
                                <h2 className="font-heading text-3xl font-bold text-foreground uppercase tracking-tight">Premios y Reconocimientos</h2>
                                <p className="text-muted-foreground leading-relaxed">Placeholder regarding our world-class recognition in sustainable tourism and conservation leadership.</p>
                                <div className="grid grid-cols-3 gap-6 pt-4 grayscale opacity-60">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="aspect-square bg-muted/50 rounded-xl flex items-center justify-center border border-border">
                                            <Award className="w-10 h-10 text-muted-foreground" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h2 className="font-heading text-3xl font-bold text-foreground uppercase tracking-tight">Membresías o Certificaciones</h2>
                                <p className="text-muted-foreground leading-relaxed">Detailing our official certifications from international bodies promoting the highest standards of responsible travel.</p>
                                <div className="aspect-video bg-muted/30 rounded-2xl flex items-center justify-center border border-border/50 p-8 grayscale opacity-70">
                                    <ShieldCheck className="w-16 h-16 text-muted-foreground" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Sección final de Contacto / CTA */}
            <section id="expert" className="py-24 bg-foreground text-background">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-background uppercase tracking-tight">
                            Speak to an expert
                        </h2>
                        <p className="text-[#e6c64f] font-bold text-xl uppercase tracking-widest font-heading">
                            Plan your sustainable journey today
                        </p>
                        <p className="text-background/60 text-lg max-w-2xl mx-auto pt-4 leading-relaxed">
                            Connect with our specialized travel consultants who can help you craft a truly responsible and impactful travel experience in Peru.
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
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground ml-1">How can we help you travel responsibly?</label>
                                <textarea
                                    rows={4}
                                    placeholder="I'm interested in sustainable treks and supporting local communities..."
                                    className="w-full border-b-2 border-border py-4 focus:outline-none focus:border-primary transition-colors text-lg italic placeholder:text-muted-foreground/30 resize-none font-medium"
                                ></textarea>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 items-center pt-4">
                                <button className="w-full md:w-auto bg-primary text-primary-foreground font-bold uppercase tracking-[0.4em] px-12 py-5 rounded-2xl hover:brightness-110 active:scale-95 transition-all shadow-xl text-sm">
                                    Send Message
                                </button>
                                <div className="flex items-center gap-4 text-muted-foreground">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        Personal reply within <br /> 24 business hours
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between gap-6">
                                <div className="text-[9px] text-muted-foreground font-medium uppercase tracking-[0.2em] leading-relaxed max-w-xs">
                                    Protected by reCAPTCHA. We respect your <a href="#" className="underline hover:text-primary">Privacy Policy</a> and will only contact you regarding your travel inquiry.
                                </div>
                                <div className="flex flex-col items-center md:items-end gap-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Expert Hotline</p>
                                    <a href="tel:+18001234567" className="text-2xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors">+1 800 123 4567</a>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default ResponsibleTravel;
