import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { useGildedRose } from "../../context";
import { ItemCard } from "../ItemCard";
import { NewItemCard } from "../NewItemCard";

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: auto;
  white-space: nowrap;
  width: 100vw;
  margin-left: 32px;
  padding-right: 32px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Items = () => {
  const { items } = useGildedRose();

  return (
    <Container>
      <AnimatePresence>
        {items.map((item) => (
          <ItemCard
            key={item.name}
            title={item.name}
            sellIn={item.sellIn}
            quality={item.quality}
          />
        ))}
        <NewItemCard key={items.length} />
      </AnimatePresence>
    </Container>
  );
};

export default Items;
