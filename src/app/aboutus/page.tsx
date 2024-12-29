import Header from '@/components/header/Header'
import React from 'react'
import styles from './styles.module.css';
import Hero from '@/components/landing/hero/Hero';
import HeroSectionWithTitle from '@/components/GLOBAL/HeroSectionWithTitle';

const AboutUs = () => {
    return (
        <>
            <Header />
            <HeroSectionWithTitle title='About Us' />
            <hr className="border-slate-400 border-t-[1px] mx-4" />

            <div className={styles.body}>

                <div className='flex flex-col gap-4 mt-4'>
                    <h2 className={styles.heading}>Who We Are</h2>
                    <p className=''>
                        <span className=''>At Arri Healthcare, we are more than caregivers -</span> we are companions, advocates, and extended family. As a licensed non-medical home health company, we specialize in providing compassionate support to individuals with developmental disabilities, elderly clients, and those with unique medical needs. Every client is treated with the utmost dignity, respect, and warmth, ensuring their needs are met with kindness and tailored care. Our mission is to create a safe, nurturing environment where every individual feels valued, loved, and empowered to thrive. At Arri Healthcare, your well-being is our heart&#39;s work.
                    </p>
                </div>

                <div className='flex flex-col gap-3'>
                    <h2 className={styles.heading}>MISSION STATEMENT</h2>
                    <p className=''>
                        Our mission is to provide community-based services that support person-centered to improve the quality of life for individuals as families.
                    </p>
                </div>

                <div className='flex flex-col gap-3'>
                    <h2 className={styles.heading}>VISION STATEMENT</h2>
                    <p className=''>
                        We envision to create a  comfortable enviroment and ensure health needs to gain higher awareness, well-being, creativity and joy.
                    </p>
                </div>

                <div className='flex flex-col gap-3'>
                    <h2 className={styles.heading}>OUR VALUES</h2>
                    {/* <p className=''>
                        We envision to create a  comfortable enviroment and ensure health needs to gain higher awareness, well-being, creativity and joy.
                    </p> */}

                    <ul className='list-disc px-8 flex flex-col gap-2'>
                        <li><b>Services: </b>providing a helping hand that allows our residents to feel valued and cared for by upholding their sense of dignity.</li>
                        <li><b>Trust: </b>maintaining honest lines of communication with safe and competent care that protects privacy.</li>
                        <li><b>Integrity: </b>fostering an undivided attitude directed towards doing the right thing the first time around, every time.</li>
                        <li><b>Recpect: </b>: promoting esteem and acceptance for and towards everyone we come in contact with.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutUs