import React, { useState } from "react";
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
import { Input } from "./ui/input";
import { GenerateShareFile } from "./GenerateShareFile";

interface CartReviewDrawerProps {
  cartItems: Dish[];
}

export function CartReviewDrawer({ cartItems }: CartReviewDrawerProps) {
  const [requiredServings, setRequiredServings] = useState<number>(1);
  const calculateTotalIngredients = () => {
    const totalIngredients: { [key: string]: Ingredient } = {};

    cartItems.forEach((dish) => {
      dish.ingredients.forEach((ingredient) => {
        if (totalIngredients[ingredient.name]) {
          totalIngredients[ingredient.name].quantity += Math.ceil(
            ingredient.quantity * (requiredServings / dish.servings)
          );
        } else {
          totalIngredients[ingredient.name] = {
            ...ingredient,
            quantity: Math.ceil(
              ingredient.quantity * (requiredServings / dish.servings)
            ),
          };
        }
      });
    });

    return Object.values(totalIngredients).map((ingredient) => {
      let { quantity, unit } = ingredient;
      if (unit === "g" && quantity >= 1000) {
        quantity = quantity / 1000;
        unit = "kg";
      } else if (unit === "ml" && quantity >= 1000) {
        quantity = quantity / 1000;
        unit = "l";
      } else if (unit === "pc" && quantity > 1) {
        unit = "pcs";
      }
      return { ...ingredient, quantity, unit };
    });
    // return Object.values(totalIngredients).map((ingredient) => {
    //   const { quantity, unit } = ingredient;
    //   return {
    //     ...ingredient,
    //     quantity: unit === 'g' ? (quantity >= 1000 ? quantity / 1000 : quantity) : unit === 'ml' ? (quantity >= 1000 ? quantity / 1000 : quantity) : quantity,
    //     unit: unit === 'g' ? (quantity >= 1000 ? 'kg' : unit) : unit === 'ml' ? (quantity >= 1000 ? 'l' : unit) : unit,
    //   };
    // });
    // return Object.values(totalIngredients).map(({ name, quantity, unit }) => {
    //   if (unit === "g" && quantity < 1000) {
    //     return { name, quantity: quantity / 1000, unit: "kg" };
    //   } else if (unit === "ml" && quantity < 1000) {
    //     return { name, quantity: quantity / 1000, unit: "l" };
    //   } else if (unit === "pc" && quantity < 1) {
    //     return { name, quantity, unit: "pcs" };
    //   }
    //   return { name, quantity, unit };
    // });
  };

  const totalIngredients = calculateTotalIngredients();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="fixed bottom-4 left-4 rounded-full h-14">
          Review Cart Ingredients
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[96%]">
        <DrawerHeader>
          <DrawerTitle>Cart Dish Review</DrawerTitle>
          <DrawerDescription>
            Total ingredients required for your cart items
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex items-center justify-between mb-2 px-9">
          <div className="flex items-center">
            <span className="mr-2 self-center">Required Servings:</span>
            <Input
              type="number"
              min={1}
              value={requiredServings}
              onChange={(e) => setRequiredServings(Number(e.target.value))}
              className="w-20"
            />
          </div>
          {/* <Button onClick={() => calculateTotalIngredients()}>Update</Button> */}
        </div>
        <div className="px-8 overflow-scroll">
          {/* <ScrollArea className="max-h-[400px]"> */}
          {totalIngredients.map((ingredient, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <span>{ingredient.name}</span>
              <span>
                {ingredient.quantity} {ingredient.unit}
              </span>
            </div>
          ))}
          {/* </ScrollArea> */}
        </div>
        <DrawerFooter>
          <GenerateShareFile finalIngredientsList={totalIngredients} />
          {/* <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
