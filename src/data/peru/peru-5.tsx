import { Tour } from "../types";
import destAmazon from "@/assets/dest-amazon.jpg";

export const peru5: Tour = {
    id: "5",
    title: "Machu Picchu and the Amazon River Peruvian Adventure",
    slug: "machu-picchu-amazon-river-adventure",
    country: "Peru",
    destinations: ["Lima", "Cusco", "Sacred Valley", "Machu Picchu", "Iquitos"],
    duration: 11,
    price: 5490,
    image: destAmazon,
    shortDescription: "The ultimate wilderness and heritage experience: from the Andean peaks to the world's most iconic river.",
    description: "Embark on an 11-day luxury expedition that spans the diverse ecosystems of Peru. Journey through the Sacred Valley to the heights of Machu Picchu before flying deep into the Amazon for a luxury river cruise or a stay in a world-exclusive canopy lodge.",
    type: ["Luxury", "Adventure", "Nature"],
    badge: "Premium",
    included: [
        "High-end Amazon river cruise or luxury eco-lodge",
        "Exclusive private tours in Machu Picchu",
        "All internal flights and luxury transfers",
        "Gourmet jungle and Andean cuisine",
        "Private naturalist and historian guides",
        "All specialized gear for Amazon exploration",
        "Concierge service 24/7"
    ],
    itinerary: [
        { day: 1, title: "Lima Welcome", description: "Private transfer to your luxury hotel by the Pacific." },
        { day: 2, title: "Cusco & Sacred Valley", description: "Flight to Cusco and immediate descent to the Sacred Valley." },
        { day: 3, title: "Machu Picchu Wonder", description: "Full day private guided tour of the citadel. Overnight in Aguas Calientes." },
        { day: 4, title: "Second Entrance & Cusco", description: "Morning hike to Intipunku (Sun Gate). Afternoon train back to Cusco." },
        { day: 5, title: "Imperial Cusco City Tour", description: "Explore the cobblestone streets and San Blas artisan quarter." },
        { day: 6, title: "Fly to the Amazon (Iquitos)", description: "Flight to Iquitos via Lima. Board your luxury river cruiser." },
        { day: 7, title: "Black Water Lagoons", description: "Small boat exploration of remote tributaries. Spot pink dolphins and sloths." },
        { day: 8, title: "Dolphin Spotting & Canopy Walk", description: "Swim in the Amazon (optional) and explore the rainforest canopy." },
        { day: 9, title: "Jungle Village Visit", description: "Meet with local Riparian communities and learn about jungle life." },
        { day: 10, title: "Amazon Sunset", description: "Final day of exploration with a gala dinner aboard." },
        { day: 11, title: "Return to Lima", description: "Disembark and flight back to Lima for your international connection." }
    ]
};
