import { createContext, useContext } from "react";
import { Item } from "../gilded-rose/app/gilded-rose";

const initialContext = {
  items: [],
  update: () => {},
};

export const GildedRoseContext = createContext<{
  items: Item[];
  update: () => void;
}>(initialContext);

export const useGildedRose = () => {
  return useContext(GildedRoseContext);
};
