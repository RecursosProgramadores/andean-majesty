import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";

import destPeru from "@/assets/dest-peru.jpg";
import destBolivia from "@/assets/dest-bolivia.jpg";
import destChile from "@/assets/dest-chile.jpg";
import destEcuador from "@/assets/dest-ecuador.jpg";
import destAmazon from "@/assets/dest-amazon.jpg";
import tourTiticaca from "@/assets/tour-titicaca.jpg";
import tourColca from "@/assets/tour-colca.jpg";
import heroMachu from "@/assets/hero-machu-picchu.jpg";
import heroCusco from "@/assets/hero-cusco.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const allImages = [
  { src: heroMachu, alt: "Machu Picchu at sunrise", country: "Peru" },
  { src: destPeru, alt: "Sacred Valley terraces", country: "Peru" },
  { src: tourTiticaca, alt: "Lake Titicaca traditional boats", country: "Peru" },
  { src: tourColca, alt: "Colca Canyon with condor", country: "Peru" },
  { src: heroCusco, alt: "Cusco cityscape at sunset", country: "Peru" },
  { src: destBolivia, alt: "Uyuni Salt Flats reflection", country: "Bolivia" },
  { src: destAmazon, alt: "Amazon rainforest aerial view", country: "Peru" },
  { src: destChile, alt: "Atacama Desert starry night", country: "Chile" },
  { src: destEcuador, alt: "Galapagos Islands tortoise", country: "Ecuador" },
  { src: aboutTeam, alt: "Travel team with local community", country: "Peru" },
];

const countries = ["All", "Peru", "Bolivia", "Chile", "Ecuador"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? allImages : allImages.filter((img) => img.country === filter);

  return (
    <Layout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">Travel Gallery</h1>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Explore the beauty of South America through our lens.</p>
          </div>

          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {countries.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${c === filter ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-background hover:text-primary transition-colors" aria-label="Close lightbox">
              <X className="w-8 h-8" />
            </button>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
