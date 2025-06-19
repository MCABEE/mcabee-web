import React from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const aeonik_regular = localFont({ src: "./AeonikRegular.otf" });
const aeonik_light = localFont({ src: "./AeonikLight.otf" });

const Footer = () => {
  return (
    <div
      className={`${aeonik_regular.className} mt-8 mb-10 px-10 md:px-20 xl:px-40 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5`}
    >
      <div>
        <Image
          src="/mcabeeLogo.svg"
          alt="mcabeeLogo"
          width={112}
          height={40}
          className="pb-[59px] lg:pb-[89px]"
        />
        <div className="hidden lg:block">
          <span className="text-base text-[#666666] order-2 sm:order-none pb-5 ">
            2025 &#169; Mcabee Digital Pvt Ltd
          </span>
          <div className="flex gap-4 pt-4">
            <img src="/assets/footer/LinkedIn.svg" alt="" />
            <Link href={"https://x.com/Couplr_Official"}>
              <img src="/assets/footer/x.svg" alt="" />
            </Link>
            <Link href={"https://www.instagram.com/couplr_app/"}>
              <img src="/assets/footer/insta.svg" alt="" />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=61571761064971/"}
            >
              <img src="/assets/footer/Facebook.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="lg:ps-[80px] xl:ps-[100px] 2xl:ps-[150px] flex flex-col gap-2">
        <p className="text-base text-[#666666] pb-[15px] lg:pb-[25px] xl:pb-[45px]">
          Quick Links
        </p>
        <p className="text-base text-[#333333]">Products</p>

        <p className="text-base text-[#333333]">Services</p>

        <p className="text-base text-[#333333]">Careers</p>

        <p className="text-base text-[#333333]">Life</p>
      </div>

      <div className="lg:ps-[100px] 2xl:ps-[130px] flex flex-col gap-2 pt-12 sm:pt-0">
        <p className="text-base text-[#666666] pb-[15px] lg:pb-[25px] xl:pb-[45px]">
          Company
        </p>
        <p className="text-base text-[#333333]">Why us?</p>

        <p className="text-base text-[#333333]">About us</p>

        <p className="text-base text-[#333333]">Privacy</p>

        <p className="text-base text-[#333333]">Terms</p>
      </div>

      <div className="lg:ps-[60px] xl:ps-[80px] 2xl:ps-[110px] flex flex-col gap-2  pt-12 lg:pt-0">
        <p className="text-base text-[#666666] pb-[15px] lg:pb-[25px] xl:pb-[45px]">
          Stories
        </p>
        <p className="text-base text-[#333333]">Cases</p>

        <p className="text-base text-[#333333]">Blog</p>
      </div>

      <div className="lg:ps-[30px] xl:ps-[50px] 2xl:ps-[100px] flex flex-col gap-2  pt-12 lg:pt-0">
        <p className="text-base text-[#666666] pb-[15px] lg:pb-[25px] xl:pb-[45px]">
          Contact
        </p>
        <p className="text-base text-[#333333]">M: mail@mcabee.in</p>

        <p className="text-base text-[#333333]">T: (91) 9946250333</p>
        <div className="flex gap-2">
          <img src="/assets/footer/round-pushpin.svg" alt="" />
          <p className="text-base text-[#333333]">Bengaluru, India</p>
        </div>
      </div>

      <div className="lg:hidden block mt-12">
        <span className="text-base text-[#666666] order-2 sm:order-none pb-5 ">
          2025 &#169; Mcabee Digital Pvt Ltd
        </span>
        <div className="flex gap-4 pt-4">
          <img src="/assets/footer/LinkedIn.svg" alt="" />
          <Link href={"https://x.com/Couplr_Official"}>
            <img src="/assets/footer/x.svg" alt="" />
          </Link>
          <Link href={"https://www.instagram.com/couplr_app/"}>
            <img src="/assets/footer/insta.svg" alt="" />
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=61571761064971/"}
          >
            <img src="/assets/footer/Facebook.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
