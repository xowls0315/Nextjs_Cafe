"use client";

import { motion } from "motion/react";
import { animation, containerVariant } from "@/styles/motion";
import Container from "../common/layout/Container";
import Paragraph from "../common/typography/Paragraph";

const Vibes = () => {
  return (
    <Container className="py-40 px-8 md:px-0">
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        variants={containerVariant}
        className="flex flex-col justify-center items-center text-center gap-15 text-xl"
      >
        <motion.div
          variants={animation.fadeInSlideUp}
          whileTap={{ scale: 1.1 }}
        >
          <Paragraph>
            지구 반 바퀴를 돌아 닿은 그곳,
            <br />
            해발 1200M 고산지대에 있는 이파네마 농장.
          </Paragraph>
        </motion.div>
        <motion.div
          variants={animation.fadeInSlideUp}
          whileTap={{ scale: 1.1 }}
        >
          <Paragraph>
            커피 전문가들이 직접 선정하고
            <br />
            공장에서 직거래로 공급한 신선한 생두와
            <br />
            최첨단 시설에서 로스팅 해 더욱 맛있는 원두를
            <br />
            카페베네에서 만나보세요!
          </Paragraph>
        </motion.div>
        <motion.div
          variants={animation.fadeInSlideUp}
          whileTap={{ scale: 1.1 }}
        >
          <Paragraph className="font-bold text-blue-700">
            우리 동네 숨은 스페셜티 블렌드 맛집, 여기는 카페베네입니다.
          </Paragraph>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Vibes;
