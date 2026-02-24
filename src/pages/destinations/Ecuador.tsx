import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Globe, MapPin, Calendar, Info, ThermometerSun, ShieldCheck, Banknote } from "lucide-react";
import destEcuador from "@/assets/dest-ecuador.jpg";
import heroMachu from "@/assets/hero-machu-picchu.jpg";
import RelatedToursCarousel from "@/components/RelatedToursCarousel";

const Ecuador = () => {
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
                        Ecuador
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-xl max-w-3xl mx-auto"
                    >
                        An Extraordinary Destination: Culture, Nature, and Adventure
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
                                    Ecuador: An Extraordinary Destination
                                </h2>
                            </div>
                            <div className="prose prose-lg text-muted-foreground max-w-none">
                                <p>
                                    Ecuador is one of the most diverse countries in the world relative to its size. Located on the equator, it offers an impressive combination of Andean mountains, Amazon rainforest, Pacific coastline, and the world-famous Galápagos Islands — making it a complete destination for culture, adventure, nature, and luxury travel.
                                </p>
                                <p>
                                    The capital city, Quito, features one of the best-preserved historic centers in Latin America, recognized as a UNESCO World Heritage Site. Visitors can explore colonial architecture, vibrant markets, and breathtaking views from the Andes. Meanwhile, Guayaquil serves as the country’s economic hub and gateway to Ecuador’s beautiful Pacific beaches.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl" />
                            <img src={destEcuador} alt="Galapagos Wildlife" className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover" />
                        </motion.div>
                    </div>

                    {/* Ecuador Quick Facts */}
                    <div className="bg-foreground text-white rounded-3xl p-8 lg:p-12 border border-muted">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Info className="text-primary w-6 h-6" /> General Information About Ecuador
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider font-bold text-white/50">Official Name</p>
                                <p className="text-white font-medium">Republic of Ecuador</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider font-bold text-white/50">Capital City</p>
                                <p className="text-white font-medium">Quito</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider font-bold text-white/50">Largest City</p>
                                <p className="text-white font-medium">Guayaquil</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider font-bold text-white/50">Official Language</p>
                                <p className="text-white font-medium">Spanish</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider font-bold text-white/50">Currency</p>
                                <p className="text-white font-medium">US Dollar (USD)</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider font-bold text-white/50">Time Zone</p>
                                <p className="text-white font-medium">ECT (UTC-5) / Galápagos (UTC-6)</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider font-bold text-white/50">Population</p>
                                <p className="text-white font-medium">~ 18 Million inhabitants</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider font-bold text-white/50">Government</p>
                                <p className="text-white font-medium">Presidential republic</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-white/70"><MapPin className="inline w-4 h-4 mr-2" /> <strong>Location:</strong> Northwestern South America, bordered by Colombia (north), Peru (east and south), and the Pacific Ocean (west).</p>
                        </div>
                    </div>

                    {/* Ecuador Regions & Deep Info */}
                    <div className="space-y-12">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="bg-foreground rounded-xl p-4 inline-flex items-center gap-2 mb-2">
                                    <MapPin className="text-primary" />
                                    <h3 className="text-xl font-bold text-white">Geography</h3>
                                </div>
                                <p className="text-muted-foreground">Despite its relatively small size, Ecuador is considered one of the most biodiverse countries in the world, divided into four natural regions:</p>
                                <ul className="grid gap-4">
                                    {[
                                        { id: "1", name: "The Coast (La Costa)", text: "Pacific beaches, tropical climate, and major port cities." },
                                        { id: "2", name: "The Highlands (La Sierra)", text: "Andes Mountains, volcanoes, and colonial cities." },
                                        { id: "3", name: "The Amazon (El Oriente)", text: "Lush rainforest with exceptional biodiversity." },
                                        { id: "4", name: "The Insular Region", text: "The Galápagos Islands, famous for unique wildlife and volcanic landscapes." }
                                    ].map(r => (
                                        <li key={r.id} className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                                            <span className="font-bold text-primary">{r.id}.</span>
                                            <p className="text-sm"><strong className="text-foreground">{r.name}:</strong> {r.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-foreground rounded-xl p-4 inline-flex items-center gap-2 mb-2">
                                    <ThermometerSun className="text-primary" />
                                    <h3 className="text-xl font-bold text-white">Climate</h3>
                                </div>
                                <div className="grid gap-4">
                                    {[
                                        { name: "Highlands", text: "Mild temperatures year-round with a dry season (June–September)." },
                                        { name: "Coast", text: "Warm tropical climate; rainy season from December to May." },
                                        { name: "Amazon", text: "Humid and rainy most of the year." },
                                        { name: "Galápagos", text: "Pleasant year-round, with warmer months from January to May." }
                                    ].map(c => (
                                        <div key={c.name} className="flex justify-between items-center p-4 border-b border-muted">
                                            <span className="font-bold">{c.name}</span>
                                            <span className="text-sm text-muted-foreground text-right max-w-[60%]">{c.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="text-primary" /> Entry Requirements</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">Most travelers from the Americas and Europe do not require a visa for short tourist stays (typically up to 90 days). A valid passport is required.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Banknote className="text-primary" /> Economy</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">Based on oil exports, agriculture (bananas, cacao, flowers), fishing, and tourism. Ecuador is one of the world’s leading exporters of bananas and fine-flavor cacao.</p>
                            </div>
                        </div>

                        {/* Deep Dive Cities */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="col-span-full mb-4">
                                <h3 className="text-3xl font-bold">Unforgettable Destinations</h3>
                            </div>
                            <div className="space-y-4 p-8 rounded-2xl bg-card border border-border">
                                <h4 className="text-xl font-bold text-primary">Quito: History in the Heights</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Quito is one of the highest capital cities in the world, located at 2,850 meters (9,350 feet). Known for its breathtaking mountain scenery and rich cultural heritage, its historic center was declared a UNESCO World Heritage Site. Landmarks such as La Compañía de Jesús Church and the Basílica del Voto Nacional reflect deep colonial influence.
                                </p>
                            </div>
                            <div className="space-y-4 p-8 rounded-2xl bg-card border border-border">
                                <h4 className="text-xl font-bold text-primary">Guayaquil: Modernity & Tradition</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Ecuador’s largest city and economic hub. The Malecón 2000 is a vibrant waterfront promenade, and the historic neighborhood of Las Peñas showcases the city’s artistic spirit. It serves as the main gateway to the Galápagos and the Pacific beaches.
                                </p>
                            </div>
                            <div className="space-y-4 p-8 rounded-2xl bg-card border border-border">
                                <h4 className="text-xl font-bold text-primary">The Andean Highlands</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Known as La Sierra, this region features natural icons like Cotopaxi and the turquoise crater lake of Laguna Quilotoa. Rich in Indigenous heritage, colorful markets, and colonial cities like Cuenca.
                                </p>
                            </div>
                            <div className="space-y-4 p-8 rounded-2xl bg-card border border-border">
                                <h4 className="text-xl font-bold text-primary">Ecuadorian Amazon (El Oriente)</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    One of the most biologically rich regions on Earth, including Yasuní National Park. Sanctuary for pink dolphins, jaguars, and Indigenous communities like the Kichwa and Shuar.
                                </p>
                            </div>
                            <div className="space-y-4 p-8 rounded-2xl bg-card border border-border">
                                <h4 className="text-xl font-bold text-primary">Galápagos Islands</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    A volcanic archipelago renowned for unique wildlife that inspired Charles Darwin. Home to giant tortoises, marine iguanas, and blue-footed boobies. A "living laboratory of evolution."
                                </p>
                            </div>
                            <div className="space-y-4 p-8 rounded-2xl bg-primary/10 border border-primary/20">
                                <h4 className="text-xl font-bold flex items-center gap-2"><Calendar className="w-5 h-5" /> Best Time to Visit</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <strong>Highlands:</strong> June–Sept (Dry).<br />
                                    <strong>Coast:</strong> Dec–May (Warm/Sunny).<br />
                                    <strong>Amazon:</strong> Aug–Nov (Less rain).<br />
                                    <strong>Galápagos:</strong> Year-round; Jan–May offers calmer seas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <RelatedToursCarousel country="Ecuador" />
                </div>
            </section>
        </Layout>
    );
};

export default Ecuador;
