"use client";
import React, { useState } from "react";
import { CommandPortal } from "@/components/CommandPortal";
import { Dish } from "@/lib/types";
import { CartItemGroup } from "@/components/CartItemGroup";
import { dishes } from "@/data/dishes";
import dynamic from "next/dynamic";

const CartReviewDrawer = dynamic(
  () =>
    import("@/components/CartReviewDrawer").then((mod) => mod.CartReviewDrawer),
  {
    loading: () => <p>Loading...</p>,
  }
);

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
    <div className="container mx-auto px-4 py-8 max-h-full">
      {/* TODO: refactor the below components into 3 fixed size section according to device size so their is no need to scrole */}
      <div className="flex flex-col gap-9">
        <CommandPortal allOdish={dishes} onAddToCart={addToCart} />
        {/* TODO: add a form section to input "Wa mobile number" and "booking/event date" and a send button to send whatsapp message to the number with the {booking date & time, service pricing and a message template} */}
        <CartItemGroup dishOcart={cartItems} onRemove={removeFromCart} />
      </div>
      <CartReviewDrawer cartItems={cartItems} />
    </div>
  );
}
