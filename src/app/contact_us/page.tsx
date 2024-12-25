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

const ContactUs = () => {
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    return (
        <>
            <Header />
            <Hero />
            <hr className="border-slate-400 border-t-[1px] mx-4" />

            <div className={styles.body}>
                <form className='flex flex-col gap-2' onSubmit={e => e.preventDefault()}>
                    <InputField placeholder='Full name' value={fullName} onChange={e => setFullName(e.target.value)} />
                    <InputField placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} />
                    <InputField type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <InputField type='number' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#777]- text-black text-sm'>Message/Question <b className='text-[#fe8f01]'>*</b></label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='' className=' px-3 py-2 outline-none border rounded-md focus:border-[#096982]'></textarea>
                    </div>

                    <div className='flex justify-center mt-2'>
                        <button className='px-10 py-2 text-white rounded-full bg-[#096982]'>Sumit</button>
                    </div>
                </form>

                <div className='flex flex-col gap-10 mt-4'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 text-[#096982] font-semibold'>
                            <FaPhoneAlt className='text-lg' />
                            <span className='text-lg'>Contact Us</span>
                        </div>

                        <div className='flex flex-col pl-6- font-medium'>
                            <span>+1(240) 413-9953</span>
                            <span>+1(419) 346-8826</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 text-[#096982] font-semibold'>
                            <IoMail className='text-2xl' />
                            <span className='text-lg'>Email Us</span>
                        </div>

                        <div className='flex flex-col pl-6- font-medium'>
                            <span>Ngosongamin@gmail.com</span>
                            <span>Malafast2013@gmail.com</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 text-[#096982] font-semibold'>
                            <GoHomeFill className='text-2xl' />
                            <span className='text-lg'>Visit Us</span>
                        </div>

                        <div className='flex flex-col pl-6- font-medium'>
                            <span>5739 Little Red Rover St, Groveport OH 43125</span>
                        </div>
                    </div>



                </div>

                <MapView />
            </div>
        </>
    )
}

export default ContactUs;