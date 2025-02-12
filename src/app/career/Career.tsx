"use client";

import HeroSectionWithTitle from '@/components/GLOBAL/HeroSectionWithTitle'
import Header from '@/components/header/Header'
import styles from './styles.module.css';
import React, { useRef, useState } from 'react'
import InputField from '@/components/GLOBAL/InputField';
import AgreementCheckButton from '@/components/GLOBAL/AgreementCheckButton';
import Link from 'next/link';
import toast from 'react-hot-toast';
import validator from 'validator';
import { post } from '@/services/NextworkServices';

const Career = () => {
    // Referances
    const resumeRef = useRef();

    // Form States
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [DOB, setDOB] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [howSoonAvailable, setHowSoonAvailable] = useState<string>("");
    const [howHourlyPayExpectation, setHourlyPayExpectation] = useState<string>("");
    const [certifications, setCertifications] = useState<string>("");
    const [resume, setResume] = useState<File | undefined>();
    const [hasDrivingLicense, setHasDrivingLicense] = useState<boolean | null>(null);
    const [hasUSADocument, setHasUSADocument] = useState<boolean | null>(null);
    const [hasHighSchoolDiploma, setHasHighSchoolDiploma] = useState<boolean | null>(null);
    const [hasReliableTransportation, setHasReliableTransportation] = useState<boolean | null>(null);
    const [agreeForTrainingCourse, setAgreeForTrainingCourse] = useState<boolean | null>(null);
    const [isAgreedForBackgroundCheck, setIsAgreedForBackgroundCheck] = useState<boolean | null>(null);
    const [isWithoutResume, setIsWithoutResume] = useState<boolean>(false);



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

        // console.log(`${!firstName} || ${!lastName} || ${!zip} || ${!DOB} || ${!city} || ${!hasDrivingLicense} || ${!howSoonAvailable} || ${!hasHighSchoolDiploma} || ${!hasReliableTransportation} || ${!isAgreedForBackgroundCheck} || ${!agreeForTrainingCourse} || ${!howHourlyPayExpectation} || ${!isWithoutResume}`)

        if (!firstName || !lastName || !zip || !DOB || !city || hasDrivingLicense == null || !howSoonAvailable || hasHighSchoolDiploma == null || hasReliableTransportation == null || isAgreedForBackgroundCheck == null || agreeForTrainingCourse == null || !howHourlyPayExpectation) {
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

        if (!validator.isPostalCode(zip.toString(), "any")) {
            res["message"] = "Pin code is missing."
            return res;
        }

        if (!isDateValid(DOB?.toString() || "")) {
            res["message"] = "Invalid Date of Birth."
            return res;
        }

        if (hasDrivingLicense !== true && hasDrivingLicense !== false) {
            res["message"] = "Invalid Q&As"
            return res;
        }

        if (validator.isEmpty(howSoonAvailable)) {
            res["message"] = "Invalid Q&As"
            return res;
        }

        if (hasHighSchoolDiploma !== true && hasHighSchoolDiploma !== false) {
            res["message"] = "Invalid Q&As"
            return res;
        }

        if (hasReliableTransportation !== true && hasReliableTransportation !== false) {
            res["message"] = "Invalid Q&As"
            return res;
        }

        if (isAgreedForBackgroundCheck !== true && isAgreedForBackgroundCheck !== false) {
            res["message"] = "Invalid Q&As"
            return res;
        }

        if (agreeForTrainingCourse !== true && agreeForTrainingCourse !== false) {
            res["message"] = "Invalid Q&As"
            return res;
        }

        if (isWithoutResume != true && !resume) {
            res["message"] = "Resume is missing.";
            return res
        }

        res["status"] = "ok";
        return res;
    }

    const resetForm = () => {
        setFirstName("");
        setLastName("")
        setDOB("")
        setZip("")
        setCity("")
        setHowSoonAvailable("")
        setHourlyPayExpectation("");
        setCertifications("");
        setHasDrivingLicense(null);
        setHasUSADocument(null);
        setHasHighSchoolDiploma(null);
        setHasReliableTransportation(null);
        setAgreeForTrainingCourse(null);
        setIsAgreedForBackgroundCheck(null);
        setIsWithoutResume(false);
        setResume(undefined);

        //@ts-ignore
        resumeRef.current.value = "";
    }

    let isFormValid = validate().status === "ok";


    return (
        <>
            <Header />
            <HeroSectionWithTitle title='Careers at Arri' />


            <div className='flex flex-col gap-2'>
                <form className={`py-4 flex flex-col gap-5 lg:w-1/2 lg:mx-auto scroll-smooth ${styles.container_px}`} onSubmit={e => e.preventDefault()}>
                    <p className='text-xl mb-4'>At Arri Healthcare we are always looking for talented and compassionate Direct Support Professionals and Caregivers.<br />Please submit your resume to be considered for one of our open positions.</p>

                    <InputField placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <InputField placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                    <InputField type='date' placeholder='Date of Birth' value={DOB} onChange={e => setDOB(e.target.value)} />
                    <InputField placeholder='City' value={city} onChange={e => setCity(e.target.value)} />
                    <InputField type='number' placeholder='Zip' value={zip} onChange={e => setZip(e.target.value)} />

                    <OptionalField label="Do you have a valid driver's license?" isYes={hasDrivingLicense} setOption={setHasDrivingLicense} />
                    <OptionalField label="Are you allowed to work in the US and can provide a document to prove this?" isYes={hasUSADocument} setOption={setHasUSADocument} />
                    <OptionalField label="Do you have a high school diploma?" isYes={hasHighSchoolDiploma} setOption={setHasHighSchoolDiploma} />
                    {/* <OptionalField required={false} label="List any related certifications" isYes={hasCertifications} setOption={setHasCertifications} /> */}
                    <OptionalField label="Do you have a reliable means of transportation with active insurance for this job?" isYes={hasReliableTransportation} setOption={setHasReliableTransportation} />
                    <OptionalField label="Do you agree to undergo a background check for the position you are applying to?" isYes={isAgreedForBackgroundCheck} setOption={setIsAgreedForBackgroundCheck} />
                    <OptionalField label="Do you understand that you may be required to take a 4 -hour training course for this position?" isYes={agreeForTrainingCourse} setOption={setAgreeForTrainingCourse} />



                    <InputField required={false} placeholder='List any related certifications' value={certifications} onChange={e => setCertifications(e.target.value)} />
                    <InputField placeholder='How soon are you available to start work?' value={howSoonAvailable} onChange={e => setHowSoonAvailable(e.target.value)} />

                    {/* <div className='bg-[#e5e5e5] h-[0.1px]'></div> */}
                    <InputField placeholder='Howmuch is your expected hourly pay?' value={howHourlyPayExpectation} onChange={e => setHourlyPayExpectation(e.target.value)} />

                    {/* <OptionalField label="Do you Have a resume?" isYes={hasResume} setOption={setHasResume} /> */}

                    {/* {
                        hasResume && <input type='file' />
                    } */}


                    <div className='flex flex-col gap-1'>
                        <label className='text-[#777]- text-black text-xl'>Upload your resume <b className='text-[#fe8f01]'>*</b></label>
                        {/* @ts-ignore */}
                        <input ref={resumeRef} onChange={e => {
                            // @ts-ignore
                            let file = e.target.files[0];
                            setResume(file);
                        }} type='file' />
                    </div>

                    <AgreementCheckButton label='Apply without Resume' isChecked={isWithoutResume} onClick={() => setIsWithoutResume(!isWithoutResume)} />

                    <div className='flex justify-center mt-2 text-lg'>



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
                                            formData.append("dob", DOB);
                                            formData.append("city", city);
                                            formData.append("zipCode", zip);
                                            formData.append("certificates", certifications);
                                            formData.append("availableForWork", howSoonAvailable);
                                            formData.append("hourlyPayExpectation", howHourlyPayExpectation);
                                            formData.append("applyWithoutResume", `${isWithoutResume}`);
                                            formData.append("hasDrivingLicense", hasDrivingLicense ? "yes" : "no");
                                            formData.append("allowedForWork", hasUSADocument ? "yes" : "no");
                                            formData.append("hasHighSchoolDiploma", hasHighSchoolDiploma ? "yes" : "no");
                                            formData.append("hasTransportationInsuranceForJob", hasReliableTransportation ? "yes" : "no");
                                            formData.append("agreeForUndergoBackgroundCheck", isAgreedForBackgroundCheck ? "yes" : "no");
                                            formData.append("agreeFor4HourTraining", agreeForTrainingCourse ? "yes" : "no");


                                            if (!isWithoutResume) {
                                                // @ts-ignore
                                                formData.append("resume", resume);
                                            }

                                            post("/api/career", formData).then(result => {
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
                                    return new Promise((resolve, reject) => setTimeout(reject, 1000));
                                })(),
                                {
                                    loading: 'Submitting...',
                                    success: <b>Submitted!</b>,
                                    error: <b>Could not submit.</b>,
                                }
                            );
                        }} type='submit' className='px-10 py-2 text-white select-none rounded-full bg-primaryBlue active:bg-[#0f5a6d]'>Sumit</button> */}
                    </div>




                </form>
            </div>
        </>
    )
}


const OptionalField = ({ label, isYes, setOption, required = true }: { label: string, isYes: boolean | null, required?: boolean, setOption: Function }) => {

    const OptionButton = ({ optionText, isSelected, onClick }: { optionText: string, onClick: Function, isSelected: boolean | null }) => {
        return <button type='button' className='flex items-center p-3 justify-between border-b rounded active:bg-[#e5e5e5]' onClick={e => onClick()}>
            <span className='text-xl leading-loose'>{optionText}</span>
            <div className={`min-w-[20px] min-h-[20px] rounded-full border border-[#777] flex items-center justify-center`}>
                <div className={`w-[50%] aspect-square bg-primaryBlue transition-all rounded-full ${isSelected === true && isSelected !== null ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
        </button>
    }

    return <div className='flex flex-col gap-1'>
        <label className='text-[#777]- text-black text-xl'>{label} {required && <b className='text-[#fe8f01]'>*</b>}</label>

        <div className='flex flex-col'>
            <OptionButton optionText='Yes' isSelected={isYes} onClick={() => setOption(true)} />
            <OptionButton optionText='No' isSelected={isYes === false} onClick={() => setOption(false)} />
            {
                // OPTIONS.map((option, index) => {
                //     return <OptionButton key={index} optionText={option} isSelected={currentSelectedOption === option} />
                // })
            }
        </div>
    </div>
}

export default Career;


