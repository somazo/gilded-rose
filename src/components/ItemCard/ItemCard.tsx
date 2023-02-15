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
`;

const ValueText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ItemCard = (props: Props) => {
  const { title, sellIn, quality } = props;

  return (
    <Card>
      <Title>{title}</Title>
      <div>Item should be sold in:</div>
      <ValueText>{`${sellIn} days`}</ValueText>
      <div>Quality:</div>
      <ValueText>{quality}</ValueText>
    </Card>
  );
};

export default ItemCard;
