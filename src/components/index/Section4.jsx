import React from "react";
import fonts from "@/utils/index";
const Section4 = () => {
  return (
    <div className="bg-[#87cfeb84] flex justify-center items-center flex-col  py-11 sm:py-10 xl:py-16">
      <p
        className={`${fonts.aeonik_regular.className} text-sm md:text-base text-[#666666] pb-3 sm:pb-2 `}
      >
        About us
      </p>
      <h1
        className={`${fonts.aeonik_regular.className} text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#333333] text-center leading-[120%] `}
      >
        A technology-first company <br /> driven by passion
      </h1>
      <img
        src="/assets/index/underline2.svg"
        alt=""
        className="w-[70px] md:w-[100px] lg:w-auto h-auto translate-x-14 md:translate-x-16 lg:translate-x-20 xl:translate-x-28 pb-3 sm:pb-5 xl:pb-9"
      />
      <p
        className={`${fonts.aeonik_light.className} text-sm lg:text-base text-[#333333] px-[17px] sm:px-[10px] md:px-[50px] lg:px-[100px] xl:px-[182px] 2xl:px-[282px] text-center`}
      >
        Founded in 2012, MCABEE has evolved into a powerhouse of digital product
        development, bringing ideas to life through cutting-edge technology.
      </p>
      <p
        className={`${fonts.aeonik_light.className} text-sm lg:text-base text-[#333333] py-3 px-4 sm:px-8 md:px-3 text-center`}
      >
        We create tech-driven solutions that empower individuals and businesses
        globally.
      </p>
      <p
        className={`${fonts.aeonik_light.className} text-sm lg:text-base text-[#333333]  px-[20px] md:px-[60px] lg:px-[100px] xl:px-[182px] 2xl:px-[282px] text-center pb-11 md:pb-16`}
      >
        With a strong foundation in SaaS products, we also offer enterprise
        solutions, app development, and cloud-based services to help brands
        grow.
      </p>
      <img
        src="/assets/index/technology.svg"
        alt=""
        className="hidden sm:block w-[400px] lg:w-[500px] xl:w-auto h-[100px] lg:h-[145px] xl:h-auto"
      />
      <img
        src="/assets/index/tech-mob.png"
        alt=""
        className="block sm:hidden"
      />
    </div>
  );
};

export default Section4;
