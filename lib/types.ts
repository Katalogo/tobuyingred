export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

export interface Dish {
  id: number;
  name: string;
  price: number;
  ingredients: Ingredient[];
}
