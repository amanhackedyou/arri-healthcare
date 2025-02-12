import HeroSectionWithTitle from '@/components/GLOBAL/HeroSectionWithTitle';
import Header from '@/components/header/Header';
import React from 'react'

const Training = () => {
    return (
        <>
            <Header />
            <HeroSectionWithTitle title='Training Programs' />

            <div className='flex flex-col gap-4 p-4'>
                <div className='flex flex-col gap-3 items-center lg:w-[70%] lg:mx-auto'>
                    <a href='https://mylearning.dodd.ohio.gov/' target='_blank' className='text-3xl w-full font-semibold mb-2 text-primaryBlue'>Direct Support Professional (DSP) Initial Training</a>
                    <p className='text-xl'>If you are a first time DSP, Ohio DODD requires that  you sign up for and complete this 4-hour Initial DSP training course. If you are a DSP who is certified and currently providing services, you do not have to sign up for this training.</p>
                    <img className='w-[70%] lg:w-[45%]' src="/assets/images/training/img1.png" alt="DODD Programs Direct Support Professional Image" />
                    <a href='https://mylearning.dodd.ohio.gov/' target='_blank' className='px-4 py-2 bg-primaryYellow text-lg rounded-full font-semibold text-white'>Go to Training</a>
                </div>
            </div>
        </>
    )
}

export default Training;

