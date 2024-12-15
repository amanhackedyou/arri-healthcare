import React from "react";
import styles from "./certification.module.css";
import Image from "next/image";
import Images from "@/lib/assets";
import { roboto } from "@/app/layout";

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
