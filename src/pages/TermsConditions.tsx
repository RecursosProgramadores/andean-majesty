import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Scale, CreditCard, AlertCircle, UserCheck } from "lucide-react";

const TermsConditions = () => {
    return (
        <Layout>
            <section className="pt-32 pb-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">Terms & Conditions</h1>
                        <p className="text-muted-foreground text-lg italic">The guidelines for your luxury journey with Andean Majesty.</p>
                    </motion.div>

                    <div className="space-y-12 text-foreground/80 leading-relaxed">
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <CreditCard className="w-6 h-6" />
                                <h2 className="text-2xl font-bold uppercase tracking-tight">Booking and Payments</h2>
                            </div>
                            <p>
                                To confirm your luxury experience, a non-refundable deposit of 30% of the total tour price is required. The remaining balance must be paid at least 30 days prior to the start of the tour. For last-minute bookings (less than 30 days), full payment is required at the time of confirmation.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <AlertCircle className="w-6 h-6" />
                                <h2 className="text-2xl font-bold uppercase tracking-tight">Cancellation Policy</h2>
                            </div>
                            <p>
                                Cancellations must be requested in writing. The following fees apply:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>More than 60 days before start: Loss of deposit.</li>
                                <li>30 to 60 days before start: 50% of the total price.</li>
                                <li>Less than 30 days before start: 100% of the total price.</li>
                            </ul>
                            <p className="italic text-sm">Note: Some permits (like the Inca Trail) are non-refundable and non-transferable regardless of the cancellation date.</p>
                        </section>

                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <Scale className="w-6 h-6" />
                                <h2 className="text-2xl font-bold uppercase tracking-tight">Responsibility</h2>
                            </div>
                            <p>
                                Andean Majesty acts as an intermediary for transport, accommodation, and other services. We are not responsible for delays, accidents, or losses caused by force majeure (strikes, weather conditions, or local regulations). We strongly recommend all travelers to obtain comprehensive travel insurance.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <UserCheck className="w-6 h-6" />
                                <h2 className="text-2xl font-bold uppercase tracking-tight">Client Obligations</h2>
                            </div>
                            <p>
                                Clients are responsible for ensuring they possess valid passports, visas, and health certificates required for entry into the destinations. Any extra costs incurred due to missing or invalid documentation will be the responsibility of the client.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-border">
                            <p className="text-sm text-muted-foreground text-center">
                                By booking a tour with us, you acknowledge that you have read and agreed to these terms. Last updated: February 2026.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TermsConditions;
