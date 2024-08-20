import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Item } from "@/lib/types";

interface ItemCardProps {
  item: Item;
  // onAddToCart: (item: Item) => void;
}

// export function ItemCard({ item, onAddToCart }: ItemCardProps) {
export function ItemCard({ item }: ItemCardProps) {
  return (
    <Card>
      <CardContent>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
      </CardContent>
      {/* <CardFooter>
        <Button onClick={() => onAddToCart(item)}>Add to Cart</Button>
      </CardFooter> */}
    </Card>
  );
}
