import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Globe, MapPin, Calendar, Info, Landmark, Utensils, Star, Sun, Camera, ShieldCheck, Banknote, ThermometerSun, Ship, Plane, Heart } from "lucide-react";

import destPeru from "@/assets/dest-peru.jpg";
import destBolivia from "@/assets/dest-bolivia.jpg";
import destChile from "@/assets/dest-chile.jpg";
import destEcuador from "@/assets/dest-ecuador.jpg";
import heroMachu from "@/assets/hero-machu-picchu.jpg";
import heroCusco from "@/assets/hero-cusco.jpg";
import destAmazon from "@/assets/dest-amazon.jpg";

const Categorias = () => {
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
                        Destinations Information
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-xl max-w-3xl mx-auto"
                    >
                        Comprehensive guides to the heart of South America: Culture, Nature, and Adventure.
                    </motion.p>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="ecuador" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-16 h-auto gap-4 bg-transparent">
                            <TabsTrigger value="peru" className="text-xl py-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border-2 border-muted shadow-sm rounded-xl">🇵🇪 Peru</TabsTrigger>
                            <TabsTrigger value="bolivia" className="text-xl py-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border-2 border-muted shadow-sm rounded-xl">🇧🇴 Bolivia</TabsTrigger>
                            <TabsTrigger value="chile" className="text-xl py-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border-2 border-muted shadow-sm rounded-xl">🇨🇱 Chile</TabsTrigger>
                            <TabsTrigger value="ecuador" className="text-xl py-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border-2 border-muted shadow-sm rounded-xl">🇪🇨 Ecuador</TabsTrigger>
                        </TabsList>

                        {/* ECUADOR CONTENT */}
                        <TabsContent value="ecuador" className="space-y-16 outline-none">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                                    <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                                        <Globe className="text-primary w-10 h-10" />
                                        Ecuador: An Extraordinary Destination
                                    </h2>
                                    <div className="prose prose-lg text-muted-foreground max-w-none">
                                        <p>
                                            Ecuador is one of the most diverse countries in the world relative to its size. Located on the equator, it offers an impressive combination of Andean mountains, Amazon rainforest, Pacific coastline, and the world-famous Galápagos Islands — making it a complete destination for culture, adventure, nature, and luxury travel.
                                        </p>
                                        <p>
                                            The capital city, Quito, features one of the best-preserved historic centers in Latin America, recognized as a UNESCO World Heritage Site. Visitors can explore colonial architecture, vibrant markets, and breathtaking views from the Andes. Meanwhile, Guayaquil serves as the country’s economic hub and gateway to Ecuador’s beautiful Pacific beaches.
                                        </p>
                                        <p>
                                            In the Andean region, travelers can discover volcanoes such as Cotopaxi, colorful indigenous traditions, and charming colonial cities like Cuenca. The Amazon rainforest, including Yasuní National Park, offers extraordinary biodiversity and immersive jungle experiences.
                                        </p>
                                        <p>
                                            Ecuador’s cuisine is equally diverse, with coastal seafood dishes, hearty Andean specialties, and unique Amazonian flavors. Compact yet incredibly rich in natural and cultural treasures, Ecuador allows travelers to experience multiple ecosystems and authentic traditions within a single journey, making it one of South America’s most captivating destinations.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
                                    <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl" />
                                    <img src={destEcuador} alt="Galapagos Wildlife" className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover" />
                                </motion.div>
                            </div>

                            {/* Ecuador Quick Facts */}
                            <div className="bg-muted/30 rounded-3xl p-8 lg:p-12 border border-muted">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                    <Info className="text-primary w-6 h-6" /> General Information About Ecuador
                                </h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wider font-bold text-primary">Official Name</p>
                                        <p className="text-foreground font-medium">Republic of Ecuador</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wider font-bold text-primary">Capital City</p>
                                        <p className="text-foreground font-medium">Quito</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wider font-bold text-primary">Largest City</p>
                                        <p className="text-foreground font-medium">Guayaquil</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wider font-bold text-primary">Official Language</p>
                                        <p className="text-foreground font-medium">Spanish</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wider font-bold text-primary">Currency</p>
                                        <p className="text-foreground font-medium">US Dollar (USD)</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wider font-bold text-primary">Time Zone</p>
                                        <p className="text-foreground font-medium">ECT (UTC-5) / Galápagos (UTC-6)</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wider font-bold text-primary">Population</p>
                                        <p className="text-foreground font-medium">~ 18 Million inhabitants</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wider font-bold text-primary">Government</p>
                                        <p className="text-foreground font-medium">Presidential republic</p>
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-muted-foreground/20">
                                    <p className="text-muted-foreground"><MapPin className="inline w-4 h-4 mr-2" /> <strong>Location:</strong> Northwestern South America, bordered by Colombia (north), Peru (east and south), and the Pacific Ocean (west).</p>
                                </div>
                            </div>

                            {/* Ecuador Regions & Deep Info */}
                            <div className="space-y-12">
                                <div className="grid lg:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold flex items-center gap-2"><MapPin className="text-primary" /> Geography</h3>
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
                                        <h3 className="text-2xl font-bold flex items-center gap-2"><ThermometerSun className="text-primary" /> Climate</h3>
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
                        </TabsContent>

                        {/* CHILE CONTENT */}
                        <TabsContent value="chile" className="space-y-16 outline-none">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                                    <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                                        <Globe className="text-primary w-10 h-10" />
                                        Chile: A Destination of Natural Contrasts
                                    </h2>
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
                                <div className="p-6 rounded-2xl bg-muted/30 border border-muted">
                                    <h4 className="text-primary uppercase text-xs font-bold tracking-widest mb-2">Capital</h4>
                                    <p className="font-bold">Santiago</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-muted/30 border border-muted">
                                    <h4 className="text-primary uppercase text-xs font-bold tracking-widest mb-2">Language</h4>
                                    <p className="font-bold">Spanish</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-muted/30 border border-muted">
                                    <h4 className="text-primary uppercase text-xs font-bold tracking-widest mb-2">Currency</h4>
                                    <p className="font-bold">Chilean Peso (CLP)</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-muted/30 border border-muted">
                                    <h4 className="text-primary uppercase text-xs font-bold tracking-widest mb-2">Climate</h4>
                                    <p className="font-bold">Continental Variety</p>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Norte de Chile: Desert Landscapes</h3>
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
                                        <h3 className="text-2xl font-bold mb-4">Central Chile: Culture and History</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            The cultural and historical heart of the country. Santiago is a vibrant metropolis, while Valparaíso charms with its colorful hills (UNESCO World Heritage Site). The region is also home to Chile’s renowned wine valleys.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-primary/5 p-8 lg:p-12 rounded-3xl border border-primary/10">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Calendar className="text-primary" /> When to Travel to Chile?</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-foreground">North (Atacama)</h4>
                                            <p className="text-sm text-muted-foreground">Year-round. Best temps between March and November.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">Central (Santiago)</h4>
                                            <p className="text-sm text-muted-foreground">Spring (Sept–Nov) and Autumn (March–May).</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">Patagonia (Torres del Paine)</h4>
                                            <p className="text-sm text-muted-foreground">Austral Summer (Oct–March) for favorabe weather.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">Easter Island</h4>
                                            <p className="text-sm text-muted-foreground">Good weather year-round; warmest Oct–April.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* BOLIVIA CONTENT */}
                        <TabsContent value="bolivia" className="space-y-16 outline-none">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                                    <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                                        <Globe className="text-primary w-10 h-10" />
                                        Bolivia: Heart of South America
                                    </h2>
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
                                <div className="p-8 rounded-2xl bg-card border border-border shadow-sm flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary"><MapPin className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold">Capitals</h4>
                                        <p className="text-sm text-muted-foreground">Sucre (Constitutional) & La Paz (Seat of Govt)</p>
                                    </div>
                                </div>
                                <div className="p-8 rounded-2xl bg-card border border-border shadow-sm flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary"><Info className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold">Languages</h4>
                                        <p className="text-sm text-muted-foreground">Spanish, Quechua, Aimara, Guaraní</p>
                                    </div>
                                </div>
                                <div className="p-8 rounded-2xl bg-card border border-border shadow-sm flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary"><Ship className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold">Altitude</h4>
                                        <p className="text-sm text-muted-foreground">Altiplano averages 3,600 msnm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <h3 className="text-3xl font-bold">Main Destinations of Bolivia</h3>
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
                                    <div className="p-8 rounded-3xl bg-secondary/80 text-background flex flex-col justify-center">
                                        <h4 className="text-xl font-bold flex items-center gap-2 mb-2"><Calendar className="w-5 h-5" /> When to Visit?</h4>
                                        <p className="text-sm font-medium">Dry Season (May–Oct) is ideal for clear skies and trekking. Rainy Season (Nov–March) for the "mirror effect" in Uyuni.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/5 p-10 rounded-[3rem] border border-primary/10 text-center">
                                <div className="max-w-3xl mx-auto">
                                    <h3 className="text-2xl font-bold mb-4">Why Visit Bolivia?</h3>
                                    <p className="text-muted-foreground text-lg italic leading-relaxed">
                                        "Bolivia remains a destination where culture is not just preserved—it is lived daily. Ideal for adventurous travelers seeking a genuine connection to living indigenous traditions and deep historical roots."
                                    </p>
                                </div>
                            </div>
                        </TabsContent>

                        {/* PERU CONTENT */}
                        <TabsContent value="peru" className="space-y-16 outline-none">
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

                            {/* Peru Intro Text Block */}
                            <div className="prose prose-xl text-muted-foreground max-w-4xl mx-auto text-center">
                                <p>
                                    Peru is one of the most fascinating destinations in South America, celebrated for its ancient civilizations, breathtaking natural diversity, and world-renowned gastronomy. Located on the western coast, Peru offers an extraordinary combination of Pacific coastline, majestic Andes, and the vast Amazon rainforest.
                                </p>
                            </div>

                            {/* Peru Destinations Grid */}
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                <div className="space-y-12">
                                    <h3 className="text-3xl font-bold border-l-4 border-primary pl-6">Main Tourist Destinations</h3>
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
                                    <div className="p-10 rounded-[2.5rem] bg-muted/50 border border-muted flex flex-col items-center text-center">
                                        <Utensils className="w-16 h-16 text-primary mb-6" />
                                        <h3 className="text-3xl font-bold mb-4">Peruvian Gastronomy</h3>
                                        <p className="text-muted-foreground mb-6 italic">"A vibrant fusion of cultures, flavors, and techniques."</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Shaped by Indigenous, Spanish, African, Chinese, and Japanese influences. Iconic dishes like <strong>Ceviche</strong>, <strong>Lomo Saltado</strong>, <strong>Ají de Gallina</strong>, and <strong>Causa</strong> define our identity. Lima remains the gastronomic capital of Latin America, with over 3,000 types of native potatoes and exotic Amazonian fruits.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-secondary/10 flex flex-col items-center text-center">
                                            <Landmark className="text-primary w-8 h-8 mb-4" />
                                            <h4 className="font-bold mb-2">Festivities</h4>
                                            <p className="text-xs text-muted-foreground">Inti Raymi, Candelaria Festival, and Semana Santa in Ayacucho.</p>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-secondary/10 flex flex-col items-center text-center">
                                            <Star className="text-primary w-8 h-8 mb-4" />
                                            <h4 className="font-bold mb-2">Luxury</h4>
                                            <p className="text-xs text-muted-foreground">Belmond Hiram Bingham train, private heli-tours, and boutique mansions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Peru Travel Guide Section */}
                            <div className="bg-foreground text-background rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -mr-64 -mt-64 rounded-full" />
                                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h3 className="text-4xl font-bold mb-8">Travel Guide & Quick Facts</h3>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2 border-b border-primary/30 pb-2">Capital</p>
                                                <p className="text-xl font-medium">Lima</p>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2 border-b border-primary/30 pb-2">Language</p>
                                                <p className="text-xl font-medium">Spanish / Quechua</p>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2 border-b border-primary/30 pb-2">Currency</p>
                                                <p className="text-xl font-medium">Sol Peruano (PEN)</p>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2 border-b border-primary/30 pb-2">Ideal Season</p>
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
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </Layout>
    );
};

export default Categorias;
