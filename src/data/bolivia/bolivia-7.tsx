import { Tour } from "../types";
import destBolivia from "@/assets/dest-bolivia.jpg";

export const bolivia7: Tour = {
    id: "7",
    title: "From Bolivia to Peru An Epic Andean Crossing",
    slug: "bolivia-to-peru-epic-crossing",
    country: "Bolivia",
    destinations: ["La Paz", "Lake Titicaca", "Uyuni", "Cusco", "Sacred Valley", "Machu Picchu", "Lima"],
    duration: 13,
    price: 5890,
    image: destBolivia,
    shortDescription: "A grand 13-day expedition tracing the ancient high-altitude roads from the salt flats of Bolivia to the Incan wonders of Peru.",
    description: "Cross the heart of the Andes on this epic multi-country adventure. Experience the surreal Salar de Uyuni, the highest capital city in the world (La Paz), the sacred waters of Lake Titicaca, and the legendary Machu Picchu. This tour is a masterclass in high-altitude luxury and cultural immersion.",
    type: ["Luxury", "Adventure", "Cultural"],
    badge: "High Altitude",
    included: [
        "Private 4x4 expedition in Salar de Uyuni",
        "Luxury dome stays on the Salt Flats",
        "Private boat crossing on Lake Titicaca",
        "First-class air-conditioned transfers across borders",
        "Luxury hotels in La Paz, Cusco, and Lima",
        "All regional flights and premium train to Machu Picchu",
        "Dedicated bi-national expert guides"
    ],
    itinerary: [
        { day: 1, title: "La Paz Arrival", description: "Private welcome at El Alto. Check-in at your luxury high-altitude hotel." },
        { day: 2, title: "La Paz & Moon Valley", description: "Explore the cable cars and the lunar landscapes surrounding the city." },
        { day: 3, title: "Fly to Uyuni", description: "Vast white salt flats exploration. Sunset champagne toast in the middle of nowhere." },
        { day: 4, title: "Incahuasi & Salt Domes", description: "Visit the cactus island and sleep under the stars in luxury dome tents." },
        { day: 5, title: "Return to La Paz", description: "Morning flight back and afternoon at leisure for shopping and art galleries." },
        { day: 6, title: "The Sacred Lake", description: "Private drive to Lake Titicaca. Visit Sun Island and stay in a lakeside eco-lodge." },
        { day: 7, title: "Cross-Border to Peru", description: "Private boat to Puno. Welcome to Peru and luxury lakeside accommodation." },
        { day: 8, title: "High Altiplano to Cusco", description: "Scenic luxury road trip to Cusco. Visit Pukara and Raqchi." },
        { day: 9, title: "Imperial Cusco", description: "Explore the Sun Temple and the bohemian Barranco-like San Blas quarter." },
        { day: 10, title: "Sacred Valley Secrets", description: "In-depth visit to Moray and Ollantaytambo." },
        { day: 11, title: "Machu Picchu Sanctuary", description: "Private guided tour of the Incan masterpiece. Luxury return train." },
        { day: 12, title: "Fly to Lima", description: "Flight to the capital. Gourmet farewell dinner at a world-class bistro." },
        { day: 13, title: "Departure", description: "Final private transfer for your international connection home." }
    ]
};
