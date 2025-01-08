import React from "react";
import styles from "./certification.module.css";
import Image from "next/image";
import Images from "@/lib/assets";
import { Roboto } from "next/font/google";
import Heading from "@/components/GLOBAL/Heading";


const Certification = () => {
  return (
    <section className={`${styles.body}`}>
      {/* <h2>
        We are Certified and Licensed to provide you with the best
        care.
      </h2>
      <Image
        width={200}
        height={250}
        alt="OHIO DODD"
        src={Images.ohioDODD}
        className={styles.ohio}
      /> */}

      {/* <h2>Who We Are</h2> */}

      {/* <div className='flex items-center gap-2'>
        <img className='h-5' src="/assets/images/logo_icon.svg" />
        <h2 className='font-rubik leading-none'>Who We Are?</h2>
      </div> */}

      <div className="md:mt-20">
        <Heading text="Who We Are" />
      </div>

      <div className="flex flex-col relative w-full md:w-[50%] px-4-  ">
        <p className='text-[0.9rem] z-10 text-center absolute px-8 top-[20%] md:text-2xl md:mx-12 bg-[#00000071]- text-balance font-medium'>
          <b className='font-bold'>At Arri Healthcare, We Serve with Compassion</b><br />We provide dedicated support to individuals with developmental disabilities, seniors, and those with unique health needs. As a licensed non-medical home health company, we ensure every client is treated with dignity, respect, and tailored care. Our mission is to create a nurturing environment where everyone feels valued, loved, and empowered to thrive. At Arri Healthcare, your well-being is our purpose.
        </p>
        <img className="" src={Images.ohioMap} alt="Ohio Map" />
        {/* <Image className="absolute" width={300}
          height={375} src={Images.ohioMap} alt="OHIO MAP" /> */}

        <img className="absolute w-14 md:w-20 bottom-6 right-14 md:bottom-10" src={Images.ohioDODD} alt="" />
      </div>


    </section>
  );
};

export default Certification;
