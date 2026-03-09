// Plant data for GreenLeaf Plant Store
// 6 unique houseplants organized into 3 categories

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 24.99,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=300&h=300&fit=crop",
    description: "Low maintenance air purifier, perfect for beginners"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 29.99,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e9a7a?w=300&h=300&fit=crop",
    description: "Beautiful white blooms that clean your air"
  },
  // Succulents
  {
    id: 3,
    name: "Echeveria",
    price: 12.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300&h=300&fit=crop",
    description: "Stunning rosette-shaped succulent"
  },
  {
    id: 4,
    name: "Jade Plant",
    price: 18.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",
    description: "Symbol of good luck and prosperity"
  },
  // Decorative Plants
  {
    id: 5,
    name: "Monstera Deliciosa",
    price: 45.99,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&h=300&fit=crop",
    description: "Iconic split-leaf tropical beauty"
  },
  {
    id: 6,
    name: "Fiddle Leaf Fig",
    price: 55.99,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=300&h=300&fit=crop",
    description: "Dramatic statement plant for any room"
  }
];

// Group plants by category
export const categories = [
  "Air Purifying Plants",
  "Succulents",
  "Decorative Plants"
];

export const getPlantsByCategory = (category) => {
  return plants.filter(plant => plant.category === category);
};

export default plants;
