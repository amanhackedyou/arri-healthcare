import HeroSectionWithTitle from '@/components/GLOBAL/HeroSectionWithTitle';
import Header from '@/components/header/Header';
import React from 'react'

const Training = () => {
    return (
        <>
            <Header />
            <HeroSectionWithTitle title='Training Programs' />

            <div className='flex flex-col gap-4 p-4'>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-2xl w-full mb-2 text-primaryBlue'>Direct Support Professional (DSP) Initial Training</h2>
                    <img className='w-[70%]' src="/assets/images/training/img1.png" alt="DODD Programs Direct Support Professional Image" />
                    <a className='px-4 py-2 bg-primaryYellow rounded-full font-medium text-white'>Go to Training</a>
                </div>
            </div>
        </>
    )
}

export default Training;