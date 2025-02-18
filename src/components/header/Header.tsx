"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Images from "@/lib/assets";
import Link from "next/link";
// import Hamburger from "hamburger-react";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoMail } from "react-icons/io5";

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
    <div className="w-full flex flex-col">
      <header className={styles.body}>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex items-center justify-between px-4">
            <Image
              src={Images.logo}
              width={150}
              height={40}
              className={styles.logo}
              alt="Arri Healthcare"
            />

            <div className="inline-block lg:hidden">
              <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
            </div>
          </div>


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


            <div className="flex flex-col mt-2 ml-3 items-center justify-center">
              <a href="tel:+14193468826" className="font-extrabold text-2xl text-primaryBlue">+1 (419) 346-8826</a>
              <a href="tel:+12404139953" className="font-extrabold text-2xl text-primaryBlue">+1 (240) 413-9953</a>
            </div>

          </div>

        </nav>


        <div className="hidden lg:flex items-center">
          <LinkButton href="/" text="Home" isActive={pathname === "/"} />
          <LinkButton href="/aboutus" text="About Us" isActive={pathname === "/aboutus"} />
          <LinkButton href="/#services-we-offer" text="Services" isActive={pathname === "/#services-we-offer"} />
          <LinkButton href="/training" text="Training" isActive={pathname === "/training"} />
          <LinkButton href="/contact_us" text="Contact" isActive={pathname === "/contact_us"} />
          <LinkButton href="/resources" text="Wellness Resources" isActive={pathname === "/resources"} />
          <LinkButton href="/career" text="Careers" isActive={pathname === "/career"} />
        </div>



        {/* <div className="inline-block lg:hidden">
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      </div> */}
      </header>

      {/* @ts-ignore */}
      {/* <marquee className="" behavior="alternate"> */}
      <div className="flex flex-col md:flex-row items-center- px-4 gap-2 md:gap-6 mb-2">
        <a href="tel:+14193468826" className="flex items-center text-lg gap-2 text-primary">
          <FaPhoneAlt />
          <span className="leading-none font-extrabold underline">+1 (419) 346-8826</span>
        </a>

        <a href="tel:+12404139953" className="flex items-center text-lg gap-2 text-primary">
          <FaPhoneAlt />
          <span className="leading-none font-extrabold underline">+1(240) 413-9953</span>
        </a>

        <a href="mailto:arrihealthcareservices@gmail.com" className="flex items-center text-lg gap-2 text-primary">
          <IoMail className="text-xl" />
          <span className="leading-none font-extrabold underline">Arrihealthcareservices@gmail.com</span>
        </a>
      </div>
      {/* @ts-ignore */}
      {/* </marquee> */}
    </div>
  );
};



const Hamburger = ({ toggled, toggle }: { toggled: boolean, toggle: Function }) => {
  const Line = ({ width = 100, index }: { width?: number, index: number }) => {
    return <div style={{
      width: width + "%"
    }} className={`h-[0.3rem] transition-all duration-200 ${toggled ? 'bg-[#0d92b4]' : 'bg-primaryBlue'} ${toggled && index == 2 ? 'opacity-0' : ''} ${toggled && index == 1 ? '!w-full rotate-45 translate-y-[0.63rem]' : ''}  ${toggled && index == 3 ? '!w-full -rotate-45 -translate-y-[0.83rem]' : ''} rounded-full`}></div>
  }

  return <button onClick={e => toggle(!toggled)} className="w-10 items-end h-7 flex flex-col justify-between">
    {toggle && <>
      <Line index={1} width={80} />
      <Line index={2} />
      <Line index={3} width={70} />
    </>}
  </button>
}


const LinkButton = ({ href, text, isActive = false }: { href: string, text: string, isActive: boolean | null }) => {
  return <Link className={` text-xl text-nowrap whitespace-nowrap px-4 ${isActive ? 'text-black' : 'text-gray-500'}`} href={href}>{text}</Link>
}

export default Header;
