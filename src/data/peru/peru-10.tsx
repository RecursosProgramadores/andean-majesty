import { Tour } from "../types";
import heroMachuPicchu from "@/assets/hero-machu-picchu.jpg";
import tourPeruLima from "@/assets/tour-peru-lima.png";
import tourPeruCusco from "@/assets/tour-peru-cusco.png";
import tourPeruPisac from "@/assets/tour-peru-pisac.png";
import tourPeruSacredValley from "@/assets/tour-peru-sacred-valley.png";
import tourPeruMoray from "@/assets/tour-peru-moray.png";
import tourPeruMachupicchu from "@/assets/tour-peru-machupicchu.png";

export const peru10: Tour = {
    id: "10",
    title: "A Culinary Adventure Through Peru",
    slug: "peru-culinary-adventure",
    subtitle: "Lima, Cusco, Sacred Valley, Machu Picchu",
    country: "Peru",
    destinations: ["Lima", "Cusco", "Sacred Valley", "Machu Picchu"],
    duration: 7,
    nights: 6,
    price: 4290,
    image: tourPeruLima,
    gallery: [tourPeruLima, tourPeruCusco, heroMachuPicchu],
    shortDescription: "A journey for the palate, exploring the flavors that made Peru the world's leading culinary destination.",
    styleSummary: "Gourmet, Cultura, Historia, Paisajes",
    description: "Peruvian gastronomy has earned its place among the finest in the world. Today, when diners consider the great culinary traditions — Italian, French, Mexican, Japanese, Chinese, or Thai — Peruvian cuisine proudly stands alongside them. With a history shaped by more than 500 years of cultural fusion, Peru has transformed its rich biodiversity and heritage into one of the most exciting food scenes on the planet.\n\nFor this reason, Machupicchu Travel Tour has designed a special journey that begins in Lima, the vibrant Peruvian capital, home to a stunning historic center and Latin America’s gastronomic capital. On your second day, you will enjoy an exclusive culinary tour, visiting some of the country’s most renowned restaurants and tasting iconic flavors crafted from centuries-old traditions and fresh local ingredients.\n\nWith a satisfied palate and a joyful heart, your adventure continues in Cusco, where majestic Inca temples and elegant colonial churches tell the story of Peru’s extraordinary past. Explore the enchanting Sacred Valley and culminate your journey at the breathtaking Machu Picchu — the crown jewel of the Andes.",
    type: ["Luxury", "Culinary", "Cultural"],
    badge: "For Foodies",
    included: [
        "2 nights in Lima, 2 nights in Sacred Valley, 2 nights in Cusco",
        "All Excursions and Tours In Private Service",
        "All transfers and transportation with a private van",
        "Small group in Lima Gourmet Food Tour",
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
            image: tourPeruLima,
            summary: "Arrive at your hotel in Lima after your international flight and recharge your energy for your city tour!",
            description: "ARRIVE AT YOUR HOTEL IN LIMA AFTER YOUR INTERNATIONAL FLIGHT AND RECHARGE YOUR ENERGY FOR YOUR CITY TOUR!\n\nWe know how exhausting international flights can be, so we will save you from the stress of navigating alone at the moment of your arrival in the Peruvian capital. At Lima Airport, our Machu Travel Peru host will be looking for you at the arrival gate to accompany you to the hotel of your preference.\n\nOnce you have settled in your room, you can take a comforting shower, leaving behind the fatigue of such a long flight, and rest, or you can take advantage of the time to enjoy the best Peruvian gastronomy with a tasty lunch (on your own) in your hotel or the surrounding areas.\n\nLater, we will begin a fantastic city tour of Lima's colonial and modern zones.\n\nYou can lose yourself among French-style, republican squares like the Plaza San Martín or the City's main square (Plaza de Armas) while wandering by a charming colonial alley called Jirón de la Unión. Following this, our guide will lead you to the colonial Monastery of San Francisco, where you can appreciate its beautiful Spanish baroque architecture and some religious sculptures from colonial times. But, the best of all will be exploring the hidden underneath its enigmatic catacombs! Here, you’ll know why this monastery was considered the first cemetery for the first Lima inhabitants.\n\nAfter you return to your hotel, why not enjoy a beautiful afternoon at your own pace by exploring zones of Miraflores, a Lima tourist district, walk in the beautiful Kennedy Park, or go shopping in the famous Larcomar Mall center.\n\nIn the evening, for dinner, we recommend considering Central or Maido, both recognized as the finest restaurants in the country. Central ranked first in 2023, and Maido achieved first place in 2025 on The World’s 50 Best Restaurants list. Please note that, due to their high demand, reservations must be secured in advance.\n\n• Overnight in Lima.\n• Included meals: None."
        },
        {
            day: 2,
            title: "Lima",
            image: tourPeruLima,
            summary: "Check why Peruvian cuisine is one of the best in the world by tasting its delights.",
            description: "CHECK WHY PERUVIAN CUISINE IS ONE OF THE BEST IN THE WORLD BY TASTING ITS DELIGHTS\n\nThis day will be full of color, flavor, and much season! Early in the morning, our transportation, together with your tour guide, will pick you up from your accommodation to go directly to Market N°1 of Surquillo district in Lima.\n\nDuring a tour that lasts approximately 50 minutes, you will see what a typical Peruvian market is like and the incredible variety of products found there.\n\nWe will stop at stalls selling different categories of products: a fresh fruit vendor, a vegetable stall, the “hierbero”, a dry goods stall, as well as chicken, meat, offal, fish, seafood, and specialty vendors.\n\nAfter that, we'll show the stalls where we'll get the fruits for tasting and ingredients for the cooking class. Then we moved to our facilities to continue with the fruit tasting.\n\nIn our facility, you'll taste a great variety of fruits, all harvested in Peru and organized into different categories. During the tasting, your guide will explain the origin and use of each fruit.\n\nFollowing, you'll have your cooking class, during which you can choose from a variety of menu types: Peruvian Classics, Peruvian Standard, Andean Menu, and Marine Menu.\n\nEach menu teaches four representative dishes. For example, the menu “Clasico Peruanos” offers the teaching of Causa Rellena, Ceviche, Lomo Saltado, and Picarones. Water is included throughout the class, juice with the meal, and a pisco sour.\n\nNOTE: The menu class types are subject to availability. Vegetarian options are available and are prepared at the same time as a menu class. Ask for them to our travel executives, they will be happy to assist you.\n\n• Overnight in Lima.\n• Included meals: Breakfast and Lunch."
        },
        {
            day: 3,
            title: "Lima - Cusco - Sacred Valley",
            image: tourPeruPisac,
            summary: "Welcome to Cusco! Explore the Textile House Museum and its living traditions and Pisac Inca neighborhood.",
            description: "WELCOME TO CUSCO! EXPLORE THE TEXTILE HOUSE MUSEUM AND ITS LIVING TRADITIONS AND PISAC INCA NEIGHBORHOOD\n\nToday, your adventure in the Andean highlands is about to begin! After enjoying a satisfying breakfast at your hotel, your host will accompany you to the Lima airport, where you’ll take a comfortable flight to Cusco, the ancient Imperial Inca City.\n\nYou can watch the Pacific Ocean merge with the blue skies through your plane window, giving way to vast dunes that, in turn, rise and then collapse against the slopes of the towering Andes mountains once conquered many centuries ago by the impressive Inca civilization.\n\nOn your arrival in Cusco, your local host will be waiting for you in the national arrivals area of Cusco Airport, holding a sign with your name. “It’s not altitude sickness… it’s the feeling of being close to heaven,” is a phrase he’ll often say about the altitude. To help you avoid altitude sickness, we’ll head directly from Cusco Airport to the Sacred Valley of the Incas, located 600 meters below Cusco. But please don’t worry you’ll get to enjoy all the wonderful sights of Cusco at the end of your journey, once your body is perfectly acclimatized to the altitude.\n\nOn the way to the Sacred Valley of the Incas we will visit an exceptional Textile House Museum, where you can see the four types of South American camelids raised in captivity: llamas, alpacas, guanacos, and vicuñas. You can feed them and learn how to tell them apart. Local artisans will show you how they use the ancient techniques of their Inca ancestors to transform the delicate fibers of these animals, especially alpacas and vicuñas, into beautiful and colorful garments. You can also see the creation of multicolored belts, finely woven blankets, and exquisitely embroidered textiles. To complete the experience, a guided tour of the museum will immerse you in the fascinating history of pre-Inca cultures and their textile legacy.\n\nThen, we’ll continue descending through the valley slope until we reach a spectacular Inca archaeological site over a hill called Pisac, with magnificent terraced fields on its hill slopes, among Inca enclosures, squares, temples, and even an Inca cemetery! Your first contact with a rich Andean past! Descending into the modern town, we will lose ourselves among the colored stands of the famous Pisac traditional market, where we will be fascinated by its beautiful handicrafts made by local people, like fabric crafts, sculptures, jewelry, and paintings with Andean thematic.\n\nNext, we will visit a charming restaurant nestled in the beautiful landscapes of the Sacred Valley to enjoy a delicious lunch made from local ingredients, all included in your program. You can choose the restaurant in advance, with the advice of your travel consultants.\n\nFinally, we’ll go to your hotel in the middle of the spectacular scenery of the Sacred Valley, and you can enjoy a delicious dinner here, on your own. A well-deserved sleep is guaranteed tonight!\n\n• Overnight in Sacred Valley.\n• Included meals: Breakfast and Lunch."
        },
        {
            day: 4,
            title: "Sacred Valley",
            image: tourPeruMoray,
            summary: "Explore the last Inca fortress of Ollantaytambo, the Inca salt mines of Maras, and the circular terraces of Moray.",
            description: "EXPLORE THE LAST INCA FORTRESS OF OLLANTAYTAMBO, THE INCA SALT MINES OF MARAS, AND THE CIRCULAR TERRACES OF MORAY\n\nThe Sacred Valley still has treasures to discover, and you will not miss a thing! This day assures an unforgettable trip in a perfect climate. The Sacred Valley is known for its charming climate 365 days a year. First, you'll enjoy a delicious breakfast at your luxury hotel. Then, with your guide, you will begin your adventure through the Sacred Valley of the Incas.\n\nDiscover Ollantaytambo, a fortress that was the last Inca refuge in Andean lands during the Spanish invasion. Wander among its narrow alleys, temples, enclosures, and squares of well-carved, perfectly fitted, stone architecture. This incredible experience will be accompanied by stories and myths that your guide will tell you about the place. One notable mention, the fantastic ancient love story legend about an Inca military General and a beautiful Princess, the daughter of the Inca emperor Pachacutec.\n\nNext, you will go to a charming restaurant in the middle of the beautiful landscapes of the Sacred Valley, to enjoy a delicious and exclusive lunch made from local ingredients. As if this were not enough, the variety of flavors and colors in its menu, dishes, and drinks will surprise you.\n\nThen, our next stop will be the white slopes of Maras. There, you will enjoy the brightness of 2,000 small Inca salt wells that are still used by local people today to provide themselves with salt. By the way, the Maras salt is recognized worldwide as being perfect for grills and barbecues.\n\nMoving on, your guide will transfer up to Moray, where you'll be fascinated by a series of circular terraces, in the form of rings, that go into the earth's deeps. These circular terraces were used as an Incan laboratory to acclimatize crops. They sowed a specific type of seed in each circular terrace, from the smallest and deepest ring to the largest, to see the quality of the harvest they obtained.\n\nFinally, we’ll return to the hotel for a deserved rest, you can take a relaxing shower or, maybe, enjoy a fantastic dinner on your own.\n\n• Overnight in Sacred Valley.\n• Included meals: Breakfast and Lunch."
        },
        {
            day: 5,
            title: "Sacred Valley - Machu Picchu - Cusco",
            image: tourPeruMachupicchu,
            summary: "Conquest the most incredible Inca citadel, Machu Picchu, on an unforgettable day!",
            description: "CONQUEST THE MOST INCREDIBLE INCA CITADEL, MACHU PICCHU, ON AN UNFORGETTABLE DAY!\n\nThe day to conquer Machu Picchu has arrived! After a delicious breakfast in your hotel, your host will take you to Ollantaytambo train station to dispatch you on a charming and comfortable train heading to Aguas Calientes, the modern town of Machu Picchu. The magical train trip will last one and a half hours, crossing the spectacular Peruvian jungle, always accompanied by the singing of exotic birds, leafy undergrowth, and the Vilcanota river that will follow the train's movement, like a snake on the lookout for its prey!\n\nOnce you arrive at Aguas Calientes train station, your local guide will await you at the arrivals gate. With your guide, you’ll go to the bus station to take a “CONSETTUR” bus heading to the top of a mountain where the Machu Picchu citadel is located. After 35 minutes of the bus trip, the bus will drop you at the same entrance gate to Machu Picchu.\n\nThen, you will enter the famous Inca citadel to start living the magic there! You can get lost between enclosures, squares, temples, and stone alleys perfectly carved and fitted. Exploring for two hours the mysteries and magic of an Inca citadel that continues to amaze the world with its beauty. Of course, as a soundtrack, you will listen to the stories of its construction, inhabitants, and function from your private guide.\n\nOnce the tour is over, but not before taking your dream photo of Machu Picchu, your tour guide will dispatch you in a CONSETTUR bus returning to Aguas Calientes town. There you’ll enjoy a fantastic lunch included in your program in one of the best restaurants in the zone.\n\nNext, you’ll have to go to the Aguas Calientes train station to take your train to return to Cusco. There, you will take a comfortable train back to Ollantaytambo or Poroy train stations. Whatever station you arrive at, another member of our staff will wait for you to transfer to the Cusco Hotel, where you can enjoy a delicious dinner on your own, before taking a relaxing shower and enjoying a well-deserved rest.\n\nDon't worry; as you can see, you will always be assisted at any departure or arrival point!\n\nOPTIONAL: If you want to continue enjoying Machu Picchu, this package, like all the others, can be fully customized by adding a night in Aguas Calientes. So, on the following day, you'll be able to enjoy a second visit to the enigmatic Inca citadel or hike to nearby mountains like Huayna Picchu and get fabulous photos of Huayna Picchu. Just tell us your requirements, it’s as easy as that!\n\n• Overnight in Cusco.\n• Included meals: Breakfast and Lunch."
        },
        {
            day: 6,
            title: "Cusco",
            image: tourPeruCusco,
            summary: "Explore the magical city of Cusco, the enigmatic heart of the Inca Empire.",
            description: "EXPLORE THE MAGICAL CITY OF CUSCO, THE ENIGMATIC HEART OF THE INCA EMPIRE\n\nAre you ready to discover the enchanting capital of the Inca Empire? Welcome to Cusco, a city where history, culture, and ancient mysteries blend seamlessly with everyday life. After enjoying a comforting and delicious breakfast at your hotel, your guide will be ready to transport you back in time.\n\nFirst, you’ll explore the Inca fortress of Sacsayhuaman, with its giant rocks perfectly fitted into its structure. The tour will continue by visiting the Qenqo Inca ceremonial center with its ancient sacrifice vestiges. Then, the Inca military barrack, Puca Pucara, will fascinate you with its beautiful views of Cusco. Following, your guide will show you the retreat place of the Inca sovereign called Tambomachay, with its beautiful water fonts, where the sovereign spent long periods resting and hunting.\n\nThen, we will return to the Cusco Center to lose ourselves in its charming stone alleys by appreciating the Renaissance architecture of the Cathedral of Cusco and its famous painting collection of a unique art style called \"Escuela Cusqueña\".\n\nLater, your guide will lead you to the Qoricancha temple, located a short distance from the Cathedral, where you will be fascinated by the mix of Inca and Spanish architectural styles, besides some original remains of the Inca temples inside it.\n\nFinally, your tour will end in the main square. You might enjoy a nice lunch or dinner on your own in one of the nearby restaurants, or we can arrange transport to drop you off at your hotel. Whatever your decision, tell your guide what you would like to do!\n\n• Overnight in Cusco.\n• Included meals: Breakfast."
        },
        {
            day: 7,
            title: "Cusco – Lima",
            image: tourPeruSacredValley,
            summary: "Say goodbye to Peru in the best way with us!",
            description: "SAY GOODBYE TO PERU IN THE BEST WAY WITH US!\n\nThe worst part of a trip is when those good adventures you will remember forever, end. That is why Machu Travel Peru wants to save you the trouble. You will only have to enjoy a comforting breakfast fully included in your hotel reservation and let yourself go.\n\nAt a predetermined hour, MACHU TRAVEL PERU staff will take you to Cusco airport and dispatch you on a flight to Lima.\n\nLike the sound of our \"A Culinary Adventure in Peru” tour? Do you have extra requests or questions? Please don’t hesitate to write to us. We will always be attentive to personalize your dreams in Peru at your request!\n\nNOTE: This program will allow you to visit Lima, Cusco, the Sacred Valley, Pisac, Moray, Salt Mine of Maras, Ollantaytambo and Machu Picchu. Additionally, you can add more exciting day tours in Cusco or another destination in Peru. Please take a look at our package list for more options.\n\n• Included meals: Breakfast."
        }
    ]
};
