import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import { PageLayout } from "../../components";

const Hero = styled.div`
  font-size: 72px;
  font-weight: bold;
`;

const HeroContainer = styled.div`
  display: flex;

  gap: 32px;
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
          <Hero>Welcome to</Hero>
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
    </PageLayout>
  );
};

export default LandingPage;
function useParallax(scrollYProgress: MotionValue<number>, arg1: number) {
  throw new Error("Function not implemented.");
}
