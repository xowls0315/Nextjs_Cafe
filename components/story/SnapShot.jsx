"use client";

import { motion } from "motion/react";
import { animation, containerVariant } from "@/styles/motion";
import Container from "../common/layout/Container";
import Paragraph from "../common/typography/Paragraph";
import Image from "next/image";

const SnapShot = () => {
  return (
    <Container className="py-40 px-8 md:px-0 flex justify-center items-center">
      <motion.div
        className="flex gap-20"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        variants={containerVariant}
      >
        <motion.div
          variants={animation.fadeInSlideUp}
          whileTap={{ scale: 1.1 }}
          className="h-full flex flex-col gap-15 text-xl"
        >
          <Paragraph>
            흐르는 시간 동안 차곡차곡 쌓인 신뢰
            <br />
            동반 파트너로 이어온 끈끈한 우정
            <br />
            브라질 내 단일 커피 농장으로 최대 규모인
            <br />
            이파네마 농장의 특별한 원두 품질
          </Paragraph>
          <div className="w-[350px] h-[200px] relative">
            <Image
              alt=""
              className="object-cover"
              fill
              src={"/story-2-1.jpg"}
            />
          </div>
          <Paragraph>
            이것이
            <br />
            <span className="bg-none text-2xl font-bold">
              이파네마와 우리의 10년입니다.
            </span>
          </Paragraph>
        </motion.div>
        <div className="flex h-full gap-5">
          <motion.div
            variants={animation.fadeInSlideUp}
            whileTap={{ scale: 1.1 }}
            className="w-[300px] h-100% relative"
          >
            <Image
              alt=""
              className="object-cover"
              fill
              src={"/story-2-2.jpg"}
            />
          </motion.div>
          <div className="flex flex-col gap-5">
            <motion.div
              variants={animation.fadeInSlideUp}
              whileTap={{ scale: 1.1 }}
              className="w-[300px] h-[300px] relative"
            >
              <Image
                alt=""
                className="object-cover"
                fill
                src={"/story-2-3.jpg"}
              />
            </motion.div>
            <motion.div
              variants={animation.fadeInSlideUp}
              whileTap={{ scale: 1.1 }}
              className="w-[300px] h-[300px] relative"
            >
              <Image
                alt=""
                className="object-cover"
                fill
                src={"/story-2-4.jpg"}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default SnapShot;
