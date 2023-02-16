import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: absolute;
  bottom: 32px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ItemsAction = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, (latest) => 1 - latest * 2);

  return (
    <Container
      animate={{ y: [0, 10, 0] }}
      style={{ opacity }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.1,
      }}
    >
      <div>See items</div>
      <div>↓</div>
    </Container>
  );
};

export default ItemsAction;
