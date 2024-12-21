"use client";

import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Images from "@/lib/assets";
import Link from "next/link";
import Hamburger from "hamburger-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.body}>
      <Image
        src={Images.logo}
        width={180}
        height={50}
        className={styles.logo}
        alt="Arri Healthcare"
      />

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
          <li>
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
