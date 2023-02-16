import { ReactNode, useCallback, useRef, useState } from "react";
import { GildedRose, Item } from "../gilded-rose/app/gilded-rose";
import { gildedRoseData } from "../gilded-rose/data/gilded-rose-data";
import { GildedRoseContext } from "./GildedRoseContext";

export const GildedRoseProvider = ({ children }: { children?: ReactNode }) => {
  const initGildedRose = () =>
    new GildedRose(
      gildedRoseData.map(
        ({ name, sellIn, quality }) => new Item(name, sellIn, quality)
      )
    );
  const gildedRose = useRef(initGildedRose());
  const [items, setItems] = useState(gildedRose.current.items);

  const update = useCallback(() => {
    const newItems = gildedRose.current.updateQuality();
    setItems([...newItems]);
  }, [gildedRose, setItems]);

  const reset = useCallback(() => {
    gildedRose.current = initGildedRose();
    setItems([...gildedRose.current.items]);
  }, [gildedRose]);

  const add = useCallback(
    (newItem: Item) => {
      gildedRose.current = new GildedRose(
        [...items, newItem].map(
          ({ name, sellIn, quality }) => new Item(name, sellIn, quality)
        )
      );
      setItems([...gildedRose.current.items]);
    },
    [items]
  );

  return (
    <GildedRoseContext.Provider value={{ items, update, add, reset }}>
      {children}
    </GildedRoseContext.Provider>
  );
};
