import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Star } from "lucide-react";
import { tours } from "@/data/tours";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface RelatedToursCarouselProps {
    country: string;
}

const RelatedToursCarousel: React.FC<RelatedToursCarouselProps> = ({ country }) => {
    const filteredTours = tours.filter(
        (tour) => tour.country.toLowerCase() === country.toLowerCase()
    );

    if (filteredTours.length === 0) return null;

    return (
        <section className="py-20 bg-foreground text-white border-t border-white/10">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-white/60 font-bold uppercase tracking-[0.2em] text-xs mb-3 block"
                        >
                            Explore More
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-3xl lg:text-4xl font-bold text-white"
                        >
                            Our {country} Luxury Collections
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            to="/tours"
                            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all"
                        >
                            View All Tours <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                <div className="relative group px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: filteredTours.length > 4,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {filteredTours.map((tour, index) => (
                                <CarouselItem key={tour.id} className="md:basis-1/2 lg:basis-1/4">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="h-full"
                                    >
                                        <Link
                                            to={`/tours/${tour.slug}`}
                                            className="group block bg-background rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500 h-full border border-border/50"
                                        >
                                            <div className="relative aspect-[4/5] overflow-hidden">
                                                <img
                                                    src={tour.image}
                                                    alt={tour.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                                <div className="absolute top-4 left-4 flex gap-2">
                                                    {tour.badge && (
                                                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                                            {tour.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <div className="flex items-center gap-1.5 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-1">
                                                        <MapPin className="w-3 h-3 text-primary" />
                                                        {tour.duration} Days
                                                    </div>
                                                    <h3 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                                                        {tour.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 text-primary fill-primary" />
                                                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                                            Premium Class
                                                        </span>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest block mb-0.5">From</span>
                                                        <span className="text-lg font-bold text-foreground">
                                                            ${tour.price.toLocaleString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-4 hover:bg-primary hover:text-primary-foreground border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" />
                        <CarouselNext className="hidden md:flex -right-4 hover:bg-primary hover:text-primary-foreground border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default RelatedToursCarousel;
