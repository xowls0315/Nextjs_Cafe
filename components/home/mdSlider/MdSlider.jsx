"use client";

import Container from "@/components/common/layout/Container";
import Heading from "@/components/common/typography/Heading";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MD from "./MD";

const MdSlider = () => {
  const data = [
    {
      title: "오로라 잔 & 코스터 선물세트",
      subtitle: "21,900 원",
      imageSrc: "/md_1.jpg",
    },
    { title: "배네켓 장우산", subtitle: "31,900 원", imageSrc: "/md_2.jpg" },
    { title: "베네컷 텀블러", subtitle: "31,900 원", imageSrc: "/md_3.jpg" },
    {
      title: "드라이브 텀블러 민트",
      subtitle: "31,900 원",
      imageSrc: "/md_4.jpg",
    },
    { title: "디카페인 드랍백", subtitle: "31,900 원", imageSrc: "/md_5.jpg" },
  ];

  return (
    <Container className="py-10 px-8 md:px-0">
      <Heading level={3}>New & Best MD</Heading>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: true,
          },
        }}
        modules={[Navigation]}
        navigation
        loop={true}
        className="mt-5"
      >
        {data.map((v) => (
          <SwiperSlide>
            <MD {...v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default MdSlider;
