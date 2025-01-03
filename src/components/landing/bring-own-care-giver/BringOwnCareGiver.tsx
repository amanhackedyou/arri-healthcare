import Heading from '@/components/GLOBAL/Heading'
import Link from 'next/link'
import React from 'react'

const BringOwnCareGiver = () => {
    return (
        <section id='get-personalized-quote' className='bg-white'>
            {/* <h3 className='text-xl font-semibold text-center mb-2 px-4'>Bring your own care giver</h3> */}
            <Heading text='Do You Have a Caregiver?' />

            <div className='relative w-full overflow-hidden mt-1'>
                <img className='rounded w-full' src="/assets/images/bring-own-care-giver/img1.jpg" alt="Bring yoour own care giver." />
                <div className='w-full flex justify-start px-2 overflow-hidden h-full z-10 bg-gradient-to-l text-black  from-[#00000000] via-[#00000000]- to-[#ffffffbb]  absolute top-0 left-0'>
                    <div className='flex flex-col bg-red-50- absolute h-full max-w-[60%] justify-center'>
                        <div className='flex justify-center w-full'>
                            <img className='w-5' src="/assets/images/logo_icon.svg" alt="Logo icon" />
                        </div>

                        <p className=' text-lg font-bold leading-none mt-2 text-center'>If you have a caregiver,</p>
                        <p className=' text-base mt-1 text-center font-bold'>Bring them with you...</p>
                        <p className=' text-sm mt-3 text-center w-full font-semibold italic'>We Want to keep the caregiver you love on your team. Now they can get paid while they care for you.</p>
                        <div className='flex justify-center w-full mt-2'>
                            <Link href="/contact_us" className='text-base px-3 py-2 leading-none bg-[#FE8F01] w-fit rounded-full font-bold'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BringOwnCareGiver