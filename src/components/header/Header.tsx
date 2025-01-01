"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Images from "@/lib/assets";
import Link from "next/link";
// import Hamburger from "hamburger-react";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  let pathname = usePathname();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);




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

        <a href="tel:+12404139953" className="flex items-center text-lg gap-2 text-primary">
          <FaPhoneAlt />
          <span className="leading-none font-medium underline">+1 (240) 413-9953</span>
        </a>
      </div>


      <nav
        onClick={e => {
          // @ts-ignore
          if (e.target.tagName === "NAV") {
            setMenuOpen(false);
          }
        }}
        className={`${styles.nav} ${menuOpen ? styles.open : styles.closed}`}
      >


        <div className={styles.container}>
          <div className={styles.bar}>
            <Image
              src={Images.logoIcon}
              width={40}
              height={40}
              className={styles.icon}
              alt="Arri Healthcare"
            />
            {/* <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              size={38}
              rounded
            /> */}

            <Hamburger toggled={menuOpen} toggle={setMenuOpen} />

          </div>


          <ul>
            <li className={pathname === "/" ? styles.opened : ''}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathname === "/aboutus" ? styles.opened : ''}>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className={pathname === "/services" ? styles.opened : ''}>
              <Link onClick={e => setMenuOpen(false)} href="/#services-we-offer">Services</Link>
            </li>
            <li className={pathname === "/training" ? styles.opened : ''}>
              <Link href="/training">Training</Link>
            </li>
            <li className={pathname === "/contact_us" ? styles.opened : ''}>
              <Link href="/contact_us">Contact</Link>
            </li>
            <li className={pathname === "/resources" ? styles.opened : ''}>
              <Link href="/resources">Wellness Resources</Link>
            </li>
            <li className={pathname === "/career" ? styles.opened : ''}>
              <Link href="/career">Careers</Link>
            </li>
          </ul>


          <div className="flex mt-2 ml-3 items-center justify-center">
            <a href="tel:+12404139953" className="font-semibold text-2xl text-primaryBlue">+1 (240) 413-9953</a>
          </div>

        </div>

      </nav>

      <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
    </header>
  );
};



const Hamburger = ({ toggled, toggle }: { toggled: boolean, toggle: Function }) => {
  const Line = ({ width = 100, index }: { width?: number, index: number }) => {
    return <div style={{
      width: width + "%"
    }} className={`h-[0.3rem] transition-all duration-200 ${toggled ? 'bg-[#0d92b4]' : 'bg-primaryBlue'} ${toggled && index == 2 ? 'opacity-0' : ''} ${toggled && index == 1 ? '!w-full rotate-45 translate-y-[0.63rem]' : ''}  ${toggled && index == 3 ? '!w-full -rotate-45 -translate-y-[0.83rem]' : ''} rounded-full`}></div>
  }

  return <button onClick={e => toggle(!toggled)} className="w-11 items-end h-7 flex flex-col justify-between">
    {toggle && <>
      <Line index={1} width={80} />
      <Line index={2} />
      <Line index={3} width={70} />
    </>}
  </button>
}

export default Header;
