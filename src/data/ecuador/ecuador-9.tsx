import { Tour } from "../types";
import destEcuador from "@/assets/dest-ecuador.jpg";

export const ecuador9: Tour = {
    id: "9",
    title: "History and Beauty in Ecuador’s Colonial Cities",
    slug: "ecuador-colonial-cities",
    country: "Ecuador",
    destinations: ["Guayaquil", "Cuenca", "Quito"],
    duration: 5,
    price: 2490,
    image: destEcuador,
    shortDescription: "An elegant short escape focused on the architectural and cultural gems of the Ecuadorian mainland.",
    description: "Discover the artistic and historical heart of Ecuador. This 5-day luxury circuit connects the bustling port of Guayaquil with the artistic hub of Cuenca and the soaring colonial splendor of Quito. Perfect for travelers seeking culture, fine arts, and boutique experiences.",
    type: ["Luxury", "Cultural", "Boutique"],
    included: [
        "Stay in heritage boutique hotels",
        "Private art and history specialized guides",
        "Luxury private inter-city transfers",
        "Gourmet tasting menus of Ecuadorian cuisine",
        "Private museum and workshop access",
        "All domestic air tickets",
        "24/7 travel support"
    ],
    itinerary: [
        { day: 1, title: "Guayaquil Welcome", description: "Private airport transfer to your luxury riverside hotel." },
        { day: 2, title: "Artistic Cuenca", description: "Fly to Cuenca. Enjoy an afternoon gallery hop and riverside walk." },
        { day: 3, title: "Cuenca's Hidden Gems", description: "In-depth tour of the old city and a visit to a luxury ceramic studio." },
        { day: 4, title: "Soaring Quito", description: "Fly to Quito. Experience a private rooftop dinner overlooking the old town." },
        { day: 5, title: "Quito Icons & Departure", description: "Morning visit to the Golden Church (La Compañía) and final transfer." }
    ]
};
