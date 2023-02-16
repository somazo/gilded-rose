import styled from "styled-components";

export const AddButton = styled.button`
  font-size: 32px;
  background: white;
  border: 1px solid black;
  border-radius: 48px;
  width: 48px;
  height: 48px;
  cursor: pointer;

  ::after {
    content: "+";
  }

  :disabled {
    border: 1px solid #00000030;
  }
`;

export default AddButton;
