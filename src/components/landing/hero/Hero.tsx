"use client"
import React from "react";
import styles from "./hero.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./components/ImageSlider";


const Hero = () => {
  return (
    <section className={styles.body}>
      <h1 className="font-breeSerif font-bold text-primary">Providing Compassionate Care in the comfort of your home.</h1>
      <div className={`${styles.cta} bg-[#e6b400]`}>
        {/* <FaPhoneAlt /> */}
        {/* <p>+1 (419) 346-8826</p> */}
        <p>Get Quote Now</p>
      </div>

      <div className="w-full">
        <ImageSlider />
      </div>


      {/* <div className={styles.images}>
        <Image
          src={Images.heroMain}
          alt="Arri Health"
          width={400}
          height={200}
          className={styles.main}
        />
        <Image
          src={Images.heroSub}
          alt="Arri Health"
          width={250}
          height={150}
          className={styles.sub}
        />
      </div> */}
    </section>
  );
};

export default Hero;
