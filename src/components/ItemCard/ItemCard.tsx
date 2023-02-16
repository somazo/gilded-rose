import styled from "styled-components";
import { Card } from "../ui";

interface Props {
  title: string;
  sellIn: number;
  quality: number;
}

const Title = styled.div`
  flex: 1;
  font-size: 32px;
  font-weight: bold;
  white-space: normal;
  word-wrap: break-word;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 512px) {
    font-size: 20px;
  }
`;

const ValueText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 512px) {
    font-size: 16px;
  }
`;

const SellInText = styled.div`
  white-space: normal;
  word-wrap: break-word;
`;

export const ItemCard = (props: Props) => {
  const { title, sellIn, quality } = props;

  return (
    <Card
      initial={{ y: 50, opacity: 0 }}
      exit={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Title>{title}</Title>
      <SellInText>Item should be sold in:</SellInText>
      <ValueText>{`${sellIn} days`}</ValueText>
      <div>Quality:</div>
      <ValueText>{quality}</ValueText>
    </Card>
  );
};

export default ItemCard;
