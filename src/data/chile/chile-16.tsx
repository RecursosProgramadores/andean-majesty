import { Tour } from "../types";
import destChile from "@/assets/dest-chile.jpg";
import destBolivia from "@/assets/dest-bolivia.jpg";
import tourPeruMachupicchu from "@/assets/tour-peru-machupicchu.png";
import tourPeruSacredValley from "@/assets/tour-peru-sacred-valley.png";
import tourPeruCusco from "@/assets/tour-peru-cusco.png";
import tourTiticaca from "@/assets/tour-titicaca.jpg";
// import destBolivia from "@/assets/dest-bolivia.jpg";

export const chile16: Tour = {
    id: "16",
    title: "Andean Expedition Cusco to San Pedro de Atacama",
    slug: "andean-expedition-cusco-san-pedro",
    subtitle: "Cusco, Puno, La Paz, Uyuni, San Pedro de Atacama",
    country: "Chile",
    destinations: ["Cusco", "Puno", "La Paz", "Uyuni", "San Pedro de Atacama"],
    duration: 15,
    nights: 14,
    price: 5290,
    image: destChile,
    gallery: [tourPeruMachupicchu, tourTiticaca],
    shortDescription: "An epic 15-day journey across the heart of the Andes, spanning Peru, Bolivia, and Chile.",
    styleSummary: "Aventura, Cultura, Paisajes, Historia",
    description: "The Peru Bolivia Chile 15-Day Tour offers an incredible journey through the most iconic destinations of these three countries. This 15-day adventure takes you from the ancient ruins of Machu Picchu to the vast Uyuni Salt Flats and the stunning landscapes of the Atacama Desert. The Peru Bolivia Chile 15-Day Tour is perfect for travelers looking to immerse themselves in the cultural and natural wonders of South America.",
    type: ["Adventure", "Cultural", "Nature", "Luxury"],
    badge: "Most Comprehensive",
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
            title: "Arrival to Cusco – City Tour",
            image: tourPeruCusco,
            summary: "Arrival in Cusco and guided city tour of the archaeological centers.",
            description: "Arrival in the City of Cusco, reception and transfer to the Hotel selected by a Representative of our Travel Agency. Hotel in Cusco.\n\nPick up from the Hotel between 1:00 p.m. to 1:20 p.m., to begin the visit to the City and nearby Archaeological Centers: the Tour will show us the impressive Colonial City built on Inca bases; we will visit the Cathedral; of Renaissance structure and with fine paintings from the “Cuzco School”.\n\nQorikancha, or Temple of the Sun; known as the Royal House of the Sun in Cusco. We continue with the visit to the 4 Archaeological Centers: Sacsayhuaman; great fortress located 5 km from the city. Qenqo; sacred amphitheater, center of worship of the god Puma, place where human sacrifices were possible.\n\nPucapucara; red fortress due to the hue that its rocks acquire with the light of twilight and Tambomachay; temple to worship water.\n\n** Overnight Aguas Calientes."
        },
        {
            day: 2,
            title: "Cusco – Sacred Valley – Cusco",
            image: tourPeruSacredValley,
            summary: "Full day tour of the Sacred Valley including Pisac and Ollantaytambo.",
            description: "Breakfast at the Hotel.\n\nPick up from the hotel at 08:00 a.m to make our visit to the Sacred Valley.\n\nDuring the tour we will visit the Town of Pisaq; picturesque colonial mestizo town, we will continue with the visit to the Archaeological Center of Pisaq; where we can observe the magnificent platforms of Inca architecture; Then we visited the towns of Ccoya, Lamay, Calca and Urubamba on the way.\n\nBuffet lunch. In the afternoon the guided tour of the town of Ollantaytambo; place where the archaeological park of Ollantaytambo is located, a gigantic agricultural, administrative, social, religious and military complex in the time of Tahuantinsuyo.\n\nTransfer to the train station to head towards Machu Picchu Pueblo, we will arrive at the Aguas Calientes Station, where a Representative of Our Travel Agency will wait for you and transfer you to your hotel.\n\n** Overnight Aguas Calientes."
        },
        {
            day: 3,
            title: "Cusco – Machu Picchu – Cusco",
            image: tourPeruMachupicchu,
            summary: "Guided exploration of the Inca Citadel of Machu Picchu.",
            description: "Breakfast at the Hotel.\n\nPick up from the Hotel. Transfer to the Bus Station, where we will take the bus that will take us to the Lost City of the Incas, “Machu Picchu”, (20 minutes trip)rediscovered in 1911 by Hiram Bingham.\n\nWe will enjoy a guided excursion through the main buildings of the citadel such as: El Mirador, Temple of the Three Windows, El Intihuatana, The Main Plaza, etc. We will return to the town of Aguas Calientes.\n\nLunch at a local restaurant (Totos House restaurant).\n\nIn the afternoon, we will take the Train to return to the Ollantaytambo Station where a Transfer awaits you to direct you to the bus that will take you back to the City of Cusco.\n\n** Overnight in Cusco."
        },
        {
            day: 4,
            title: "Cusco – Puno",
            image: tourPeruSacredValley,
            summary: "Scenic bus journey to Puno with visits to Andahuaylillas and Raqchi.",
            description: "Breakfast at the Hotel. Transfer to the Bus Station, at 06:00 a.m.\n\nDeparture towards the City of Puno in Tourist Bus service. During the trip we will pass through the picturesque town of Andahuaylillas, and visit the Church of San Pedro de Andahuaylillas, which dates back to the 17th century, better known as the Sistine Chapel of the Americas, due to its polychrome ceiling and the beauty of its murals.\n\nAlong the way we stop in Raqchi, where we can see a spectacular Inca Sanctuary built by the Inca Pachacuteq and dedicated to the great God Wiracocha. It has a large central wall with a stone base of fine Inca architecture.\n\nWe will have a stop for our Buffet Lunch at a quiet country restaurant, where you can enjoy the delicious culinary art of the region.\n\nWe will continue our trip, past the border between the cities of Cusco and Puno (La Raya), at more than 4,335 meters above sea level. Here we will have a reasonable amount of time to take photos.\n\nArrival at the Puno Bus station, reception and transfer to the chosen Hotel.\n\n** Overnight in Puno."
        },
        {
            day: 5,
            title: "Puno – Uros & Taquile Islands – Puno",
            image: tourTiticaca,
            summary: "Full day boat tour of Lake Titicaca visiting Uros and Taquile.",
            description: "Breakfast at the Hotel. Pickup from the hotel from 7:00 a.m to 07:15 a.m.\n\nVery early transfer from the Hotel to the port, to board our boat and visit the Floating Islands of Los Uros currently considered the National Reserve of Lake Titicaca. The people of the Uros still maintain their own culture and tradition.\n\nWe will continue the trip to the Natural Island of Taquile, whose inhabitants are mainly dedicated to agriculture, crafts and fishing. The locals continue to live according to their ancient Inca traditions and laws.\n\nAfterwards we will enjoy a typical lunch included. Passengers will have two free hours to visit the town’s craft center and then return to Puno.\n\n** Overnight in Puno."
        },
        {
            day: 6,
            title: "Puno – Copacabana",
            image: tourTiticaca,
            summary: "Transfer to Copacabana, Bolivia and visit to the Sun Island.",
            description: "Breakfast at the Hotel. Transfer to Copacabana in Bolivia, bordering Lake Titicaca with exceptional views of the Royal Andes Mountains.\n\nAt noon typical lunch of the area. We board our boat and sail to Lake Titicaca heading to the Island of the Sun, considered the Cradle of the Inca Empire.\n\nWe will visit the Intiwatana Archaeological Complex, the medicinal centers, and Pachamama Terraces. We will board the boat back to Copacabana.\n\n** Overnight in Copacabana."
        },
        {
            day: 7,
            title: "Copacabana – La Paz",
            image: tourPeruCusco,
            summary: "Visit the Sanctuary of Copacabana and transfer to La Paz.",
            description: "Breakfast at the Hotel. Visit the Sanctuary of the Virgin of Copacabana, seeing the traditional manifestation of the Chala or blessing of cars.\n\nAfter lunch, we take the bus to the City of La Paz (4 hours). Arrival where a representative will transfer us to our selected Hotel.\n\n** Overnight in La Paz."
        },
        {
            day: 8,
            title: "City Tour La Paz – Valley of the Moon",
            image: tourPeruCusco,
            summary: "Explore the cultural and historical highlights of La Paz and the Moon Valley.",
            description: "Breakfast at the Hotel. City Tour exploring Plaza Murillo, the Cathedral, the Government Palace, the Church of San Francisco, and the Witches Market.\n\nWe will go to the Valley of the Moon passing through traditional neighborhoods. You will have free time to take a tour on your own and then transfer back to the Hotel.\n\n** Overnight in La Paz."
        },
        {
            day: 9,
            title: "La Paz – Uyuni – Salar – Fish Island – San Juan",
            image: destBolivia,
            summary: "Fly to Uyuni and begin the 4x4 expedition across the salt flat.",
            description: "Breakfast at the Hotel. Transfer to El Alto airport for a flight to Uyuni. Reception at the airport.\n\nThe tour begins bound for the largest salt desert. We visit the train cemetery and the town of Colchani.\n\nWe continue to the salt hotel/museum for lunch. We arrive at Incahuasi (Fish Island) in the middle of the salt desert, with giant cacti. In the afternoon, visit San Juan where we spend the night in family homes."
        },
        {
            day: 10,
            title: "San Juan – Lagoons – Laguna Colorada",
            image: destBolivia,
            summary: "Discover the Andean lagoons and the stunning Laguna Colorada.",
            description: "Breakfast at the Hotel. Travel to Laguna Colorada, observing the Ollague volcano and the lagoons of Cañapa, Hedionda, Chiarcota and Honda, populated by flamingos.\n\nLunch along the way. In the afternoon we pass the Siloli desert to see the Stone Tree. Arrival at Laguna Colorada in the Eduardo Avaroa National Park.\n\n** Overnight near Laguna Colorada (basic hostel)."
        },
        {
            day: 11,
            title: "Laguna Colorada – Laguna Verde – San Pedro de Atacama",
            image: destBolivia,
            summary: "See the geysers and colorful lagoons before crossing into Chile.",
            description: "Tour starts at 5:00 a.m. to appreciate the Sol de Mañana geysers. Continue to Polques thermal baths for breakfast. View the White and Green Lagoons at the foot of Licancabur volcano.\n\nTrip to the border of Hito Cajón. Migration processes (Bolivia-Chile) and change to a minibus for the trip to San Pedro de Atacama (Arrival around 2 PM).\n\n** Overnight in San Pedro de Atacama."
        },
        {
            day: 12,
            title: "Valley of the Moon – San Pedro de Atacama",
            image: destChile,
            summary: "Explore the lunar landscapes of the Atacama Desert.",
            description: "Breakfast at the Hotel. Visit the Valley of the Moon in the Salt Mountain Range, the driest place on earth.\n\nWe will see the Tres Marías, the Canyon, and the Amphitheater. Finish the tour with sunset from the Licantay viewpoint, watching the desert change color.\n\n** Overnight in San Pedro de Atacama."
        },
        {
            day: 13,
            title: "San Pedro de Atacama – Rainbow Valley",
            image: destChile,
            summary: "Visit the colorful hills of Rainbow Valley and ancient petroglyphs.",
            description: "Breakfast at the Hotel. Travel 90 km to the Rainbow Valley, named for its hills of earth colors (red, beige, green, white, yellow).\n\nWe will also visit the petroglyphs of Yerbas Buenas and the Salado River sector. Return to San Pedro de Atacama.\n\n** Overnight in San Pedro de Atacama."
        },
        {
            day: 14,
            title: "Geyser Tatio and Machuca",
            image: destChile,
            summary: "Early morning visit to the Tatio Geysers and the village of Machuca.",
            description: "Tour starts very early. Two stops in the geothermal field to wait for the first rays of sun with breakfast. Visit the thermal pool and the main geyser activity.\n\nReturn to San Pedro stopping at Putana, Pueblo and Machuca Guatín. Arrival at 12:30 PM.\n\n** Overnight in San Pedro de Atacama."
        },
        {
            day: 15,
            title: "San Pedro de Atacama – Calama – Santiago",
            image: destChile,
            summary: "Transfer to Calama for your flight to Santiago and beyond.",
            description: "Breakfast at the Hotel. At the right time, transfer to Calama airport to take a flight to Santiago to connect with your international flight."
        }
    ]
};
