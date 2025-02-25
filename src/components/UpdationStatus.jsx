import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

const aeonik_regular = localFont({ src: "./AeonikRegular.otf" });
const aeonik_light = localFont({ src: "./AeonikLight.otf" });
const UpdationStatus = () => {
  return (
    <div className="w-screen h-screen flex 2xl:justify-center items-center flex-col pt-6 xl:pt-0">
      <div className="bg-[#0C0C0C] w-[328px] sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1144px] h-[420px] lg:h-[512px] rounded-[30px] relative">
        <img
          src="/man-running.svg"
          alt=""
          className="absolute top-[47px] right-[45px] sm:right-[145px] md:right-[245px] lg:right-[365px] xl:right-[465px] w-[248px] md:w-auto h-[228px] md:h-auto "
        />

        <h1
          className={`${aeonik_regular.className} text-[24px] md:text-[50px] xl:text-[64px] text-center text-white pt-[194px] sm:pt-[200px] lg:pt-[224px] z-10 relative`}
        >
          We’re Revamping!
        </h1>
        <p
          className={`${aeonik_light.className} text-[18px] md:text-xl xl:text-2xl text-center text-white px-[40px] sm:px-[60px] md:px-[100px] lg:px-[160px] xl:px-[195px] pt-1 md:pt-3 xl:pt-6 z-10 relative `}
        >
          This page is currently under an update to bring you a better
          experience. Stay tuned—something amazing is coming soon! Expected
          launch: March 31, 2025
        </p>
      </div>
      <p
        className={`${aeonik_regular.className} text-base text-[#333333] text-center pt-8 px-[83px] sm:px-0`}
      >
        For the latest updates, check our social handles.
      </p>
      <div className="flex gap-4 pt-4">
        <img src="/assets/footer/LinkedIn.svg" alt="" />
        <Link href={"https://x.com/Couplr_Official"}>
          <img src="/assets/footer/x.svg" alt="" />
        </Link>
        <Link href={"https://www.instagram.com/couplr_app/"}>
          <img src="/assets/footer/insta.svg" alt="" />
        </Link>
        <Link href={"https://www.facebook.com/profile.php?id=61571761064971/"}>
          <img src="/assets/footer/Facebook.svg" alt="" />
        </Link>{" "}
      </div>
    </div>
  );
};

export default UpdationStatus;
