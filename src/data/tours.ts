import { Tour } from "./types";

// Peru Tours
import { peru1 } from "./peru/peru-1";
import { peru2 } from "./peru/peru-2";
import { peru3 } from "./peru/peru-3";
import { peru4 } from "./peru/peru-4";
import { peru5 } from "./peru/peru-5";
import { peru10 } from "./peru/peru-10";
import { peru11 } from "./peru/peru-11";
import { peru12 } from "./peru/peru-12";
import { peru13 } from "./peru/peru-13";

// Ecuador Tours
import { ecuador6 } from "./ecuador/ecuador-6";
import { ecuador8 } from "./ecuador/ecuador-8";
import { ecuador9 } from "./ecuador/ecuador-9";

// Bolivia Tours
import { bolivia7 } from "./bolivia/bolivia-7";
import { bolivia14 } from "./bolivia/bolivia-14";
import { bolivia15 } from "./bolivia/bolivia-15";

// Chile Tours (Placeholder)
import { chileTours } from "./chile/chile";

export { type Tour } from "./types";

export const tours: Tour[] = [
  peru1, peru2, peru3, peru4, peru5,
  ecuador6,
  bolivia7,
  ecuador8, ecuador9,
  peru10, peru11, peru12, peru13,
  bolivia14, bolivia15,
  ...chileTours
];

export const destinations = [
  { name: "Peru", description: "Machu Picchu, Cusco, Amazon & more", tourCount: 9 },
  { name: "Bolivia", description: "Uyuni Salt Flats & La Paz", tourCount: 3 },
  { name: "Chile", description: "Atacama Desert & Patagonia", tourCount: 0 },
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
