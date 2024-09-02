// import React from "react";
import { Dish } from "@/lib/types";
import { Card, CardHeader, CardContent } from "./ui/card";

interface CartItemProps {
  dishOcart: Dish[];
  onRemove: (dish: Dish) => void;
}

export function CartItemGroup({ dishOcart, onRemove }: CartItemProps) {
  return (
    // <div>
    //   <h2 className="text-xl font-semibold mb-4">Cart</h2>
    //   {dishOcart.length === 0 ? (
    //     <p>Your cart is empty.</p>
    //   ) : (
    //     dishOcart.map((cartDish, index) => (
    //       <div
    //         key={`${cartDish.id}-${index}`}
    //         className="flex justify-between items-center py-2"
    //       >
    //         <span>{cartDish.name}</span>
    //         <div className="flex justify-between space-x-4">
    //           <span className="self-center">${cartDish.price.toFixed(2)}</span>
    //           <button
    //             className="ml-auto bg-red-500 text-white px-2 py-1 rounded"
    //             onClick={() => onRemove(cartDish)}
    //           >
    //             Remove
    //           </button>
    //         </div>
    //       </div>
    //     ))
    //   )}
    // </div>
    <Card className="relative max-h-[50%]">
      <CardHeader>
        <h2 className="text-xl font-semibold">Cart</h2>
      </CardHeader>
      <CardContent className="overflow-scroll">
        {dishOcart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          dishOcart.map((cartDish, index) => (
            <div
              key={`${cartDish.id}-${index}`}
              className="flex justify-between items-center py-2"
            >
              <span>{cartDish.name}</span>
              <div className="flex justify-between space-x-4">
                <span className="self-center">
                  ${cartDish.price.toFixed(2)}
                </span>
                <button
                  className="ml-auto bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => onRemove(cartDish)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
