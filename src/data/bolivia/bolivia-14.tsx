import { Tour } from "../types";
import destBolivia from "@/assets/dest-bolivia.jpg";

export const bolivia14: Tour = {
    id: "14",
    title: "Memorable Bolivia An Unforgettable Travel Experience",
    slug: "memorable-bolivia-experience",
    country: "Bolivia",
    destinations: ["La Paz", "Lake Titicaca", "Sucre", "Potosi", "Uyuni"],
    duration: 11,
    price: 4390,
    image: destBolivia,
    shortDescription: "A deep dive into Bolivia's colonial history and surreal natural wonders.",
    description: "Uncover the soul of Bolivia. This 11-day journey takes you from the bustling markets of La Paz to the 'White City' of Sucre and the silver-rich history of Potosi, climaxing in the breathtaking Salar de Uyuni. Experience refined comfort in the most remote corners of the Altiplano.",
    type: ["Luxury", "Cultural", "History"],
    included: [
        "Luxury accommodation in colonial mansions and salt hotels",
        "Private expert guides specialized in history and geology",
        "All domestic flights (La Paz - Sucre, Sucre - Potosi, Potosi - Uyuni)",
        "Private 4x4 vehicles with specialized drivers",
        "Full board in remote regions with private chefs",
        "Oxygen-equipped luxury transfers",
        "All entrance fees and site permits"
    ],
    itinerary: [
        { day: 1, title: "La Paz Arrival", description: "Welcome to the world's highest capital. Private transfer to your luxury suite." },
        { day: 2, title: "Modern La Paz", description: "Cable car tour and visit to the Witches Market." },
        { day: 3, title: "The White City", description: "Fly to Sucre. Private walking tour of the constitutional capital's colonial heart." },
        { day: 4, title: "Sucre's Surroundings", description: "Visit local artisan villages and the dinosaur footprint site." },
        { day: 5, title: "To the Imperial City of Potosi", description: "Private drive to the highest city in the world. Explore the colonial mint (Casa de la Moneda)." },
        { day: 6, title: "Silver Mines & History", description: "In-depth historical tour of Potosi's silver heritage. Relax in thermal baths." },
        { day: 7, title: "To the Salt Flats", description: "Flight or private drive to Uyuni. First sunset views of the Salar." },
        { day: 8, title: "Full Day Salar Expedition", description: "Visit the island of Incahuasi and the red lagoons with pink flamingos." },
        { day: 9, title: "Desert Wonders", description: "See the Arbol de Piedra and the Sol de Mañana geysers. Stay in a luxury desert lodge." },
        { day: 10, title: "Return to La Paz", description: "Fly back to La Paz. Final celebratory gourmet dinner." },
        { day: 11, title: "Departure", description: "Final private transfer for your flight home." }
    ]
};
