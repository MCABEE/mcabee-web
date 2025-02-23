// import React from 'react'
// import fonts from "@/utils/index";

// const Section3 = () => {
//   return (
//     <div className='pb-10'>
//         <h1 className={`${fonts.aeonik_regular.className} text-sm lg:text-base text-[#666666] `}>Our Capabilities</h1>
//         <h1 className={`${fonts.aeonik_regular.className} text-[24px] lg:text-[38px] xl:text-[48px] text-[#333333]`}>Tech expertise that powers</h1>
//         <img src="/assets/index/underline1.svg" alt="" className='translate-x-[190px] lg:translate-x-[360px]  xl:translate-x-[460px]'/>
//         <h1 className={`${fonts.aeonik_regular.className} text-[24px] lg:text-[38px] xl:text-[48px] text-[#333333] leading-[120%]`}> digital transformation.</h1>
//         <h1 className={`${fonts.aeonik_light.className} text-sm lg:text-xl xl:text-2xl text-[#333333] leading-[120%] pt-2`}>We don’t just build products; we engineer solutions.</h1>
//        <div className='flex pt-[31px]'>
//        <div className='w-1/3 h-[360px] lg:h-[400px] xl:h-[480px] border border-[#999999] p-2 rounded-t-[20px] overflow-hidden'>
//        <p className='border border-[#999999] rounded-[15px] w-full text-lg lg:text-xl xl:text-2xl text-[#333333] text-center py-[2px] lg:py-[8px] xl:py-[14px] '>Web Apps</p>

//        <div className='border border-[#999999] rounded-t-[15px] w-full h-full flex flex-col  mt-2 pt-4 gap-y-2  ps-2 lg:ps-8 2xl:ps-12 '>
//         <span className={`${fonts.aeonik_regular.className} w-max border-[1px] border-[#C8C9CA] text-[#333333] text-[10px] lg:text-[12px] xl:text-[16px] p-[6px] px-2 lg:px-4 bg-[#F0F1F1] rounded-[10px]`}>Business Websites</span>
//         <span className={`${fonts.aeonik_regular.className} w-max border-[1px] border-[#C8C9CA] text-[#333333] text-[10px] lg:text-[12px] xl:text-[16px] p-[6px] px-2 lg:px-4 bg-[#E2FEE6] rounded-[10px]`}>E-commerce & Market place</span>
//         <span className={`${fonts.aeonik_regular.className} w-max border-[1px] border-[#C8C9CA] text-[#333333] text-[10px] lg:text-[12px] xl:text-[16px] p-[6px] px-2 lg:px-4 bg-[#F0F1F1] rounded-[10px]`}>SaaS & Enterprise Application</span>
//         <span className={`${fonts.aeonik_regular.className} w-max border-[1px] border-[#C8C9CA] text-[#333333] text-[10px] lg:text-[12px] xl:text-[16px] p-[6px] px-2 lg:px-4 bg-[#E2FEE6] rounded-[10px]`}>Social & Community Platforms</span>
//         <span className={`${fonts.aeonik_regular.className} w-max border-[1px] border-[#C8C9CA] text-[#333333] text-[10px] lg:text-[12px] xl:text-[16px] p-[6px] px-2 lg:px-4 bg-[#F0F1F1] rounded-[10px]`}>On - Demand Service Platforms</span>
//         <span className={`${fonts.aeonik_regular.className} w-max border-[1px] border-[#C8C9CA] text-[#333333] text-[10px] lg:text-[12px] xl:text-[16px] p-[6px] px-2 lg:px-4 bg-[#E2FEE6] rounded-[10px]`}>Media & Entertainment Platforms</span>
//         <span className={`${fonts.aeonik_regular.className} w-max border-[1px] border-[#C8C9CA] text-[#333333] text-[10px] lg:text-[12px] xl:text-[16px] p-[6px] px-2 lg:px-4 bg-[#F0F1F1] rounded-[10px]`}>EdTech & E-Learning</span>
//         <span className={`${fonts.aeonik_regular.className} w-max border-[1px] border-[#C8C9CA] text-[#333333] text-[10px] lg:text-[12px] xl:text-[16px] p-[6px] px-2 lg:px-4 bg-[#E2FEE6] rounded-[10px]`}>Fintech Applications</span>

//        </div>
//        </div>
//         <div className=' w-1/3 h-[480px]'>
//         <img src="/assets/index/image.png" alt="" className='h-[360px] lg:h-[400px] xl:h-full xl:w-full'/></div>
//         <div className=' h-[480px] w-1/3 phone-bg'>
//         <img src="/assets/index/phone_bg.png" alt="" className='h-[360px] lg:h-[400px] xl:h-full xl:w-full'/>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default Section3

import React from "react";
import fonts from "@/utils/index"

const capabilities = [
  { label: "Business Websites", bg: "bg-[#F0F1F1]" },
  { label: "E-commerce & Marketplace", bg: "bg-[#E2FEE6]" },
  { label: "SaaS & Enterprise Application", bg: "bg-[#F0F1F1]" },
  { label: "Social & Community Platforms", bg: "bg-[#E2FEE6]" },
  { label: "On-Demand Service Platforms", bg: "bg-[#F0F1F1]" },
  { label: "Media & Entertainment Platforms", bg: "bg-[#E2FEE6]" },
  { label: "EdTech & E-Learning", bg: "bg-[#F0F1F1]" },
  { label: "Fintech Applications", bg: "bg-[#E2FEE6]" },
];

const Section3 = () => {
  return (
    <div className="pb-10">
      <h1
        className={`${fonts.aeonik_regular.className} text-sm lg:text-base text-[#666666] pt-4`}
      >
        Our Capabilities
      </h1>
      <h1
        className={`${fonts.aeonik_regular.className} text-[24px] lg:text-[38px] xl:text-[48px] text-[#333333]`}
      >
        Tech expertise that powers
      </h1>
      <img
        src="/assets/index/underline1.svg"
        alt=""
        className="translate-x-[190px] lg:translate-x-[360px] xl:translate-x-[460px]"
      />
      <h1
        className={`${fonts.aeonik_regular.className} text-[24px] lg:text-[38px] xl:text-[48px] text-[#333333] leading-[120%]`}
      >
        digital transformation.
      </h1>
      <h1
        className={`${fonts.aeonik_light.className} text-sm lg:text-xl xl:text-2xl text-[#333333] leading-[120%] pt-2`}
      >
        We don’t just build products; we engineer solutions.
      </h1>

      <div className="hidden md:flex pt-[31px]">
        {/* Web Apps Section */}
        <div className="w-1/3 h-[360px] lg:h-[400px] xl:h-[480px] border border-[#999999] p-2 rounded-t-[20px] overflow-hidden">
          <p
            className={`${fonts.aeonik_regular.className} border border-[#999999] rounded-[15px] w-full text-lg lg:text-xl xl:text-2xl text-[#333333] text-center py-[2px] lg:py-[8px] xl:py-[14px]`}
          >
            Web Apps
          </p>

          <div className="border border-[#999999] rounded-t-[15px] w-full h-full flex flex-col mt-2 pt-4 gap-y-2 ps-2 lg:ps-8 2xl:ps-12">
            {capabilities.map((capability, index) => (
              <span
                key={index}
                className={`${fonts.aeonik_regular.className} w-max border-[1px] border-[#C8C9CA] text-[#333333] text-[10px] lg:text-[12px] xl:text-[16px] p-[6px] px-2 lg:px-4 ${capability.bg} rounded-[10px]`}
              >
                {capability.label}
              </span>
            ))}
          </div>
        </div>

        {/* Center Image */}
        <div className="w-1/3 h-[280px] lg:h-[480px]">
          <img
            src="/assets/index/image.png"
            alt=""
            className="h-[360px] lg:h-[400px] xl:h-full xl:w-full"
          />
        </div>

        {/* Phone Image */}
        <div className="h-[280px] lg:h-[480px] w-1/3">
          <img
            src="/assets/index/phone.png"
            alt=""
            className="h-[360px] lg:h-[400px] xl:h-full xl:w-full"
          />
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center pt-[31px] w-full">
        <div className="w-full flex overflow-hidden overflow-x-scroll ">
          <img src="/assets/index/web-app.png" alt="" />

          <img src="/assets/index/image.png" alt="" />

          <img src="/assets/index/phone-mob.svg" alt="" />
        </div>
      </div>
      <p className="w-[144px] lg:w-[184px] h-[40px] lg:h-[56] border border-[#999999] rounded-[10] text-sm lg:text-base text-black flex justify-center items-center  mt-[34px] lg:mt-0 xl:mt-[64px]">
        Let’s build together
      </p>
    </div>
  );
};

export default Section3;
