import { Tour } from "../types";
import destPeru from "@/assets/dest-peru.jpg";

export const peru4: Tour = {
    id: "4",
    title: "Desert Mysteries to Inca Legends Nazca Lines & Cusco",
    slug: "desert-mysteries-nazca-cusco",
    country: "Peru",
    destinations: ["Lima", "Ica", "Paracas", "Nazca", "Cusco", "Sacred Valley"],
    duration: 8,
    price: 3690,
    image: destPeru,
    shortDescription: "Solve the riddles of the past from the ancient lines in the sand to the stone citadels of the cloud forest.",
    description: "Experience the incredible contrasts of Peru. Flight over the mysterious Nazca Lines, boat through the 'Galapagos of Peru' in Paracas, and ascend to the legendary Incan capital of Cusco. This 8-day luxury tour combines coastal wonders with Andean majesty.",
    type: ["Luxury", "Culture", "Adventure"],
    included: [
        "Private flight over Nazca Lines",
        "Luxury desert camp experience in Ica",
        "Private yacht tour to Ballestas Islands",
        "All entrance fees and private guides",
        "First-class air-conditioned private transfers",
        "Accommodation in world-class boutique hotels",
        "Domestic flight Cusco - Lima"
    ],
    itinerary: [
        { day: 1, title: "Arrival in Lima", description: "Private airport pickup and luxury hotel check-in." },
        { day: 2, title: "Coastal Journey to Paracas", description: "Drive south in a private luxury vehicle. Sunset dinner by the sea." },
        { day: 3, title: "Ballestas Islands & Nazca Flight", description: "Private boat tour to spot penguins and sea lions. Afternoon flight over the desert lines." },
        { day: 4, title: "Huacachina Oasis & Vineyards", description: "Dune buggy adventure in the dunes. Private wine and pisco tasting at a colonial vineyard." },
        { day: 5, title: "Fly to the Inca Capital", description: "Morning return to Lima for your flight to Cusco. Relaxation and acclimatization." },
        { day: 6, title: "The Imperial City", description: "Private guided tour of Cusco's cathedral, Sun Temple, and nearby fortresses." },
        { day: 7, title: "Sacred Valley Exploration", description: "Explore the salt mines of Maras and the circular terraces of Moray." },
        { day: 8, title: "Final Farewell", description: "Leisure morning in Cusco before your transfer to the airport." }
    ]
};
