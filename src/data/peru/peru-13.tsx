import { Tour } from "../types";
import tourTiticaca from "@/assets/tour-titicaca.jpg";

export const peru13: Tour = {
    id: "13",
    title: "Exploring the Wonders of Southern Peru",
    slug: "southern-peru-wonders",
    country: "Peru",
    destinations: ["Lima", "Puerto Maldonado", "Cusco", "Sacred Valley", "Machu Picchu", "Puno", "Lake Titicaca"],
    duration: 11,
    price: 4990,
    image: tourTiticaca,
    shortDescription: "A comprehensive grand tour covering the jungle, the high Andes, and the sacred waters of Titicaca.",
    description: "The definitive Southern Peru circuit. This 11-day itinerary weaves together the biodiversity of the Amazon, the history of the Inca Empire, and the mystical traditions of the Altiplano. Perfect for travelers who want to see it all without compromising on luxury.",
    type: ["Luxury", "Cultural", "Nature"],
    included: [
        "Luxury eco-lodge and 5-star hotel stays",
        "Private boat tours on the Amazon and Titicaca",
        "Exclusive private guides in every destination",
        "All internal flights and high-end transfers",
        "Reservations at top-tier restaurants",
        "All monument and park entrance fees",
        "24/7 dedicated local assistance"
    ],
    itinerary: [
        { day: 1, title: "Lima Welcome", description: "Private airport transfer to your luxury hotel." },
        { day: 2, title: "To the Amazon", description: "Fly to Puerto Maldonado. Luxury river lodge check-in." },
        { day: 3, title: "Rainforest Life", description: "Wildlife spotting and canopy adventures in the Tambopata Reserve." },
        { day: 4, title: "Amazon to Cusco", description: "Fly to the Incan capital. Afternoon coca leaf tea and rest." },
        { day: 5, title: "Imperial Cusco", description: "Full city tour including Qoricancha and Sacsayhuaman." },
        { day: 6, title: "Inca Heartlands", description: "Explore the Sacred Valley: Maras, Moray, and Ollantaytambo." },
        { day: 7, title: "Machu Picchu Majesty", description: "Luxury train to the citadel. Detailed private guided tour." },
        { day: 8, title: "The Route of the Sun", description: "Scenic luxury bus or train Journey from Cusco to Puno." },
        { day: 9, title: "Lake Titicaca Secrets", description: "Visit Uros and Taquile islands by private boat. Picnic by the lake." },
        { day: 10, title: "Altiplano Wonders", description: "Visit Sillustani funerary towers. Farewell Andean dinner." },
        { day: 11, title: "Departure", description: "Transfer to Juliaca for flight to Lima and onwards home." }
    ]
};
