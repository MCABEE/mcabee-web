import React from "react";
import fonts from "@/utils/index";

const Section6 = () => {
  return (
    <div>
      <p
        className={`${fonts.aeonik_regular.className} text-[#666666] text-xs md:text-[16px]`}
      >
        Stories
      </p>
      <h1
        className={`${fonts.aeonik_regular.className} text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[120%]`}
      >
        What do our <br />
        customers say?
      </h1>
      <img
        src="/assets/index/say.svg"
        alt=""
        className="-mt-10 lg:-mt-12 translate-x-[112px] sm:translate-x-[145px] md:translate-x-[170px] lg:translate-x-[230px] w-[70px] sm:w-[90px] lg:w-auto h-[49px] lg:h-auto"

      />
      <p className={`${fonts.aeonik_light.className} text-[#333333] text-sm sm:text-lg md:text-xl lg:text-2xl pb-2`}>
        Success Backed by Experience
      </p>
      <p
        className={`${fonts.aeonik_regular.className} text-sm md:text-base text-[#333333]`}
      >
        Trusted by startups and enterprises, we bring expertise that delivers
        real impact
      </p>

      <div className="flex gap-4 lg:gap-8 pt-16 flex-col md:flex-row">
        <div className="hidden md:block w-[50%] bg-[#87CEEB] rounded-[15px] relative">
      <img src="/assets/index/arrow.svg" alt="" className=" hidden md:block  w-[52px] lg:w-auto absolute -right-8 lg:-right-16 bottom-0"/>

        </div>
        <div className="block md:hidden w-full h-[232px] bg-[#87CEEB] rounded-[15px]"></div>
        <div className="w-full md:w-[50%] border border-[#BBBBBB] rounded-[15px] p-10 md:p-5 lg:p-10 xl:p-16">
          <img src="/assets/index/quotes.svg" alt="" className="pb-[22px] size-9 lg:size-auto" />
          <p
            className={`${fonts.aeonik_light.className} text-sm lg:text-base text-[#333333] pe-2 lg:pe-5 xl:pe-16`}
          >
            Mcabee helped create a community across our restaurants. It's great
            to collaborate with Mcabee; it's dynamic, and we brainstorm about
            features, possibilities, and the industry as a whole. I really like
            the mix of operational features with communication - that it becomes
            a social network.
          </p>
          <div className="flex justify-between ">
           <div className="flex flex-col">
           <p className={`${fonts.aeonik_regular.className} pt-8 xl:pt-12 text-[#666666] text-sm lg:text-base`}>
              Mariano Johns
            </p>
            <p className={`${fonts.aeonik_regular.className} text-[#666666] text-sm lg:text-base pb-3`}>
              Lutens Cafe, Sydney, Australia
            </p>
           </div>
            <div className="border bg-[#E2FEE6] border-[#999999] size-8 lg:size-12 rounded-[10px] mt-8 xl:mt-12"></div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 lg:gap-8 pt-4 md:pt-16 flex-col md:flex-row">

      <div className="w-full md:w-[50%] border border-[#BBBBBB] rounded-[15px] p-10 md:p-5 lg:p-10 xl:p-16">
          <img src="/assets/index/quotes.svg" alt="" className="pb-[22px] size-9 lg:size-auto" />
          <p
            className={`${fonts.aeonik_light.className} text-sm lg:text-base text-[#333333] pe-2 lg:pe-5 xl:pe-16`}
          >
            Mcabee helped create a community across our restaurants. It's great
            to collaborate with Mcabee; it's dynamic, and we brainstorm about
            features, possibilities, and the industry as a whole. I really like
            the mix of operational features with communication - that it becomes
            a social network.
          </p>
          <div className="flex justify-between ">
           <div className="flex flex-col">
           <p className={`${fonts.aeonik_regular.className} pt-8 xl:pt-12 text-[#666666] text-sm lg:text-base`}>
              Mariano Johns
            </p>
            <p className={`${fonts.aeonik_regular.className} text-[#666666] text-sm lg:text-base pb-3`}>
              Lutens Cafe, Sydney, Australia
            </p>
           </div>
            <div className="border bg-[#E2FEE6] border-[#999999] size-8 lg:size-12 rounded-[10px] mt-8 xl:mt-12"></div>
          </div>
        </div>
        <div className="w-full md:w-[50%] border border-[#BBBBBB] rounded-[15px] p-10 md:p-5 lg:p-10 xl:p-16">
          <img src="/assets/index/quotes.svg" alt="" className="pb-[22px] size-9 lg:size-auto" />
          <p
            className={`${fonts.aeonik_light.className} text-sm lg:text-base text-[#333333] pe-2 lg:pe-5 xl:pe-16`}
          >
            Mcabee helped create a community across our restaurants. It's great
            to collaborate with Mcabee; it's dynamic, and we brainstorm about
            features, possibilities, and the industry as a whole. I really like
            the mix of operational features with communication - that it becomes
            a social network.
          </p>
          <div className="flex justify-between ">
           <div className="flex flex-col">
           <p className={`${fonts.aeonik_regular.className} pt-8 xl:pt-12 text-[#666666] text-sm lg:text-base`}>
              Mariano Johns
            </p>
            <p className={`${fonts.aeonik_regular.className} text-[#666666] text-sm lg:text-base pb-3`}>
              Lutens Cafe, Sydney, Australia
            </p>
           </div>
            <div className="border bg-[#E2FEE6] border-[#999999] size-8 lg:size-12 rounded-[10px] mt-8 xl:mt-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
