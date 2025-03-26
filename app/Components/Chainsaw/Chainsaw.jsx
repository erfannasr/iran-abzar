import Image from "next/image";
import React from "react";
import image1 from "../../../public/images/Chainsaw/Chainsaw.png";
import image2 from "../../../public/images/Chainsaw/image1.png";
import image3 from "../../../public/images/Chainsaw/image2.png";
import image4 from "../../../public/images/Chainsaw/image3.png";
import image5 from "../../../public/images/Chainsaw/image4.png";


function Chainsaw() {
  return (
    <div className="bg-[#FF5D42] w-full  h-[640px]  rounded-[34px] mt-20">
      <div className="flex justify-evenly   h-[200px]">
        <div className="flex flex-col ">
          <span className="font-[500] mt-7 text-[38px] text-[#FFFFFF]">
            پرفروشترین اره برقی ها
          </span>
          <button className="w-[236px] mt-4 h-[58px] bg-[#FFFFFFF0] rounded-[6px] border-[3px] border-[#D8D8D84F]">
            <span className="text-[#FF5023] text-[20px] ">مشاهده همه محصولات</span>
          </button>
        </div>
        <div className="translate-y-[-110px]">
          <Image src={image1} alt="" className="w-[600px]  z-50 " />
        </div>
      </div>
      <div className="flex justify-evenly mt-6">

        {/* Card #1 */}
      <div className="bg-[#F9F9F9] flex flex-col justify-between rounded-[20px] w-[250px] p-4">
          <div className="bg-[#E1E1E1] h-[170px] rounded-[15px] flex flex-col justify-center p-2 items-center">
            <Image src={image2} alt="" />
          </div>
          <div className=" ">
            <div className="text-center mb-1">
              <span className="text-[20px] text-[#212121] font-[500] tracking-[1px]  ">
              اره زنجیری بنزینی ادون
              </span>
            </div>

            <span className="text-[#9C9C9C] font-[300] tracking-[1px] px-2">
              ronix 2211 impact drill
            </span>
            <div className="flex justify-between mt-3 px-2">
              <span className="text-[20px] text-[#212121] font-[500]">
                قیمت:
              </span>
              <span className="text-[20px] text-[#212121] font-[500]">
              ۲/۴۴۰/۰۰۰
              </span>
            </div>
          </div>
          <div className=" border-t-2 border-[#DEDEDE]  flex items-center justify-center">
            <button className="flex items-center mt-[18px] justify-center bg-[#FF5023] w-[181px] h-[39px] rounded-[7px]"> 
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z"
                  fill="white"
                  fillOpacity="0.36"
                />
                <path
                  d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                  fill="white"
                  fillOpacity="0.36"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                  fill="white"
                />
              </svg>
              <span className="text-white">
              افزودن به سبد خرید
              </span>
            </button>
          </div>
        </div>
 {/* Card #2 */}
        <div className="bg-[#F9F9F9] flex flex-col justify-between rounded-[20px] w-[250px] p-4">
          <div className="bg-[#E1E1E1] h-[170px] rounded-[15px] flex flex-col justify-center p-2 items-center">
            <Image src={image3} alt="" />
          </div>
          <div className=" ">
            <div className="text-center mb-1">
              <span className="text-[20px] text-[#212121] font-[500] tracking-[1px]  ">
              اره زنجیری برقی رونیکس
              </span>
            </div>

            <span className="text-[#9C9C9C] font-[300] tracking-[1px] px-2">
              ronix 2211 impact drill
            </span>
            <div className="flex justify-between mt-3 px-2">
              <span className="text-[20px] text-[#212121] font-[500]">
                قیمت:
              </span>
              <span className="text-[20px] text-[#212121] font-[500]">
              ۱/۵۸۰/۰۰۰
              </span>
            </div>
          </div>
          <div className=" border-t-2 border-[#DEDEDE]  flex items-center justify-center">
            <button className="flex items-center mt-[18px] justify-center bg-[#FF5023] w-[181px] h-[39px] rounded-[7px]"> 
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z"
                  fill="white"
                  fillOpacity="0.36"
                />
                <path
                  d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                  fill="white"
                  fillOpacity="0.36"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                  fill="white"
                />
              </svg>
              <span className="text-white">
              افزودن به سبد خرید
              </span>
            </button>
          </div>
        </div>
          {/* Card #3 */}
        <div className="bg-[#F9F9F9] flex flex-col justify-between rounded-[20px] w-[250px] p-4">
          <div className="bg-[#E1E1E1] h-[170px] rounded-[15px] flex flex-col justify-center p-2 items-center">
            <Image src={image4} alt="" />
          </div>
          <div className=" ">
            <div className="text-center mb-1 mt-4">
              <span className="text-[20px]  text-[#212121] font-[500] tracking-[1px]  ">
              اره زنجیری اشتیل MS230
              </span>
            </div>

            <span className="text-[#9C9C9C] font-[300] tracking-[1px] px-2">
              ronix 2211 impact drill
            </span>
            <div className="flex justify-between mt-3 px-2">
              <span className="text-[20px] text-[#212121] font-[500]">
                قیمت:
              </span>
              <span className="text-[20px] text-[#212121] font-[500]">
              ۲/۲۰۰/۰۰۰
              </span>
            </div>
          </div>
          <div className=" border-t-2 border-[#DEDEDE]  flex items-center justify-center">
            <button className="flex items-center mt-[18px] justify-center bg-[#FF5023] w-[181px] h-[39px] rounded-[7px]"> 
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z"
                  fill="white"
                  fillOpacity="0.36"
                />
                <path
                  d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                  fill="white"
                  fillOpacity="0.36"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                  fill="white"
                />
              </svg>
              <span className="text-white">
              افزودن به سبد خرید
              </span>
            </button>
          </div>
        </div>
           
      {/* Card #4 */}
      <div className="bg-[#F9F9F9] flex flex-col justify-between rounded-[20px] w-[250px] p-4">
          <div className="bg-[#E1E1E1] h-[170px] rounded-[15px] flex flex-col justify-center p-2 items-center">
            <Image src={image5} alt="" />
          </div>
          <div className=" ">
            <div className="text-center mb-1">
              <span className="text-[20px] text-[#212121] font-[500] tracking-[1px]  ">
              اره زنجیری شارژی بوش

              </span>
            </div>

            <span className="text-[#9C9C9C] font-[300] tracking-[1px] px-2">
              ronix 2211 impact drill
            </span>
            <div className="flex justify-between mt-3 px-2">
              <span className="text-[20px] text-[#212121] font-[500]">
                قیمت:
              </span>
              <span className="text-[20px] text-[#212121] font-[500]">
              ۳/۵۸۰/۰۰۰
              </span>
            </div>
          </div>
          <div className=" border-t-2 border-[#DEDEDE]  flex items-center justify-center">
            <button className="flex items-center mt-[18px] justify-center bg-[#FF5023] w-[181px] h-[39px] rounded-[7px]"> 
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z"
                  fill="white"
                  fillOpacity="0.36"
                />
                <path
                  d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                  fill="white"
                  fillOpacity="0.36"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                  fill="white"
                />
              </svg>
              <span className="text-white">
              افزودن به سبد خرید
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chainsaw;
