"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <Swiper
      modules={[Scrollbar]}
      loop={true}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="w-full h-[600px] relative">
          <Image
            alt=""
            className="object-cover"
            src={"/swiper-1.jpg"}
            fill
            quality={100}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[600px] relative">
          <Image
            alt=""
            className="object-cover"
            src={"/swiper-2.jpg"}
            fill
            quality={100}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[600px] relative">
          <Image
            alt=""
            className="object-cover"
            src={"/swiper-3.jpg"}
            fill
            quality={100}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
