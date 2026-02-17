import { Tour } from "../types";
import destEcuador from "@/assets/dest-ecuador.jpg";

export const ecuador8: Tour = {
    id: "8",
    title: "Volcanoes and Cozy Hot Springs of the Central Ecuadorian Andes",
    slug: "ecuador-volcanoes-hot-springs",
    country: "Ecuador",
    destinations: ["Quito", "Cuenca", "Guayaquil"],
    duration: 7,
    price: 2990,
    image: destEcuador,
    shortDescription: "A revitalizing journey through Ecuador's 'Avenue of the Volcanoes' with a focus on relaxation and history.",
    description: "Experience the thermal wonders and majestic peaks of central Ecuador. From the high-altitude hot springs near Quito to the colonial charm of Cuenca and the vibrant energy of Guayaquil, this 7-day tour offers a perfect blend of natural power and refined comfort.",
    type: ["Luxury", "Nature", "Relaxation"],
    included: [
        "Luxury spa resort stays near volcanic springs",
        "Private tours of Quito and Cuenca UNESCO sites",
        "Luxury private transfers through the Avenue of the Volcanoes",
        "All domestic flights (Cuenca - Guayaquil)",
        "Guided visits to Cotopaxi National Park",
        "Daily artisan and local market experiences",
        "Professional local guides throughout"
    ],
    itinerary: [
        { day: 1, title: "Quito Arrival", description: "Welcome to the middle of the world. Private transfer to a colonial mansion hotel." },
        { day: 2, title: "Historical Quito & Equator", description: "Explore the historic center and the Mitad del Mundo monument." },
        { day: 3, title: "Avenue of the Volcanoes", description: "Private drive south with views of Cotopaxi. Afternoon at relaxing hot springs." },
        { day: 4, title: "Journey to Cuenca", description: "Scenic luxury drive to Ecuador's most beautiful colonial city." },
        { day: 5, title: "Cuenca UNESCO Heritage", description: "Private tour of Cathedral, flower market, and Panama hat workshop." },
        { day: 6, title: "Tropical Guayaquil", description: "Fly to Guayaquil. Explore Las Peñas and the modern riverwalk." },
        { day: 7, title: "Departure", description: "Farewell breakfast and private transfer to the international airport." }
    ]
};
