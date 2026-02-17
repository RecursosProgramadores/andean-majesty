import { Tour } from "../types";
import tourTiticaca from "@/assets/tour-titicaca.jpg";

export const peru2: Tour = {
    id: "2",
    title: "Experience Living Traditions at Sacred Lake Titicaca",
    slug: "living-traditions-lake-titicaca",
    country: "Peru",
    destinations: ["Lima", "Cusco", "Sacred Valley", "Machu Picchu", "Puno", "Lake Titicaca"],
    duration: 8,
    price: 3990,
    image: tourTiticaca,
    shortDescription: "Connect with ancestral cultures on the world's highest navigable lake and explore Cusco's majesty.",
    description: "A deep dive into the living traditions of the Andes. From the floating islands of Uros to the majestic ruins of Machu Picchu, this 8-day itinerary offers a perfect balance of luxury, culture, and authentic community engagement.",
    type: ["Luxury", "Cultural", "Community Rural"],
    included: [
        "Luxury hotel stays in Cusco and Puno",
        "Private boat excursion on Lake Titicaca",
        "Premium train service to Machu Picchu",
        "Authentic community lunch on Taquile Island",
        "Private expert guides throughout the journey",
        "Domestic flights within Peru",
        "Full board in remote destinations"
    ],
    itinerary: [
        { day: 1, title: "Welcome to Lima", description: "Arrival and private transfer to your seaside hotel." },
        { day: 2, title: "Cusco Arrival", description: "Fly to Cusco. Private orientation walk and welcome dinner." },
        { day: 3, title: "Sacred Valley & Weaving Traditions", description: "Visit Chinchero weaving community and Moray laboratory." },
        { day: 4, title: "Machu Picchu Sanctuary", description: "Explore the Wonder of the World with a private historian guide." },
        { day: 5, title: "Andean Explorer Train to Puno", description: "A luxury rail journey across the high Altiplano to the shores of Lake Titicaca." },
        { day: 6, title: "Lake Titicaca Islands", description: "Visit the Uros floating islands and the remote island of Taquile." },
        { day: 7, title: "Sillustani Funerary Towers", description: "Exploration of the ancient Colla tombs and sunset by the Umayo Lagoon." },
        { day: 8, title: "Departure", description: "Transfer to Juliaca airport for your flight back to Lima." }
    ]
};
