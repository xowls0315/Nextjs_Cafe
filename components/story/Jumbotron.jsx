"use client";

import { animation, containerVariant } from "@/styles/motion";
import { motion } from "motion/react";

const Jumbotron = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[url('/story-1.jpg')] bg-cover bg-center">
      <motion.section
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        variants={containerVariant}
        className="flex flex-col text-5xl text-center text-white font-bold leading-snug"
      >
        <motion.span variants={animation.fadeInSlideDown}>
          브라질 이파네마 농장의 언덕에는
        </motion.span>
        <motion.span variants={animation.fadeInSlideDown}>
          지난 10년간 같은 자리에 줄곧
        </motion.span>
        <motion.span variants={animation.fadeInSlideDown}>
          카페베네 팻말이 꽂혀있었습니다
        </motion.span>
      </motion.section>
    </div>
  );
};

export default Jumbotron;
