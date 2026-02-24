import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Globe, Calendar, Star } from "lucide-react";
import destChile from "@/assets/dest-chile.jpg";
import heroMachu from "@/assets/hero-machu-picchu.jpg";
import RelatedToursCarousel from "@/components/RelatedToursCarousel";

const Chile = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <img
                    src={heroMachu}
                    alt="Andean Mountains"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center container px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-heading text-5xl lg:text-6xl font-bold text-white mb-4"
                    >
                        Chile
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-xl max-w-3xl mx-auto"
                    >
                        A Destination of Natural Contrasts: From Atacama to Patagonia
                    </motion.p>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 space-y-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="bg-foreground rounded-2xl p-6 mb-6 inline-flex items-center gap-3">
                                <Globe className="text-primary w-8 h-8" />
                                <h2 className="text-3xl font-bold text-white">
                                    Chile: A Destination of Natural Contrasts
                                </h2>
                            </div>
                            <div className="prose prose-lg text-muted-foreground max-w-none">
                                <p>
                                    Chile is one of South America’s most diverse and captivating destinations. Stretching over 4,300 kilometers from north to south, the country offers extraordinary landscapes that range from the otherworldly beauty of the Atacama Desert in the north to the dramatic glaciers and granite peaks of Torres del Paine National Park in Patagonia.
                                </p>
                                <p>
                                    In central Chile, the vibrant capital Santiago blends modern sophistication with Andean scenery, while colorful coastal cities like Valparaíso showcase rich culture, history, and artistic charm. The country is also internationally recognized for its world-class wines, pristine lakes, active volcanoes, and unique island territories such as Easter Island.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative group">
                            <img src={destChile} alt="Torres del Paine" className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
                        </motion.div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 rounded-2xl bg-foreground text-white border border-muted">
                            <h4 className="text-primary uppercase text-xs font-bold tracking-widest mb-2">Capital</h4>
                            <p className="font-bold">Santiago</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-foreground text-white border border-muted">
                            <h4 className="text-primary uppercase text-xs font-bold tracking-widest mb-2">Language</h4>
                            <p className="font-bold">Spanish</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-foreground text-white border border-muted">
                            <h4 className="text-primary uppercase text-xs font-bold tracking-widest mb-2">Currency</h4>
                            <p className="font-bold">Chilean Peso (CLP)</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-foreground text-white border border-muted">
                            <h4 className="text-primary uppercase text-xs font-bold tracking-widest mb-2">Climate</h4>
                            <p className="font-bold">Continental Variety</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <div className="bg-foreground rounded-xl p-4 inline-block mb-4">
                                    <h3 className="text-2xl font-bold text-white">Norte de Chile: Desert Landscapes</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Northern Chile is a land of dramatic desert scenery and rich Andean heritage. Dominated by the spectacular Atacama Desert — the driest desert in the world — this region offers surreal landscapes of salt flats, geysers, colorful lagoons, and lunar-like valleys.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 text-sm"><Star className="text-primary w-4 h-4 shrink-0" /> Valle de la Luna</div>
                                    <div className="flex items-center gap-2 text-sm"><Star className="text-primary w-4 h-4 shrink-0" /> Géiseres del Tatio</div>
                                    <div className="flex items-center gap-2 text-sm"><Star className="text-primary w-4 h-4 shrink-0" /> Lagunas Altiplánicas</div>
                                    <div className="flex items-center gap-2 text-sm"><Star className="text-primary w-4 h-4 shrink-0" /> Salar de Atacama</div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-foreground rounded-xl p-4 inline-block mb-4">
                                    <h3 className="text-2xl font-bold text-white">Central Chile: Culture and History</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    The cultural and historical heart of the country. Santiago is a vibrant metropolis, while Valparaíso charms with its colorful hills (UNESCO World Heritage Site). The region is also home to Chile’s renowned wine valleys.
                                </p>
                            </div>
                        </div>
                        <div className="bg-foreground text-white p-8 lg:p-12 rounded-3xl border border-primary/10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Calendar className="text-primary" /> When to Travel to Chile?</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-white">North (Atacama)</h4>
                                    <p className="text-sm text-white/70">Year-round. Best temps between March and November.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Central (Santiago)</h4>
                                    <p className="text-sm text-white/70">Spring (Sept–Nov) and Autumn (March–May).</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Patagonia (Torres del Paine)</h4>
                                    <p className="text-sm text-white/70">Austral Summer (Oct–March) for favorabe weather.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Easter Island</h4>
                                    <p className="text-sm text-white/70">Good weather year-round; warmest Oct–April.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RelatedToursCarousel country="Chile" />
                </div>
            </section>
        </Layout>
    );
};

export default Chile;
