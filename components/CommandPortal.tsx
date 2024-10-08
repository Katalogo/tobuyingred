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

interface CommandPortalProps {
  allOdish: Dish[];
  onAddToCart: (item: Dish) => void;
}

export function CommandPortal({ allOdish, onAddToCart }: CommandPortalProps) {
  const [searchResults, setSearchResults] = useState<Dish[]>(
    allOdish.slice(0, 3)
  );

  return (
    <Command className="rounded-lg border shadow-md max-h-48">
      <CommandInput
        placeholder="Search item..."
        onFocus={() => setSearchResults(allOdish)}
      />
      <CommandList>
        {searchResults ? null : <CommandEmpty>No results found.</CommandEmpty>}
        {searchResults.map((dish) => (
          <CommandItem key={dish.id} className="min-h-12">
            <span className="text-base">{dish.name}</span>
            <button
              className="ml-auto bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => onAddToCart(dish)}
            >
              Add to Cart
            </button>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}
