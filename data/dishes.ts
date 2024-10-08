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
  {
    id: 9,
    name: "Vegetable Stir Fry",
    price: 11,
    servings: 2,
    ingredients: [
      { id: 28, name: "Mixed Vegetables", quantity: 400, unit: "g" },
      { id: 29, name: "Tofu", quantity: 200, unit: "g" },
      { id: 30, name: "Soy Sauce", quantity: 30, unit: "ml" },
      { id: 31, name: "Sesame Oil", quantity: 15, unit: "ml" },
    ],
  },
  {
    id: 10,
    name: "Beef Tacos",
    price: 13,
    servings: 3,
    ingredients: [
      { id: 32, name: "Taco Shells", quantity: 6, unit: "pcs" },
      { id: 12, name: "Ground Beef", quantity: 450, unit: "g" },
      { id: 33, name: "Lettuce", quantity: 100, unit: "g" },
      { id: 26, name: "Cheddar Cheese", quantity: 100, unit: "g" },
    ],
  },
  {
    id: 11,
    name: "Mushroom Risotto",
    price: 14,
    servings: 3,
    ingredients: [
      { id: 34, name: "Arborio Rice", quantity: 300, unit: "g" },
      { id: 18, name: "Mushrooms", quantity: 300, unit: "g" },
      { id: 35, name: "Vegetable Broth", quantity: 1000, unit: "ml" },
      { id: 4, name: "Parmesan", quantity: 100, unit: "g" },
    ],
  },
  {
    id: 12,
    name: "Greek Salad",
    price: 9,
    servings: 2,
    ingredients: [
      { id: 36, name: "Cucumber", quantity: 1, unit: "pc" },
      { id: 37, name: "Tomatoes", quantity: 2, unit: "pcs" },
      { id: 38, name: "Feta Cheese", quantity: 100, unit: "g" },
      { id: 39, name: "Kalamata Olives", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 13,
    name: "Chicken Curry",
    price: 15,
    servings: 4,
    ingredients: [
      { id: 15, name: "Chicken Breast", quantity: 600, unit: "g" },
      { id: 40, name: "Coconut Milk", quantity: 400, unit: "ml" },
      { id: 41, name: "Curry Powder", quantity: 30, unit: "g" },
      { id: 42, name: "Basmati Rice", quantity: 400, unit: "g" },
    ],
  },
  {
    id: 14,
    name: "Beef Stew",
    price: 16,
    servings: 4,
    ingredients: [
      { id: 43, name: "Beef Chuck", quantity: 800, unit: "g" },
      { id: 44, name: "Carrots", quantity: 300, unit: "g" },
      { id: 45, name: "Potatoes", quantity: 400, unit: "g" },
      { id: 35, name: "Vegetable Broth", quantity: 500, unit: "ml" },
    ],
  },
  {
    id: 15,
    name: "Shrimp Scampi",
    price: 17,
    servings: 2,
    ingredients: [
      { id: 20, name: "Shrimp", quantity: 400, unit: "g" },
      { id: 46, name: "Linguine", quantity: 250, unit: "g" },
      { id: 47, name: "White Wine", quantity: 100, unit: "ml" },
      { id: 48, name: "Garlic", quantity: 4, unit: "cloves" },
    ],
  },
  {
    id: 16,
    name: "Vegetarian Chili",
    price: 12,
    servings: 4,
    ingredients: [
      { id: 49, name: "Kidney Beans", quantity: 400, unit: "g" },
      { id: 50, name: "Black Beans", quantity: 400, unit: "g" },
      { id: 51, name: "Diced Tomatoes", quantity: 800, unit: "g" },
      { id: 52, name: "Bell Peppers", quantity: 2, unit: "pcs" },
    ],
  },
  {
    id: 17,
    name: "Pesto Pasta",
    price: 11,
    servings: 2,
    ingredients: [
      { id: 14, name: "Fettuccine", quantity: 300, unit: "g" },
      { id: 53, name: "Basil Pesto", quantity: 100, unit: "g" },
      { id: 54, name: "Cherry Tomatoes", quantity: 200, unit: "g" },
      { id: 4, name: "Parmesan", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 18,
    name: "Butter Chicken",
    price: 14,
    servings: 3,
    ingredients: [
      { id: 15, name: "Chicken Breast", quantity: 500, unit: "g" },
      { id: 55, name: "Butter", quantity: 100, unit: "g" },
      { id: 56, name: "Heavy Cream", quantity: 200, unit: "ml" },
      { id: 42, name: "Basmati Rice", quantity: 300, unit: "g" },
    ],
  },
  {
    id: 19,
    name: "Fish and Chips",
    price: 13,
    servings: 2,
    ingredients: [
      { id: 57, name: "Cod Fillets", quantity: 400, unit: "g" },
      { id: 45, name: "Potatoes", quantity: 500, unit: "g" },
      { id: 58, name: "All-Purpose Flour", quantity: 200, unit: "g" },
      { id: 59, name: "Vegetable Oil", quantity: 500, unit: "ml" },
    ],
  },
  {
    id: 20,
    name: "Spinach and Ricotta Ravioli",
    price: 15,
    servings: 3,
    ingredients: [
      { id: 60, name: "Ravioli", quantity: 450, unit: "g" },
      { id: 61, name: "Spinach", quantity: 300, unit: "g" },
      { id: 62, name: "Ricotta Cheese", quantity: 250, unit: "g" },
      { id: 6, name: "Tomato Sauce", quantity: 300, unit: "ml" },
    ],
  },
  {
    id: 21,
    name: "Beef Pho",
    price: 14,
    servings: 2,
    ingredients: [
      { id: 63, name: "Rice Noodles", quantity: 200, unit: "g" },
      { id: 64, name: "Beef Sirloin", quantity: 300, unit: "g" },
      { id: 65, name: "Beef Broth", quantity: 1000, unit: "ml" },
      { id: 66, name: "Bean Sprouts", quantity: 100, unit: "g" },
    ],
  },
  {
    id: 22,
    name: "Eggplant Parmesan",
    price: 12,
    servings: 3,
    ingredients: [
      { id: 67, name: "Eggplant", quantity: 2, unit: "pcs" },
      { id: 7, name: "Mozzarella", quantity: 250, unit: "g" },
      { id: 4, name: "Parmesan", quantity: 100, unit: "g" },
      { id: 6, name: "Tomato Sauce", quantity: 400, unit: "ml" },
    ],
  },
  {
    id: 23,
    name: "Chicken Fajitas",
    price: 13,
    servings: 3,
    ingredients: [
      { id: 15, name: "Chicken Breast", quantity: 450, unit: "g" },
      { id: 52, name: "Bell Peppers", quantity: 3, unit: "pcs" },
      { id: 68, name: "Onion", quantity: 1, unit: "pc" },
      { id: 24, name: "Tortilla", quantity: 6, unit: "pcs" },
    ],
  },
  {
    id: 24,
    name: "Caprese Salad",
    price: 9,
    servings: 2,
    ingredients: [
      { id: 37, name: "Tomatoes", quantity: 3, unit: "pcs" },
      { id: 7, name: "Mozzarella", quantity: 200, unit: "g" },
      { id: 8, name: "Basil", quantity: 30, unit: "g" },
      { id: 69, name: "Balsamic Vinegar", quantity: 30, unit: "ml" },
    ],
  },
  {
    id: 25,
    name: "Beef Lasagna",
    price: 16,
    servings: 6,
    ingredients: [
      { id: 11, name: "Lasagna Sheets", quantity: 500, unit: "g" },
      { id: 12, name: "Ground Beef", quantity: 750, unit: "g" },
      { id: 6, name: "Tomato Sauce", quantity: 800, unit: "ml" },
      { id: 7, name: "Mozzarella", quantity: 400, unit: "g" },
      { id: 4, name: "Parmesan", quantity: 100, unit: "g" },
    ],
  },
];
