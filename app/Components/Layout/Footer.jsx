import Image from "next/image";
import React from "react";
import zarinPal from "../../../public/images/Footer/ZarinPal.png";
import Enamad from "../../../public/images/Footer/Enamad.png";
import Aparat from "../../../public/images/Footer/Aparat.png";
import Telegram from "../../../public/images/Footer/Telegram.png";
import Insta from "../../../public/images/Footer/Insta.png";
import WhatsApp from "../../../public/images/Footer/WhatsApp.png";
import Twiter from "../../../public/images/Footer/Twiter.png";

function Footer() {
  return (
    <>
      <div className="bg-[#FF5023]   mt-20 ">
        <div className="flex justify-evenly h-[85px] max-w-[1166px] m-auto items-center">
          {/* text #1  */}
          <div className="flex pr-4  pl-5 items-center">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4547 17.1705C21.8334 17.1705 21.3297 17.6742 21.3297 18.2955C21.3297 18.9168 21.8334 19.4205 22.4547 19.4205H26.5456C27.1669 19.4205 27.6706 18.9168 27.6706 18.2955C27.6706 17.6742 27.1669 17.1705 26.5456 17.1705H22.4547Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.4714 4.06621C28.5875 4.73215 28.6156 5.52353 28.6234 6.42896C28.7535 6.49684 28.8812 6.56909 29.0067 6.64599C30.1672 7.35717 31.143 8.33292 31.8542 9.49346C32.6372 10.7712 32.9219 12.2521 33.0396 14.1344C33.1252 15.5037 33.1251 17.1692 33.1251 19.2148V19.2572C33.1251 20.4302 33.1251 21.4751 33.1097 22.4051C33.0617 25.2969 32.8744 27.3416 31.8542 29.0066C31.143 30.1671 30.1672 31.1428 29.0067 31.854C27.8985 32.5332 26.6413 32.8358 25.106 32.9818C23.5997 33.125 21.7143 33.125 19.3093 33.125H14.6911C12.2861 33.125 10.4006 33.125 8.8943 32.9818C7.35898 32.8358 6.10183 32.5332 4.99359 31.854C3.83305 31.1428 2.8573 30.1671 2.14612 29.0066C1.467 27.8983 1.16432 26.6412 1.01834 25.1058C0.875126 23.5996 0.875133 21.7141 0.875143 19.309L0.875263 18.5205C0.855497 17.7792 0.861567 16.9505 0.868112 16.057C0.871562 15.5861 0.875143 15.0971 0.875143 14.5935L0.875143 14.5284C0.875131 11.9601 0.875122 9.94432 1.04138 8.34452C1.21095 6.71282 1.56357 5.38193 2.35883 4.24079C2.83931 3.55133 3.42223 2.94309 4.08721 2.43941C5.19468 1.60056 6.49064 1.22765 8.07106 1.04914C9.61296 0.874979 11.5527 0.874991 14.0098 0.875007L22.212 0.875002C23.4098 0.87495 24.4251 0.874906 25.2345 0.988357C26.099 1.10953 26.8924 1.3791 27.5272 2.04092C28.0782 2.61539 28.3393 3.30842 28.4714 4.06621ZM22.1328 3.12501C23.4314 3.12501 24.2873 3.1276 24.9221 3.21658C25.5196 3.30032 25.752 3.44059 25.9034 3.59844C26.0435 3.74443 26.1698 3.96483 26.2548 4.45259C26.3116 4.77873 26.3427 5.17735 26.3591 5.68729C25.74 5.57397 25.0718 5.50414 24.344 5.45923C22.9789 5.375 21.3201 5.375 19.2849 5.37501H14.6911C12.286 5.375 10.4006 5.37499 8.8943 5.51821C7.35898 5.66419 6.10183 5.96686 4.99359 6.64599C4.39617 7.01209 3.84772 7.4483 3.35912 7.94374C3.52376 6.85274 3.79338 6.11757 4.20479 5.52723C4.55216 5.02878 4.97128 4.59236 5.44574 4.23298C6.10233 3.73564 6.9466 3.44046 8.3236 3.28492C9.72453 3.12668 11.5372 3.12501 14.0798 3.12501H22.1328ZM6.16922 8.56443C6.8645 8.13835 7.73665 7.88843 9.10728 7.75811C10.4946 7.62619 12.2733 7.62501 14.7501 7.62501H19.2501C21.3271 7.62501 22.9175 7.62549 24.2054 7.70496C25.4921 7.78435 26.3916 7.93913 27.1007 8.20843C27.3663 8.30929 27.6067 8.42691 27.8311 8.56443C28.6889 9.09008 29.4101 9.81129 29.9357 10.6691C30.3057 11.2727 30.5413 12.0065 30.6826 13.0796H22.4547C19.574 13.0796 17.2388 15.4148 17.2388 18.2955C17.2388 21.1762 19.574 23.5114 22.4547 23.5114H30.8292C30.7425 25.7019 30.5034 26.9045 29.9357 27.8309C29.4101 28.6887 28.6889 29.4099 27.8311 29.9356C27.1358 30.3617 26.2636 30.6116 24.893 30.7419C23.5056 30.8738 21.727 30.875 19.2501 30.875H14.7501C12.2733 30.875 10.4946 30.8738 9.10728 30.7419C7.73665 30.6116 6.8645 30.3617 6.16921 29.9356C5.31142 29.4099 4.59022 28.6887 4.06456 27.8309C3.63849 27.1356 3.38856 26.2635 3.25824 24.8929C3.12633 23.5055 3.12514 21.7269 3.12514 19.25C3.12514 16.7732 3.12633 14.9945 3.25824 13.6071C3.38856 12.2365 3.63849 11.3644 4.06456 10.6691C4.59022 9.81129 5.31142 9.09008 6.16922 8.56443ZM19.4888 18.2955C19.4888 16.6575 20.8167 15.3296 22.4547 15.3296H30.8415C30.8749 16.4155 30.8751 17.6966 30.8751 19.25C30.8751 19.9759 30.8751 20.6435 30.8716 21.2614H22.4547C20.8167 21.2614 19.4888 19.9335 19.4888 18.2955Z"
                fill="white"
              />
            </svg>

            <span className="text-[#FFFFFF] mr-2 text-[17px] font-[500]">
              امکان پرداخت در محل
            </span>
          </div>
          <span className="border-1 border-[#EBEBEB] h-[70%]"></span>
          {/* text #2  */}
          <div className="flex items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6498 4.5835C23.0845 4.5835 23.7196 4.58475 24.2432 4.63164C30.0654 5.15291 34.6796 9.76711 35.2009 15.5893C35.2478 16.113 35.249 16.748 35.249 18.1827V19.8327C35.249 20.523 35.8087 21.0827 36.499 21.0827C37.1894 21.0827 37.749 20.523 37.749 19.8327V18.0987C37.749 16.7705 37.7491 16.0157 37.6909 15.3664C37.0618 8.33958 31.4929 2.77072 24.4662 2.1416C23.8168 2.08346 23.062 2.08347 21.7337 2.0835H19.9999C19.3095 2.0835 18.7499 2.64314 18.7499 3.3335C18.7499 4.02386 19.3095 4.5835 19.9999 4.5835L21.6498 4.5835Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8527 6.709C10.0992 5.09777 7.40399 5.09777 5.65051 6.709C5.5787 6.77498 5.50205 6.85165 5.40251 6.95121L3.90667 8.44705C2.40148 9.95224 1.76961 12.1221 2.23138 14.2001C4.85133 25.9898 14.0589 35.1974 25.8487 37.8173C27.9266 38.2791 30.0965 37.6473 31.6017 36.1421L33.0974 34.6464C33.197 34.5468 33.2737 34.4701 33.3397 34.3982C34.951 32.6447 34.951 29.9495 33.3397 28.196C33.2737 28.1242 33.197 28.0475 33.0974 27.9478L30.6486 25.4991C28.9484 23.7989 26.3809 23.3127 24.1768 24.2734C22.9149 24.8235 21.445 24.5451 20.4717 23.5717L16.477 19.5771C15.5037 18.6037 15.2253 17.1338 15.7753 15.872C16.7361 13.6679 16.2498 11.1003 14.5497 9.40014L12.1008 6.95125C12.0012 6.85167 11.9245 6.77499 11.8527 6.709ZM7.34202 8.54986C8.13906 7.81749 9.36418 7.81749 10.1612 8.54986C10.1887 8.57514 10.2248 8.6108 10.3516 8.73758L12.7819 11.1679C13.7552 12.1412 14.0336 13.6112 13.4836 14.873C12.5228 17.0771 13.0091 19.6447 14.7092 21.3448L18.7039 25.3395C20.4041 27.0397 22.9716 27.5259 25.1757 26.5652C26.4376 26.0151 27.9075 26.2935 28.8808 27.2668L31.3112 29.6972C31.4379 29.8239 31.4736 29.86 31.4989 29.8875C32.2312 30.6846 32.2312 31.9097 31.4989 32.7067C31.4736 32.7342 31.4379 32.7703 31.3111 32.8971L29.8339 34.3743C28.9331 35.2751 27.6346 35.6532 26.391 35.3769C15.5488 32.9675 7.08123 24.5 4.67185 13.6577C4.3955 12.4142 4.77364 11.1156 5.67443 10.2148L7.15167 8.73758C7.27845 8.61081 7.31451 8.57514 7.34202 8.54986Z"
                fill="white"
              />
              <path
                d="M21.1782 7.97605C20.4878 7.97605 19.9282 8.5357 19.9282 9.22605C19.9282 9.91641 20.4878 10.4761 21.1782 10.4761H22.121C22.1392 10.4761 22.156 10.4761 22.1716 10.4761C22.2811 10.4761 22.332 10.4762 22.3744 10.4768C26.207 10.5317 29.3007 13.6253 29.3555 17.4579C29.3562 17.5064 29.3563 17.5659 29.3563 17.7113V18.6541C29.3563 19.3445 29.9159 19.9041 30.6063 19.9041C31.2966 19.9041 31.8563 19.3445 31.8563 18.6541V17.6992C31.8563 17.683 31.8563 17.6676 31.8563 17.653C31.8563 17.5502 31.8561 17.4823 31.8553 17.4221C31.781 12.2368 27.5955 8.0513 22.4102 7.97704C22.3414 7.97605 22.2626 7.97605 22.133 7.97605H21.1782Z"
                fill="white"
              />
            </svg>

            <span className="text-[#FFFFFF] mr-2 text-[17px] font-[500]">
              پشتیبانی ۲۴ ساعته
            </span>
          </div>
          <span className="border-1 border-[#EBEBEB] h-[70%]"></span>
          {/* text #3  */}
          <div className="flex items-center">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7502 3.5625C23.0943 3.5625 22.5627 4.09416 22.5627 4.75C22.5627 5.40584 23.0943 5.9375 23.7502 5.9375H25.3335C29.0499 5.9375 32.0627 8.95025 32.0627 12.6667V14.25C32.0627 14.9058 32.5943 15.4375 33.2502 15.4375C33.906 15.4375 34.4377 14.9058 34.4377 14.25V12.6667C34.4377 7.63858 30.3616 3.5625 25.3335 3.5625H23.7502Z"
                fill="white"
              />
              <path
                d="M12.6668 3.5625C7.63874 3.5625 3.56266 7.63858 3.56266 12.6667V14.25C3.56266 14.9058 4.09432 15.4375 4.75016 15.4375C5.406 15.4375 5.93766 14.9058 5.93766 14.25V12.6667C5.93766 8.95025 8.95041 5.9375 12.6668 5.9375H14.2502C14.906 5.9375 15.4377 5.40584 15.4377 4.75C15.4377 4.09416 14.906 3.5625 14.2502 3.5625H12.6668Z"
                fill="white"
              />
              <path
                d="M1.5835 20.9792C0.927658 20.9792 0.395996 21.5108 0.395996 22.1667C0.395996 22.8225 0.927658 23.3542 1.5835 23.3542H3.63023C3.58647 23.478 3.56266 23.6112 3.56266 23.75V25.3333C3.56266 30.3614 7.63874 34.4375 12.6668 34.4375H14.2502C14.906 34.4375 15.4377 33.9058 15.4377 33.25C15.4377 32.5942 14.906 32.0625 14.2502 32.0625H12.6668C8.95041 32.0625 5.93766 29.0497 5.93766 25.3333V23.75C5.93766 23.6112 5.91385 23.478 5.87009 23.3542H32.1302C32.0865 23.478 32.0627 23.6112 32.0627 23.75V25.3333C32.0627 29.0497 29.0499 32.0625 25.3335 32.0625H23.7502C23.0943 32.0625 22.5627 32.5942 22.5627 33.25C22.5627 33.9058 23.0943 34.4375 23.7502 34.4375H25.3335C30.3616 34.4375 34.4377 30.3614 34.4377 25.3333V23.75C34.4377 23.6112 34.4139 23.478 34.3701 23.3542H36.4168C37.0727 23.3542 37.6043 22.8225 37.6043 22.1667C37.6043 21.5108 37.0727 20.9792 36.4168 20.9792H1.5835Z"
                fill="white"
              />
            </svg>

            <span className="text-[#FFFFFF] text-[17px] font-[500]">
              ضمانت اصلالت کالا
            </span>
          </div>
          <span className="border-1 border-[#EBEBEB] h-[70%]"></span>
          {/* text #4  */}
          <div className="flex items-center">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.3205 12.8877C40.39 7.31112 35.4942 2.41528 29.9176 3.48478L13.9068 6.5554C10.4263 7.2229 7.64286 9.85744 6.75854 13.2807C4.99295 20.1155 11.3315 26.362 18.1374 24.3606C18.3254 24.3053 18.5 24.4799 18.4447 24.6679C16.4433 31.4738 22.6898 37.8124 29.5246 36.0468C32.9479 35.1625 35.5824 32.379 36.2499 28.8985L39.3205 12.8877ZM30.412 6.06279C34.1664 5.34276 37.4625 8.63886 36.7425 12.3932L33.6719 28.4041C33.197 30.8802 31.3171 32.8726 28.868 33.5052C23.9731 34.7697 19.5466 30.2252 20.9631 25.4084C21.6045 23.2273 19.578 21.2008 17.3968 21.8422C12.5801 23.2587 8.03562 18.8322 9.3001 13.9373C9.93274 11.4883 11.9252 9.60829 14.4012 9.13342L30.412 6.06279Z"
                fill="white"
              />
              <path
                d="M8.65295 28.5839C9.16551 28.0714 9.16551 27.2403 8.65295 26.7278C8.14039 26.2152 7.30936 26.2152 6.7968 26.7278L4.32192 29.2026C3.80936 29.7152 3.80936 30.5462 4.32192 31.0588C4.83449 31.5714 5.66551 31.5714 6.17808 31.0588L8.65295 28.5839Z"
                fill="white"
              />
              <path
                d="M14.8401 29.8214C15.3527 29.3088 15.3527 28.4778 14.8401 27.9652C14.3276 27.4526 13.4965 27.4526 12.984 27.9652L10.5091 30.4401C9.99654 30.9526 9.99654 31.7837 10.5091 32.2962C11.0217 32.8088 11.8527 32.8088 12.3653 32.2962L14.8401 29.8214Z"
                fill="white"
              />
              <path
                d="M16.0776 36.0085C16.5901 35.496 16.5901 34.665 16.0776 34.1524C15.565 33.6398 14.734 33.6398 14.2214 34.1524L11.7465 36.6273C11.234 37.1398 11.234 37.9709 11.7465 38.4834C12.2591 38.996 13.0901 38.996 13.6027 38.4834L16.0776 36.0085Z"
                fill="white"
              />
            </svg>

            <span className="text-[#FFFFFF] mr-2 pl-4 text-[17px] font-[500]">
              ارسال سریع
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F0F0]  pb-10   w-full   ">
        <div className="max-w-[1160px] Grid  p-10 justify-around m-auto">
          <div className="flex flex-col leading-10 ">
            <h1 className="text-[#212121] text-[25px] font-[500]">
              راهنمای مشتریان
            </h1>
            <span className="text-[#818181] font-[300] text-[18px]">
              پاسخ به پرسش های متداول
            </span>
            <span className="text-[#818181] font-[300] text-[18px]">
              روش های ارسال کالا
            </span>
            <span className="text-[#818181] font-[300] text-[18px]">
              روش های پرداخت
            </span>
            <span className="text-[#818181] font-[300] text-[18px]">
              قوانین و مقررات
            </span>
          </div>

          <div className="flex flex-col leading-10 ">
            <h1 className="text-[#212121] text-[25px] font-[500]">
              راهنمای مشتریان
            </h1>
            <span className="text-[#818181] font-[300] text-[18px]">
              پاسخ به پرسش های متداول
            </span>
            <span className="text-[#818181] font-[300] text-[18px]">
              روش های ارسال کالا
            </span>
            <span className="text-[#818181] font-[300] text-[18px]">
              روش های پرداخت
            </span>
            <span className="text-[#818181] font-[300] text-[18px]">
              قوانین و مقررات
            </span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Image src={zarinPal} alt="" />
              <Image src={Enamad} alt="" className="mr-5" />
            </div>
            <div className="flex items-center justify-between mt-4">
              <Image src={Aparat} alt="" className="ml-2" />
              <Image src={Telegram} alt="" className="ml-2" />
              <Image src={Insta} alt="" className="ml-2" />
              <Image src={Twiter} alt="" className="ml-2" />
              <Image src={WhatsApp} alt="" className="mr-2" />
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-4">
          <span className="text-[#FF5023] font-[300] text-[20px] ">کلیه حقوق مادی و معنوی دوره ها متعلق به این وبسایت می باشد.</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
