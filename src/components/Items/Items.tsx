import { useGildedRose } from "../../context";
import { ItemCard } from "../ItemCard";

export const Items = () => {
  const { items, update } = useGildedRose();

  return (
    <div>
      {items.map((item) => (
        <ItemCard
          key={item.name}
          title={item.name}
          sellIn={item.sellIn}
          quality={item.quality}
        />
      ))}
      <button
        onClick={() => {
          update();
        }}
      >
        update
      </button>
    </div>
  );
};

export default Items;
