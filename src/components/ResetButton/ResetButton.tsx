import { motion } from "framer-motion";
import styled from "styled-components";
import { useGildedRose } from "../../context";

const Button = styled(motion.div)`
  border-radius: 32px;
  border: 1px solid black;
  padding: 16px;
  cursor: pointer;
  background: white;
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
