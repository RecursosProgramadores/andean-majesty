import { Tour } from "../types";
import destBolivia from "@/assets/dest-bolivia.jpg";

export const bolivia15: Tour = {
    id: "15",
    title: "Explore Bolivia and the Salar de Uyuni",
    slug: "explore-bolivia-salar-uyuni",
    country: "Bolivia",
    destinations: ["La Paz", "Sun Island", "Uyuni"],
    duration: 7,
    price: 3190,
    image: destBolivia,
    shortDescription: "An essential high-altitude escape focusing on Bolivia's most iconic landscapes.",
    description: "A 7-day concentrated luxury experience. From the vibrant energy of La Paz to the spiritual tranquility of Sun Island on Lake Titicaca and the otherworldly scale of the Uyuni Salt Flats. Perfect for those seeking high-impact beauty in a shorter timeframe.",
    type: ["Luxury", "Adventure", "Nature"],
    badge: "High Impact",
    included: [
        "Luxury dome stays or high-end salt hotels in Uyuni",
        "Private boat tours on Lake Titicaca",
        "All domestic flights (La Paz - Uyuni - La Paz)",
        "Private 4x4 expedition across the Salar",
        "Professional local guides and specialized oxygen kits",
        "Full board in remote sections",
        "All regional taxes and entrance fees"
    ],
    itinerary: [
        { day: 1, title: "La Paz Welcome", description: "Private airport pickup and luxury hotel check-in." },
        { day: 2, title: "Sacred Lake Titicaca", description: "Private drive to Copacabana and boat to the mystical Sun Island." },
        { day: 3, title: "Island of the Sun", description: "Spiritual morning walk on the island. Return to La Paz." },
        { day: 4, title: "Fly to Uyuni", description: "Arrival in the white desert. Full day exploration of the Salar de Uyuni." },
        { day: 5, title: "Salt & Stars", description: "Gala dinner on the salt flats. Private stargazing session." },
        { day: 6, title: "Return to the Capital", description: "Flight back to La Paz. Free afternoon for spa or art galleries." },
        { day: 7, title: "Departure", description: "Farewell breakfast and final private transfer." }
    ]
};
