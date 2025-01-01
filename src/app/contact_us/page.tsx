"use client";

import Header from '@/components/header/Header'
import Hero from '@/components/landing/hero/Hero'
import styles from './styles.module.css';
import React, { useState } from 'react'
import InputField from '@/components/GLOBAL/InputField';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdOutlineEmail, MdOutlineMailOutline } from 'react-icons/md';
import { GoHomeFill } from 'react-icons/go';
import { IoMail } from 'react-icons/io5';
import MapView from '@/components/GLOBAL/MapView';
import HeroSectionWithTitle from '@/components/GLOBAL/HeroSectionWithTitle';
import Link from 'next/link';

const ContactUs = () => {
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    return (
        <>
            <Header />
            <HeroSectionWithTitle title='Contact Us' />
            <hr className="border-slate-400 border-t-[1px] mx-4" />

            <div className={styles.body}>
                <form className='flex flex-col gap-2' onSubmit={e => e.preventDefault()}>
                    <p className='text-xl mb-4'>Do you have a question about our services? Please feel free to contact us at <b className='font-bold'>+1 (419) 346-8826</b>/<b className='font-bold'>+1 (419) 346-8826</b> or fill out the form below.</p>
                    <InputField placeholder='Full name' value={fullName} onChange={e => setFullName(e.target.value)} />
                    <InputField placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} />
                    <InputField type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <InputField type='number' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#777]- text-black text-lg'>Message/Question <b className='text-[#fe8f01]'>*</b></label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='' className=' px-3 py-3 w-full outline-none shadow focus:shodow-md border rounded-2xl focus:border-[#096982]'></textarea>
                    </div>

                    <div className='flex flex-col items-center mt-4'>
                        <button type='submit' className='px-10 py-2 text-white text-lg font-semibold select-none rounded-full bg-primaryBlue active:bg-[#0f5a6d]'>Submit</button>
                        <Link className='text-xl underline text-primaryBlue' href="/schedule_call">Schedule a call instead</Link>
                    </div>
                </form>

                <div className='flex flex-col text-xl gap-10 mt-4'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 text-primaryBlue font-semibold'>
                            <FaPhoneAlt className='text-xl' />
                            <span className='text-2xl'>Contact Us</span>
                        </div>

                        <div className='flex flex-col pl-6- font-medium'>
                            <span>+1(240) 413-9953</span>
                            <span>+1(419) 346-8826</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 text-primaryBlue font-semibold'>
                            <IoMail className='text-3xl' />
                            <span className='text-2xl'>Email Us</span>
                        </div>

                        <div className='flex flex-col pl-6- font-medium'>
                            <span>Ngosongamin@gmail.com</span>
                            <span>Malafast2013@gmail.com</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 text-primaryBlue font-semibold'>
                            <GoHomeFill className='text-3xl' />
                            <span className='text-2xl'>Visit Us</span>
                        </div>

                        <div className='flex flex-col pl-6- font-medium'>
                            <span>5739 Little Red Rover St, Groveport OH 43125</span>
                        </div>
                    </div>



                </div>

            </div>
            <MapView />
        </>
    )
}

export default ContactUs;