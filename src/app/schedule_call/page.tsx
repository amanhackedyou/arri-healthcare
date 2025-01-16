"use client";

import Header from '@/components/header/Header'
import Hero from '@/components/landing/hero/Hero'
import styles from './page.module.css';
import React, { useEffect, useState } from 'react'
import InputField from '@/components/GLOBAL/InputField';
import HeroSectionWithTitle from '@/components/GLOBAL/HeroSectionWithTitle';
import Link from 'next/link';
import toast from 'react-hot-toast';
import validator from 'validator';
import { post } from '@/services/NextworkServices';


const ScheduleACall = () => {
    // const date = new Date();
    // // const date = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }))
    // const todayDate = date.toISOString().split('T')[0];
    // const currentTime = getCurrentTime(1);

    // const todayDate = getCurrentDate();
    // const currentTime = getCurrentTime(1);


    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [preferredDate, setPreferredDate] = useState<string>("");
    const [preferredTime, setPreferredTime] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [selectedContactOption, setSelectedContactOption] = useState("");
    const [minimumDate, setMinimumDate] = useState<string>("");
    const [minimumTime, setMinimumTime] = useState<string>("");


    // Network requests releted states
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const validate = () => {
        const res = {
            status: "error",
            message: ""
        };

        const isDateValid = (data: string) => {
            const splitedDate = data.trim().split("-");

            if (splitedDate.length != 3) return false;

            splitedDate.forEach(dateWord => {
                try {
                    parseInt(dateWord);
                } catch (e) {
                    return false;
                }
            });

            return true;
        }

        const isTimeValid = (time: string) => {
            const splitedTime = time.trim().split(":");

            if (splitedTime.length != 2) return false;

            splitedTime.forEach(timeWord => {
                try {
                    parseInt(timeWord);
                } catch (e) {
                    return false;
                }
            });

            return true;
        }

        if (!firstName || !lastName || !phone || !email || !zip || !selectedContactOption || !preferredDate || !preferredTime || !comment) {
            res["message"] = "Mandatory fields are not provided, please fill all the feilds and try again."
            return res;
        }

        if (firstName.toString().length < 3) {
            res["message"] = "First name atleast has the contain 3 characters."
            return res;
        }

        if (lastName.toString().length < 1) {
            res["message"] = "Last name atleast has the contain 1 character."
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

        if (selectedContactOption.toString().toLowerCase() !== "phone" && selectedContactOption.toString().toLowerCase() !== "email" && selectedContactOption.toString().toLowerCase() !== "text") {
            res["message"] = "Way of contact method is not valid."
            return res;
        }

        if (!validator.isPostalCode(zip.toString(), "any")) {
            res["message"] = "Pin code is missing."
            return res;
        }

        if (!isDateValid(preferredDate?.toString() || "")) {
            res["message"] = "Invalid date."
            return res;
        }

        if (!isTimeValid(preferredTime?.toString() || "")) {
            res["message"] = "Invalid time."
            return res;
        }

        if ((comment?.toString() || "").split(" ").length < 3) {
            res["message"] = "Comment ssage should contain atleast 3 words."
            return res;
        }

        res["status"] = "ok";
        return res;
    }



    useEffect(() => {


        // Updating the time after 10 seconds to ensure if everything is working fine.

        // const date = new Date();
        // const date = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }))
        // const todayDate = date.toISOString().split('T')[0];
        const todayDate = getCurrentDate();
        const currentTime = getCurrentTime(1);

        setPreferredDate(todayDate);
        setPreferredTime(currentTime);

        setMinimumDate(todayDate);
        setMinimumTime(currentTime);


        setInterval(() => {
            const currentDate = getCurrentDate();
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





    const resetForm = () => {
        setFirstName("");
        setLastName("")
        setEmail("")
        setPhone("")
        setComment("")
        setPhone("");
        setSelectedContactOption("");
    }


    let isFormValid = validate().status === "ok";


    return (
        <>
            <Header />
            {/* <hr className="border-slate-400 border-t-[1px] mx-4" /> */}

            <div className='flex flex-col'>

                <HeroSectionWithTitle title='Schedule A Call' />

                <form className={`py-4 flex flex-col lg:w-1/2 lg:mx-auto gap-2 ${styles.container_px}`} onSubmit={e => e.preventDefault()}>
                    <p className='text-xl font-medium mb-2'>Please fill out the form to set an appointment and we will do our best to contact you on your preferred date and time.</p>

                    <InputField placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <InputField placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                    <InputField type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <InputField type='number' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
                    <InputField type='number' placeholder='Zip' value={zip} onChange={e => setZip(e.target.value)} />

                    <div className='flex flex-col gap-1'>
                        <label className='text-[#777]- text-black text-lg'> Best way to contact you <b className='text-[#fe8f01]'>*</b></label>
                        <ContactOptionsView currentSelectedOption={selectedContactOption} setOptions={setSelectedContactOption} />
                    </div>
                    <InputField min={minimumDate} type='date' placeholder='Best day to contact you' value={preferredDate} onChange={e => setPreferredDate(e.target.value)} />
                    <InputField min={minimumTime} type='time' placeholder='Best time to contact you' value={preferredTime} onChange={e => setPreferredTime(e.target.value)} />
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#777]- text-black text-lg'>Add Comment <b className='text-[#fe8f01]'>*</b></label>
                        <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder='' className='  px-3 py-3 w-full outline-none shadow focus:shodow-md border rounded-2xl focus:border-[#096982]'></textarea>
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
                                            formData.append("firstName", firstName);
                                            formData.append("lastName", lastName);
                                            formData.append("phoneNumber", phone);
                                            formData.append("email", email);
                                            formData.append("comment", comment);
                                            formData.append("contactMethod", selectedContactOption);
                                            formData.append("zipCode", zip);
                                            formData.append("date", preferredDate);
                                            formData.append("time", preferredTime);

                                            post("/api/schedule_call", formData).then(result => {
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




                        {/* <button type='submit' onClick={e => {
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
                        }} className='px-10 py-2 text-white font-semibold text-lg select-none rounded-full bg-primaryBlue active:bg-[#0f5a6d]'>Submit</button> */}
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
            <span className='text-lg font-medium leading-loose'>{optionText}</span>
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



export default ScheduleACall;


const getCurrentTime = (addOnHours = 0) => {
    const date = new Date(Date.now() + (3600000 * addOnHours));
    // const date = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }))

    const hours = String(date.getHours()).padStart(2, '0'); // Get hours and pad with 0 if necessary
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes and pad with 0 if necessary
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
}

function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

export const dynamic = 'force-dynamic';