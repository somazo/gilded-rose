import { motion } from "framer-motion";
import styled from "styled-components";
import { useGildedRose } from "../../context";

const Container = styled.div`
  position: fixed;
  right: 0;
  margin: 16px;

  @media only screen and (max-width: 768px) {
    left: 0;
    bottom: 0;
    right: initial;
  }

  @media only screen and (max-width: 512px) {
    font-size: 12px;
  }
`;

const Button = styled(motion.div)`
  border-radius: 32px;
  border: 1px solid black;
  font-size: 16px;
  padding: 16px;
  cursor: pointer;
  background: white;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 512px) {
    font-size: 12px;
  }
`;

export const UpdateButton = () => {
  const { update } = useGildedRose();

  return (
    <Container>
      <Button
        onClick={() => {
          update();
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        + Spend the night
      </Button>
    </Container>
  );
};

export default UpdateButton;
