import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, ChevronRight } from "lucide-react";

const Team = () => {
    const departments = [
        {
            name: "Leadership Area",
            description: "Our visionary leaders who guide the agency's mission and growth.",
            members: [
                { name: "[Leader Name]", role: "Founder and President", bio: "Placeholder bio for the Founder and President. Descripcion de la trayectoria y vision del lider de la empresa." },
                { name: "[Leader Name]", role: "Co-Founder", bio: "Placeholder bio for the Co-Founder. Experiencia y pasion por el turismo en el Peru." },
            ]
        },
        {
            name: "Management Area",
            description: "Directing the daily operations and strategic planning of our services.",
            members: [
                { name: "[Manager Name]", role: "General Manager", bio: "Professional bio describing their role in managing the agency's operations and ensuring excellence in service." },
                { name: "[Manager Name]", role: "Operations Manager", bio: "Bio placeholder for the head of operations, focusing on logistics and service quality." },
            ]
        },
        {
            name: "Marketing & System Area",
            description: "The digital heartbeat of our agency, managing our presence and technology.",
            members: [
                { name: "[Specialist Name]", role: "Marketing Director", bio: "Bio describing their expertise in promoting Peruvian destinations to the world." },
                { name: "[Developer Name]", role: "IT & Systems Lead", bio: "Placeholder for the systems lead ensuring our digital platforms provide a seamless experience." },
            ]
        },
        {
            name: "Travel Consultants & Sales",
            description: "Expert advisors who help you craft your perfect journey.",
            members: [
                { name: "[Consultant Name]", role: "Senior Travel Expert", bio: "Bio highlighting their deep knowledge of Andean destinations and customer service excellence." },
                { name: "[Consultant Name]", role: "Luxury Travel Specialist", bio: "Placeholder for an expert in high-end, personalized travel experiences." },
            ]
        },
        {
            name: "Reserve & Operation",
            description: "Ensuring every booking and logistics detail is perfectly executed.",
            members: [
                { name: "[Operator Name]", role: "Reservations Specialist", bio: "Bio for the individual managing hotel and service bookings across our destinations." },
                { name: "[Operator Name]", role: "Logistics Coordinator", bio: "Placeholder for the professional coordinating transport and on-ground services." },
            ]
        },
        {
            name: "Accounting",
            description: "Managing the financial health and transparency of our operations.",
            members: [
                { name: "[Accountant Name]", role: "Chief Accountant", bio: "Bio for the financial lead ensuring administrative and fiscal compliance." },
            ]
        },
        {
            name: "Tour Guides",
            description: "The storytellers who bring our destinations to life.",
            members: [
                { name: "[Guide Name]", role: "Senior Expedition Guide", bio: "Placeholder bio for our expert guides, emphasizing their knowledge of history, culture, and nature." },
                { name: "[Guide Name]", role: "Cultural Specialist Guide", bio: "Bio highlighting their specialization in Incan history and archaeological sites." },
            ]
        },
        {
            name: "Transport Service",
            description: "Our reliable fleet and drivers ensuring safe and comfortable travel.",
            members: [
                { name: "[Driver Name]", role: "Transport Coordinator", bio: "Bio for the individual overseeing our fleet and professional driving team." },
            ]
        },
    ];

    return (
        <Layout>
            {/* 2. Hero/Banner Section */}
            <section className="bg-white py-20 lg:py-32 border-b border-border/30">
                <div className="container mx-auto px-4 lg:px-8 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-heading text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight"
                    >
                        Machu Travel Peru Team
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl font-bold text-primary mb-8 tracking-wide font-heading uppercase"
                    >
                        In the constant pursuit of excellence
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl space-y-4 text-muted-foreground text-lg leading-relaxed"
                    >
                        <p>
                            Our team consists of over 100 professionals dedicated to providing the best travel experiences in Peru. From our expert guides who bring history to life, to our specialized consultants who help you plan every detail of your journey.
                        </p>
                        <p>
                            We believe that the human element is what makes a journey truly unforgettable. Each member of our team is chosen for their expertise, passion for service, and deep connection to the Andean culture.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Main Content - Departments */}
            <section className="py-20 lg:py-32 bg-background">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <div className="space-y-32">
                        {departments.map((dept, deptIdx) => (
                            <motion.div
                                key={dept.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: deptIdx * 0.05 }}
                                className="space-y-12"
                            >
                                {/* Department Header */}
                                <div className="border-l-4 border-primary pl-6 py-2">
                                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wider">
                                        {dept.name}
                                    </h2>
                                    <p className="text-muted-foreground text-lg max-w-2xl font-medium">
                                        {dept.description}
                                    </p>
                                </div>

                                {/* Team Members List */}
                                <div className="space-y-16 ml-6 md:ml-10">
                                    {dept.members.map((member, memIdx) => (
                                        <div key={memIdx} className="group border-b border-border/30 pb-12 last:border-0">
                                            <h3 className="font-heading text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-6">
                                                {member.role}
                                            </p>
                                            <div className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-4xl">
                                                {member.bio}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Newsletter / CTA Section */}
            <section className="py-24 bg-foreground text-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-background uppercase tracking-tight">
                                    Sign up to our newsletter
                                </h2>
                                <p className="text-[#e6c64f] font-bold text-xl uppercase tracking-widest font-heading">
                                    See the world from our eyes
                                </p>
                            </div>
                            <p className="text-background/60 text-lg leading-relaxed max-w-xl">
                                Stay updated with the latest travel trends, exclusive offers, and expert insights from our team on the ground in Peru.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                                <input
                                    type="email"
                                    placeholder="Your professional email"
                                    className="flex-1 bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-background focus:outline-none focus:border-[#e6c64f] transition-colors"
                                />
                                <button className="bg-[#e6c64f] text-black font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all">
                                    Continue
                                </button>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-3xl space-y-8 backdrop-blur-sm">
                            <h3 className="font-heading text-2xl font-bold text-accent uppercase tracking-wider mb-2">Speak to an expert</h3>
                            <p className="text-background/60 leading-relaxed">
                                If you have specific questions or want to start planning your personalized itinerary right away, our team is ready to help.
                            </p>
                            <div className="space-y-6 pt-4">
                                <a href="tel:+18001234567" className="flex items-center gap-4 text-2xl font-bold text-background hover:text-accent transition-colors">
                                    <Phone className="w-8 h-8 text-accent" />
                                    +1 800 123 4567
                                </a>
                                <div className="flex gap-4">
                                    <button className="flex-1 bg-white text-black font-bold uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-accent hover:text-black transition-all flex items-center justify-center gap-2">
                                        Contact Us <ChevronRight className="w-5 h-5" />
                                    </button>
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
