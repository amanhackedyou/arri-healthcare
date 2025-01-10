"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

// const Footer = () => {
//     return (
//         <footer className="text-gray-600 body-font">
//             <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
//                 <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

//                     <img className='h-8' src="/assets/images/logo_icon.svg" alt="" />
//                     <span className="ml-3 text-xl">ARRI</span>
//                 </Link>
//                 <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} ARRI HEALTHCARE SERVICES
//                 </p>
//                 <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//                     <span className="text-gray-500">
//                         <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//                             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                         </svg>
//                     </span>
//                     <span className="ml-3 text-gray-500">
//                         <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//                             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                         </svg>
//                     </span>
//                 </span>
//             </div>
//         </footer>
//     )
// }





const Footer = () => {
    const [currentYear, setcurrentYear] = useState<number>();

    useEffect(() => {
        setcurrentYear(new Date().getFullYear());
    }, []);


    return (
        <footer className="text-gray-600- bg-[#e5e5e5] body-font">
            <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img className='h-8' src="/assets/images/logo_icon.svg" alt="" />
                        <span className="ml-3 text-xl">ARRI Healthcare</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">5739 Little Red Rover St, Groveport OH 43125</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">


                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 font-medium">
                        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">Pages to visit</h2>
                        <div className='flex flex-col md:flex-row md:gap-32 whitespace-nowrap'>
                            <nav className="list-none mb-10- text-xl flex flex-col gap-2">
                                <li>
                                    <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                                </li>
                                <li>
                                    <Link href="/#services-we-offer" className="text-gray-600 hover:text-gray-800">Services</Link>
                                </li>
                                <li>
                                    <Link href="/training" className="text-gray-600 hover:text-gray-800">Training</Link>
                                </li>
                                <li>
                                    <Link href="/resources" className="text-gray-600 hover:text-gray-800 ">Wellness Resources</Link>
                                </li>

                                {/* <li>
                                    <Link href="/career" className="text-gray-600 hover:text-gray-800">Careers</Link>
                                </li>

                                <li>
                                    <Link href="/aboutus" className="text-gray-600 hover:text-gray-800">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/contact_us" className="text-gray-600 hover:text-gray-800">Contact Us</Link>
                                </li> */}

                            </nav>

                            <nav className="list-none mb-10 text-xl flex flex-col gap-2">
                                <li>
                                    <Link href="/career" className="text-gray-600 hover:text-gray-800">Careers</Link>
                                </li>

                                <li>
                                    <Link href="/aboutus" className="text-gray-600 hover:text-gray-800">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/contact_us" className="text-gray-600 hover:text-gray-800">Contact Us</Link>
                                </li>

                            </nav>
                        </div>

                        <div className='flex flex-col md:flex-row gap-2 whitespace-nowrap md:mt-2 mb-5'>
                            <a href="tel:+14193468826" className="font-extrabold text-xl text-primaryBlue">+1 (419) 346-8826,</a>
                            <a href="tel:+12404139953" className="font-extrabold text-xl text-primaryBlue">+1 (240) 413-9953</a>
                        </div>
                    </div>


                    {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Guidlines</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Term & Conditions</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            </li>
                        </nav>
                    </div> */}
                </div>
            </div>


            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© {currentYear} ARRI HEALTHCARE SERVICES
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <span className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </span>
                        <span className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </span>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer