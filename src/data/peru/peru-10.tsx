import { Tour } from "../types";
import heroMachuPicchu from "@/assets/hero-machu-picchu.jpg";

export const peru10: Tour = {
    id: "10",
    title: "A Culinary Adventure Through Peru",
    slug: "peru-culinary-adventure",
    country: "Peru",
    destinations: ["Lima", "Cusco", "Sacred Valley", "Machu Picchu"],
    duration: 7,
    price: 4290,
    image: heroMachuPicchu,
    shortDescription: "A journey for the palate, exploring the flavors that made Peru the world's leading culinary destination.",
    description: "Taste your way through the world's most celebrated food scene. This 7-day tours combines visits to iconic Incan sites with exclusive cooking classes, tastings at world-ranking restaurants like Central or Maido, and traditional 'Pachamanca' feasts in the Sacred Valley.",
    type: ["Luxury", "Culinary", "Cultural"],
    badge: "For Foodies",
    included: [
        "Reservations at top-ranked restaurants",
        "Private market tours and cooking classes",
        "Luxury accommodations throughout",
        "Private city and archaeological tours",
        "All gourmet meals and beverage pairings",
        "First-class train to Machu Picchu",
        "Domestic flights Lima - Cusco - Lima"
    ],
    itinerary: [
        { day: 1, title: "Lima: The Food Capital", description: "Welcome to Lima. Evening tasting menu at a top-10 world restaurant." },
        { day: 2, title: "Market Tour & Ceviche Class", description: "Visit a local market with a chef. Learn the secrets of perfect ceviche." },
        { day: 3, title: "Fly to Cusco", description: "Arrival in the Andes. Light Andean dinner and coca leaf tea ceremony." },
        { day: 4, title: "Pachamanca in the Sacred Valley", description: "Witness the ancient Earth Oven ceremony. Visit local organic farms." },
        { day: 5, title: "Machu Picchu & Picnic", description: "Tour the sanctuary. Enjoy a luxury private picnic with mountain views." },
        { day: 6, title: "Cusco Fusion Cooking", description: "Afternoon class focused on Novo-Andean fusion. Farewell dinner." },
        { day: 7, title: "Departure", description: "Last morning for gourmet shopping before your flight back to Lima." }
    ]
};
