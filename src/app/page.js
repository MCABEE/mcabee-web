import Section1 from "@/components/index/Section1";
import Section2 from "@/components/index/Section2";
import Section3 from "@/components/index/Section3";
import Section4 from "@/components/index/Section4";
import Section5 from "@/components/index/Section5";
import Section6 from "@/components/index/Section6";
import Section7 from "@/components/index/Section7";
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="max-w-[1800px] mx-auto" > 
    <div className="px-4 sm:px-20 lg:px-24 xl:px-36 2xl:px-48">
    <Section1/>
      
      </div> 
      <div className="pt-16 px-4 sm:px-20 lg:px-24 xl:px-36 2xl:px-48">
      <Section2/>
      </div>
      <div className="px-4 sm:px-20 lg:px-24 xl:px-36 2xl:px-48">
        <Section3/>
      </div>
    
      <div className="">
      <Section4/>
      </div>
      <div className="px-4 sm:px-20 lg:px-24 xl:px-36 2xl:px-48">
      <Section5/>

      </div>
      <div className="px-4 sm:px-20 lg:px-24 xl:px-36 2xl:px-48">

      <Section6/>
      </div>
      <div className="py-6 px-4 sm:px-20 lg:px-24 xl:px-36 2xl:px-48">
      <Section7/>
      </div>
      
      
    </div>
  );
}
