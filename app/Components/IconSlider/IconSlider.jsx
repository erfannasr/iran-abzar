"use client";
import React from "react";
import { dataIconSlider } from "@/app/utils/data";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function IconSlider() {
  return (
    <div className="flex  ">
      <Swiper slidesPerView={5} spaceBetween={5}>
        {dataIconSlider.map((item) => (
          <SwiperSlide>
            <div className={`w-[134px] mb-3     hover:duration-300 hover:font-bold h-[134px] ${item.color ? "bg-[#FF5023]" : "bg-[#FFFFFF]"} flex items-center justify-center rounded-[26px]  ${item.shadow ?item.shadow : 'boxShadow'}`}>
              <span className="">{item.image}</span>
            </div>
          
            <div className="m-auto w-[135px] h-[134px]">
            <span >{item.name}</span>

            </div>
      
          </SwiperSlide>
         

        ))}
      </Swiper>
    </div>
  );
}

export default IconSlider;
