"use client";

import Header from '@/components/header/Header'
import Hero from '@/components/landing/hero/Hero'
import styles from './page.module.css';
import React, { useEffect, useState } from 'react'
import InputField from '@/components/GLOBAL/InputField';
import HeroSectionWithTitle from '@/components/GLOBAL/HeroSectionWithTitle';
import Link from 'next/link';

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
    const [selectedContactOption, setSelectedContactOption] = useState("");

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

            else {
                if (currentTime != minimumTime) {
                    setMinimumTime(currentTime);
                } else {
                    setMinimumTime("");
                }
            }
        }, 1000);
    }, [])





    return (
        <>
            <Header />
            {/* <hr className="border-slate-400 border-t-[1px] mx-4" /> */}

            <div className='flex flex-col'>

                <HeroSectionWithTitle title='Schedule A Call' />

                <form className={`py-4 flex flex-col gap-2 ${styles.container_px}`} onSubmit={e => e.preventDefault()}>
                    <p className='text-xl font-medium mb-2'>Please fill out the form to set an appointment and we will do our best to contact you on your preferred date and time.</p>

                    <InputField placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <InputField placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                    <InputField type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <InputField type='number' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
                    <InputField type='number' placeholder='Zip' value={zip} onChange={e => setZip(e.target.value)} />

                    <div className='flex flex-col gap-1'>
                        <label className='text-[#777]- text-black text-xl'> Best way to contact you <b className='text-[#fe8f01]'>*</b></label>
                        <ContactOptionsView currentSelectedOption={selectedContactOption} setOptions={setSelectedContactOption} />
                    </div>
                    <InputField min={minimumDate} type='date' placeholder='Best day to contact you' value={preferredDate} onChange={e => setPreferredDate(e.target.value)} />
                    <InputField min={minimumTime} type='time' placeholder='Best time to contact you' value={preferredTime} onChange={e => setPreferredTime(e.target.value)} />
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#777]- text-black text-xl'>Add Comment <b className='text-[#fe8f01]'>*</b></label>
                        <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder='' className='  px-3 py-3 w-full outline-none shadow focus:shodow-md border rounded-2xl focus:border-[#096982]'></textarea>
                    </div>


                    <div className='flex flex-col items-center mt-4'>
                        <button type='submit' className='px-10 py-2 text-white font-semibold text-lg select-none rounded-full bg-primaryBlue active:bg-[#0f5a6d]'>Submit</button>
                        <Link className='text-xl underline text-primaryBlue' href="/contact_us">Leave a message instead</Link>
                    </div>


                </form>
            </div>
        </>
    )
}


const ContactOptionsView = ({ currentSelectedOption, setOptions }: { currentSelectedOption: string, setOptions: Function }) => {
    const OPTIONS = ["Phone", "Email", "Text"];



    const OptionButton = ({ optionText, isSelected }: { optionText: string, isSelected: boolean }) => {
        return <button className='flex items-center p-3 justify-between border-b rounded active:bg-[#e5e5e5]' onClick={e => setOptions(optionText)}>
            <span className='text-xl leading-loose'>{optionText}</span>
            <div className={`min-w-[20px] min-h-[20px] rounded-full border border-[#777] flex items-center justify-center`}>
                <div className={`w-[50%] aspect-square bg-primaryBlue transition-all rounded-full ${isSelected ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
        </button>
    }

    return <div className='flex flex-col'>
        {
            OPTIONS.map((option, index) => {
                return <OptionButton key={index} optionText={option} isSelected={currentSelectedOption === option} />
            })
        }
    </div>
}

const getCurrentTime = (addOnHours = 0) => {
    const date = new Date(Date.now() + (3600000 * addOnHours));
    const hours = String(date.getHours()).padStart(2, '0'); // Get hours and pad with 0 if necessary
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes and pad with 0 if necessary
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
}

export default ScheduleACall;