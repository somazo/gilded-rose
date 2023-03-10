import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import { ItemsAction, PageLayout } from "../../components";

const Welcome = styled.div`
  font-size: 72px;

  @media only screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media only screen and (max-width: 512px) {
    font-size: 36px;
  }
`;

const Hero = styled.div`
  font-size: 72px;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media only screen and (max-width: 512px) {
    font-size: 36px;
  }
`;

const HeroContainer = styled.div`
  display: flex;

  gap: 16px;

  @media only screen and (max-width: 512px) {
    flex-direction: column;
  }
`;

export const LandingPage = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const x = useTransform(scrollY, (latest) => -latest);
  const scale = useTransform(scrollYProgress, (latest) => 1 + latest * 2);

  return (
    <PageLayout
      style={{ background: "linear-gradient(90deg, #eeeeee, #dddddd)" }}
    >
      <HeroContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ x, scale }}
          transition={{ duration: 1 }}
        >
          <Welcome>Welcome to</Welcome>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ x: scrollY, scale }}
          transition={{ duration: 1 }}
        >
          <Hero>Gilded Rose.</Hero>
        </motion.div>
      </HeroContainer>
      <ItemsAction />
    </PageLayout>
  );
};

export default LandingPage;
