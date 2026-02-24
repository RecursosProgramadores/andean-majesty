import { Tour } from "../types";
import destChile from "@/assets/dest-chile.jpg";
import destBolivia from "@/assets/dest-bolivia.jpg";
import tourPeruLima from "@/assets/tour-peru-lima.png";
import tourPeruCusco from "@/assets/tour-peru-cusco.png";
import tourPeruSacredValley from "@/assets/tour-peru-sacred-valley.png";
import tourPeruMachupicchu from "@/assets/tour-peru-machupicchu.png";
import tourTiticaca from "@/assets/tour-titicaca.jpg";
// import destBolivia from "@/assets/dest-bolivia.jpg";

export const chile17: Tour = {
    id: "17",
    title: "The Best of South America Explore Peru, Bolivia and Chile",
    slug: "best-south-america-peru-bolivia-chile",
    subtitle: "Lima, Ica, Cusco, Puno, La Paz, Uyuni, San Pedro de Atacama",
    country: "Chile",
    destinations: ["Lima", "Ica", "Nazca", "Cusco", "Puno", "La Paz", "Uyuni", "San Pedro de Atacama"],
    duration: 15,
    nights: 14,
    price: 5490,
    image: destChile,
    gallery: [tourPeruLima, tourPeruMachupicchu],
    shortDescription: "A curated adventure through iconic destinations: Lima, Ica, Paracas, Nazca, Machu Picchu, Titicaca, and Uyuni.",
    styleSummary: "Historia, Naturaleza, Aventura, Gastronomía",
    description: "Embarking on a tour 15 days Peru Bolivia Chile journey through the heart of South America promises an immersive experience into the rich tapestry of ancient civilizations, breathtaking landscapes, and vibrant cultures.\n\nThis curated adventure takes you through iconic destinations such as Lima, Paracas, Nazca, Machu Picchu, the Sacred Valley, Lake Titicaca, Uyuni Salt Flats, La Paz, Atacama Desert, and Santiago, offering a blend of history, nature, and modernity.",
    type: ["Luxury", "Cultural", "History", "Nature"],
    badge: "Bucket List",
    included: [
        "12 nights in a hotel in Hotels includes breakfast (according to accommodation)",
        "1 night overnight in a basic hotel near Laguna Colorada (Uyuni)",
        "1 night in basic accommodation in San Juan de Uyuni includes breakfast (Uyuni)",
        "All the tours are in a group tour, EXCEPT Machupicchu, where you will have your own guide for the Citadel",
        "All transfers from the airport to the hotel and vice versa",
        "Pick up at hotels to start the tours",
        "Transportation, guide and income for all tours to be carried out",
        "Excursion for all the tours described on the program",
        "Entrance fee for all places to visit",
        "Professional English or spanish speaking guide for the tours",
        "Round trip train to Machupicchu- EXPEDITION CLASS",
        "Guided tour from Cusco to Puno (Includes buffet lunch)",
        "All services described in the tour",
        "Flight ticket from La Paz to Uyuni (1 hour trip)",
        "Flight ticket from Calama to Santiago de Chile (2 hours trip)",
        "Meals as specified per day (B- Breakfast, L- Lunch, D- Dinner)"
    ],
    notIncluded: [
        "Meals: Lunch and Dinner not described in the Tourist Package",
        "International flights",
        "Tips"
    ],
    itinerary: [
        {
            day: 1,
            title: "Arrival in Lima – City Tour",
            image: tourPeruLima,
            summary: "Welcome to Lima and a panoramic tour of its colonial and modern highlights.",
            description: "How exciting it is to arrive in Lima! Our team will greet you at Jorge Chávez Airport and take you to your hotel.\n\nFirst, we will take a panoramic tour of the enigmatic Huaca Pucllana, where the ancient ruins transport us back to the days of the Ichma culture and Lima. Then, we will cross the olive groves of San Isidro, Lince, and Cercado.\n\nAt the Plaza de Armas, we will immerse ourselves in history by exploring the Cathedral, the Government Palace, and the Municipal Palace. We will visit the Convent of Santo Domingo, where the relics of three Peruvian saints are preserved.\n\nFinally, we will end the day with a spectacular view of Parque del Amor and Larcomar before returning to the hotel.\n\n• Overnight in Lima."
        },
        {
            day: 2,
            title: "Lima – Paracas – Ica – Nazca",
            image: tourPeruLima,
            summary: "Boat tour of Ballestas Islands, Ica winery, and Huacachina Oasis.",
            description: "5:00 AM: We depart for Paracas Bay. Board a boat to the Ballestas Islands to see the “Candelabro” and marine fauna: seals, sea lions, and Humboldt penguins. Back at the dock, free time to stroll.\n\nIca: Visit a traditional winery for wine and pisco tasting. Continue to the Huacachina Oasis for a tubular sand car adventure and sandboarding.\n\nNazca: Board a bus to Nazca for a well-deserved rest.\n\n• Overnight stay in Nazca."
        },
        {
            day: 3,
            title: "Nazca Lines Overflight – Lima",
            image: tourPeruLima,
            summary: "Fly over the mysterious Nazca Lines and return to Lima.",
            description: "Breakfast at the hotel. Pick up for the flight over the enigmatic Nazca Lines! Admire the famous figures such as the Spider, the Hummingbird, and the Monkey from the sky.\n\nAfter the overflight, head to the Nazca bus station for return to Lima. Team will take you to the hotel upon arrival.\n\n• Overnight in Lima."
        },
        {
            day: 4,
            title: "Lima – Cusco",
            image: tourPeruCusco,
            summary: "Fly to the imperial city of Cusco and settle in.",
            description: "Transfer to the airport for the magical city of Cusco. Upon arrival, our team will greet you with a warm welcome and transfer you to your chosen hotel.\n\n• Overnight in Cusco."
        },
        {
            day: 5,
            title: "Sacred Valley – Machu Picchu",
            image: tourPeruMachupicchu,
            summary: "Train to Aguas Calientes and guided tour of the Machu Picchu Citadel.",
            description: "Travel to Aguas Calientes at the foot of Machu Picchu. Ascend by bus (25 minutes) to the “Lost City of the Incas”. Explore the ruins for approximately 3 hours.\n\nOur guide will explain the technology of the builders, the Intihuatana, the Temple of the Sun, and more. Return by train to Cusco.\n\n• Day included visits to Ollantaytambo before the train."
        },
        {
            day: 6,
            title: "Cusco – Rainbow Mountain – Raqchi",
            image: tourPeruSacredValley,
            summary: "Hike the vibrant Rainbow Mountain and overnight with the Raqchi community.",
            description: "Depart for Rainbow Mountain. Hike up Vinicunca Mountain at over 5,000 meters above sea level to appreciate the natural wonder. Return to Raqchi to stay in community homes.\n\n• Special immersion day with local families."
        },
        {
            day: 7,
            title: "Raqchi – Llachon",
            image: tourPeruSacredValley,
            summary: "Visit the Temple of Wiracocha and head to the shores of Lake Titicaca.",
            description: "Visit the spectacular Raqchi temple dedicated to the god Wiracocha. Journey to Llachon, passing through La Raya. Arrival in the beautiful town on the peninsula.\n\n• Overnight in a basic hotel or guesthouse."
        },
        {
            day: 8,
            title: "Llachon – Lake Titicaca (Uros & Taquile) – Puno",
            image: tourTiticaca,
            summary: "Navigate the world's highest lake and visit traditional islands.",
            description: "Traditional boat tour on Lake Titicaca. Visit the floating Uros islands and Taquile island to experience the community culture. Return to Puno.\n\n• Overnight at the hotel."
        },
        {
            day: 9,
            title: "Puno – Copacabana – La Paz",
            image: tourTiticaca,
            summary: "Cross into Bolivia, visit Copacabana, and continue to La Paz.",
            description: "Board the tourist bus to La Paz. Visit the lakeside town of Copacabana and continue the journey to the seat of the Bolivian government.\n\n• Overnight in La Paz."
        },
        {
            day: 10,
            title: "La Paz – Moon Valley",
            image: tourPeruCusco,
            summary: "Tour the lunar landscapes of Moon Valley and shop at the Witches' Market.",
            description: "Visit Moon Valley with its reddish rock formations. Shopping at the Witches' Market. Optional bike tour to Coroico available.\n\n• Afternoon at leisure in La Paz."
        },
        {
            day: 11,
            title: "La Paz – Uyuni – Tunupa Volcano – Jirira",
            image: destBolivia,
            summary: "Fly to Uyuni and enter the world's largest salt flat.",
            description: "Fly from La Paz to Uyuni. Begin the 4x4 tour of the salt flats. Observe salt extraction in Colchani and end the day with a view of the Tunupa Volcano from Jirira.\n\n• Overnight in a basic local hotel."
        },
        {
            day: 12,
            title: "Jirira – Fish Island – San Juan de Lipez",
            image: destBolivia,
            summary: "Hike to the Tunupa mummy cave and visit Inkawasi Island.",
            description: "Morning hike to the foothills of Tunupa to see the mummies. Travel to the center of the salt flat to visit Inkawasi (Fish Island) with its giant cacti. Continue to Villa Candelaria.\n\n• Night in a basic local hotel."
        },
        {
            day: 13,
            title: "Chuivica – Laguna Colorada",
            image: destBolivia,
            summary: "Cross the Altiplano through rock forests and lagoons with flamingos.",
            description: "Appreciate the twisted formations of the Bosque de Piedra and the active Ollagüe Volcano. Visit various lagoons with flamingos. Spend the night near Laguna Colorada.\n\n• Basic accommodations at high altitude."
        },
        {
            day: 14,
            title: "Laguna Colorada – San Pedro de Atacama",
            image: destChile,
            summary: "Visit geysers and hot springs before crossing into Chile.",
            description: "Early visit to the “Sol de la Mañana” geysers, hot springs, and lagoons. Cross the border into Chile and arrive in the oasis of San Pedro de Atacama to relax.\n\n• Overnight in a local hotel."
        },
        {
            day: 15,
            title: "San Pedro de Atacama – Calama – Santiago",
            image: destChile,
            summary: "Transfer to Calama for your flight to Santiago and beyond.",
            description: "Early departure for the flight from Calama to Santiago de Chile. Onward connections for your international flight."
        }
    ]
};
