import { Tour } from "../types";
import tourColca from "@/assets/tour-colca.jpg";

export const peru3: Tour = {
    id: "3",
    title: "Colca Canyon to Machu Picchu Secrets of the Peruvian Andes",
    slug: "colca-to-machu-picchu-secrets",
    country: "Peru",
    destinations: ["Lima", "Arequipa", "Colca Canyon", "Puno", "Lake Titicaca", "Cusco", "Sacred Valley", "Machu Picchu"],
    duration: 11,
    price: 4890,
    image: tourColca,
    shortDescription: "A grand circuit through Southern Peru's most dramatic landscapes and historical treasures.",
    description: "Traverse the majestic Peruvian Andes on an 11-day odyssey. From the white volcanic stone of Arequipa and the soaring condors of Colca Canyon to the deep blue waters of Titicaca and the hidden secrets of the Incas in Machu Picchu.",
    type: ["Luxury", "Adventure", "Cultural"],
    badge: "Featured",
    included: [
        "Luxury boutique hotels and lodges",
        "Private transfers and domestic flights",
        "Premium rail journeys",
        "Expert local specialist guides",
        "Gourmet culinary experiences",
        "All park and sanctuary entrance fees",
        "Oxygen-equipped luxury vehicles for high altitude"
    ],
    itinerary: [
        { day: 1, title: "Arrival in Lima", description: "Check-in at your luxury hotel in San Isidro." },
        { day: 2, title: "The White City of Arequipa", description: "Fly to Arequipa. Visit the Santa Catalina Monastery and the colonial districts." },
        { day: 3, title: "Into the Colca Canyon", description: "Journey across the National Reserve to the deep Colca Valley. Relax in thermal springs." },
        { day: 4, title: "Flight of the Condor", description: "Watch the Andean condors at Cruz del Condor. Explore local Andean villages." },
        { day: 5, title: "To Puno & Titicaca", description: "Travel through high-altitude landscapes to the lakeside city of Puno." },
        { day: 6, title: "Floating Cultures", description: "Full day private boat tour to Uros and Amantani islands." },
        { day: 7, title: "Sun Route to Cusco", description: "Luxurious road trip or train Journey to Cusco with stops at Pukara and Raqchi." },
        { day: 8, title: "Imperial Cusco", description: "Explore the Koricancha Sun Temple and the Sacsayhuaman fortress." },
        { day: 9, title: "Sacred Valley Secrets", description: "Discover the salt mines of Maras and the Ollantaytambo ruins." },
        { day: 10, title: "The Sanctuary of Machu Picchu", description: "Private guided exploration of the Incan masterpiece. Return to Cusco by evening." },
        { day: 11, title: "Departure", description: "Transfer to Cusco airport for your international connection." }
    ]
};
