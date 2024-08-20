import React from "react";
import { Item } from "@/lib/types";

interface CartItemProps {
  item: Item;
}

export function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex justify-between items-center py-2">
      <span>{item.name}</span>
      <span>${item.price.toFixed(2)}</span>
    </div>
  );
}
