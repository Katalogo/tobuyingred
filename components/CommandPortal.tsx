"use client";
import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Item } from "@/lib/types";

interface CommandPortalProps {
  items: Item[];
  onAddToCart: (item: Item) => void;
}

export function CommandPortal({ items, onAddToCart }: CommandPortalProps) {
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  return (
    <Command className="rounded-lg border shadow-md max-h-48">
      <CommandInput
        placeholder="Search items..."
        onFocus={() => setSearchResults(items)}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {searchResults.map((item) => (
          <CommandItem key={item.id} className="min-h-12">
            <span className="text-base">{item.name}</span>
            <button
              className="ml-auto bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => onAddToCart(item)}
            >
              Add to Cart
            </button>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}
