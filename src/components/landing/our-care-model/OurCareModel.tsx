import React from 'react';
import styles from './our-care-model.module.css';

const OurCareModel = () => {
    return (
        <section className='bg-white px-4 py-4'>
            <div className='flex items-center gap-2 mb-2 justify-center'>
                <img className='h-5' src="/assets/images/logo_icon.svg" />
                <h2 className='font-rubik text-xl font-bold'>Our care model</h2>
            </div>

            <div className='flex flex-col gap-6'>
                <p className={styles.para}>At Arri Healthcare, our care model is built on compassion, respect, and empowerment. We take a holistic approach, addressing not just the physical needs of our clients but also their emotional and social well-being.</p>
                <img className='rounded' src="/assets/images/hero/our-care-model/img1.jpg" alt="Our care model" />
                <p className={styles.para}>We empower individuals to maintain their independence and dignity while providing the personalized support they deserve. As advocates for our clients, we ensure their voices are heard and their needs are met with urgency and care.</p>
                <p className={styles.para}>By fostering trust and building meaningful connections, we create a nurturing environment where every individual can thrive. Our care is more than a service - it&#39;s a partnership rooted in understanding and unwavering commitment.</p>
            </div>
        </section>
    )
}

export default OurCareModel