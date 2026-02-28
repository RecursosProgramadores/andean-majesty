import { Tour } from "../types";
import destChile from "@/assets/dest-chile.jpg";
import destBolivia from "@/assets/dest-bolivia.jpg";

// Destination Images
import imgLimaCity from "@/assets/destinos/lima/LimaCityTour.jpg";
import imgSacsayhuaman from "@/assets/destinos/cusco/sacsayhuaman.jpg";
import imgPisac from "@/assets/destinos/vallesagrado/vallesagradodeincas.jpg";
import imgMachuPicchu from "@/assets/destinos/machupichu/MachuPichuPeru.webp";
import imgRaqchi from "@/assets/destinos/raqchi/RaqchiCusco.jpg";
import imgSunIsland from "@/assets/destinos/lagotiticaca/islatakile.jpg";
import imgTiticaca from "@/assets/tour-titicaca.jpg";
import imgUyuni1 from "@/assets/destinos/uyuni/BoliviaSalaruyuni.jpg";
import imgUyuni2 from "@/assets/destinos/uyuni/SalardeUyuni.jpg";
import imgMoonValley from "@/assets/destinos/sanpedro/SanPedroAtacama.jpg";
import imgTatio from "@/assets/destinos/sanpedro/ElTatioGeysersAtacama.webp";
import imgBolivia from "@/assets/dest-bolivia.jpg";
import imgChile from "@/assets/dest-chile.jpg";

export const chile18: Tour = {
    id: "18",
    title: "Discover the Best Adventure Experiences in Peru, Bolivia & Chile",
    slug: "adventure-peru-bolivia-chile",
    subtitle: "Lima, Cusco, Puno, La Paz, Uyuni, San Pedro de Atacama, Santiago",
    country: "Chile",
    destinations: ["Lima", "Cusco", "Puno", "La Paz", "Uyuni", "San Pedro de Atacama", "Santiago"],
    duration: 16,
    nights: 15,
    price: 5890,
    image: imgUyuni1,
    gallery: [imgUyuni1, imgMachuPicchu, imgMoonValley, imgLimaCity],
    shortDescription: "An extraordinary 16-day journey through the heart of South America, combining history, salt flats, and deserts.",
    styleSummary: "Aventura, Paisajes, Cultura, Expedición",
    description: "This extraordinary journey through Peru, Bolivia, and Chile combines rich history, breathtaking landscapes, and vibrant cultures. The adventure begins in Lima, Peru’s elegant capital, where colonial architecture and world-renowned gastronomy set the stage for the trip.\n\nYou then travel to Cusco and the Sacred Valley, exploring impressive Inca and colonial sites before visiting the legendary Machu Picchu, one of the New Seven Wonders of the World. The journey continues across the Andean highlands to Lake Titicaca, where you discover ancient traditions and sacred islands before heading to La Paz and the surreal landscapes of Bolivia. A highlight is the spectacular Salar de Uyuni, the largest salt flat on Earth.\n\nCrossing into Chile, you explore the dramatic desert scenery of San Pedro de Atacama, including the stunning Valle de la Luna, before concluding your journey in cosmopolitan Santiago.",
    type: ["Adventure", "Nature", "Cultural", "Luxury"],
    badge: "Ultimate Experience",
    included: [
        "Accommodation with daily breakfast",
        "4 lunches and 2 dinners (beverages not included)",
        "Transfers and excursions on a shared service basis in Peru (Private guide in Sacred Valley/Machu Picchu)",
        "BTC Tourist Ticket (entrance fees in Cusco and Sacred Valley)",
        "Tourist bus Cusco / Puno with visits and lunch",
        "The Voyager train to Machu Picchu",
        "Private transfers and excursions in Bolivia",
        "Transfers and excursions in Chile (Private in Hito Cajón and Santiago)",
        "Scheduled commercial flights (Economy class)",
        "Professional English-speaking guides",
        "Personal attention"
    ],
    notIncluded: [
        "Lunches and dinners not listed",
        "International flights",
        "Tips"
    ],
    itinerary: [
        {
            day: 1,
            title: "Arrival in Lima",
            image: imgLimaCity,
            summary: "Welcome to the 'City of Kings' and private transfer to your hotel.",
            description: "Arrival in Lima, the captivating capital of Peru, affectionately known as the “City of Kings.” Founded in 1535, Lima today blends colonial grandeur with modern sophistication.\n\nUpon arrival at Jorge Chávez International Airport, you will be welcomed by your private representative and transferred to your selected hotel. Time at leisure to rest after your international journey.\n\n• Overnight in Lima."
        },
        {
            day: 2,
            title: "Lima City Tour",
            image: imgLimaCity,
            summary: "Explore the colonial center and the modern districts of San Isidro and Miraflores.",
            description: "This morning, explore the charm and history of Colonial Lima, a UNESCO World Heritage Site. Your guided tour begins at the Plaza Mayor, surrounded by landmarks like the Lima Cathedral and Government Palace.\n\nContinue to the Convent of San Francisco to discover its cloisters and catacombs. Proceed to the elegant districts of San Isidro and Miraflores for views of the Pacific Ocean.\n\n• Overnight in Lima."
        },
        {
            day: 3,
            title: "Lima / Cusco – City Tour",
            image: imgSacsayhuaman,
            summary: "Fly to Cusco and visit the Cathedral, Qorikancha, and nearby ruins.",
            description: "Private transfer to the airport for your flight to Cusco, the ancient capital of the Inca Empire. In the afternoon, enjoy a guided city tour including the Cusco Cathedral, Qorikancha (Temple of the Sun), and the imposing fortress of Sacsayhuamán.\n\nAlso visit the ceremonial centers of Qenqo, Puca Pucara, and Tambomachay.\n\n• Overnight in Cusco."
        },
        {
            day: 4,
            title: "Cusco / Sacred Valley of the Incas",
            image: imgPisac,
            summary: "Encounter Andean camelids at Awana Kancha and explore Pisac and Ollantaytambo.",
            description: "Journey into the Sacred Valley. Visit Awana Kancha to see llamas and alpacas. Continue to Pisac for its colorful artisan market. Lunch at a local restaurant.\n\nIn the afternoon, visit the living Inca town of Ollantaytambo, known for its agricultural terraces and original urban design.\n\n• Dinner and overnight in the Sacred Valley."
        },
        {
            day: 5,
            title: "Sacred Valley / Machu Picchu / Cusco",
            image: imgMachuPicchu,
            summary: "Scenic train journey to explore the legendary Machu Picchu citadel.",
            description: "Scenic train journey to the legendary Machu Picchu, one of the New Seven Wonders of the World. Upon arrival, private guided tour exploring its temples, terraces, and sacred stone structures.\n\nAfter absorbing the magic of the site, return to Cusco via train.\n\n• Overnight in Cusco."
        },
        {
            day: 6,
            title: "Cusco / Puno",
            image: imgRaqchi,
            summary: "Full day scenic journey across the Altiplano with cultural stops.",
            description: "Full-day scenic journey across the Altiplano toward Puno. En route visits include the Lithic Museum of Pukará, the Temple of Wiracocha in Raqchi, and the 'Sistine Chapel of the Americas' in Andahuaylillas.\n\nLunch is included during the journey.\n\n• Overnight in Puno."
        },
        {
            day: 7,
            title: "Puno / Lake Titicaca / Copacabana",
            image: imgSunIsland,
            summary: "Cross into Bolivia and visit Moon Island and Sun Island.",
            description: "Travel by bus toward Copacabana, Bolivia. Visit the Sanctuary of the Virgin of Copacabana before boarding a boat to Moon Island to explore the Temple of the Virgins of the Sun.\n\nContinue to Sun Island to reach the Sacred Fountain. Traditional lunch at Uma Kollu archaeological restaurant.\n\n• Overnight in Copacabana."
        },
        {
            day: 8,
            title: "Copacabana / La Paz",
            image: imgBolivia,
            summary: "Transfer to La Paz and city tour including the Witches' Market and cable car.",
            description: "Morning visit to the Basilica of Copacabana. Drive to La Paz, set within a canyon beneath snow-capped peaks. City tour includes indigenous markets, the Witches’ Market, and a ride on the cable car system.\n\nVisit the otherworldly Valley of the Moon.\n\n• Overnight in La Paz."
        },
        {
            day: 9,
            title: "La Paz / Uyuni / Villamar",
            image: imgUyuni1,
            summary: "Fly to Uyuni and explore Incahuasi Island and the Valley of the Rocks.",
            description: "Flight to Uyuni to explore the largest salt flat on Earth. Visit Incahuasi Island for extraordinary 360-degree views. Continue to the Valley of the Rocks with its wind-sculpted formations.\n\n• Overnight in Villamar."
        },
        {
            day: 10,
            title: "Villamar / San Pedro de Atacama",
            image: destChile,
            summary: "Eduardo Avaroa Reserve exploration and crossing into Chile.",
            description: "Travel through the Eduardo Avaroa Reserve, crossing the Dalí Desert. Visit Laguna Colorada, the geothermal field of Sol de Mañana, and Laguna Verde.\n\nCross the border at Hito Cajón and continue to San Pedro de Atacama.\n\n• Arrival and overnight in San Pedro."
        },
        {
            day: 11,
            title: "San Pedro de Atacama / Valley of the Moon",
            image: destChile,
            summary: "Sunset experience in the magical lunar landscapes of the Atacama.",
            description: "Morning at leisure. In the afternoon, excursion to Valle de la Luna to admire salt formations and a sunset cocktail while the desert changes color.\n\n• Overnight in San Pedro."
        },
        {
            day: 12,
            title: "San Pedro de Atacama",
            image: destChile,
            summary: "Free day with optional excursion to Tatio Geysers.",
            description: "Free day at leisure. Optional early morning excursion to El Tatio, one of the highest geothermal fields in the world.\n\n• Overnight in San Pedro."
        },
        {
            day: 13,
            title: "San Pedro de Atacama - Tour of your choice",
            image: destChile,
            summary: "Choose from various local desert expeditions.",
            description: "Today you can choose from different tours available in San Pedro de Atacama. Consult your advisor for local options.\n\n• Overnight in San Pedro."
        },
        {
            day: 14,
            title: "San Pedro de Atacama / Santiago",
            image: destChile,
            summary: "Transfer to Calama for your flight to the Chilean capital.",
            description: "Transfer to Calama Airport for your flight to Santiago de Chile. Arrival and private transfer to your hotel. Free time to explore.\n\n• Overnight in Santiago."
        },
        {
            day: 15,
            title: "Santiago City Tour",
            image: imgChile,
            summary: "Discover the colonial and modern face of Santiago against the Andes.",
            description: "Morning city tour of Santiago, including Plaza de Armas, La Moneda Palace, and both historic and modern districts. Afternoon at leisure.\n\n• Overnight in Santiago."
        },
        {
            day: 16,
            title: "Santiago / Departure",
            image: imgChile,
            summary: "Free time and private transfer for your international flight.",
            description: "Free time until your private transfer to the airport for your international return flight home.\n\n• End of services."
        }
    ]
};
