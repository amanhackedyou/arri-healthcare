import React from 'react'

const BringOwnCareGiver = () => {
    return (
        <section className='bg-white pt-6'>
            <h3 className='text-xl font-semibold text-center mb-2 px-4'>Bring your own care giver</h3>
            <div className='relative w-full overflow-hidden mt-1'>
                <img className='rounded w-full' src="/assets/images/bring-own-care-giver/img1.jpg" alt="Bring yoour own care giver." />
                <div className='w-full flex justify-start px-2 overflow-hidden h-full z-10 bg-gradient-to-l text-black  from-[#00000000] via-[#00000000]- to-[#ffffffbb]  absolute top-0 left-0'>
                    <div className='flex flex-col bg-red-50- absolute h-full max-w-[48%] justify-center'>
                        <div className='flex justify-center w-full'>
                            <img className='w-4' src="/assets/images/logo_icon.svg" alt="Logo icon" />
                        </div>
                        <p className=' text-[14px] font-medium leading-none mt-2'>Chosen your caregiver??</p>
                        <p className=' text-[12px] mt-1 text-center'>Bring them with you!</p>
                        <p className=' text-[12px] mt-3 text-center w-full font-medium italic'>We Want to keep the caregiver you love on your team. Now they can get paid while they care for you.</p>
                        <div className='flex justify-center w-full mt-2'>
                            <button className='text-sm px-3 py-1 bg-[#FE8F01] w-fit rounded-full font-medium'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BringOwnCareGiver