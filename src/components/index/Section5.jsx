import React from 'react'
import fonts from "@/utils/index";

const Section5 = () => {
  return (
    <div className='flex justify-center items-center flex-col py-[52px] lg:py-[62px]'>
        <p className={`${fonts.aeonik_regular.className} text-[#666666] text-base pb-4`}>
        Why us?
        </p >
        <p className={`${fonts.aeonik_regular.className} text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#333333] leading-[120%] `}>A tech partner that <br /> understands business</p>
        <img src="/assets/index/underline2.svg" alt="" className='-translate-x-16 lg:-translate-x-24 pb-5 w-[80px] lg:w-auto' />
        <p className={`${fonts.aeonik_light.className} text-sm lg:text-xl xl:text-2xl text-[#333333] leading-[120%]`}>Product Thinkers, Not Just Developers</p>
        <p className={`${fonts.aeonik_light.className} text-xs lg:text-base text-[#333333] leading-[140%]`}>We approach projects with a long-term business vision</p>
        <p className={`${fonts.aeonik_light.className} text-sm lg:text-xl xl:text-2xl text-[#333333] pt-[22px] leading-[120%]`}>Scalable & Future-Ready</p>
        <p className={`${fonts.aeonik_light.className} text-xs lg:text-base text-[#333333] leading-[140%] pb-6`}>Our solutions are designed for growth and performance</p>

        <p className={`${fonts.aeonik_light.className} text-sm lg:text-xl xl:text-2xl text-[#333333]`}>Seamless Integrations & Secure Infrastructure</p>
        <p className={`${fonts.aeonik_light.className} text-xs lg:text-base text-[#333333]`}>We ensure reliability and security in every build</p>
        <div className={`${fonts.aeonik_regular.className} w-[158px] lg:w-[192px] h-[46px] lg:h-[56px] border border-[#999999] rounded-[10px] flex justify-center items-center mt-[40px] lg:mt-[60px] text-xs lg:text-base `}>Start a Conversation</div>
    </div>
  )
}

export default Section5