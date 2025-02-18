"use client";

import Header from '@/components/header/Header'
import Hero from '@/components/landing/hero/Hero'
import styles from '../styles.module.css';
import React, { useRef, useState } from 'react'
import InputField from '@/components/GLOBAL/InputField';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdOutlineEmail, MdOutlineMailOutline } from 'react-icons/md';
import { GoHomeFill } from 'react-icons/go';
import { IoMail } from 'react-icons/io5';
import MapView from '@/components/GLOBAL/MapView';
import HeroSectionWithTitle from '@/components/GLOBAL/HeroSectionWithTitle';
import Link from 'next/link';
import validator from 'validator';
import toast from 'react-hot-toast';
import { post } from '@/services/NextworkServices';
import Head from 'next/head';

const ContactUs = () => {
    // Form States
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    // Network requests releted states
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");



    const validate = () => {
        const res = {
            status: "error",
            message: ""
        };

        if (!fullName || !phone || !email || !address || !message) {
            res["message"] = "Mandatory fields are not provided, please fill all the feilds and try again."
            return res;
        }

        if (fullName.toString().length < 3) {
            res["message"] = "First name atleast has the contain 3 characters."
            return res;
        }

        if (!validator.isMobilePhone(phone.toString())) {
            res["message"] = "Phone is missing."
            return res;
        }

        if (!validator.isEmail(email.toString())) {
            res["message"] = "Email is missing."
            return res;
        }


        if (address.toString().length < 3) {
            res["message"] = "Address should contain atleast 3 characters."
            return res;
        }

        if (message.toString().split(" ").length < 3) {
            res["message"] = "Message should contain atleast 3 words."
            return res;
        }

        res["status"] = "ok";
        return res;
    }


    const resetForm = () => {
        setFullName("");
        setAddress("")
        setEmail("")
        setPhone("")
        setMessage("")
    }


    let isFormValid = validate().status === "ok";

    return (
        <>
            {/* <Head>
                <title>Contact Us - Arri Healthcare Services</title>
                <meta name="description" content="Contact Arri Healthcare Services to get the best in home care for your loved ones." />
            </Head> */}

            <Header />
            <HeroSectionWithTitle title='Contact Us' />
            <hr className="border-slate-400 border-t-[1px] mx-4" />

            <div className={styles.body}>
                <form className='flex flex-col gap-2 w-full ' onSubmit={e => e.preventDefault()}>
                    <p className='text-xl mb-4'>Do you have a question about our services? Please feel free to contact us at <b className='font-bold'>+1 (419) 346-8826</b>/<b className='font-bold'>+1(240) 413-9953</b> or fill out the form below.</p>
                    <InputField placeholder='Full name' value={fullName} onChange={e => setFullName(e.target.value)} />
                    <InputField placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} />
                    <InputField type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <InputField type='number' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#777]- text-black text-lg'>Message/Question <b className='text-[#fe8f01]'>*</b></label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='' className=' px-3 py-3 w-full outline-none shadow focus:shodow-md border rounded-2xl focus:border-[#096982]'></textarea>
                    </div>

                    <div className='flex flex-col items-center mt-4'>

                        <button onClick={e => {
                            if (isSubmiting) return;

                            if (isFormValid) {
                                toast.promise(
                                    (async () => {
                                        return new Promise<void>((resolve, reject) => {
                                            setIsSubmiting(true);

                                            const formData = new FormData();
                                            formData.append("fullName", fullName);
                                            formData.append("address", address);
                                            formData.append("phoneNumber", phone);
                                            formData.append("email", email);
                                            formData.append("message", message);

                                            post("/api/contact", formData).then(result => {
                                                resolve();
                                                resetForm();

                                            }).catch(e => {
                                                setErrorMessage(e);
                                                reject();
                                            }).finally(() => {
                                                setIsSubmiting(false);
                                            });
                                        });
                                    })(),
                                    {
                                        loading: 'Submitting...',
                                        success: <b>Submitted!</b>,
                                        error: <b>{errorMessage ?? "Something went wrong."}</b>,
                                    }
                                );
                            }
                        }} className={`${!isFormValid || isSubmiting ? 'opacity-20' : ''} px-10 py-2 text-white rounded-full text-lg font-semibold bg-primaryBlue`}>{isSubmiting ? <span>Submitting...</span> : "Submit"}</button>

                        {/* <button onClick={e => {
                            toast.promise(
                                (async () => {
                                    return new Promise(resolve => setTimeout(resolve, 1000));
                                })(),
                                {
                                    loading: 'Submitting...',
                                    success: <b>Submitted!</b>,
                                    error: <b>Could not submit.</b>,
                                }
                            );
                        }} type='submit' className='px-10 py-2 text-white text-lg font-semibold select-none rounded-full bg-primaryBlue active:bg-[#0f5a6d]'>Submit</button> */}
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
                            <a href='tel:+14193468826' target='_blank'>+1(419) 346-8826</a>
                            <a href='tel:+12404139953' target='_blank'>+1(240) 413-9953</a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 text-primaryBlue font-semibold'>
                            <IoMail className='text-3xl' />
                            <span className='text-2xl'>Email Us</span>
                        </div>

                        <div className='flex flex-col pl-6- font-medium'>
                            <a href='mailto:arrihealthcareservices@gmail.com' target='_blank'>Arrihealthcareservices@gmail.com</a>
                            {/* <span>Ngosongamin@gmail.com</span>
                            <span>Malafast2013@gmail.com</span> */}
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