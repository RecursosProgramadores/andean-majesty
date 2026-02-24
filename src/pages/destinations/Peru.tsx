import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Globe, MapPin, Landmark, Utensils, Star, Heart } from "lucide-react";
import heroCusco from "@/assets/hero-cusco.jpg";
import heroMachu from "@/assets/hero-machu-picchu.jpg";
import RelatedToursCarousel from "@/components/RelatedToursCarousel";

const Peru = () => {
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
                        Peru
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-xl max-w-3xl mx-auto"
                    >
                        Iconic & Imperial: Where History & Luxury Meet
                    </motion.p>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 space-y-16">
                    <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
                        <img src={heroCusco} alt="Cusco Peru" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end p-12">
                            <div className="max-w-4xl">
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Iconic & Imperial</span>
                                    <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">Peru: Where History & Luxury Meet</h2>
                                    <p className="text-white/80 text-xl leading-relaxed max-w-2xl">
                                        From the iconic Machu Picchu high in the Andes to the world-renowned gastronomic scene in Lima.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-xl text-muted-foreground max-w-4xl mx-auto text-center">
                        <p>
                            Peru is one of the most fascinating destinations in South America, celebrated for its ancient civilizations, breathtaking natural diversity, and world-renowned gastronomy. Located on the western coast, Peru offers an extraordinary combination of Pacific coastline, majestic Andes, and the vast Amazon rainforest.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-12">
                            <div className="bg-foreground rounded-2xl p-8 mb-8">
                                <h3 className="text-3xl font-bold border-l-4 border-primary pl-6 text-white uppercase tracking-wider">Main Tourist Destinations</h3>
                            </div>
                            <div className="grid gap-6">
                                {[
                                    { title: "Machu Picchu", text: "The legendary Inca citadel set high in the Andes, an architectural masterpiece and one of the Seven Wonders of the World." },
                                    { title: "Cusco & Sacred Valley", text: "The former Inca capital featuring cobblestone streets, colonial churches atop ancient stone foundations, and engineering brilliance." },
                                    { title: "Lima: Gastronomy capital", text: "Vibrant blend of colonial history and modern sophistication, home to the best restaurants in the world like Central and Maido." },
                                    { title: "Lake Titicaca", text: "Breathtaking high-altitude landscapes and rich living traditions, including the floating islands of the Uros people." },
                                    { title: "Amazon Rainforest", text: "Accessible from Puerto Maldonado and Iquitos, offering extraordinary biodiversity and immersive eco-luxury experiences." }
                                ].map((dest, i) => (
                                    <div key={i} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all">
                                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{dest.title}</h4>
                                        <p className="text-sm text-muted-foreground">{dest.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-12">
                            <div className="p-10 rounded-[2.5rem] bg-foreground text-white border border-muted flex flex-col items-center text-center">
                                <Utensils className="w-16 h-16 text-primary mb-6" />
                                <h3 className="text-3xl font-bold mb-4">Peruvian Gastronomy</h3>
                                <p className="text-white/80 mb-6 italic">"A vibrant fusion of cultures, flavors, and techniques."</p>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Shaped by Indigenous, Spanish, African, Chinese, and Japanese influences. Iconic dishes like <strong>Ceviche</strong>, <strong>Lomo Saltado</strong>, <strong>Ají de Gallina</strong>, and <strong>Causa</strong> define our identity. Lima remains the gastronomic capital of Latin America, with over 3,000 types of native potatoes and exotic Amazonian fruits.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 rounded-3xl bg-foreground flex flex-col items-center text-center text-white">
                                    <Landmark className="text-primary w-8 h-8 mb-4" />
                                    <h4 className="font-bold mb-2">Festivities</h4>
                                    <p className="text-xs text-white/60">Inti Raymi, Candelaria Festival, and Semana Santa in Ayacucho.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-foreground flex flex-col items-center text-center text-white">
                                    <Star className="text-primary w-8 h-8 mb-4" />
                                    <h4 className="font-bold mb-2">Luxury</h4>
                                    <p className="text-xs text-white/60">Belmond Hiram Bingham train, private heli-tours, and boutique mansions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-foreground text-background rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -mr-64 -mt-64 rounded-full" />
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-4xl font-bold mb-8">Travel Guide & Quick Facts</h3>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-white font-bold mb-2 border-b border-white/30 pb-2">Capital</p>
                                        <p className="text-xl font-medium">Lima</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-white font-bold mb-2 border-b border-white/30 pb-2">Language</p>
                                        <p className="text-xl font-medium">Spanish / Quechua</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-white font-bold mb-2 border-b border-white/30 pb-2">Currency</p>
                                        <p className="text-xl font-medium">Sol Peruano (PEN)</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-white font-bold mb-2 border-b border-white/30 pb-2">Ideal Season</p>
                                        <p className="text-sm font-medium">Andes: Apr–Oct<br />Amazon: May–Sept</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary"><Heart className="w-5 h-5" /> Why Visit Peru?</h4>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Peru is not just a destination—it is a journey through time, nature, and flavor. Seamlessly blending history, adventure, culture, and refinement, it leaves a lasting impression on every visitor.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10"><p className="text-xs font-bold text-primary mb-1">COSTA</p><p className="text-[10px] text-white/50">Dec to Mar</p></div>
                                    <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10"><p className="text-xs font-bold text-primary mb-1">SIERRA</p><p className="text-[10px] text-white/50">Apr to Oct</p></div>
                                    <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10"><p className="text-xs font-bold text-primary mb-1">SELVA</p><p className="text-[10px] text-white/50">May to Sep</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <RelatedToursCarousel country="Peru" />
                </div>
            </section>
        </Layout>
    );
};

export default Peru;
