

import React from "react";
import fonts from "@/utils/index";

const Section1 = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row pt-[10px] md:pt-[20px] lg:pt-[95px]">
      <div className="w-full lg:w-1/2 flex justify-center flex-col text-center lg:text-left">
        <h1
          className={`${fonts.aeonik_regular.className} text-[32px] sm:text-[36px] md:text-[46px] xl:text-[56px] 2xl:text-[64px] text-[#333333] leading-[120%]`}
        >
          Vision. Build. Lead
          <img
            src="/assets/index/underline.svg"
            alt=""
            className="mx-auto lg:mx-0 translate-x-0 lg:translate-x-24 xl:translate-x-36"
          />
        </h1>
        <p
          className={`${fonts.aeonik_light.className} text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-[#333333] pt-2 sm:pt-6 px-8 lg:px-0 leading-[140%]`}
        >
          From cutting-edge SaaS platforms to robust enterprise solutions, we
          design, scale, and elevate technology for tomorrow.
        </p>
        <div className="flex flex-row items-center justify-center lg:justify-start pt-9 gap-4">
          <div
            className={`${fonts.aeonik_regular.className} w-[120px] sm:w-[140px] xl:w-[150px] 2xl:w-[160px] h-[40px] xl:h-[46px] 2xl:h-[56px] border border-[#999999] rounded-[10px] flex justify-center items-center text-sm 2xl:text-base text-[#333333] cursor-pointer hover:bg-[#f5f5f5]`}
          >
            Our Products
          </div>
          <div
            className={`${fonts.aeonik_regular.className} w-[120px] sm:w-[140px] xl:w-[150px] 2xl:w-[160px] h-[40px] xl:h-[46px] 2xl:h-[56px] border border-[#999999] rounded-[10px] flex justify-center items-center text-sm 2xl:text-base text-[#333333] cursor-pointer hover:bg-[#f5f5f5]`}
          >
            Contact Sales
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center pt-10 lg:pt-0 pb-4 lg:pb-0 ">
        <img
          src="/assets/index/banner.svg"
          alt="banner"
          className="w-[320px] md:w-[400px] lg:w-[500px] xl:w-[556px] h-auto ml-0 lg:ml-auto"
        />
      </div>
    </div>
  );
};

export default Section1;
