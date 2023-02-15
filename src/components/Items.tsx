import { useGildedRose } from "../context";

export const Items = () => {
  const { items, update } = useGildedRose();

  return (
    <div>
      {items.map((item) => (
        <div key={item.name}>
          <div>{item.name}</div>
          <div>{item.sellIn}</div>
          <div>{item.quality}</div>
        </div>
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
