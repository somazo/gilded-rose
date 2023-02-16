import styled from "styled-components";
import { Items, PageLayout, ResetButton } from "../../components";

const Heading = styled.div`
  font-size: 64px;
  padding: 16px;
  font-weight: bold;
  position: static;
  align-self: start;
  flex: 1;
`;

const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  margin: 32px;
  align-self: flex-end;
`;

export const ItemsPage = () => {
  return (
    <PageLayout>
      <Heading>Check out our items:</Heading>
      <Content>
        <Items />
        <ButtonContainer>
          <ResetButton />
        </ButtonContainer>
      </Content>
    </PageLayout>
  );
};

export default ItemsPage;
