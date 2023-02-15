import { useGildedRose } from "../../context";
import { ItemCard } from "../ItemCard";

export const Items = () => {
  const { items } = useGildedRose();

  return (
    <>
      {items.map((item) => (
        <ItemCard
          key={item.name}
          title={item.name}
          sellIn={item.sellIn}
          quality={item.quality}
        />
      ))}
    </>
  );
};

export default Items;
