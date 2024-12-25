"use client";

import Header from '@/components/header/Header'
import Hero from '@/components/landing/hero/Hero'
import styles from './page.module.css';
import React, { useEffect, useState } from 'react'
import InputField from '@/components/GLOBAL/InputField';

const ScheduleACall = () => {
    const date = new Date();
    const todayDate = date.toISOString().split('T')[0];
    const currentTime = getCurrentTime(1);


    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [preferredDate, setPreferredDate] = useState<string>(todayDate);
    const [preferredTime, setPreferredTime] = useState<string>(currentTime);
    const [comment, setComment] = useState<string>("");

    const [minimumDate, setMinimumDate] = useState(todayDate);
    const [minimumTime, setMinimumTime] = useState(currentTime);


    useEffect(() => {
        // Updating the time after 10 seconds to ensure if everything is working fine.

        setInterval(() => {
            const date = new Date();
            const currentDate = date.toISOString().split('T')[0];
            const currentTime = getCurrentTime(1);

            if (preferredDate != currentDate) {
                setMinimumDate(currentDate);
            }


            // else {
            //     if (currentTime != minimumTime) {
            //         setMinimumTime(currentTime);
            //     } else {
            //         setMinimumTime("");
            //     }
            // }
        }, 1000);
    }, [])





    return (
        <>
            <Header />
            {/* <hr className="border-slate-400 border-t-[1px] mx-4" /> */}

            <div className='flex flex-col'>
                <section className='flex flex-col items-center- bg-primary py-5'>
                    <Hero />
                    <h1 className='text-white font-semibold text-3xl uppercase tracking-widest text-center'>Schedule A Call</h1>
                </section>

                <form className={`py-4 flex flex-col gap-2 ${styles.container_px}`} onSubmit={e => e.preventDefault()}>
                    <p className='text-lg'>Please fill out the form to set an appointment and we will do our best to contact you on your preferred date and time.</p>

                    <InputField placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <InputField placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                    <InputField type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <InputField type='number' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
                    <InputField type='number' placeholder='Zip' value={zip} onChange={e => setZip(e.target.value)} />
                    <InputField min={minimumDate} type='date' placeholder='Preferred date' value={preferredDate} onChange={e => setPreferredDate(e.target.value)} />
                    <InputField min={minimumTime} type='time' placeholder='Preferred time' value={preferredTime} onChange={e => setPreferredTime(e.target.value)} />
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#777]- text-black text-sm'>Add Comment <b className='text-[#fe8f01]'>*</b></label>
                        <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder='' className=' px-3 py-2 outline-none border rounded-md focus:border-[#096982]'></textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

const getCurrentTime = (addOnHours = 0) => {
    const date = new Date(Date.now() + (3600000 * addOnHours));
    const hours = String(date.getHours()).padStart(2, '0'); // Get hours and pad with 0 if necessary
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes and pad with 0 if necessary
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
}

export default ScheduleACall;