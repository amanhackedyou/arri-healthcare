import React from "react";
import styles from "./certification.module.css";
import Image from "next/image";
import Images from "@/lib/assets";
import { Roboto } from "next/font/google";
import Heading from "@/components/GLOBAL/Heading";


const Certification = () => {
  return (
    <section className={`${styles.body}`}>
      <div className='bg-primaryBg bg-red-200- h-20 w-full top-0 left-0 rounded-b-[100%]'></div>
      {/* <div className="lg:pt-20- lg:flex lg:flex-col lg:justify-around lg:h-full ">
        <Heading text="Who We Are" />

        <img className="hidden w-32 lg:inline-block mt-32 -translate-x-6" src={Images.ohioDODD} alt="" />
      </div> */}

      <div className="lg:flex lg:flex-col ">
        <Heading text="Who We Are" />

        {/* <img className="hidden w-32 lg:inline-block mt-32 -translate-x-6" src={Images.ohioDODD} alt="" /> */}
      </div>

      {/* <div className="flex flex-col relative w-full lg:w-[45%]- md:w-[40rem] px-4-  ">
        <p className='text-[0.9rem] z-10 text-center absolute px-8 top-[20%] md:text-2xl lg:mx-12 bg-[#00000071]- text-balance font-medium'>
          <b className='font-bold'>At Arri Healthcare, We Serve with Compassion</b><br />We provide dedicated support to individuals with developmental disabilities, seniors, and those with unique health needs. As a licensed non-medical home health company, we ensure every client is treated with dignity, respect, and tailored care. Our mission is to create a nurturing environment where everyone feels valued, loved, and empowered to thrive. At Arri Healthcare, your well-being is our purpose.
        </p>
        <img className="" src={Images.ohioMap} alt="Ohio Map" />
        <img className="absolute w-14 lg:w-32 bottom-6 right-14 lg:bottom-10- lg:bottom-20 lg:hidden" src={Images.ohioDODD} alt="" />
      </div> */}

      <div className="w-full flex flex-col items-center relative">
        <div className="flex flex-col relative w-full lg:w-[45%]- md:w-[35rem] px-4- ">
          <p style={{
            filter: 'drop-shadow(0 2px 2px #096a8273)'
          }} className='text-[0.9rem] z-20 z-10- bg-[#096a8273]- text-center absolute px-8 md:px-0 md:w-[150%] top-[20%] md:top-[53%] md:left-[43%] md:translate-x-[-50%] md:translate-y-[-50%] md:text-3xl lg:mx-12 bg-[#00000071]- text-balance font-medium md:leading-[3rem]'>
            <b className='font-bold'>At Arri Healthcare, We Serve with Compassion</b><br />We provide dedicated support to individuals with developmental disabilities, seniors, and those with unique health needs. As a licensed non-medical home health company, we ensure every client is treated with dignity, respect, and tailored care. Our mission is to create a nurturing environment where everyone feels valued, loved, and empowered to thrive. At Arri Healthcare, your well-being is our purpose.
          </p>
          <img className="z-10" src={Images.ohioMap} alt="Ohio Map" />
          <img className="absolute w-14 lg:w-32 bottom-6 right-14 lg:-right-14 lg:bottom-10- lg:bottom-5 z-10" src={Images.ohioDODD} alt="" />

        </div>

        {/* <img className="absolute bottom-0 z-0 hidden md:block" src="/assets/icons/wave3.svg" alt="" /> */}
      </div>



    </section>
  );
};

export default Certification;
