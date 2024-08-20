import React from "react";
import { Item } from "@/lib/types";

interface CartItemProps {
  dishOcart: Item[];
}

export function CartItemGroup({ dishOcart }: CartItemProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {dishOcart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        dishOcart.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex justify-between item-center py-2"
          >
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))
      )}
    </div>
  );
}
