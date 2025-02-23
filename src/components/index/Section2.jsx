import React from "react";
import fonts from "@/utils/index";

const Section2 = () => {
  return (
    <>
      <div className="text-left">
        <p
          className={`${fonts.aeonik_regular.className} text-sm sm:text-base text-[#666666] pb-[11px]`}
        >
          Built in-house
        </p>

        <div className="relative inline-block lg:block">
          <p
            className={`${fonts.aeonik_regular.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#333333] pb-2`}
          >
            Product Highlights
          </p>
          <img
            src="/assets/index/product-highlights.svg"
            alt=""
            className="absolute -top-3 sm:-top-2  transform translate-x-40 sm:translate-x-52 md:translate-x-60 lg:left-80 lg:translate-x-0 w-16 md:w-18 lg:w-auto h-[59px] lg:h-auto"
          />
        </div>
<div className="flex justify-between">
  
<p
          className={`${fonts.aeonik_light.className} text-sm sm:text-lg md:text-xl lg:text-2xl text-[#333333]`}
        >
          Innovating for a Connected World
        </p>
        <p className={`${fonts.aeonik_regular.className} text-xs sm:text-base text-[#666666] `}>See all features</p>
</div>
      </div>

      {/* first frame */}
      <div className="pb-1 flex flex-col md:flex-row  gap-1 pt-8 ">
        <div className="w-full md:w-[60%] lg:w-[65%] xl:w-[70%] border border-[#999999] rounded-[15px] px-[26px] lg:px-[46px] xl:px-[56px] 2xl:px-[66px] relative ">
          <div className="flex items-end ">
            <img
              src="/assets/index/logo.svg"
              alt=""
              className="pt-[190px] sm:pt-[140px] pb-7"
            />
          </div>{" "}
          <p
            className={`${fonts.aeonik_regular.className} text-2xl sm:text-[28px] md:text-[20px] lg:text-[28px] 2xl:text-[32px] text-[#333333] leading-[120%]`}
          >
            ‘Couplr’ <br />
            Where connections begin...
          </p>
          <p
            className={`${fonts.aeonik_light.className} text-sm md:text-xs lg:text-sm xl:text-base text-[#060810] pt-5 sm:pe-[50px] xl:pe-[100px] 2xl:pe-[180px] pb-8 lg:pb-20 xl:pb-24 leading-[140%]`}
          >
            Couplr is a relationship-focused social platform for singles looking
            for marriage, dating, relationships, or friendships. It blends
            matchmaking with social media, making connections more interactive
            and engaging.
          </p>
          <img
            src="/assets/index/frame1.svg"
            alt=""
            className="absolute top-[8px] xl:top-[23px] right-[57px] sm:right-[20px] xl:right-[10px] w-w-[200px] md:w-[150px] lg:w-[200px] xl:w-auto h-[250px]  md:h-[200px] lg:h-[250px] 2xl:h-auto "
          />
        </div>
        {/* second frame */}

        <div className="w-full md:w-[45%] xl:w-[40%]  rounded-[15px] border border-[#999999] ps-7 md:ps-3 lg:ps-6 xl:ps-9  pe-[14px] lg:pe-[24px] xl:pe-[34px] my-4 md:my-0">
          <div className="flex justify-between ">
            <div className="flex items-end pb-3 sm:pb-6">
              <img
                src="/assets/index/messagebox.svg"
                alt=""
                className=" size-4 sm:size-auto md:size-4 lg:size-auto "
              />
            </div>
            <img
              src="/assets/index/frame2.svg"
              alt=""
              className="pt-[14px] lg:pt-[34px] pe-14 sm:pb-0 size-auto md:size-[150px] lg:size-auto"
            />
          </div>
          <p
            className={`${fonts.aeonik_regular.className} text-[24px] sm:text-[28px] md:text-[20px] lg:text-[28px] 2xl:text-[32px] text-[#333333]  leading-[120%] pb-4 lg:pb-6 pe-[50px] md:pe-0 `}
          >
            Seamless messaging,<br/> built for scale.
          </p>
          <p
            className={`${fonts.aeonik_light.className} text-sm md:text-xs lg:text-sm xl:text-base text-[#060810]   leading-[140%] pb-8 md:pb-0 sm:pe-[50px] md:pe-0`}
          >
            Our messenger offers real-time, secure, and scalable communication
            with media sharing, privacy controls, and a smooth UX, showcasing
            our expertise in fast and reliable messaging platforms.
          </p>
        </div>
      </div>
      {/* frame3 */}
      <div className="flex gap-x-1 pb-4  flex-col md:flex-row">
        <div className="w-full md:w-[45%] xl:w-[40%]  rounded-[15px] border border-[#999999]  px-[26px] lg:px-[56px] 2xl:px-[66px] mb-4 md:mb-0 ">
          <div className="flex justify-between lg:px-9 ">
            <div className="flex items-end  ">
              <img
                src="/assets/index/Vector.svg"
                alt=""
                className="pt-[111px]"
              />
            </div>
            <img src="/assets/index/frame3.svg" alt="" className="pt-[34px] pe-12 sm:pe-5" />
          </div>
          <p
            className={`${fonts.aeonik_regular.className} text-[24px] sm:text-[28px] md:text-[20px] lg:text-[28px] 2xl:text-[32px] text-[#333333] pt-3 sm:pt-12 pe-[66px] leading-[120%] pb-6 `}
          >
            Engage with rich media{" "}
          </p>
          <p
            className={`${fonts.aeonik_light.className} text-sm md:text-xs lg:text-sm xl:text-base text-[#060810]  sm:pe-[50px] md:pe-6 leading-[140%] pb-8 md:pb-0`}
          >
            The app lets you share images and video reels with advanced
            streaming integration and a user-friendly interface, offering an
            interactive experience like your favorite social platforms.
          </p>
        </div>
        <div className="w-full md:w-[60%] lg:w-[65%] xl:w-[70%]   border border-[#999999] rounded-[15px] px-[26px] lg:px-[56px] 2xl:px-[66px] relative">
          <img src="/assets/index/workflow.svg" alt="" className="pt-[180px] sm:pt-[140px]" />
          <p
            className={`${fonts.aeonik_regular.className} text-[24px] sm:text-[28px] md:text-[20px] lg:text-[28px] 2xl:text-[32px] text-[#333333] pt-6`}
          >
            Smart Feeds,
            <br /> Powered by AI & Data
          </p>
          <p
            className={`${fonts.aeonik_light.className} text-sm md:text-xs lg:text-sm xl:text-base text-[#060810] pt-5 sm:pe-[50px] xl:pe-[100px] leading-[140%] pb-8 md:pb-10 lg:pb-20`}
          >
            Our AI-driven feed algorithm delivers personalized content by
            analyzing large-scale user data. Leveraging advanced data analysis
            and machine learning, we ensure relevant and engaging results for
            every user, showcasing our ability to build intelligent, scalable
            solutions.
          </p>
          <img
            src="/assets/index/frame4.svg"
            alt=""
            className="absolute top-[49px] right-[4px] xl:right-[64px] w-[350px] sm:w-auto md:w-[400px] 2xl:w-auto h-[150px] sm:h-auto md:h-[200px] 2xl:h-auto pe-12"
          />
        </div>
      </div>
    </>
  );
};

export default Section2;
