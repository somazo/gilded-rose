import { ReactNode, useCallback, useMemo, useState } from "react";
import { GildedRose, Item } from "../gilded-rose/app/gilded-rose";
import { gildedRoseData } from "../gilded-rose/data/gilded-rose-data";
import { GildedRoseContext } from "./GildedRoseContext";

export const GildedRoseProvider = ({ children }: { children?: ReactNode }) => {
  const gildedRose = useMemo(
    () =>
      new GildedRose(
        gildedRoseData.map(
          ({ name, sellIn, quality }) => new Item(name, sellIn, quality)
        )
      ),
    []
  );
  const [items, setItems] = useState(gildedRose.items);

  const update = useCallback(() => {
    const newItems = gildedRose.updateQuality();
    setItems([...newItems]);
  }, [gildedRose, setItems]);

  return (
    <GildedRoseContext.Provider value={{ items, update }}>
      {children}
    </GildedRoseContext.Provider>
  );
};
