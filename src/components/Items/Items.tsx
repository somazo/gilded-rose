import styled from "styled-components";
import { useGildedRose } from "../../context";
import { ItemCard } from "../ItemCard";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: auto;
  white-space: nowrap;
  width: 100vw;
  height: 100%;
  margin-left: 32px;
`;

export const Items = () => {
  const { items } = useGildedRose();

  return (
    <Container>
      {items.map((item) => (
        <ItemCard
          key={item.name}
          title={item.name}
          sellIn={item.sellIn}
          quality={item.quality}
        />
      ))}
    </Container>
  );
};

export default Items;
