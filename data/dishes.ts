import { Dish } from "@/lib/types";

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    price: 12,
    ingredients: [
      { id: 1, name: "Spaghetti", quantity: 100, unit: "g" },
      { id: 2, name: "Eggs", quantity: 2, unit: "pcs" },
      { id: 3, name: "Bacon", quantity: 50, unit: "g" },
      { id: 4, name: "Parmesan", quantity: 30, unit: "g" },
    ],
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 10,
    ingredients: [
      { id: 5, name: "Pizza Dough", quantity: 200, unit: "g" },
      { id: 6, name: "Tomato Sauce", quantity: 80, unit: "ml" },
      { id: 7, name: "Mozzarella", quantity: 100, unit: "g" },
      { id: 8, name: "Basil", quantity: 10, unit: "g" },
    ],
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 8,
    ingredients: [
      { id: 9, name: "Romaine Lettuce", quantity: 150, unit: "g" },
      { id: 10, name: "Croutons", quantity: 50, unit: "g" },
      { id: 11, name: "Parmesan", quantity: 20, unit: "g" },
      { id: 2, name: "Eggs", quantity: 1, unit: "pc" },
    ],
  },
  {
    id: 4,
    name: "Lasagna",
    price: 14,
    ingredients: [
      { id: 12, name: "Lasagna Sheets", quantity: 250, unit: "g" },
      { id: 13, name: "Ground Beef", quantity: 300, unit: "g" },
      { id: 6, name: "Tomato Sauce", quantity: 200, unit: "ml" },
      { id: 14, name: "Bechamel Sauce", quantity: 150, unit: "ml" },
      { id: 4, name: "Parmesan", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 5,
    name: "Chicken Alfredo",
    price: 13,
    ingredients: [
      { id: 15, name: "Fettuccine", quantity: 200, unit: "g" },
      { id: 16, name: "Chicken Breast", quantity: 200, unit: "g" },
      { id: 17, name: "Heavy Cream", quantity: 100, unit: "ml" },
      { id: 4, name: "Parmesan", quantity: 40, unit: "g" },
    ],
  },
];
