export const SHOP_NAME = "Sri Aditya Natural Oils";
export const WHATSAPP_NUMBER = "919440404469";
export const PHONE_DISPLAY = "+91 94404 04469";
export const PHONE_TEL = "+919440404469";

export const ADDRESS_LINES = [
  "Near Ganesh Temple, Balaji Textile Market Road",
  "Vizianagaram Cantonment, Vizianagaram",
  "Andhra Pradesh 535003",
];

export const MAPS_URL =
  "https://www.google.com/maps/place/Sri+Aditya+natural+oils/@18.1183376,83.3908082,17z/data=!4m6!3m5!1s0x3a3be50025f4c7c3:0x75e8e8f0aab8a21f!8m2!3d18.1183376!4d83.3908082";

export const HOURS = "Mon – Sat, 9:00 AM – 7:00 PM";

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Products", id: "products" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const FEATURED = ["Groundnut Oil", "Coconut Oil", "Cow Ghee", "Mango Pickle"];

export const oilGuide = [
  { name: "Groundnut", use: "Everyday cooking", image: "/images/groundnut-oil.svg" },
  { name: "Coconut", use: "Cooking and hair", image: "/images/coconut-oil.svg" },
  { name: "Sesame", use: "Traditional gingelly oil", image: "/images/sesame-oil.svg" },
  { name: "Mustard", use: "Indian cooking and pickles", image: "/images/mustard-oil.svg" },
  { name: "Castor", use: "Traditional household use", image: "/images/castor-oil.svg" },
];

export const processSteps = [
  {
    title: "From farms",
    text: "Groundnut, coconut, sesame, mustard, and castor come from trusted farms.",
    image: "/images/process-farm.svg",
  },
  {
    title: "Pressed the old way",
    text: "Cold-pressed or wood-pressed, so the aroma stays in the oil.",
    image: "/images/process-press.svg",
  },
  {
    title: "Packed as it is",
    text: "No additives. Ghee and pickles are made the same careful way.",
    image: "/images/process-pack.svg",
  },
];

export const reviews = [
  {
    text: "The groundnut oil smells like a wood press. You can taste it in the food.",
  },
  {
    text: "The cow ghee is rich, and the aroma stays in the kitchen. We use it every day.",
  },
  {
    text: "The mango pickle tastes like it was made at home. No strange aftertaste.",
  },
];

export const faqs = [
  {
    q: "What oils do you sell?",
    a: "Groundnut, coconut, sesame, mustard, and castor, pressed cold or in a wood press. We also sell ghee and pickles.",
  },
  {
    q: "How do I pay?",
    a: "UPI or cash. Send your list on WhatsApp and we confirm the total before you pay.",
  },
  {
    q: "Do you deliver?",
    a: "Yes, in Vizianagaram. Outside town we can send a courier. Ask on WhatsApp for 5 litre tins and festival packs.",
  },
  {
    q: "How should I store the oil?",
    a: "Keep it in a cool, dry place, away from direct sun. A little sediment can settle. Shake the bottle before use.",
  },
];

export function whatsAppLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
