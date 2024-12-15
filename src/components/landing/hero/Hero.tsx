import React from "react";
import styles from "./hero.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Images from "@/lib/assets";

const Hero = () => {
  return (
    <section className={styles.body}>
      <h1>Providing Compationate Care in the comfort of your home.</h1>
      <div className={styles.cta}>
        <FaPhoneAlt />
        <p>+1 (419) 346-8826</p>
      </div>
      <div className={styles.images}>
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
      </div>
    </section>
  );
};

export default Hero;
