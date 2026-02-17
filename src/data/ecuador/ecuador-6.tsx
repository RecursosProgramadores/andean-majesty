import { Tour } from "../types";
import destEcuador from "@/assets/dest-ecuador.jpg";

export const ecuador6: Tour = {
    id: "6",
    title: "Nature and Ancient Wonders South America: Galápagos and Machu Picchu",
    slug: "galapagos-machu-picchu-nature-wonders",
    country: "Ecuador",
    destinations: ["Quito", "Isabela Island", "Fernandina Island", "Santiago Island", "Santa Cruz Island", "Guayaquil", "Lima", "Cusco", "Sacred Valley", "Machu Picchu"],
    duration: 14,
    price: 6490,
    image: destEcuador,
    shortDescription: "A legendary 14-day double-country expedition combining the unique evolution of Galápagos with the Incan majesty of Machu Picchu.",
    description: "Witness the best of South America. Start in the enchanted islands of Galápagos, where wildlife knows no fear, and continue to the mystic peaks of the Andes to uncover the secrets of Machu Picchu. This luxury tour handles all cross-border logistics for a seamless, once-in-a-lifetime experience.",
    type: ["Luxury", "Adventure", "Nature"],
    badge: "Epic Journey",
    included: [
        "Luxury yacht cruise in Galápagos",
        "First-class train and private tours in Machu Picchu",
        "All regional and domestic flights between Ecuador and Peru",
        "Expert naturalist and historian guides",
        "Luxury hotel stays in Quito, Lima, and Cusco",
        "All National Park and Sanctuary fees",
        "Complete seamless transfers across two countries"
    ],
    itinerary: [
        { day: 1, title: "Arrive in Quito", description: "Private welcome to Ecuador's colonial capital." },
        { day: 2, title: "Isabela Island Arrival", description: "Fly to the islands. Hike to Sierra Negra volcano and explore Flamingo Lagoon." },
        { day: 3, title: "Fernandina Pristine Nature", description: "Spot flightless cormorants and marine iguanas on the youngest island." },
        { day: 4, title: "Santiago & Bartolomé", description: "Iconic views from Pinnacle Rock and snorkeling with sea lions." },
        { day: 5, title: "Santa Cruz Highlands", description: "Walk with giant tortoises in their natural habitat." },
        { day: 6, title: "Fly to Guayaquil & Lima", description: "Return to the continent and cross-border flight to Peru's capital." },
        { day: 7, title: "Lima City & Coast", description: "Explore the historic center and the modern culinary scene." },
        { day: 8, title: "Fly to Cusco", description: "Arrival in the Andes. Private transfer to the Sacred Valley." },
        { day: 9, title: "Sacred Valley Wonders", description: "Visit Pisac ruins and the Ollantaytambo living Incan city." },
        { day: 10, title: "Machu Picchu Sanctuary", description: "The highlight of the journey. Full private guided tour of the citadel." },
        { day: 11, title: "Return to Cusco", description: "Morning hike or relaxation. Luxury train back to the Imperial City." },
        { day: 12, title: "Cusco Historical Experience", description: "Discover the Sun Temple and San Blas artisan quarter." },
        { day: 13, title: "Lima Farewell", description: "Return to Lima. Farewell gourmet dinner overlooking the ocean." },
        { day: 14, title: "Departure", description: "Final private transfer for your international flight home." }
    ]
};
