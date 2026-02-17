import { Tour } from "../types";
import destPeru from "@/assets/dest-peru.jpg";
import heroMachuPicchu from "@/assets/hero-machu-picchu.jpg";
import tourTiticaca from "@/assets/tour-titicaca.jpg";

export const peru1: Tour = {
    id: "1",
    title: "From Lima to Machu Picchu a memorable journey",
    slug: "lima-to-machu-picchu-memorable-journey",
    country: "Peru",
    destinations: ["Lima", "Cusco", "Sacred Valley", "Machu Picchu"],
    duration: 6,
    price: 3290,
    image: destPeru,
    gallery: [destPeru, heroMachuPicchu, tourTiticaca],
    shortDescription: "Discover 'The City of Kings', the ancient heart of the Inca Empire, and the crown jewel: Machu Picchu.",
    description: "Discover the “City of Kings,” Lima, set along the shores of the Pacific Ocean, where magnificent colonial architecture, elegant avenues, and charming European-style plazas reflect Peru’s rich and layered heritage.\n\nThen travel to Cusco, the legendary “Rome of America,” nestled high in the southern Andes. Here, majestic Inca palaces and ornate Baroque churches stand side by side, creating a fascinating fusion of two extraordinary civilizations.\n\nContinue to the breathtaking Sacred Valley of the Incas, a land of dreamlike landscapes, remarkable archaeological treasures, and a privileged climate that has attracted travelers for centuries. And, of course, no journey would be complete without visiting Machu Picchu — the iconic masterpiece and crowning jewel of your Peruvian experience.\n\nOur tour, “From Lima to Machu Picchu a memorable journey” invites you to discover the very best of Peru through an exclusive and fully private experience. Enjoy handpicked luxury hotels, personalized services in the vibrant capital, and a seamless journey through Cusco and its enchanting Sacred Valley, culminating in the awe-inspiring citadel of Machu Picchu.\n\nEvery detail of this itinerary is thoughtfully designed in collaboration with the most distinguished partners and can be fully customized to suit your preferences — ensuring a journey defined by comfort, authenticity, and refined luxury.",
    type: ["Luxury", "Cultural", "Private"],
    badge: "Best Seller",
    included: [
        "1 night in Lima, 2 nights in Sacred Valley, 2 nights in Cusco",
        "All Excursions and Tours In Private Service",
        "All transfers and transportation with a private van",
        "A Professional Driver",
        "All entrance tickets to all the attractions mentioned in the program",
        "Round trip VISTADOME train ticket to Machu Picchu",
        "Round trip bus ticket to Machu Picchu",
        "Entrance tickets to Machu Picchu",
        "Meals as indicated (B = Breakfast, L = Lunch, D = Dinner)",
        "A Professional English-Speaking Tour Guide",
        "Personal attention"
    ],
    notIncluded: [
        "Airfare",
        "Lunches or dinner (unless otherwise specified)",
        "Tips"
    ],
    itinerary: [
        {
            day: 1,
            title: "Peru – Lima",
            image: destPeru,
            description: "ARRIVE AT YOUR HOTEL IN LIMA AFTER YOUR INTERNATIONAL FLIGHT AND TAKE TIME TO RELAX AND RECHARGE BEFORE YOUR FASCINATING CITY TOUR BEGINS!\n\nWe understand how exhausting international flights can be, so from the very moment you arrive in Peru, we ensure a seamless and stress-free experience. Upon landing at Lima Airport, your host will be waiting for you at the arrivals gate to warmly welcome you and accompany you in private transfer to your selected hotel.\n\nOnce comfortably settled, you may refresh and unwind after your long journey, or perhaps savor Peru’s world-renowned cuisine with a delightful lunch.\n\nLater, your discovery of the “City of Kings” begins with a fascinating exploration of Lima’s colonial and modern districts. Stroll through elegant Republican and French-inspired squares and visit the impressive Monastery of San Francisco, a masterpiece of Spanish Baroque architecture, and its mysterious catacombs.\n\nFor dinner, we highly recommend Central or Maido, both internationally acclaimed among the finest restaurants in the world.\n\n• Overnight in Lima.\n• Included meals: None."
        },
        {
            day: 2,
            title: "Lima - Cusco - Sacred Valley",
            image: tourTiticaca,
            description: "WELCOME TO CUSCO! EXPLORE THE TEXTILE HOUSE MUSEUM AND ITS LIVING TRADITIONS AND PISAC INCA NEIGHBORHOOD\n\nToday, your adventure in the Andean highlands begins. After a delightful breakfast, your host will accompany you to Lima Airport for your flight to Cusco. Upon arrival, we will travel directly to the Sacred Valley to ensure a smooth acclimatization.\n\nEn route, visit an exceptional Textile House Museum to encounter llamas, alpacas, guanacos, and vicuñas. Skilled artisans will demonstrate ancestral weaving techniques. Continuing through the valley, arrive at the archaeological site of Pisac, majestically perched atop a hill. Descending into the colonial town, explore its vibrant traditional market.\n\n• Overnight in Sacred Valley.\n• Included meals: Breakfast and Lunch."
        },
        {
            day: 3,
            title: "Sacred Valley",
            image: destPeru,
            description: "EXPLORE THE LAST INCA FORTRESS OF OLLANTAYTAMBO, THE INCA SALT MINES OF MARAS, AND THE CIRCULAR TERRACES OF MORAY\n\nAfter breakfast, set out with your private guide to Ollantaytambo, one of the most remarkable living Inca towns. Wander through its narrow cobblestone streets and ancient temples fitted perfectly without mortar.\n\nIndulge in an exquisite lunch surrounded by the valley’s stunning landscapes. Your journey continues to the dazzling salt mines of Maras, where nearly 2,000 salt pools cascade down the mountainside. Finally, visit Moray, an Inca agricultural laboratory with concentric circular terraces.\n\n• Overnight in Sacred Valley.\n• Included meals: Breakfast and Lunch."
        },
        {
            day: 4,
            title: "Sacred Valley - Machu Picchu - Cusco",
            image: heroMachuPicchu,
            description: "CONQUEST THE MOST INCREDIBLE INCA CITADEL, MACHU PICCHU, ON AN UNFORGETTABLE DAY\n\nBoard a comfortable and elegant train bound for Aguas Calientes. This scenic journey takes you through the transition from Sacred Valley to lush cloud forest. A 35-minute ascent by shuttle bus brings you to the entrance of legendary Machu Picchu.\n\nWander among perfectly carved stone temples and sacred enclosures during your private guided tour. Your expert guide will unveil the history and mysteries of this UNESCO World Heritage Site. Return to Cusco by evening.\n\n• Overnight in Cusco.\n• Included meals: Breakfast and Lunch."
        },
        {
            day: 5,
            title: "Cusco",
            image: heroMachuPicchu,
            description: "EXPLORE THE MAGICAL CITY OF CUSCO AND KNOW WHY IT IS CONSIDERED THE ROME OF AMERICA\n\nExplore the enchanting capital of the Inca Empire. Visit the monumental fortress of Sacsayhuamán, the ceremonial center of Qenqo, Puca Pucara military outpost, and the 'Bath of the Inca' at Tambomachay.\n\nReturn to the historic center to visit the magnificent Cusco Cathedral and Qoricancha, the most sacred temple of the Inca Empire dedicated to the Sun God.\n\n• Overnight in Cusco.\n• Included meals: Breakfast."
        },
        {
            day: 6,
            title: "Cusco – Lima",
            image: destPeru,
            description: "SAY GOODBYE TO PERU IN THE BEST WAY WITH US!\n\nAfter a comforting breakfast, Machu Travel Peru staff will transfer you to the Cusco airport for your flight back to Lima. We will be attentive to personalize any extra dreams or requests for your future journeys!\n\n• Included meals: Breakfast."
        }
    ]
};
