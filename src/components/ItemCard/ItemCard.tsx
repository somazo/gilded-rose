import styled from "styled-components";
import { Card } from "../ui";

interface Props {
  title: string;
  sellIn: number;
  quality: number;
}

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ItemCard = (props: Props) => {
  const { title, sellIn, quality } = props;

  return (
    <Card>
      <Title>{title}</Title>
      <div>{`Item should be sold in: ${sellIn} days`}</div>
      <div>{`Quality: ${quality}`}</div>
    </Card>
  );
};

export default ItemCard;
