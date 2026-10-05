import groundnutOil from "../assets/groundnut_oil.jpg";
import coconutOil from "../assets/cocunut_oil.webp";
import sesameOil from "../assets/sesame_oil.jpg";
import mustardOil from "../assets/mustard_oil.webp";
import castorOil from "../assets/casstor_oil.jpg";
import cowGhee from "../assets/cow_ghee.jpg";
import buffaloGhee from "../assets/buffalo_ghee.jpg";
import mangoPickle from "../assets/mango_pickle.jpg";
import lemonPickle from "../assets/lemon_pickle.webp";
import gonguraPickle from "../assets/gaungura_pickle.jpg";
import garlicPickle from "../assets/garlic_pickle.webp";

export interface Product {
  name: string;
  desc: string;
  price: string;
  emoji: string;
  inStock: boolean;
  image: string;
  id?: string;
}

export const products: Record<string, Product[]> = {
  oils: [
    { name: "Groundnut Oil", desc: "Cold-pressed, for everyday cooking", price: "₹180/L", emoji: "🥜", inStock: true, image: groundnutOil },
    { name: "Coconut Oil", desc: "Wood-pressed, for cooking and hair", price: "₹220/L", emoji: "🥥", inStock: true, image: coconutOil },
    { name: "Sesame Oil", desc: "Chekku-pressed traditional gingelly oil", price: "₹260/L", emoji: "🌿", inStock: true, image: sesameOil },
    { name: "Mustard Oil", desc: "Kachi ghani, for cooking and pickles", price: "₹160/L", emoji: "🌼", inStock: true, image: mustardOil },
    { name: "Castor Oil", desc: "Cold-pressed, for traditional household use", price: "₹200/L", emoji: "🍃", inStock: true, image: castorOil },
  ],
  ghees: [
    { name: "Cow Ghee", desc: "Traditional bilona method, A2 milk", price: "₹650/500g", emoji: "🐄", inStock: true, image: cowGhee },
    { name: "Buffalo Ghee", desc: "Rich, creamy, full-bodied aroma", price: "₹550/500g", emoji: "🥛", inStock: true, image: buffaloGhee },
  ],
  pickles: [
    { name: "Mango Pickle", desc: "Spicy raw mango, sun-dried", price: "₹120/250g", emoji: "🥭", inStock: true, image: mangoPickle },
    { name: "Lemon Pickle", desc: "Tangy and aged", price: "₹110/250g", emoji: "🍋", inStock: true, image: lemonPickle },
    { name: "Gongura Pickle", desc: "Andhra sorrel leaf pickle", price: "₹140/250g", emoji: "🌱", inStock: false, image: gonguraPickle },
    { name: "Garlic Pickle", desc: "Garlic in sesame oil", price: "₹150/250g", emoji: "🧄", inStock: true, image: garlicPickle },
  ],
};

export const staticByName = new Map(
  Object.values(products).flat().map((product) => [product.name, product]),
);
