import { Tour } from "../types";
import destEcuador from "@/assets/dest-ecuador.jpg";
import destPeru from "@/assets/dest-peru.jpg";
import imgAmazon from "@/assets/dest-amazon.jpg";

// Destination Images
import imgGalapagos1 from "@/assets/destinos/galapagos/Galpagosecuador.webp";
import imgGalapagos2 from "@/assets/destinos/galapagos/galapagos.webp";
import imgGalapagos3 from "@/assets/destinos/galapagos/islasgalapagosecuador.webp";

export const ecuador9: Tour = {
    id: "9",
    title: "History and Beauty in Ecuador’s Colonial Cities",
    slug: "ecuador-colonial-cities",
    subtitle: "Guayaquil, Cuenca, Quito",
    country: "Ecuador",
    destinations: ["Guayaquil", "Cuenca", "Quito"],
    duration: 5,
    nights: 4,
    price: 2490,
    image: imgGalapagos3,
    gallery: [imgGalapagos3, imgGalapagos1, imgAmazon],
    shortDescription: "An elegant short escape focused on the architectural and cultural gems of the Ecuadorian mainland.",
    styleSummary: "Cultura, Historia, Arquitectura, Ciudades Coloniales",
    description: "Ecuador is far more than the Galápagos Islands, extraordinary wildlife, and the famous equatorial line. Known as the “Country of Four Worlds,” Ecuador is also a land deeply rooted in history, tradition, and cultural richness. This heritage comes beautifully to life in its colonial cities — elegant reminders of its Spanish past — where whitewashed buildings, charming plazas, cobblestone streets, lively traditional markets, and warm, welcoming smiles create an atmosphere that feels both timeless and authentic.\n\nWe invite you to experience these unforgettable sensations as you journey through Ecuador’s most captivating cities: Guayaquil, Cuenca, and Quito.\n\nYour adventure begins in vibrant Guayaquil, Ecuador’s largest city and gateway to the Pacific. Continue to the colonial gem of Cuenca, often called the “Athens of Ecuador” for its rich intellectual and artistic legacy. Admire its marble façades, magnificent churches, and refined architecture that reflect centuries of cultural splendor. Finally, discover Quito, the Ecuadorian capital and one of the best-preserved colonial cities in South South America, where Spanish-style houses, ornate churches, historic squares, and enchanting alleys tell stories of a glorious past.",
    type: ["Luxury", "Cultural", "Boutique"],
    badge: "Cultural Heritage",
    included: [
        "1 night in Guayaquil, 2 nights in Cuenca, 1 night in Quito",
        "Majority of Excursions and Tours In Private Service",
        "Majority of transfers and transportation with a private van",
        "A Professional Driver",
        "All entrance tickets to all the attractions mentioned in the program",
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
            title: "Guayaquil - Ecuador",
            image: imgGalapagos1,
            summary: "Arrive at your hotel in Guayaquil after your international flight and recharge energies for your Ecuador experience!",
            description: "ARRIVE AT YOUR HOTEL IN GUAYAQUIL AFTER YOUR INTERNATIONAL FLIGHT AND RECHARGE ENERGIES FOR YOUR ECUADOR EXPERIENCE!\n\nYour dream trip to Ecuador has come! We know you want to get to your hotel to rest after a long flight and enjoy your dreams. Well, our team makes it simple for you! Once you arrive at the International Guayaquil Airport, our host will be waiting for you at the international arrival zone with a sign indicating your name. He'll welcome you and transfer you to the hotel of your preference in the beautiful Guayaquil. Of course, he'll also give recommendations of the best restaurants close to your hotel to enjoy the best Ecuatorian cuisine on your own.\n\nAfterward, you’ll have the rest of the day to enjoy at your leisure. Maybe you can explore the city and its treasures like the largest Ferris wheel in all of South America called La Perla. Or, maybe visit the Iguana Park where a great variety of iguanas coexist with park visitors. Or enjoy the services of your hotel.\n\n• Overnight in Guayaquil.\n• Included meals: None."
        },
        {
            day: 2,
            title: "Cajas National Park",
            image: imgGalapagos2,
            summary: "Tour a true paradise in the middle of the earth, the Cajas National Park.",
            description: "TOUR A TRUE PARADISE IN THE MIDDLE OF THE EARTH, THE CAJAS NATIONAL PARK\n\nToday, a paradise is about to be revealed by you, the Cajas National Park! The morning can be enjoyed with a delicious breakfast provided by your Guayaquil hotel. Later, our tour guide will pick you up with land transportation to go to the enchanting Cuenca, the trip will take roughly 6 or seven hours.\n\nHowever, in the middle of the route, we’ll make a stop about 153 km southeast of Guayaquil, in the Cajas National Park. But what is so special about this park? Well, This amazing park combines desolate lunar-like terrains with lush cloud forests, in a unique contrast. All these are surrounded by more than 250 lakes and ponds.\n\nThe choices of activities that you can partake in are endless; they include bird watching, fishing, and views of the rich and colorful flora and fauna, among other things. In addition, you can enjoy the Interpretation Center located near La Toreadora Lake, the largest lake in the park. Photos and presentations of the reserve are displayed there.\n\nYou just have to inform the guide what activity you would like to do and that's it!\n\nAfterward, we’ll continue our trip to Cuenca, where our guide and transportation will take us directly to our Cuenca hotel.\n\nThe afternoon will be completely yours to enjoy the city on your own, go out to eat, or simply take a deserved shower and rest in your room.\n\n• Overnight in Cuenca.\n• Included meals: Breakfast."
        },
        {
            day: 3,
            title: "Cuenca",
            image: imgGalapagos3,
            summary: "Discover the colonial city of excellence in Ecuador, Cuenca, and be fascinated by its enchantments.",
            description: "DISCOVER THE COLONIAL CITY OF EXCELLENCE IN ECUADOR, CUENCA, AND BE FASCINATED BY ITS ENCHANTINGS\n\nAre you ready to discover Cuenca, the Ecuadorian colonial city par excellence? Well, today, early in the morning, a fresh and varied breakfast will be waiting for you in the dining room of your Cuenca hotel. Afterward, your guide will come to your hotel to take you to the historic center of the city.\n\nCuenca, despite being the third largest city in Ecuador, still has a typical provincial atmosphere. Today, you will enjoy a walk through this wonderful city, which has been declared a World Cultural Heritage Site, to discover its beauty and charm. Touring its colonial center on foot will allow you to enjoy the hospitality and kindness of its inhabitants, the vibrant parks and squares, religious monuments, and craft shops while learning about its history.\n\nIn the afternoon, you will have the opportunity to visit a workshop where top-of-the-range Panama hats are made. In case you did not know, one of the main producers of Panama hats is Cuenca! Afterward, you can enjoy stunning views of the city and countryside at Turi Hill.\n\nNext, you will be able to explore Cuenca on your own as the evening approaches. To finalize, complete this wonderful experience in Cuenca by tasting regional cuisine in several downtown restaurants or returning to your hotel to take a well-deserved rest.\n\n• Overnight in Cuenca.\n• Included meals: Breakfast."
        },
        {
            day: 4,
            title: "Quito",
            image: imgGalapagos1,
            summary: "Lose yourself in an enchanting colonial city, capital of Ecuador, at the foot of the Pichincha Volcano.",
            description: "LOSE YOURSELF BETWEEN A ENCHANTING COLONIAL CITY, CAPITAL OF ECUADOR, AT THE FOOT OF THE PICHINCHA VOLCANO\n\nOur adventure in Ecuadorian Andean is about to begin! After an exquisite breakfast provided by your hotel, our host will take you to Cuenca airport and send you on a comfortable commercial 60-minute flight to Quito, the charming Ecuador capital.\n\nUpon your arrival to Quito, another local host will be waiting for you at National Arrivals with a sign with your name. He will take you in comfortable transportation to your Quito hotel, where you can rest, take a shower, or enjoy the local cuisine during a couple of free hours. At a certain time, our expert guide will come to pick you up and begin your city tour through charming Quito.\n\nOur Quito city tour includes a visit to the historic center, which was declared a World Heritage Site by UNESCO in 1978. There, you can admire the beautiful views of Alamada Park and the Basilica, as well as stroll along the Calle de las Siete Cruces (García Moreno), so named for its seven stone crosses, which were built there by the Spanish after conquering the city in 1534. Additionally, you must visit Plaza Grande, also known as Plaza de la Independencia. In addition, the Presidential Palace and the famous La Compañía de Jesús surround the Plaza Grande and you can visit them, too. Finally, you will visit Plaza de San Francisco, famous for its impressive location under the shadow of the Pichincha Volcano. There, you can visit the San Francisco Church and Monastery. Of course, we will always be assisted with important information and interesting history by our tour guide during the tour.\n\nContinuing our experience, our tour guide will take us on a 45-minute journey to the “Middle of the World,” where the Equator divides the world into Northern and Southern hemispheres. Of course, our guide will teach us about the science and history behind the determination or equator line in the famous solar museum of Intiñan.\n\nAt the end of the tour, our tour guide will return you to the Quito Hotel to spend the night at your leisure, enjoy a wonderful dinner on your own, or simply rest.\n\n• Overnight in Quito.\n• Included meals: Breakfast."
        },
        {
            day: 5,
            title: "Quito - Out",
            image: imgGalapagos2,
            summary: "Saying goodbye to such beautiful moments does not have to be painful.",
            description: "SAYING GOODBYE TO SUCH BEAUTIFUL MOMENTS DOES NOT HAVE TO BE PAINFUL\n\nSaying goodbye to a beautiful place doesn't have to be sad. That is why, at Machu Travel Peru, we want to save you this trouble. You can enjoy one final, delicious, and comforting breakfast fully included in your hotel reservation.\n\nDepending on your flight schedule, you may be able to take one last tour of the city on your own before our transportation and host pick you up from your hotel to the Quito International Airport.\n\nOnce at the airport, you will have to say goodbye to our host and take your flight to your home country.\n\nWhat do you think about our \"History and Beauty in Ecuador’s Ancient Colonial Cities\" tour? Do you have any extra requests or questions? Please don’t hesitate to write to us. We will always be attentive to personalize your tour in Ecuador at your desire!\n\nNOTE: This program will allow you to visit Quito, Cotopaxi National Park, Quito, Cuenca, Cajas National Park, and Guayaquil. Tours can also be done in reverse order. Additionally, you can add more exciting day tours or another destination in Ecuador. Please make contact with our travel agents!\n\n• Included meals: Breakfast."
        }
    ]
};
