"use client";
import React, { useState } from "react";
import { CommandPortal } from "@/components/CommandPortal";
import { Dish } from "@/lib/types";
import { CartItemGroup } from "@/components/CartItemGroup";
import { CartReviewDrawer } from "@/components/CartReviewDrawer";
import { dishes } from "@/data/dishes";

export default function Home() {
  const [cartItems, setCartItems] = useState<Dish[]>([]);

  const addToCart = (dish: Dish) => {
    if (!cartItems.some((item) => item.id === dish.id)) {
      setCartItems([...cartItems, dish]);
    }
  };

  const removeFromCart = (dish: Dish) => {
    setCartItems(cartItems.filter((item) => item.id !== dish.id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-9">
        <CommandPortal allOdish={dishes} onAddToCart={addToCart} />
        <CartItemGroup dishOcart={cartItems} onRemove={removeFromCart} />
      </div>
      <CartReviewDrawer cartItems={cartItems} />
    </div>
  );
}
