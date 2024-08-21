"use client";
import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dish } from "@/lib/types";
import { Button } from "./ui/button";

interface CommandPortalProps {
  allOdish: Dish[];
  onAddToCart: (item: Dish) => void;
}

export function CommandPortal({ allOdish, onAddToCart }: CommandPortalProps) {
  const [searchResults, setSearchResults] = useState<Dish[]>([]);

  return (
    <Command className="rounded-lg border shadow-md max-h-48">
      <CommandInput
        placeholder="Search item..."
        onFocus={() => setSearchResults(allOdish)}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {searchResults.map((dish) => (
          <CommandItem key={dish.id} className="min-h-12">
            <span className="text-base">{dish.name}</span>
            <Button
              className="ml-auto bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => onAddToCart(dish)}
            >
              Add to Cart
            </Button>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}
