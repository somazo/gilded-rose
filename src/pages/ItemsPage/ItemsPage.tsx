import styled from "styled-components";
import { Items, PageLayout } from "../../components";

const Heading = styled.div`
  font-size: 64px;
  padding: 16px;
  font-weight: bold;
  position: static;
  align-self: start;
  flex: 1;
`;

const Content = styled.div`
  flex: 3;
`;

export const ItemsPage = () => {
  return (
    <PageLayout>
      <Heading>Check out our items:</Heading>
      <Content>
        <Items />
      </Content>
    </PageLayout>
  );
};

export default ItemsPage;
