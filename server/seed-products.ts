import { storage } from "./storage";

const sampleProducts = [
  {
    name: "Healing Crystal Set",
    category: "Crystals",
    description: "Curated collection of authentic healing crystals",
    price: "45.99",
    image: null,
    stock: 12,
  },
  {
    name: "Chakra Balancing Meditation",
    category: "Audio",
    description: "Guided meditation for chakra alignment",
    price: "9.99",
    image: null,
    stock: 50,
  },
  {
    name: "Sacred Geometry Journal",
    category: "Books",
    description: "Explore sacred geometry through art and writing",
    price: "24.99",
    image: null,
    stock: 8,
  },
  {
    name: "Essential Oil Collection",
    category: "Oils",
    description: "Pure essential oils for wellness and aromatherapy",
    price: "34.99",
    image: null,
    stock: 15,
  },
  {
    name: "Tarot Card Deck",
    category: "Divination",
    description: "Traditional tarot deck with guidebook",
    price: "19.99",
    image: null,
    stock: 10,
  },
  {
    name: "Meditation Cushion",
    category: "Wellness",
    description: "Ergonomic meditation cushion for comfort",
    price: "39.99",
    image: null,
    stock: 7,
  },
];

async function seedProducts() {
  console.log("Seeding products...");
  for (const product of sampleProducts) {
    await storage.createProduct(product);
  }
  console.log("Products seeded successfully!");
}

// Export for use in index.ts
export { seedProducts };
