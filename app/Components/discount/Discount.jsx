import React from "react";
import sangFerez from "../../../public/images/discount/sangFerez.png";
import Image from "next/image";
import dereil1 from "../../../public/images/discount/dereil1.png";
import dereil2 from "../../../public/images/discount/dereil2.png";
import dereil3 from "../../../public/images/discount/dereil3.png";
import discountImg1 from "../../../public/images/discount/discount1.png";
import discountImg2 from "../../../public/images/discount/discount2.png";
import discountImg3 from "../../../public/images/discount/discount3.png";

function Discount() {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <div>
          <span className="text-[#FF5023] font-[600] text-[30px] ">
            تخفیف شگفت انگیز
          </span>
        </div>
        <div className="flex">
          <span className="w-[40px] flex ml-2 justify-center items-center h-[40px] bg-[#FF502347] rounded-[10px]">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7109 0.441209L19.2409 7.93721C19.8069 8.50121 19.8069 9.49921 19.2409 10.0652L11.7109 17.5612C11.1229 18.1452 10.1729 18.1432 9.58891 17.5552C9.00492 16.9672 9.00491 16.0192 9.59291 15.4332L14.5469 10.4992L1.83691 10.4992C1.00691 10.4992 0.336914 9.82721 0.336914 8.99921C0.336914 8.17121 1.00691 7.49921 1.83691 7.49921L14.5469 7.49921L9.59291 2.56721C9.29891 2.27321 9.15291 1.88921 9.15291 1.50321C9.15291 1.12121 9.29891 0.737208 9.58891 0.445208C10.1729 -0.140792 11.1229 -0.142791 11.7109 0.441209Z"
                fill="#FF5023"
              />
            </svg>
          </span>
          <span className="w-[40px] mr-1 flex justify-center items-center h-[40px] bg-[#FF502347] rounded-[10px]">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.28909 0.441209L0.759085 7.93721C0.193085 8.50121 0.193085 9.49921 0.759085 10.0652L8.28909 17.5612C8.87709 18.1452 9.82709 18.1432 10.4111 17.5552C10.9951 16.9672 10.9951 16.0192 10.4071 15.4332L5.45308 10.4992L18.1631 10.4992C18.9931 10.4992 19.6631 9.82721 19.6631 8.99921C19.6631 8.17121 18.9931 7.49921 18.1631 7.49921L5.45308 7.49921L10.4071 2.56721C10.7011 2.27321 10.8471 1.88921 10.8471 1.50321C10.8471 1.12121 10.7011 0.737208 10.4111 0.445208C9.82709 -0.140792 8.87709 -0.142791 8.28909 0.441209Z"
                fill="#FF5023"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col rounded-[35px] justify-end  bg-black opacity-95 items-center   backgroud  ">
          <Image
            src={sangFerez}
            className="flex   justify-center items-center"
            // height={900}
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <div className=" flex justify-between  w-[863px] h-[431px] mr-4">
            {/* 1 / 3  */}
            <div className="w-[271px] flex flex-col justify-between items-center h-[431px] bg-[#FF5023] p-5 rounded-[20px]">
              <div className="bg-white w-[231px] h-[181px] rounded-[15px] mb-5 flex items-center justify-center">
                <Image src={dereil1} alt="" />
              </div>
              <div className="mb-4">
                <span className="text-[#FFFFFF] font-[400] text-[20px] ">
                  دریل چکشی رونیکس۲۲۱۱
                </span>
                <br />

                <span className="font-[100] text-[16px] text-[#FFFFFFB8]  font-Gilroy">
                  2211 Impact Drill Ronix
                </span>

                <div className="flex justify-between mt-2">
                  <span className="text-[#FFFFFF] font-[600]">قیمت:</span>
                  <span className="text-[#FFFFFF] font-[600]">۱/۵۸۰/۰۰۰</span>
                </div>
              </div>
              <span className="border-[1px] border-[#FFFFFF] w-[80%]"></span>
              <div className="mt-3">
                <button className="flex justify-center items-center bg-[#FFFFFF54] w-[181px] h-[39px] rounded-[7px] text-center">
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
                    />
                    <path
                      d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                      fill="white"
                    />
                  </svg>
                  <span className="font-[600] text-[15px] text-[#FFFFFF] mr-2">
                    افزودن به سبد خرید
                  </span>
                </button>
              </div>
            </div>

            {/* 2 / 3  */}
            <div className="w-[271px] flex flex-col justify-between items-center h-[431px] bg-[#FF5023] p-5 rounded-[20px]">
              <div className="bg-white w-[231px] h-[181px] rounded-[15px] mb-5 flex items-center justify-center">
                <Image src={dereil2} alt="" />
              </div>
              <div className="mb-4">
                <span className="text-[#FFFFFF] font-[400] text-[20px] ">
                  دریل چکشی رونیکس۲۲۱۱
                </span>
                <br />

                <span className="font-[100] text-[16px] text-[#FFFFFFB8]  font-Gilroy">
                  AD-12A NEW 2021
                </span>

                <div className="flex justify-between mt-2">
                  <span className="text-[#FFFFFF] font-[600]">قیمت:</span>
                  <span className="text-[#FFFFFF] font-[600]">۱/۵۸۰/۰۰۰</span>
                </div>
              </div>
              <span className="border-[1px] border-[#FFFFFF] w-[80%]"></span>
              <div className="mt-3">
                <button className="flex justify-center items-center bg-[#FFFFFF54] w-[181px] h-[39px] rounded-[7px] text-center">
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
                    />
                    <path
                      d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                      fill="white"
                    />
                  </svg>
                  <span className="font-[600] text-[15px] text-[#FFFFFF] mr-2">
                    افزودن به سبد خرید
                  </span>
                </button>
              </div>
            </div>

            {/* 3 / 3 */}
            <div className="w-[271px] flex flex-col justify-between items-center h-[431px] bg-[#FF5023] p-5 rounded-[20px]">
              <div className="bg-white w-[231px] h-[181px] rounded-[15px] mb-5 flex items-center justify-center">
                <Image src={dereil3} alt="" />
              </div>
              <div className="mb-4">
                <span className="text-[#FFFFFF] font-[400] text-[20px] ">
                  دریل گیربکسی AEG{" "}
                </span>
                <br />

                <span className="font-[100] text-[16px] text-[#FFFFFFB8]  font-Gilroy">
                  AEG Drill SB2-700
                </span>

                <div className="flex justify-between mt-2">
                  <span className="text-[#FFFFFF] font-[600]">قیمت:</span>
                  <span className="text-[#FFFFFF] font-[600]">۱/۵۸۰/۰۰۰</span>
                </div>
              </div>
              <span className="border-[1px] border-[#FFFFFF] w-[80%]"></span>
              <div className="mt-3">
                <button className="flex justify-center items-center bg-[#FFFFFF54] w-[181px] h-[39px] rounded-[7px] text-center">
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
                    />
                    <path
                      d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                      fill="white"
                    />
                  </svg>
                  <span className="font-[600] text-[15px] text-[#FFFFFF] mr-2">
                    افزودن به سبد خرید
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#5068E4]  w-[862px] h-[240px] flex    rounded-[20px] mt-4 mr-4   ">
            <div className="m-auto">
              <span className="   px-3 mb-4 text-[#5068E4] font-medium bg-[#ffff] text-2xl text-center rounded-[5px]">
                ٪۵۰ تخفیف
              </span>
              <div className="mt-5">
                <span className="text-[#ffff] text-3xl ">
                  انواع دریل های شارژی
                </span>
              </div>
              <div className=" flex justify-end">
                <span className="bg-[#ffff] p-1 border-3 mt-5 border-[#D8D8D84F] w-[26px] h-[24px] rounded-[3px] flex justify-center items-center">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.18893 0.391514C6.38724 0.589827 6.40527 0.900154 6.24302 1.11883L6.18893 1.18148L1.37063 6.00004L6.18893 10.8186C6.38724 11.0169 6.40527 11.3272 6.24302 11.5459L6.18893 11.6086C5.99062 11.8069 5.68029 11.8249 5.46161 11.6627L5.39896 11.6086L0.185419 6.39503C-0.0128942 6.19671 -0.0309229 5.88638 0.131333 5.66771L0.185419 5.60505L5.39896 0.391514C5.6171 0.173369 5.97079 0.173369 6.18893 0.391514Z"
                      fill="#5068E4"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <Image src={discountImg2} alt="" className="w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
