import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { useGildedRose } from "../../context";
import { AddButton } from "../AddButton";
import { Card } from "../ui";

const Title = styled.div`
  flex: 1;

  white-space: normal;
`;

const ValueText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const NameInput = styled.input`
  font-size: 32px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid black;

  :focus,
  :active {
    outline: none;
  }
`;

const NumberInput = styled.input`
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid black;
  max-width: 64px;

  :focus,
  :active {
    outline: none;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: end;
`;

const PropertiesContainer = styled.div`
  flex: 1;
  margin-bottom: 16px;
`;

export const NewItemCard = () => {
  const { add } = useGildedRose();

  const [name, setName] = useState<string>("");
  const [sellIn, setSellIn] = useState<number>(0);
  const [quality, setQuality] = useState<number>(0);

  const handleAdd = useCallback(() => {
    add({ name, sellIn, quality });
  }, [add, name, sellIn, quality]);

  return (
    <Card>
      <Title>
        <NameInput
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Add new item"
        />
      </Title>
      <CardContent>
        <PropertiesContainer>
          <div>Item should be sold in:</div>
          <ValueText>
            <NumberInput
              type="number"
              value={sellIn}
              onChange={(e) => {
                setSellIn(parseInt(e.target.value));
              }}
            />
            {` days`}
          </ValueText>
          <div>Quality:</div>
          <NumberInput
            type="number"
            value={quality}
            min={0}
            max={50}
            onChange={(e) => {
              setQuality(parseInt(e.target.value));
            }}
          />
        </PropertiesContainer>
        <motion.div whileHover={{ scale: name.length === 0 ? 1 : 1.1 }}>
          <AddButton onClick={handleAdd} disabled={name.length === 0} />
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default NewItemCard;
