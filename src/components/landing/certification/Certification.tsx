import React from "react";
import styles from "./certification.module.css";
import Image from "next/image";
import Images from "@/lib/assets";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", '300', '400', '500', '700', '900']
})


const Certification = () => {
  return (
    <section className={`${styles.body} ${roboto.className}`}>
      <h2>
        We are Certified and Licensed to provide you with the best
        care.
      </h2>
      <Image
        width={200}
        height={250}
        alt="OHIO DODD"
        src={Images.ohioDODD}
        className={styles.ohio}
      />
    </section>
  );
};

export default Certification;
