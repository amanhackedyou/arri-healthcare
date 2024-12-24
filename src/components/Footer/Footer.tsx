"use client";

import Link from 'next/link';
import React from 'react'

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
    return (
        <footer className="text-gray-600- bg-[#e5e5e5] body-font">
            <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img className='h-8' src="/assets/images/logo_icon.svg" alt="" />
                        <span className="ml-3 text-xl">ARRI</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">5739 Little Red Rover St, Groveport OH 43125</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">


                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Pages to visit</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Home</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Services</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Training</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Resources</a>
                            </li>

                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Career</a>
                            </li>

                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                            </li>

                        </nav>
                    </div>


                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Guidlines</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Term & Conditions</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>


            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© {new Date().getFullYear()} ARRI HEALTHCARE SERVICES
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