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
    <section className={`${styles.body} ${imagesOriantation == "portrait" ? "pb-16" : 'pb-0'}`}>
      <div className="w-full overflow-hidden-">
        <ImageSlider oriantation={imagesOriantation} images={imagesForSliding} />
      </div>

      {/* <hr className="border-slate-400 border-t-[1px] mx-4" /> */}
    </section>
  );
};

export default Hero;
