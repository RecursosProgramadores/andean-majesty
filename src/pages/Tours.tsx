import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Filter, X } from "lucide-react";
import Layout from "@/components/Layout";
import { tours } from "@/data/tours";
import heroCusco from "@/assets/hero-cusco.jpg";

const countries = ["All", "Peru", "Bolivia", "Chile", "Ecuador"];
const durations = ["All", "1-7 days", "8-15 days", "16+ days"];
const types = ["All", "Luxury", "Adventure", "Cultural", "Community Rural"];

const Tours = () => {
  const [searchParams] = useSearchParams();
  const initialCountry = searchParams.get("country") || "All";
  const [country, setCountry] = useState(initialCountry);
  const [duration, setDuration] = useState("All");
  const [type, setType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return tours.filter((t) => {
      if (country !== "All" && t.country !== country) return false;
      if (duration === "1-7 days" && t.duration > 7) return false;
      if (duration === "8-15 days" && (t.duration < 8 || t.duration > 15)) return false;
      if (duration === "16+ days" && t.duration < 16) return false;
      if (type !== "All" && !t.type.includes(type)) return false;
      return true;
    });
  }, [country, duration, type]);

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading font-bold text-foreground mb-3">Country</h3>
        <div className="flex flex-wrap gap-2">
          {countries.map((c) => (
            <button key={c} onClick={() => setCountry(c)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${c === country ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"}`}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-heading font-bold text-foreground mb-3">Duration</h3>
        <div className="flex flex-wrap gap-2">
          {durations.map((d) => (
            <button key={d} onClick={() => setDuration(d)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${d === duration ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"}`}>
              {d}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-heading font-bold text-foreground mb-3">Type</h3>
        <div className="flex flex-wrap gap-2">
          {types.map((ty) => (
            <button key={ty} onClick={() => setType(ty)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${ty === type ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"}`}>
              {ty}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={heroCusco} alt="Cusco cityscape luxury travel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-background">Our Luxury Travel Packages</h1>
          <p className="mt-3 text-background/80 text-lg">Handcrafted itineraries for extraordinary journeys</p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Mobile filter toggle */}
          <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 mb-6 text-primary font-semibold">
            <Filter className="w-4 h-4" /> Filters
            {(country !== "All" || duration !== "All" || type !== "All") && <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs">Active</span>}
          </button>

          <div className="flex gap-12">
            {/* Desktop sidebar filters */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-card rounded-xl p-6 shadow-card">
                <h2 className="font-heading text-xl font-bold text-foreground mb-6">Filters</h2>
                <FilterPanel />
              </div>
            </div>

            {/* Mobile filters modal */}
            {showFilters && (
              <div className="lg:hidden fixed inset-0 z-50 bg-foreground/50 flex items-end">
                <div className="bg-background w-full rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-xl font-bold">Filters</h2>
                    <button onClick={() => setShowFilters(false)}><X className="w-6 h-6" /></button>
                  </div>
                  <FilterPanel />
                  <button onClick={() => setShowFilters(false)} className="mt-6 w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold">
                    Show {filtered.length} tours
                  </button>
                </div>
              </div>
            )}

            {/* Tour grid */}
            <div className="flex-1">
              <p className="text-muted-foreground mb-6">{filtered.length} tour{filtered.length !== 1 ? "s" : ""} found</p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map((tour, i) => (
                  <motion.div key={tour.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                    <Link to={`/tours/${tour.slug}`} className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img src={tour.image} alt={`${tour.title} luxury tour`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        {tour.badge && (
                          <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tour.badge}</span>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <MapPin className="w-3 h-3" />{tour.destinations.join(" • ")}
                        </div>
                        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">{tour.title}</h3>
                        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{tour.shortDescription}</p>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                          <div>
                            <span className="text-xs text-muted-foreground">From</span>
                            <p className="text-accent font-bold text-lg">USD ${tour.price.toLocaleString()}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">{tour.duration} days</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">No tours match your filters. Try adjusting your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tours;
