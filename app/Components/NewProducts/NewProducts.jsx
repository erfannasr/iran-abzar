import Image from "next/image";
import React from "react";
import image1 from "../../../public/images/NewProducts/motorBargh.png";
import image2 from "../../../public/images/NewProducts/motorBarghAstara.png";
import image3 from "../../../public/images/NewProducts/dereil.png";
import image4 from "../../../public/images/NewProducts/miniFerez.png";

function NewProducts() {
  return (
    <div className="mt-[50px]">
      <div className="flex justify-between">
        <div className="">
          <div className=" text-red-500  ">
            <span className="">جدیدترین محصولات</span>
          </div>
        </div>
        <div className="flex">
          <span className="text-[#FF5023]">مشاهده همه</span>
          <span className="mr-1">
            <svg
              width="25"
              height="21"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 10.4114C25 10.981 24.5768 11.4516 24.0277 11.5261L23.875 11.5364L4.099 11.5355L11.2435 18.6508C11.6838 19.0892 11.6853 19.8015 11.2469 20.2418C10.8484 20.6421 10.2235 20.6797 9.78233 20.3539L9.65592 20.2452L0.580921 11.2092C0.522884 11.1514 0.472475 11.0889 0.429691 11.0228C0.417608 11.003 0.405308 10.9826 0.393646 10.9619C0.382919 10.9441 0.373228 10.9256 0.364082 10.907C0.351383 10.8798 0.338974 10.8517 0.327709 10.8231C0.318554 10.801 0.310911 10.7795 0.30394 10.7579C0.29565 10.7311 0.287598 10.7025 0.28067 10.6734C0.27552 10.6531 0.271442 10.6336 0.267883 10.614C0.262882 10.5849 0.258623 10.5547 0.255585 10.5242C0.252962 10.5009 0.251383 10.4779 0.250509 10.4548C0.250284 10.4408 0.25 10.4261 0.25 10.4114L0.250565 10.3678C0.251427 10.3458 0.252934 10.3237 0.255089 10.3017L0.25 10.4114C0.25 10.3404 0.256577 10.271 0.269152 10.2036C0.272068 10.1875 0.275543 10.171 0.279392 10.1546C0.287382 10.1207 0.296618 10.0881 0.307251 10.0561C0.312471 10.0402 0.318552 10.0233 0.32505 10.0064C0.338198 9.97257 0.352486 9.9403 0.368206 9.90887C0.375509 9.89409 0.383688 9.87862 0.392254 9.8633C0.406311 9.83831 0.420795 9.81457 0.43611 9.79142C0.446915 9.77504 0.458879 9.75799 0.471375 9.74121L0.48111 9.72824C0.511419 9.68865 0.5443 9.65112 0.579504 9.61592L0.580854 9.61487L9.65585 0.577371C10.0961 0.138942 10.8084 0.140417 11.2468 0.580665C11.6454 0.980891 11.6804 1.60596 11.3527 2.0457L11.2435 2.17165L4.102 9.28551L23.875 9.28641C24.4963 9.28641 25 9.79009 25 10.4114Z"
                fill="#FF5023"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-7">
        {/* card #1  */}

        <div className="bg-[#F9F9F9] rounded-[20px] w-[271px] h-[431px] p-4">
          <div className="bg-[#E1E1E1] h-[181px] rounded-[15px] flex flex-col justify-center p-2 items-center">
            <Image src={image1} alt="" />
          </div>
          <div className="mt-5 ">
            <div className="">
            <span className="text-[20px] text-[#212121] font-[500] tracking-[1px]">موتور برق رونیکس 4790</span>

            </div>
          

            <span className="text-[#9C9C9C] font-[300] tracking-[1px]">ronix 2211 impact drill</span>
            <div>
              <span className="text-[20px] text-[#212121] font-[500]">قیمت:</span>
              <span className="text-[20px] text-[#212121] font-[500]">۱۶/۶۵۰/۰۰۰</span>
            </div>
          </div>
          <div>btn</div>
        </div>

        {/* card #2 */}
        <div className="bg-[#F9F9F9] rounded-[20px] w-[271px] h-[431px] p-4">
          <div className="bg-[#E1E1E1] h-[181px] rounded-[15px] flex flex-col justify-center p-2 items-center">
            <Image src={image2} alt="" />
          </div>
          <div className="mt-5 text-center">
            <span className="text-[20px] text-[#212121] font-[500] tracking-[1px]">موتور برق آسترا AST3700</span>
            <br />
            <span className="text-[#9C9C9C] font-[300] tracking-[1px]">ronix 2211 impact drill</span>
            <div>
              <span className="text-[20px] text-[#212121] font-[500]">قیمت:</span>
              <span className="text-[20px] text-[#212121] font-[500]">۶/۴۸۰/۰۰۰</span>
            </div>
          </div>
          <div>btn</div>
        </div>

        {/* card #3  */}

        <div className="bg-[#F9F9F9] rounded-[20px] w-[271px] h-[431px] p-4">
          <div className="bg-[#E1E1E1] h-[181px] rounded-[15px] flex flex-col justify-center p-2 items-center">
            <Image src={image3} alt="" />
          </div>
          <div className="mt-5 text-center">
            <span className="text-[20px] text-[#212121] font-[500] tracking-[1px]">دریل چکشی رونیکس۲۲۱۱</span>
            <br />

            <span className="text-[#9C9C9C] font-[300] tracking-[1px]">ronix 2211 impact drill</span>
            <div>
              <span className="text-[20px] text-[#212121] font-[500]">قیمت:</span>
              <span className="text-[20px] text-[#212121] font-[500]">۱/۵۸۰/۰۰۰</span>
            </div>
          </div>
          <div>btn</div>
        </div>
        {/* card #4  */}

        <div className="bg-[#F9F9F9] rounded-[20px] w-[271px] h-[431px] p-4">
          <div className="bg-[#E1E1E1] h-[181px] rounded-[15px] flex flex-col justify-center p-2 items-center ">
            <Image src={image4} alt="" />
          </div>
          <div className="mt-5 text-center">
            <span className="text-[20px] text-[#212121] font-[500] tracking-[1px]">مینی فرز ادون مدل AG115</span>
            <br />

            <span className="text-[#9C9C9C] font-[300] tracking-[1px] ">ronix 2211 impact drill</span>
            <div>
              <span className="text-[20px] text-[#212121] font-[500]">قیمت:</span>
              <span className="text-[20px] text-[#212121] font-[500]">۸۲۶/۰۰۰</span>
            </div>
          </div>
          <div>btn</div>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
