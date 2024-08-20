"use client";
import React, { useState } from "react";
import { CommandPortal } from "@/components/CommandPortal";
import { Item } from "@/lib/types";
import { CartItemGroup } from "@/components/CartItemGroup";

const dishs: Item[] = [
  { id: 1, name: "Dish 1", price: 10 },
  { id: 2, name: "Dish 2", price: 15 },
  { id: 3, name: "Dish 3", price: 20 },
  { id: 4, name: "Dish 4", price: 40 },
  { id: 5, name: "Dish 5", price: 55 },
  { id: 6, name: "Dish 6", price: 60 },
  { id: 7, name: "Dish 7", price: 70 },
  { id: 8, name: "Dish 8", price: 85 },
  { id: 9, name: "Dish 9", price: 90 },
  // Add more items as needed
];

export default function Home() {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-9">
        <CommandPortal allOdish={dishs} onAddToCart={addToCart} />
        <CartItemGroup dishOcart={cartItems} />
      </div>
    </div>
  );
}
