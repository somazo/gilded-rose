import { motion } from "framer-motion";
import styled from "styled-components";
import { useGildedRose } from "../../context";

const Button = styled(motion.div)`
  border-radius: 32px;
  border: 1px solid black;
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

export const ResetButton = () => {
  const { reset } = useGildedRose();

  return (
    <Button
      onClick={reset}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      reset
    </Button>
  );
};

export default ResetButton;
