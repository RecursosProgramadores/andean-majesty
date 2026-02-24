import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <Layout>
            <section className="pt-32 pb-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">Privacy Policy</h1>
                        <p className="text-muted-foreground text-lg italic">Your privacy is our priority at Andean Majesty.</p>
                    </motion.div>

                    <div className="space-y-12 text-foreground/80 leading-relaxed">
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <ShieldCheck className="w-6 h-6" />
                                <h2 className="text-2xl font-bold uppercase tracking-tight">Introduction</h2>
                            </div>
                            <p>
                                At Andean Majesty, we are committed to protecting the privacy and security of our clients. This Privacy Policy describes how we collect, use, and protect your personal information when you use our website or book our luxury travel services.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <Eye className="w-6 h-6" />
                                <h2 className="text-2xl font-bold uppercase tracking-tight">Information We Collect</h2>
                            </div>
                            <p>
                                To provide our handcrafted travel experiences, we may collect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Personal identifiers (Name, Email, Phone Number, Nationality).</li>
                                <li>Travel preferences and special requirements (Dietary needs, health considerations).</li>
                                <li>Payment information (Processed securely through our payment partners).</li>
                                <li>Passport details for official permits and site entrances.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <FileText className="w-6 h-6" />
                                <h2 className="text-2xl font-bold uppercase tracking-tight">How We Use Your Information</h2>
                            </div>
                            <p>
                                The information collected is used exclusively for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Managing your bookings and personalizing your itineraries.</li>
                                <li>Communicating with you regarding your trip details.</li>
                                <li>Processing payments and issuing necessary travel documents.</li>
                                <li>Improving our services based on your feedback.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <Lock className="w-6 h-6" />
                                <h2 className="text-2xl font-bold uppercase tracking-tight">Data Security</h2>
                            </div>
                            <p>
                                We implement a variety of security measures to maintain the safety of your personal information. We use secure servers and industry-standard encryption protocols (SSL) to ensure that your data is protected from unauthorized access.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-border">
                            <p className="text-sm text-muted-foreground text-center">
                                Last updated: February 2026. For any questions regarding this policy, please contact us at <a href="mailto:leadingperu@gmail.com" className="text-primary font-bold hover:underline">leadingperu@gmail.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PrivacyPolicy;
