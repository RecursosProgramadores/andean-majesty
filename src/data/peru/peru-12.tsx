import { Tour } from "../types";
import heroMachuPicchu from "@/assets/hero-machu-picchu.jpg";

export const peru12: Tour = {
    id: "12",
    title: "Ancient Wonders Along the Inca Trail to Machu Picchu",
    slug: "inca-trail-ancient-wonders",
    country: "Peru",
    destinations: ["Lima", "Cusco", "Sacred Valley", "Inca Trail", "Machu Picchu"],
    duration: 9,
    price: 4190,
    image: heroMachuPicchu,
    shortDescription: "The world's most famous trek, elevated with luxury camping, gourmet meals, and expert local guides.",
    description: "Walk the path of the Incas on this 9-day premium experience. We've transformed the classic Inca Trail into a luxury trek with personalized porter service, spacious walk-in tents, portable hot showers, and a private chef who prepares five-star meals in the middle of the Andes.",
    type: ["Adventure", "Luxury", "Trekking"],
    badge: "Iconic",
    included: [
        "Luxury camping equipment (large tents, cots, heaters)",
        "Private chef and gourmet outdoor dining",
        "Bilingual lead guide and specialized crew",
        "Personal porters for your belongings",
        "Premium permits for the classic Inca Trail",
        "Luxury hotel stays in Lima and Cusco",
        "Return luxury train to Cusco"
    ],
    itinerary: [
        { day: 1, title: "Lima Arrival", description: "Settle into your boutique hotel in the city of kings." },
        { day: 2, title: "Fly to Cusco", description: "Private orientation and a light afternoon walk through the San Blas quarter." },
        { day: 3, title: "Sacred Valley Prep", description: "Visit Chinchero and Moray. Equipment check and final briefing." },
        { day: 4, title: "Inca Trail Day 1", description: "Start the trek at KM 82. Gentle walk along the Urubamba river. Camp at Wayllabamba." },
        { day: 5, title: "Inca Trail Day 2", description: "Ascend to Dead Woman's Pass (4,215m). Reward yourself with a gourmet dinner at camp." },
        { day: 6, title: "Inca Trail Day 3", description: "Explore Puyupatamarca and Wiñay Wayna ruins. Lush cloud forest scenery." },
        { day: 7, title: "The Sun Gate", description: "Sunrise at Intipunku with your first view of Machu Picchu. Private tour of the citadel." },
        { day: 8, title: "Recovery in Cusco", description: "Morning at leisure. Afternoon relaxation massage at your spa hotel." },
        { day: 9, title: "Farewell", description: "Final transfer for your flight to Lima and onwards home." }
    ]
};
