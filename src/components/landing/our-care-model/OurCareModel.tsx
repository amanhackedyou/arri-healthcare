import React from 'react';
import styles from './our-care-model.module.css';
import Heading from '@/components/GLOBAL/Heading';

const OurCareModel = () => {
    return (
        <section className='bg-white px-4- py-3- relative'>
            {/* <div className='flex items-center gap-2 mb-2 justify-center'>
                <img className='h-5' src="/assets/images/logo_icon.svg" />
                <h2 className='font-rubik text-xl font-bold'>Our care model</h2>
            </div> */}

            <div className='bg-primaryBg h-6 w-full top-0 left-0 rounded-b-[100%]'></div>

            <div className='px-4'>
                <Heading text='Our Care Model' />
            </div>


            <div className='flex flex-col gap-6 md:hidden'>
                <p className={`${styles.para} px-4`}>At Arri Healthcare, our care model is built on compassion, respect, and empowerment. We take a holistic approach, addressing not just the physical needs of our clients but also their emotional and social well-being.</p>
                <img className='h-[220px] w-full object-top object-cover' src="/assets/images/hero/our-care-model/img1.jpg" alt="Our care model" />
                <p className={`${styles.para} px-4`}>We empower individuals to maintain their independence and dignity while providing the personalized support they deserve. As advocates for our clients, we ensure their voices are heard and their needs are met with urgency and care.</p>
                <p className={`${styles.para} px-4`}>By fostering trust and building meaningful connections, we create a nurturing environment where every individual can thrive. Our care is more than a service - it&#39;s a partnership rooted in understanding and unwavering commitment.</p>
            </div>


            <div className='hidden gap-6 md:flex px-4 h-[40vh] items-center'>
                <img className='h-[220px]- rounded-3xl h-full w-full object-top object-cover' src="/assets/images/hero/our-care-model/img1.jpg" alt="Our care model" />

                <div className='flex flex-col gap-6 overflow-auto h-full custom_scroll'>
                    <p className={`${styles.para} px-4 mb-5`}>At Arri Healthcare, our care model is built on compassion, respect, and empowerment. We take a holistic approach, addressing not just the physical needs of our clients but also their emotional and social well-being.</p>
                    <p className={`${styles.para} px-4`}>We empower individuals to maintain their independence and dignity while providing the personalized support they deserve. As advocates for our clients, we ensure their voices are heard and their needs are met with urgency and care.</p>
                    <p className={`${styles.para} px-4`}>By fostering trust and building meaningful connections, we create a nurturing environment where every individual can thrive. Our care is more than a service - it&#39;s a partnership rooted in understanding and unwavering commitment.</p>

                </div>
            </div>
        </section>
    )
}

export default OurCareModel