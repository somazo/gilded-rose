import { createContext, useContext } from "react";
import { Item } from "../gilded-rose/app/gilded-rose";

const initialContext = {
  items: [],
  update: () => {},
  add: (newItem: Item) => {},
  reset: () => {},
};

export const GildedRoseContext = createContext<{
  items: Item[];
  update: () => void;
  add: (newItem: Item) => void;
  reset: () => void;
}>(initialContext);

export const useGildedRose = () => {
  return useContext(GildedRoseContext);
};
