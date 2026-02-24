import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Globe, MapPin, Calendar, Info, Ship } from "lucide-react";
import destBolivia from "@/assets/dest-bolivia.jpg";
import heroMachu from "@/assets/hero-machu-picchu.jpg";
import RelatedToursCarousel from "@/components/RelatedToursCarousel";

const Bolivia = () => {
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
                        Bolivia
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-xl max-w-3xl mx-auto"
                    >
                        Heart of South America: Authentic and Diverse
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
                                    Bolivia: Heart of South America
                                </h2>
                            </div>
                            <div className="prose prose-lg text-muted-foreground max-w-none">
                                <p>
                                    Bolivia is one of South America’s most authentic and diverse destinations, offering a powerful blend of dramatic landscapes and living ancestral cultures. Located in the heart of the continent, it is known for its breathtaking contrasts—from the high Andes and vast salt flats to the lush Amazon rainforest.
                                </p>
                                <p>
                                    Home to the world’s largest salt flat, Salar de Uyuni, and the world’s highest administrative capital, La Paz, the country surprises visitors with its unique geography. Rich in indigenous heritage, colorful festivals, and traditional cuisine, Bolivia remains a destination where culture is lived daily.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                            <img src={destBolivia} alt="Bolivia Salt Flats" className="rounded-2xl shadow-2xl w-full h-[450px] object-cover" />
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-8 rounded-2xl bg-foreground text-white border border-border shadow-sm flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary"><MapPin className="w-5 h-5" /></div>
                            <div>
                                <h4 className="font-bold">Capitals</h4>
                                <p className="text-sm text-white/70">Sucre (Constitutional) & La Paz (Seat of Govt)</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-foreground text-white border border-border shadow-sm flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary"><Info className="w-5 h-5" /></div>
                            <div>
                                <h4 className="font-bold">Languages</h4>
                                <p className="text-sm text-white/70">Spanish, Quechua, Aimara, Guaraní</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-foreground text-white border border-border shadow-sm flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary"><Ship className="w-5 h-5" /></div>
                            <div>
                                <h4 className="font-bold">Altitude</h4>
                                <p className="text-sm text-white/70">Altiplano averages 3,600 msnm</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="bg-foreground rounded-2xl p-6 inline-block">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-wider">Main Destinations of Bolivia</h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Salar de Uyuni", text: "The world’s largest salt flat, famous for its endless white horizons and mirror-like reflections during the rainy season." },
                                { title: "La Paz", text: "Captivates with its dramatic mountain setting, vibrant indigenous culture, and unique urban cable car system." },
                                { title: "Sucre & Potosí", text: "Colonial charm, white architecture in Sucre and the historic mining heritage of Cerro Rico in Potosí." },
                                { title: "Lake Titicaca", text: "Sacred Isla del Sol, stunning high-altitude scenery, and deep connections to Andean traditions." },
                                { title: "Amazon & Madidi", text: "Parque Nacional Madidi is one of the most biodiverse areas on Earth, offering pure nature immersion." }
                            ].map(dest => (
                                <div key={dest.title} className="p-8 rounded-3xl bg-muted/30 border border-muted">
                                    <h4 className="text-xl font-bold mb-3">{dest.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{dest.text}</p>
                                </div>
                            ))}
                            <div className="p-8 rounded-3xl bg-primary text-white flex flex-col justify-center">
                                <h4 className="text-xl font-bold flex items-center gap-2 mb-2"><Calendar className="w-5 h-5" /> When to Visit?</h4>
                                <p className="text-sm font-medium">Dry Season (May–Oct) is ideal for clear skies and trekking. Rainy Season (Nov–March) for the "mirror effect" in Uyuni.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-foreground text-white p-10 rounded-[3rem] border border-primary/10 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Why Visit Bolivia?</h3>
                            <p className="text-white/80 text-lg italic leading-relaxed">
                                "Bolivia remains a destination where culture is not just preserved—it is lived daily. Ideal for adventurous travelers seeking a genuine connection to living indigenous traditions and deep historical roots."
                            </p>
                        </div>
                    </div>
                    <RelatedToursCarousel country="Bolivia" />
                </div>
            </section>
        </Layout>
    );
};

export default Bolivia;
