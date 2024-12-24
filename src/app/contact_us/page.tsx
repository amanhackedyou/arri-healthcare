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
                        <textarea placeholder='' className=' px-3 py-2 outline-none border rounded-md focus:border-[#096982]'></textarea>
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


                {/* <div className='w-full h-80'>
                    <iframe
                        style={{ border: '0', width: '100%', height: '100%' }}
                        loading="lazy"
                        allowFullScreen={true}
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740.3757605003626!2d-82.8741430818095!3d39.86524266108514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88387db7e09fce8f%3A0x324d3adc1035c1b9!2s5739%20Little%20Red%20Rover%20St%2C%20Groveport%2C%20OH%2043125%2C%20USA!5e1!3m2!1sen!2sin!4v1734816494953!5m2!1sen!2sin">
                    </iframe>
                </div> */}

                <MapView />
            </div>
        </>
    )
}

export default ContactUs;