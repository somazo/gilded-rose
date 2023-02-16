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

  @media only screen and (max-width: 768px) {
    input {
      font-size: 20px;
    }
    font-size: 20px;
  }

  @media only screen and (max-width: 512px) {
    input {
      font-size: 16px;
    }
    font-size: 16px;
  }
`;

const NameInput = styled.input`
  font-size: 32px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid black;
  max-width: 100%;

  :focus,
  :active {
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 512px) {
    font-size: 16px;
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

  @media only screen and (max-width: 512px) {
    font-size: 16px;
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

const SellInText = styled.div`
  white-space: normal;
  word-wrap: break-word;
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
    <Card
      initial={{ y: 50, opacity: 0 }}
      exit={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
    >
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
          <SellInText>Item should be sold in:</SellInText>
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
              const newValue = parseInt(e.target.value);
              if (newValue > 50) {
                setQuality(50);
                return;
              }
              if (newValue < 0) {
                setQuality(0);
                return;
              }
              setQuality(newValue);
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
