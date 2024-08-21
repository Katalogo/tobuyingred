import { Dish } from "@/lib/types";

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    price: 12,
    servings: 2,
    ingredients: [
      { id: 1, name: "Spaghetti", quantity: 200, unit: "g" },
      { id: 2, name: "Eggs", quantity: 4, unit: "pcs" },
      { id: 3, name: "Bacon", quantity: 100, unit: "g" },
      { id: 4, name: "Parmesan", quantity: 60, unit: "g" },
    ],
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 10,
    servings: 2,
    ingredients: [
      { id: 5, name: "Pizza Dough", quantity: 400, unit: "g" },
      { id: 6, name: "Tomato Sauce", quantity: 160, unit: "ml" },
      { id: 7, name: "Mozzarella", quantity: 200, unit: "g" },
      { id: 8, name: "Basil", quantity: 20, unit: "g" },
    ],
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 8,
    servings: 1,
    ingredients: [
      { id: 9, name: "Romaine Lettuce", quantity: 150, unit: "g" },
      { id: 10, name: "Croutons", quantity: 50, unit: "g" },
      { id: 4, name: "Parmesan", quantity: 20, unit: "g" },
      { id: 2, name: "Eggs", quantity: 1, unit: "pc" },
    ],
  },
  {
    id: 4,
    name: "Lasagna",
    price: 14,
    servings: 3,
    ingredients: [
      { id: 11, name: "Lasagna Sheets", quantity: 750, unit: "g" },
      { id: 12, name: "Ground Beef", quantity: 900, unit: "g" },
      { id: 6, name: "Tomato Sauce", quantity: 600, unit: "ml" },
      { id: 13, name: "Bechamel Sauce", quantity: 450, unit: "ml" },
      { id: 4, name: "Parmesan", quantity: 150, unit: "g" },
    ],
  },
  {
    id: 5,
    name: "Chicken Alfredo",
    price: 13,
    servings: 2,
    ingredients: [
      { id: 14, name: "Fettuccine", quantity: 400, unit: "g" },
      { id: 15, name: "Chicken Breast", quantity: 400, unit: "g" },
      { id: 16, name: "Heavy Cream", quantity: 200, unit: "ml" },
      { id: 4, name: "Parmesan", quantity: 80, unit: "g" },
    ],
  },
  {
    id: 6,
    name: "Beef Stroganoff",
    price: 15,
    servings: 3,
    ingredients: [
      { id: 17, name: "Egg Noodles", quantity: 300, unit: "g" },
      { id: 12, name: "Ground Beef", quantity: 600, unit: "g" },
      { id: 16, name: "Heavy Cream", quantity: 300, unit: "ml" },
      { id: 18, name: "Mushrooms", quantity: 200, unit: "g" },
      { id: 4, name: "Parmesan", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 7,
    name: "Pad Thai",
    price: 12,
    servings: 2,
    ingredients: [
      { id: 19, name: "Rice Noodles", quantity: 200, unit: "g" },
      { id: 20, name: "Shrimp", quantity: 300, unit: "g" },
      { id: 21, name: "Peanuts", quantity: 50, unit: "g" },
      { id: 22, name: "Bean Sprouts", quantity: 100, unit: "g" },
      { id: 23, name: "Lime", quantity: 2, unit: "pcs" },
    ],
  },
  {
    id: 8,
    name: "Beef Burrito",
    price: 10,
    servings: 1,
    ingredients: [
      { id: 24, name: "Tortilla", quantity: 1, unit: "pc" },
      { id: 12, name: "Ground Beef", quantity: 150, unit: "g" },
      { id: 25, name: "Refried Beans", quantity: 100, unit: "g" },
      { id: 26, name: "Cheddar Cheese", quantity: 50, unit: "g" },
      { id: 27, name: "Salsa", quantity: 30, unit: "ml" },
    ],
  },
];
