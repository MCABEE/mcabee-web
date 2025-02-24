import React from "react";
import localFont from 'next/font/local'

const aeonik_regular = localFont({ src: './AeonikRegular.otf' });
const aeonik_light = localFont({ src: './AeonikLight.otf' });

function Section7() {
  return (
    <div className="flex justify-between">
      <img
        src="/assets/index/partner-left.svg"
        alt=""
        className="hidden md:block w-[150px] lg:w-[200px] xl:w-auto h-[400px] lg:h-[452px] xl:h-auto"
      />
      <div className="flex flex-col justify-center items-center">
        <p
          className={`${aeonik_regular.className} text-2xl md:text-[20px] lg:text-[26px] xl:text-[32px] text-[#333333] text-center pt-9 md:pt-0`}
        >
          Let’s Build Something <br /> Great Together
        </p>
        <img
          src="/assets/index/border.svg"
          alt=""
          className="mt-[-34px] lg:mt-[-40px] xl:mt-[-40px] translate-x-1 w-[184px] lg:w-[200px] xl:w-auto  h-[43px] md:h-auto"
        />

        <p
          className={`${aeonik_regular.className} text-center text-sm lg:text-base text-[#333333] px-10 sm:px-20 xl:px-28 leading-[120%] pb-10 lg:pb-16 pt-2`}
        >
          Whether it’s launching a new product or scaling an existing one, we’re
          here to turn ideas into reality.
        </p>

        <div className="flex justify-center w-full px-2 sm:px-20">
          <img
            src="/assets/index/partner-mob-left.svg"
            alt=""
            className="block md:hidden w-[40px] h-[88px] flex-1"
          />
          <p
            className={`${aeonik_regular.className} w-[144px] lg:w-[162px] h-[40px] lg:h-[56px] rounded-[10px] text-sm lg:text-base text-[#000000] flex justify-center items-center border border-[#999999]`}
          >
            Partner with us
          </p>
          <img
            src="/assets/index/partner-mob-right.svg"
            alt=""
            className="block md:hidden w-[40px] h-[88px] flex-1"
          />
        </div>

        {/* <div className="flex justify-between w-full px-2 sm:px-20 ">
          <img
            src="/assets/index/partner-mob-left.svg"
            alt=""
            className="block md:hidden w-[40px] h-[88px]"
          />
          <p
            className={`${fonts.aeonik_regular.className} w-[144px] lg:w-[162px] h-[40px] lg:h-[56px] rounded-[10px] text-sm lg:text-base text-[#000000] flex justify-center items-center border border-[#999999]`}
          >
            Partner with us
          </p>
          <img
            src="/assets/index/partner-mob-right.svg"
            alt=""
            className="block md:hidden w-[40px] h-[88px]"
          />
        </div> */}
      </div>

      <img
        src="/assets/index/partner-right.png"
        alt=""
        className="hidden md:block w-[150px] lg:w-[200px] xl:w-auto h-[400px] lg:h-[452px] xl:h-auto"
      />
    </div>
  );
}

export default Section7;
