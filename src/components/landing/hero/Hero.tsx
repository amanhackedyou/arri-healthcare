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
      <div className="w-full overflow-hidden pt-6">
        <ImageSlider />
      </div>
      {/* <h1 className="font-breeSerif font-bold text-primary">Providing Compassionate Care in the comfort of your home.</h1> */}
      <button className={`${styles.cta} bg-[#e6b400]- bg-gradient-to-l from-[#e6b400] to-[#c09601]`}>
        {/* <FaPhoneAlt /> */}
        {/* <p>+1 (419) 346-8826</p> */}
        <p className="font-medium">Get a personalized quote</p>
      </button>




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
