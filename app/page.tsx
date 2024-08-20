"use client";
import React, { useState } from "react";
import { CommandPortal } from "@/components/CommandPortal";
import { CartItem } from "@/components/CartItem";
import { Item } from "@/lib/types";

const items: Item[] = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 15 },
  { id: 3, name: "Item 3", price: 20 },
  { id: 4, name: "Item 4", price: 40 },
  { id: 5, name: "Item 5", price: 55 },
  { id: 6, name: "Item 6", price: 60 },
  { id: 7, name: "Item 7", price: 70 },
  { id: 8, name: "Item 8", price: 85 },
  { id: 9, name: "Item 9", price: 90 },
  // Add more items as needed
];

export default function Home() {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <CommandPortal items={items} onAddToCart={addToCart} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <CartItem key={`${item.id}-${index}`} item={item} />
          ))
        )}
      </div>
    </div>
  );
}
