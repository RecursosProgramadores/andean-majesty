import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, ChevronRight, Users, MapPin, Award, ShieldCheck, Star } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import heroCusco from "@/assets/hero-cusco.jpg";
import destPeru from "@/assets/dest-peru.jpg";
import destAmazon from "@/assets/dest-amazon.jpg";
import destChile from "@/assets/dest-chile.jpg";
import destEcuador from "@/assets/dest-ecuador.jpg";
import tourPisac from "@/assets/tour-peru-pisac.png";
import tourMachupicchu from "@/assets/tour-peru-machupicchu.png";
import tourCusco from "@/assets/tour-peru-cusco.png";

const Team = () => {
    const departments = [
        {
            name: "Leadership Area",
            description: "Our visionary leaders who guide the agency's mission and growth.",
            image: destPeru,
            members: [
                { name: "Julio Cesar Quispillo Uscamayta", role: "Founder and President", bio: "Trajectory and vision of the company leader, dedicated to excellence in luxury travel across South America." },
                { name: "Marleni Cahuana Condori", role: "Co-Founder", bio: "Experience and passion for tourism in Peru, driving the foundational spirit of Andean Majesty." },
            ]
        },
        {
            name: "Management Area",
            description: "Directing the daily operations and strategic planning of our services.",
            image: tourMachupicchu,
            members: [
                { name: "Julio Cesar Quispillo Uscamayta", role: "General Manager", bio: "Managing the agency's operations and ensuring excellence in every service for our global clientele." },
                { name: "Marleni Cahuana Condori", role: "Operations Manager", bio: "Head of operations, focusing on seamless logistics and world-class service quality." },
            ]
        },
        {
            name: "Marketing & System Area",
            description: "The digital heartbeat of our agency, managing our presence and technology.",
            image: destAmazon,
            members: [
                { name: "Wilmet Luis Sonco Apaza", role: "Marketing Director", bio: "Expertise in promoting Peruvian destinations to the world through innovative digital strategies." },
                { name: "Abel Molina", role: "IT & Systems Lead", bio: "Ensuring our digital platforms provide a seamless and secure experience for every traveler." },
            ]
        },
        {
            name: "Travel Consultants & Sales",
            description: "Expert advisors who help you craft your perfect journey.",
            image: tourCusco,
            members: [
                { name: "Gladys Cahuana Condori", role: "Senior Travel Expert", bio: "Deep knowledge of Andean destinations and customer service excellence for over a decade." },
                { name: "Fabiola Buztinza Luza", role: "Luxury Travel Specialist", bio: "Expert in high-end, personalized travel experiences tailored to unique traveler desires." },
            ]
        },
        {
            name: "Reserve & Operation",
            description: "Ensuring every booking and logistics detail is perfectly executed.",
            image: tourPisac,
            members: [
                { name: "Roxana Gayoso Lopez", role: "Reservations Specialist", bio: "Managing hotel and service bookings with precision across all our South American destinations." },
                { name: "Silvia Rodriguez Ayma", role: "Logistics Coordinator", bio: "Coordinating transport and on-ground services to ensure total comfort during your trip." },
            ]
        },
        {
            name: "Accounting",
            description: "Managing the financial health and transparency of our operations.",
            image: destEcuador,
            members: [
                { name: "Dina Marleni Janco Hancco", role: "Chief Accountant", bio: "Financial lead ensuring administrative and fiscal compliance with total transparency." },
            ]
        },
        {
            name: "Our Guides",
            description: "The storytellers who bring our destinations to life.",
            image: tourMachupicchu,
            members: [
                { name: "ELIZABET QUISPE BALDERRAMA", role: "Senior Expedition Guide", bio: "Expert in history, culture, and nature, providing deep insights into the Incan world." },
                { name: "Rene Quispe Ttito", role: "Cultural Specialist Guide", bio: "Specialist in Incan history and archaeological sites with a passion for high-mountain storytelling." },
            ]
        },
        {
            name: "Transport Service",
            description: "Our reliable fleet and drivers ensuring safe and comfortable travel.",
            image: destChile,
            members: [
                { name: "David Valentin Condori Quisani", role: "Transport Coordinator", bio: "Overseeing our modern fleet and professional driving team for maximum safety." },
            ]
        },
    ];

    return (
        <Layout>
            {/* 1. Immersive Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroCusco} alt="Cusco Peru" className="w-full h-full object-cover scale-105" />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-accent font-black uppercase tracking-[0.4em] text-sm mb-6 block drop-shadow-lg">
                            The Guardians of Your Journey
                        </span>
                        <h1 className="font-heading text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none drop-shadow-2xl">
                            Travel <span className="text-accent italic">Experts</span>
                        </h1>
                        <p className="text-white/80 text-xl md:text-3xl font-medium leading-relaxed max-w-2xl border-l-4 border-accent pl-8 py-2">
                            Get informed by an expert who knows what they’re talking about.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Philosophy Section */}
            <section className="py-24 bg-white border-b border-border/10">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="font-heading text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-tight">
                                Local Wisdom, <br />
                                <span className="text-primary italic">Global Standards</span>
                            </h2>
                            <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
                                <p>
                                    All our agents are Peruvian, and from Cusco, no less. They know their region inside and out and can offer you exclusivity and the best services to Machu Picchu, Peru, and South America.
                                </p>
                                <p>
                                    With years of traveling extensively throughout these destinations, you can always contact a Leading Peru Travel expert who knows the place you want to visit inside and out. They will explain your dream destination in detail and how you can enjoy wonderful moments there!
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-8 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                        <MapPin className="text-accent" />
                                    </div>
                                    <span className="font-bold uppercase tracking-wider text-sm">Born in Cusco</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                        <Award className="text-accent" />
                                    </div>
                                    <span className="font-bold uppercase tracking-wider text-sm">10+ Years Exp.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                        <ShieldCheck className="text-accent" />
                                    </div>
                                    <span className="font-bold uppercase tracking-wider text-sm">Certified Experts</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img src={aboutTeam} alt="Our team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                                    <p className="text-white text-xl font-heading font-black italic">Leading your dreams to reality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Redesigned Department Sections */}
            <section className="py-32 bg-[#f8f8f8]">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="space-y-40">
                        {departments.map((dept, deptIdx) => (
                            <motion.div
                                key={dept.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="group"
                            >
                                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[2.5rem] bg-white shadow-2xl hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-700 ${deptIdx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Visual Background Card */}
                                    <div className={`lg:col-span-12 h-64 lg:h-[400px] relative overflow-hidden`}>
                                        <img src={dept.image} alt={dept.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                                            <h2 className="text-white font-heading text-4xl md:text-7xl font-black uppercase tracking-tight mb-4 drop-shadow-lg">
                                                {dept.name}
                                            </h2>
                                            <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl drop-shadow-md">
                                                {dept.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Members Content */}
                                    <div className="lg:col-span-12 p-10 lg:p-20">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                                            {dept.members.map((member, memIdx) => (
                                                <div key={memIdx} className="space-y-6 relative">
                                                    <div className="space-y-1">
                                                        <h3 className="font-heading text-3xl font-black text-foreground group-hover:text-primary transition-colors">
                                                            {member.name}
                                                        </h3>
                                                        <p className="text-accent font-black text-sm uppercase tracking-[0.3em] italic">
                                                            {member.role}
                                                        </p>
                                                    </div>
                                                    <div className="w-12 h-[2px] bg-accent/30" />
                                                    <p className="text-muted-foreground leading-relaxed text-lg font-medium italic">
                                                        "{member.bio}"
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Luxury Newsletter / CTA */}
            <section className="relative py-32 bg-foreground overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <img src={heroCusco} alt="Pattern" className="w-full h-full object-cover scale-150 rotate-12" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <span className="text-accent font-black uppercase tracking-[0.4em] text-xs">Stay Inspired</span>
                                    <h2 className="font-heading text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                                        Join our <br /> <span className="text-accent italic">Inner Circle</span>
                                    </h2>
                                </div>
                                <p className="text-white/60 text-xl leading-relaxed max-w-xl font-medium">
                                    Exclusive destination insights and luxury travel trends delivered straight from our Cusco headquarters.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                                    <input
                                        type="email"
                                        placeholder="Your exclusive email"
                                        className="flex-1 bg-transparent border-none px-6 py-4 text-white focus:outline-none placeholder:text-white/30 text-lg"
                                    />
                                    <button className="bg-accent text-black font-black uppercase tracking-widest px-10 py-4 rounded-xl hover:bg-white transition-all transform hover:-translate-y-1">
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative">
                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent rounded-full flex items-center justify-center -rotate-12 shadow-xl border-8 border-foreground">
                                    <Star className="text-black fill-black w-10 h-10" />
                                </div>
                                <div className="space-y-8">
                                    <h3 className="font-heading text-3xl font-black text-foreground uppercase tracking-tight">Need expert advice?</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                        Plan your legacy journey with a Peruvian specialist who understands the soul of South America.
                                    </p>
                                    <div className="pt-4 space-y-8">
                                        <a href="tel:+51984509207" className="flex items-center gap-6 group">
                                            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center group-hover:bg-accent transition-colors shadow-lg">
                                                <Phone className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-muted-foreground text-sm font-black uppercase tracking-widest">Call our experts</span>
                                                <p className="text-2xl font-black text-foreground">+51 984 509 207</p>
                                            </div>
                                        </a>
                                        <button className="w-full bg-foreground text-white font-black uppercase tracking-[0.2em] px-8 py-6 rounded-2xl hover:bg-accent hover:text-black transition-all flex items-center justify-center gap-3 shadow-xl">
                                            CONTACT US NOW <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Team;
