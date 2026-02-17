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
    name: "Hector B",
    location: "Escrita el 4 de abril de 2024",
    title: "Excelente tour",
    text: "Todo muy organizado, los guías excelentes y con muy buena disposición, nos recogían a la hora indicada, fue un viaje increíble. Recomendados 100%.",
    rating: 5,
    response: "¡Muchas gracias por tu comentario! Nos alegra saber que disfrutaste de un viaje increíble y que nuestra organización y guías cumplieron con tus expectativas. (Respuesta del 16 de setiembre de 2024)"
  },
  {
    name: "Dante P",
    location: "Escrita el 9 de noviembre de 2022",
    title: "Viaje en familia.",
    text: "Excelente servicio, seriedad y puntualidad en todos los tours. Cada tours acompañado de muy buenos guías turísticos, en explicación y atención. Todo esto hizo que el viaje sea muy placentero. Muy recomendable!!!.",
    rating: 5,
    response: "¡Muchísimas gracias por tu amable reseña! Nos hace muy felices saber que tu viaje en familia fue placentero y que apreciaste la puntualidad y calidad de nuestros guías. (Respuesta del 16 de setiembre de 2024)"
  },
  {
    name: "Paul G",
    location: "Escrita el 3 de setiembre de 2022",
    title: "Cumplen con todo que ofrecen.",
    text: "Todo excelente con Leading Peru Travel. Muy recomendado. Nos llevaron a Machupicchu, todo dentro de los horarios y servicios ofrecidos.",
    rating: 5,
    response: "¡Muchas gracias por tu excelente reseña! Nos esforzamos por cumplir cada promesa y nos alegra que tu experiencia en Machu Picchu fuera perfecta. (Respuesta del 16 de setiembre de 2024)"
  },
  {
    name: "olivia d",
    location: "Escrita el 20 de junio de 2018",
    title: "Una agencia muy cercana al cliente",
    text: "Viajamos en familia y descubrimos que nos trataron más como amigos que como clientes... Gladys siempre respondería de inmediato, educadamente... Una agencia perfecta. Mis criterios son simples si está de vacaciones y se siente presionado por la agencia, entonces no son vacaciones. Con Leading Peru esto nunca sucederá...",
    rating: 5,
    response: "Thank you very much for your kind words! We pride ourselves on the personal touch and treating our guests like family. (Response on September 16, 2024)"
  },
  {
    name: "Leah C",
    location: "Escrita el 12 de junio de 2018",
    title: "Viaje de un día a Machu Picchu",
    text: "Utilizamos para el Perú lleva un viaje de un día a Machu Picchu... Todo el proceso ha ido muy bien... La única pega es nuestro guía no estaba allí cuando nos bajamos... pero sucedió y nos alegramos de que lo hizo. Una vez con el guía de habla inglesa... todo fue realmente genial...",
    rating: 4,
    response: "Thank you so much for your detailed review! We appreciate your honesty and are glad that despite the initial guide hiccup, the rest of your experience was great. (Response on September 16, 2024)"
  },
];
