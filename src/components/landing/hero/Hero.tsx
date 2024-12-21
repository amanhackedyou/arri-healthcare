"use client"
import React from "react";
import styles from "./hero.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./components/ImageSlider";


const defaultImages = ["/assets/images/slider/1.jpg", "/assets/images/slider/2.jpeg", "/assets/images/slider/3.jpg", "/assets/images/slider/4.jpg", "/assets/images/slider/5.png", "/assets/images/slider/6.jpg", "/assets/images/slider/7.jpg", "/assets/images/slider/8.jpg", "/assets/images/slider/9.jpg"];


const Hero = ({ imagesForSliding = defaultImages, imagesOriantation = "landscape" }: { imagesForSliding?: string[], imagesOriantation?: string }) => {
  return (
    <section className={styles.body}>
      <div className="w-full overflow-hidden pt-6">
        <ImageSlider oriantation={imagesOriantation} images={imagesForSliding} />
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

      {/* <hr className="border-slate-400 border-t-[1px] mx-4" /> */}
    </section>
  );
};

export default Hero;
