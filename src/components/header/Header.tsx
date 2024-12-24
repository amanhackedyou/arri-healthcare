"use client";

import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Images from "@/lib/assets";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.body}>
      {/* <Image
        src={Images.logo}
        width={180}
        height={50}
        className={styles.logo}
        alt="Arri Healthcare"
      /> */}

      <div className="flex flex-col gap-2">
        <Image
          src={Images.logo}
          width={150}
          height={40}
          className={styles.logo}
          alt="Arri Healthcare"
        />

        <a href="tel:+12404139953" className="flex items-center gap-2 text-primary">
          <FaPhoneAlt />
          <span className="leading-none font-medium underline">+1 (240) 413-9953</span>
        </a>
      </div>


      <nav
        className={`${styles.nav} ${menuOpen ? styles.open : styles.closed}`}
      >
        <div className={styles.bar}>
          <Image
            src={Images.logoIcon}
            width={40}
            height={40}
            className={styles.icon}
            alt="Arri Healthcare"
          />
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={38}
            rounded
          />
        </div>


        <ul>
          <li className="opened">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutus">About Us</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Training</Link>
          </li>
          <li>
            <Link href="/contact_us">Contact</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Career</Link>
          </li>
        </ul>
      </nav>

      <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={38} rounded />
    </header>
  );
};

export default Header;
