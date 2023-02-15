import styled from "styled-components";
import { Items, PageLayout } from "../../components";

const Heading = styled.div`
  display: block;
  font-size: 64px;
`;

export const ItemsPage = () => {
  return (
    <PageLayout>
      <Heading>Check out our items:</Heading>
      <Items />
    </PageLayout>
  );
};

export default ItemsPage;
