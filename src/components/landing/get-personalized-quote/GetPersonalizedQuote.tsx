"use client";

import Heading from '@/components/GLOBAL/Heading';
import InputField from '@/components/GLOBAL/InputField';
import { useRouter } from 'next/navigation';
import React, { ChangeEventHandler, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const GetPersonalizedQuote = () => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [hoursAndDays, setHoursAndDays] = useState<string>("");
    const [zipCode, setZipCode] = useState<string>("");
    // const [daysPerWeek, setDaysPerWeek] = useState<string>("");
    const [selectedDropdownOptions, setSelectedDropdownOptions] = useState<string[]>([]);

    const handleChange = (value: string) => {

        setSelectedOption(value);
    };


    const router = useRouter();

    return (
        <section id='get_personalized_quote_seeking_section' className='bg-[#f1fdff]- font-medium bg-transparent px-4 md:px-12 py-3 md:pt-12'>

            {/* <h2 className='font-rubik text-xl font-bold text-center'>Get a personalized Quote</h2> */}
            <Heading text='Get a Personalized Quote' />

            <div className='flex flex-col gap-2 mt-2'>
                <div className='flex flex-col md:flex-row gap-2 md:gap-12 w-full'>
                    <label id='get_personalized_quote_seeking_caregiver_button' className="cursor-pointer whiteButtonHover md:w-1/3 text-lg flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm transition-shadow duration-200 focus-within:ring focus-within:ring-[#096982] font-medium focus-within:ring-offset-2">
                        <input
                            type="radio"
                            name="option"
                            value="Seeking a caregiver"
                            checked={selectedOption === "Seeking a caregiver"}
                            onChange={() => handleChange("Seeking a caregiver")}
                            className="hidden peer"
                        />
                        <div className="w-5 h-5 rounded-full border border-gray-400 peer-checked:border-[#096982] peer-checked:bg-primaryBlue flex items-center justify-center">
                            {selectedOption === "Seeking a caregiver" && (
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            )}
                        </div>
                        <span className="text-black font-medium">
                            I need a caregiver
                        </span>
                    </label>

                    <label id='get_personalized_quote_seeking_dsp_caregiver_job_button' className="cursor-pointer whiteButtonHover md:w-1/3 text-lg flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm transition-shadow duration-200 focus-within:ring focus-within:ring-[#096982] focus-within:ring-offset-2">
                        <input
                            type="radio"
                            name="option"
                            value="Seeking a caregiver job"
                            checked={selectedOption === "Seeking DSP/Caregiver job"}
                            onChange={() => handleChange("Seeking DSP/Caregiver job")}
                            className="hidden peer"
                        />
                        <div className="w-5 h-5 rounded-full border border-gray-400 peer-checked:border-[#096982] peer-checked:bg-primaryBlue flex items-center justify-center">
                            {selectedOption === "Seeking DSP/Caregiver job" && (
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            )}
                        </div>
                        <span className="text-black font-medium">
                            I need a DSP/Caregiver job
                        </span>
                    </label>
                </div>



                {
                    selectedOption !== "Seeking DSP/Caregiver job" &&
                    <>

                        <DropDownView selectedOptions={selectedDropdownOptions} setSelectedOptions={setSelectedDropdownOptions} />
                        <div className='flex flex-col gap-2 md:flex-row md:gap-12'>
                            <InputField placeholder='First name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                            <InputField placeholder='Last name' value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>

                        <div className='flex flex-col gap-2 md:flex-row md:gap-12'>
                            <InputField type='number' placeholder='Phone Number' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                            <InputField type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className='flex flex-col gap-2 md:flex-row md:gap-12'>
                            <InputField type='text' placeholder='How many hours/days per week' value={hoursAndDays} onChange={e => setHoursAndDays(e.target.value)} />
                            <InputField type='number' placeholder='Zip code' value={zipCode} onChange={e => setZipCode(e.target.value)} />
                        </div>



                    </>
                }
                <div className='flex justify-center mt-8'>
                    <button onClick={e => {
                        if (selectedOption === "Seeking DSP/Caregiver job") {
                            return router.push("/career")
                        }

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
                    }} className='px-10 py-2 text-white rounded-full text-lg font-semibold bg-primaryBlue'>{selectedOption !== "Seeking DSP/Caregiver job" ? "Submit" : "Submit Resume"}</button>
                </div>





            </div>
        </section>
    );
}




const DropDownView = ({ selectedOptions, setSelectedOptions }: { selectedOptions: string[], setSelectedOptions: Function }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);


    const OPTIONS = [
        "Transportation & Errands (shopping and outings)",
        "Companionship(Connecting, activities)",
        "Personal Care ( bathing, toileting, dressing)",
        "Mobility & Daily Living  (walking/transferring  assistance)",
        "Household Help ( light housekeeping, cooking, and feeding)",
        "Medication Reminders and electronics use help",
        "Other specific needs",
    ];

    const OptionView = ({ text, isSelected, index }: { text: string, index: number, isSelected: boolean }) => {
        return <button onClick={e => {
            let newOptions: string[] = JSON.parse(JSON.stringify(selectedOptions));

            if (selectedOptions.includes(text)) {
                newOptions = newOptions.filter(element => element !== text);
            } else {
                newOptions.push(text);
            }

            setSelectedOptions(newOptions);

        }} className={`w-full whiteButtonHover cursor-pointer py-3 px-4 ${index != 0 ? 'border-t' : ''} flex gap-4 items-center active:bg-[#e5e5e5] transition-all`}>

            <div className={`min-w-[20px] min-h-[20px] rounded-full border border-[#777] flex items-center justify-center`}>
                <div className={`w-[50%] aspect-square bg-primaryBlue transition-all rounded-full ${isSelected ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>

            <span className='text-left'>
                {text}
            </span>
        </button>
    }

    return <div onMouseDown={e => {

        // @ts-ignore
        if (e.target.classList.contains("MAIN_CONTAINER") && isOpened === true) {
            return setIsOpened(false);
        }

        setIsOpened(true);

    }} onMouseLeave={e => {
        setIsOpened(false);

    }} className='flex MAIN_CONTAINER whiteButtonHover cursor-pointer bg-white w-full text-lg items-center gap-4 relative py-4 px-4 border rounded-lg shadow-sm transition-shadow duration-200'>
        <span className='text-xl text-black pointer-events-none'>
            {
                isOpened ? <IoIosArrowUp /> :
                    <IoIosArrowDown />
            }
        </span>

        <span className='font-medium pointer-events-none'>Select the Services You Need</span>

        <div className={`w-full flex-col max-h-[50vh] overflow-hidden overflow-y-auto rounded-lg bg-white shadow left-0 top-16 absolute ${isOpened ? 'flex' : 'hidden'}`}>
            {
                OPTIONS.map((optionText, i) => {
                    return <OptionView text={optionText} index={i} isSelected={selectedOptions.includes(optionText)} key={i} />
                })
            }
        </div>
    </div>
}


export default GetPersonalizedQuote;