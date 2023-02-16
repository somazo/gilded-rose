import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 1px 2px 2px #88888820;
  padding: 16px;
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 25vw;
  min-height: 50vh;

  @media only screen and (max-width: 768px) {
    min-width: 30vw;
  }

  @media only screen and (max-width: 512px) {
    min-width: 50vw;
  }
`;

export default Card;
