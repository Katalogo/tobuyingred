import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Dish, Ingredient } from "@/lib/types";

interface CartReviewDrawerProps {
  cartItems: Dish[];
}

export function CartReviewDrawer({ cartItems }: CartReviewDrawerProps) {
  const calculateTotalIngredients = () => {
    const totalIngredients: { [key: string]: Ingredient } = {};

    cartItems.forEach((dish) => {
      dish.ingredients.forEach((ingredient) => {
        if (totalIngredients[ingredient.name]) {
          totalIngredients[ingredient.name].quantity += ingredient.quantity;
        } else {
          totalIngredients[ingredient.name] = { ...ingredient };
        }
      });
    });

    return Object.values(totalIngredients);
  };

  const totalIngredients = calculateTotalIngredients();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="fixed bottom-4 right-4 rounded-full bg-sky-600">
          Review Cart Ingredients
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Cart Dish Review</DrawerTitle>
          <DrawerDescription>
            Total ingredients required for your cart items
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          {totalIngredients.map((ingredient, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span>{ingredient.name}</span>
              <span>
                {ingredient.quantity} {ingredient.unit}
              </span>
            </div>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
