import { Tour } from "../types";
import destAmazon from "@/assets/dest-amazon.jpg";

export const peru11: Tour = {
    id: "11",
    title: "Adventure Peru’s the Amazon Jungle to Machu Picchu",
    slug: "peru-amazon-adventure-machu-picchu",
    country: "Peru",
    destinations: ["Lima", "Cusco", "Sacred Valley", "Machu Picchu", "Puerto Maldonado", "Tambopata"],
    duration: 9,
    price: 3890,
    image: destAmazon,
    shortDescription: "A thrilling expedition for adventure seekers, from the biodiversity of the jungle to the heights of the Andes.",
    description: "Experience the ultimate adventure circuit. Start deep in the Tambopata National Reserve exploring the Amazon's wildlife, then ascend to the Andes to conquer the heights of Machu Picchu. This 9-day tour is designed for those who want both luxury comfort and high-energy exploration.",
    type: ["Adventure", "Nature", "Luxury"],
    included: [
        "Luxury eco-lodge in Tambopata",
        "Private naturalist jungle guides",
        "Expert historian guides in Cusco/Machu Picchu",
        "All domestic flights (Lima - Puerto Maldonado - Cusco - Lima)",
        "Exclusive river boat transfers",
        "High-end gear for trekking and spotting",
        "24/7 concierge support"
    ],
    itinerary: [
        { day: 1, title: "Landed in Lima", description: "Private car to your beachfront boutique hotel." },
        { day: 2, title: "To the Deep Jungle", description: "Fly to Puerto Maldonado. Journey by river boat to your luxury eco-lodge." },
        { day: 3, title: "Giant River Otters & Macaws", description: "Early morning boat trip to find rare wildlife. Canopy tour in the afternoon." },
        { day: 4, title: "Jungle to Mountains", description: "Fly from the Amazon to the Incan capital of Cusco. Relaxation and altitude prep." },
        { day: 5, title: "Sacred Valley Discovery", description: "Visit the Pisac market and the Ollantaytambo living Incan city." },
        { day: 6, title: "Machu Picchu Expedition", description: "Vistadome train to Aguas Calientes and private guided tour of the sanctuary." },
        { day: 7, title: "Sunrise over the Andes", description: "Optional second entrance or Sun Gate hike. Afternoon train back to Cusco." },
        { day: 8, title: "Historical Cusco", description: "Explore the Cathedral, Qoricancha, and the Sacsayhuaman ruins." },
        { day: 9, title: "Departure", description: "Farewell breakfast and final transfer to Cusco airport." }
    ]
};
