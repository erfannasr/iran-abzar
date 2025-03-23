"use client";
import Image from "next/image";
import React from "react";
import image1 from "../../../public/images/imageBlur.png";
import imageCenter from "../../../public/images/CenterImage.png";
import leftImage from "../../../public/images/leftImage.png";

//Swiper
import "swiper/css";
import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from 'swiper/modules';
function Slider() {
  return (
    <div className="h-[476px] flex mt-[20px] mb-5">
      <div className="bg-[#FF5023] flex w-[645px] z-10 h-[408px] rounded-[30px]">
        <div className="mt-[35px]">
          <Image
            src={image1}
            width={166}
            height={153}
            alt=""
            className="rotate-[-15deg]"
          />
        </div>
        <div className="flex justify-end">
          <Image alt="" src={imageCenter} className="w-[268px] h-[407px]" />
        </div>
        <div className="items-end flex">
          <Image alt="" src={leftImage} className=" w-[194px] h-[121px]" />
        </div>
      </div>
      <div className=" flex justify-center flex-col items-center  bg-[#212121] w-[607px] h-[349px] border-l-[14px] border-b-[14px] border-t-[14px] border-[#EAEAEA] rounded-l-[38px] mt-[30px]">
        <span className="text-white font-[800] text-[44px] text-center items-center flex mb-1">
          دریل های شارژی ASED
        </span>
        <span className="text-white fonr-[400] text-[39px] mb-3">
          با فناوری موتور براش لس
        </span>

        <span className=" rounded-[5px] w-[373px] flex items-center justify-end ">
          <svg
            className="bg-white   rounded-[3px] border-[#D8D8D84F]  border-3 m-2"
            width="27"
            height="24"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4468 4.60391C16.7137 4.87087 16.738 5.28862 16.5196 5.58299L16.4468 5.66733L9.96057 12.1538L16.4468 18.6404C16.7137 18.9073 16.738 19.3251 16.5196 19.6195L16.4468 19.7038C16.1798 19.9707 15.762 19.995 15.4677 19.7766L15.3833 19.7038L8.3651 12.6856C8.09814 12.4186 8.07387 12.0009 8.29229 11.7065L8.3651 11.6221L15.3833 4.60391C15.677 4.31025 16.1531 4.31025 16.4468 4.60391Z"
              fill="#212121"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Slider;
