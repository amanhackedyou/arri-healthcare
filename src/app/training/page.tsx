import HeroSectionWithTitle from '@/components/GLOBAL/HeroSectionWithTitle';
import Header from '@/components/header/Header';
import React from 'react'

const Training = () => {
    return (
        <>
            <Header />
            <HeroSectionWithTitle title='Training Programs' />

            <div className='flex flex-col gap-4 p-4'>
                <div className='flex flex-col gap-3 items-center'>
                    <h2 className='text-2xl w-full mb-2 text-primaryBlue'>Direct Support Professional (DSP) Initial Training</h2>
                    <p className='text-lg'>If you are a first time DSP, Ohio DODD requires that  you sign up for and complete this 4-hour Initial DSP training course. If you are a DSP who is certified and currently providing services, you do not have to sign up for this training.</p>
                    <img className='w-[70%]' src="/assets/images/training/img1.png" alt="DODD Programs Direct Support Professional Image" />
                    <a href='https://mylearning.dodd.ohio.gov/' className='px-4 py-2 bg-primaryYellow rounded-full font-medium text-white'>Go to Training</a>
                </div>
            </div>
        </>
    )
}

export default Training;