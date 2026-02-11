export interface Tour {
  id: string;
  title: string;
  slug: string;
  country: string;
  destinations: string[];
  duration: number;
  price: number;
  image: string;
  description: string;
  shortDescription: string;
  type: string[];
  badge?: string;
  included: string[];
  itinerary: { day: number; title: string; description: string }[];
}

import destPeru from "@/assets/dest-peru.jpg";
import destBolivia from "@/assets/dest-bolivia.jpg";
import destChile from "@/assets/dest-chile.jpg";
import destEcuador from "@/assets/dest-ecuador.jpg";
import destAmazon from "@/assets/dest-amazon.jpg";
import tourTiticaca from "@/assets/tour-titicaca.jpg";
import tourColca from "@/assets/tour-colca.jpg";
import heroMachuPicchu from "@/assets/hero-machu-picchu.jpg";

export const tours: Tour[] = [
  {
    id: "1",
    title: "Luxury Machu Picchu & Sacred Valley",
    slug: "luxury-machu-picchu-sacred-valley",
    country: "Peru",
    destinations: ["Cusco", "Sacred Valley", "Machu Picchu"],
    duration: 7,
    price: 3490,
    image: destPeru,
    shortDescription: "Experience the magic of Machu Picchu with luxury 5-star accommodations, private guides, and exclusive access to hidden Incan sites.",
    description: "Embark on a 7-day luxury journey through Peru's most iconic destinations. From the colonial splendor of Cusco to the mystical ruins of Machu Picchu, every detail is curated for an unforgettable experience. Stay in hand-picked 5-star boutique hotels, dine on world-class Peruvian cuisine, and explore with expert local guides who bring history to life.",
    type: ["Luxury", "Cultural"],
    badge: "Best Seller",
    included: [
      "5-star boutique hotel accommodation",
      "Private bilingual expert guides",
      "First-class Vistadome train to Machu Picchu",
      "All meals including gourmet dining experiences",
      "Private transfers in luxury vehicles",
      "Entrance fees to all archaeological sites",
      "Welcome cocktail & farewell dinner",
      "24/7 concierge support"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Cusco", description: "Private airport transfer to your 5-star hotel. Welcome cocktail and briefing. Afternoon acclimatization walk through historic Cusco." },
      { day: 2, title: "Cusco City Tour", description: "Explore Sacsayhuamán, Qenqo, and the historic center. Private guided tour of San Pedro Market with gourmet tasting." },
      { day: 3, title: "Sacred Valley Exploration", description: "Visit Pisac ruins and market, lunch at a traditional hacienda, explore Ollantaytambo fortress." },
      { day: 4, title: "Community Experience", description: "Morning visit to a local Andean community. Learn traditional weaving and share a meal with local families." },
      { day: 5, title: "Machu Picchu", description: "First-class Vistadome train to Aguas Calientes. Guided tour of Machu Picchu at sunrise with exclusive access." },
      { day: 6, title: "Machu Picchu & Return", description: "Optional second visit or Huayna Picchu hike. Afternoon return to Cusco by luxury train." },
      { day: 7, title: "Departure", description: "Farewell breakfast. Private transfer to airport. End of an unforgettable journey." }
    ]
  },
  {
    id: "2",
    title: "Bolivia Salt Flats & Uyuni Expedition",
    slug: "bolivia-salt-flats-uyuni",
    country: "Bolivia",
    destinations: ["La Paz", "Uyuni", "Salar de Uyuni"],
    duration: 5,
    price: 2890,
    image: destBolivia,
    shortDescription: "Traverse the surreal landscapes of Bolivia's Salar de Uyuni – the world's largest salt flat – with luxury camping and private 4x4 expeditions.",
    description: "Discover the otherworldly beauty of Bolivia's Salar de Uyuni on this exclusive 5-day expedition. Experience mirror-like reflections at sunset, sleep under the stars in luxury dome tents, and explore remote volcanic landscapes that feel like another planet.",
    type: ["Luxury", "Adventure"],
    badge: "Private",
    included: [
      "Luxury dome tent accommodation on the salt flat",
      "Private 4x4 vehicle with expert driver-guide",
      "All gourmet meals prepared by private chef",
      "Professional photography session on the flats",
      "Domestic flights La Paz – Uyuni – La Paz",
      "All entrance fees and permits",
      "Thermal hot springs visit",
      "24/7 concierge support"
    ],
    itinerary: [
      { day: 1, title: "Arrival in La Paz", description: "Welcome at El Alto airport. Transfer to luxury hotel in La Paz. Evening city orientation." },
      { day: 2, title: "Fly to Uyuni", description: "Morning flight to Uyuni. Begin your salt flat adventure with sunset photography session." },
      { day: 3, title: "Full Day Salar Exploration", description: "Explore Isla Incahuasi, cactus islands, and the endless white expanse. Luxury dome camp under the stars." },
      { day: 4, title: "Colored Lagoons & Geysers", description: "Visit the Eduardo Avaroa Reserve. See flamingo-filled lagoons, geysers, and hot springs." },
      { day: 5, title: "Return to La Paz", description: "Morning flight back. Farewell lunch and airport transfer." }
    ]
  },
  {
    id: "3",
    title: "Amazon Rainforest Luxury Eco-Lodge",
    slug: "amazon-rainforest-eco-lodge",
    country: "Peru",
    destinations: ["Puerto Maldonado", "Tambopata", "Amazon Basin"],
    duration: 4,
    price: 2190,
    image: destAmazon,
    shortDescription: "Immerse yourself in the Amazon rainforest from a luxury eco-lodge. Night safaris, canopy walks, and encounters with incredible wildlife.",
    description: "Experience the world's most biodiverse ecosystem from the comfort of a luxury eco-lodge deep in Peru's Tambopata National Reserve. Expert naturalist guides lead you through jungle trails, canopy walkways, and nocturnal excursions to spot rare wildlife.",
    type: ["Luxury", "Adventure", "Community Rural"],
    badge: "Eco-Luxury",
    included: [
      "Luxury eco-lodge accommodation",
      "Expert naturalist guides",
      "All meals with Amazonian cuisine",
      "Canopy walkway experience",
      "Night safari excursions",
      "Boat transfers on the river",
      "Indigenous community visit",
      "All park entrance fees"
    ],
    itinerary: [
      { day: 1, title: "Journey into the Amazon", description: "Fly to Puerto Maldonado. River boat journey to your luxury eco-lodge. Afternoon nature walk." },
      { day: 2, title: "Canopy & Wildlife", description: "Morning canopy walkway. Afternoon macaw clay lick visit. Night safari for caiman spotting." },
      { day: 3, title: "Deep Jungle & Community", description: "Trek deep into primary rainforest. Visit indigenous community and learn traditional medicine." },
      { day: 4, title: "Return", description: "Early morning birdwatching. River journey back and flight to Cusco or Lima." }
    ]
  },
  {
    id: "4",
    title: "Atacama Desert & Stargazing Chile",
    slug: "atacama-desert-stargazing",
    country: "Chile",
    destinations: ["San Pedro de Atacama", "Atacama Desert", "Valle de la Luna"],
    duration: 5,
    price: 3190,
    image: destChile,
    shortDescription: "Explore the driest desert on Earth with luxury accommodations, private stargazing sessions, and surreal lunar landscapes.",
    description: "Chile's Atacama Desert offers a landscape so unique it's been used as a stand-in for Mars. This 5-day luxury experience includes private astronomical observations, visits to otherworldly geysers at dawn, and relaxation in natural hot springs under star-filled skies.",
    type: ["Luxury", "Adventure"],
    included: [
      "5-star desert lodge accommodation",
      "Private astronomical observatory visit",
      "All gourmet meals with Chilean wines",
      "Private 4x4 excursions",
      "Hot springs & spa treatments",
      "Valle de la Luna & Tatio Geysers",
      "All entrance fees",
      "Airport transfers"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Atacama", description: "Transfer from Calama airport to luxury desert lodge. Sunset at Valle de la Luna." },
      { day: 2, title: "Geysers & Hot Springs", description: "Pre-dawn visit to El Tatio Geysers. Afternoon relaxation in Puritama hot springs." },
      { day: 3, title: "Salt Flats & Flamingos", description: "Explore Salar de Atacama and Chaxa Lagoon. Private stargazing session in the evening." },
      { day: 4, title: "Desert Exploration", description: "Full-day excursion to high-altitude lagoons. Wine tasting dinner." },
      { day: 5, title: "Departure", description: "Morning at leisure. Transfer to Calama airport." }
    ]
  },
  {
    id: "5",
    title: "Galápagos Islands Explorer",
    slug: "galapagos-islands-explorer",
    country: "Ecuador",
    destinations: ["Quito", "Galápagos Islands", "Santa Cruz", "Isabela"],
    duration: 8,
    price: 5990,
    image: destEcuador,
    shortDescription: "Cruise the enchanted Galápagos Islands on a luxury yacht. Snorkel with sea lions, walk among giant tortoises, and witness evolution in action.",
    description: "Follow in Darwin's footsteps on this 8-day luxury Galápagos expedition. Sail between islands on a premium small-group yacht, snorkel in crystal-clear waters teeming with marine life, and encounter species found nowhere else on Earth.",
    type: ["Luxury", "Adventure"],
    badge: "Exclusive",
    included: [
      "Luxury yacht cabin accommodation",
      "Expert naturalist Galápagos guide",
      "All meals aboard the yacht",
      "Snorkeling equipment & wetsuits",
      "Daily island excursions",
      "Galápagos National Park fees",
      "Domestic flights Quito – Galápagos",
      "1 night luxury hotel in Quito"
    ],
    itinerary: [
      { day: 1, title: "Arrive in Quito", description: "Welcome at Quito airport. Transfer to luxury hotel in the historic center." },
      { day: 2, title: "Fly to Galápagos", description: "Morning flight to Baltra. Board your luxury yacht. Afternoon visit to Charles Darwin Station." },
      { day: 3, title: "Santa Cruz Highlands", description: "Giant tortoise reserve. Lava tunnels. Snorkeling at pristine cove." },
      { day: 4, title: "Isabela Island", description: "Sierra Negra volcano hike. Penguin spotting. Snorkeling with sea turtles." },
      { day: 5, title: "Fernandina Island", description: "Marine iguanas colony. Flightless cormorant observation. Whale watching." },
      { day: 6, title: "Santiago & Bartolomé", description: "Iconic Pinnacle Rock. Snorkeling with Galápagos sharks. Sunset cruise." },
      { day: 7, title: "South Plaza & Santa Fé", description: "Land iguana colonies. Sea lion beaches. Farewell dinner under the stars." },
      { day: 8, title: "Departure", description: "Morning flight back to Quito. Onward connections." }
    ]
  },
  {
    id: "6",
    title: "Lake Titicaca & Colca Canyon",
    slug: "lake-titicaca-colca-canyon",
    country: "Peru",
    destinations: ["Puno", "Lake Titicaca", "Colca Canyon", "Arequipa"],
    duration: 6,
    price: 2790,
    image: tourTiticaca,
    shortDescription: "Journey to the world's highest navigable lake and the depths of Colca Canyon. Experience floating islands and watch Andean condors soar.",
    description: "This 6-day luxury tour combines two of Peru's most spectacular natural wonders. Visit the floating Uros Islands on Lake Titicaca, stay with a local community on Taquile Island, then witness the majestic flight of Andean condors over Colca Canyon – twice as deep as the Grand Canyon.",
    type: ["Luxury", "Cultural", "Community Rural"],
    included: [
      "4-5 star hotel accommodation",
      "Private bilingual guides",
      "All meals including traditional cuisine",
      "Private boat on Lake Titicaca",
      "Community homestay experience",
      "Colca Canyon condor viewpoint",
      "Private transfers",
      "All entrance fees"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Puno", description: "Transfer to lakeside luxury hotel. Afternoon city tour and sunset over Lake Titicaca." },
      { day: 2, title: "Uros & Taquile Islands", description: "Private boat to floating Uros Islands. Continue to Taquile for traditional lunch and weaving demonstration." },
      { day: 3, title: "Community Experience", description: "Morning with a rural community on the lake shore. Learn traditional fishing and farming techniques." },
      { day: 4, title: "Journey to Colca", description: "Scenic drive through the Altiplano to Colca Valley. Hot springs and colonial villages." },
      { day: 5, title: "Colca Canyon & Condors", description: "Early morning at Cruz del Condor viewpoint. Watch Andean condors soar. Explore pre-Inca terraces." },
      { day: 6, title: "Arequipa & Departure", description: "Drive to Arequipa, the White City. City tour and farewell lunch. Airport transfer." }
    ]
  }
];

export const destinations = [
  { name: "Peru", description: "Machu Picchu, Cusco, Amazon & more", tourCount: 12 },
  { name: "Bolivia", description: "Uyuni Salt Flats & La Paz", tourCount: 4 },
  { name: "Chile", description: "Atacama Desert & Patagonia", tourCount: 5 },
  { name: "Ecuador", description: "Galápagos Islands & Quito", tourCount: 3 },
];

export const testimonials = [
  {
    name: "Sarah & James Mitchell",
    location: "New York, USA",
    text: "Leading Peru Travel created the most incredible honeymoon experience. Every detail was perfect – from the luxury train to Machu Picchu to the private dinner overlooking the Sacred Valley. Truly once-in-a-lifetime.",
    rating: 5,
  },
  {
    name: "Dr. Hans Weber",
    location: "Munich, Germany",
    text: "I've traveled extensively, but this Peru trip was extraordinary. The community visit was deeply moving, and the guides' knowledge of Incan history was remarkable. Five stars isn't enough.",
    rating: 5,
  },
  {
    name: "Claire Dubois",
    location: "Paris, France",
    text: "From the Atacama Desert to Machu Picchu, every moment was curated to perfection. The attention to detail and the warmth of the team made us feel like family. We're already planning our return.",
    rating: 5,
  },
  {
    name: "The Patterson Family",
    location: "London, UK",
    text: "Traveling with two teenagers can be challenging, but Leading Peru Travel made it seamless. The Amazon eco-lodge was a highlight – our kids are still talking about the night safari!",
    rating: 5,
  },
];
