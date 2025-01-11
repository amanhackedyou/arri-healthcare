import React from 'react'
import Hero from '../landing/hero/Hero'

const HeroSectionWithTitle = ({ title }: { title: string }) => {
    return (
        <section className='flex flex-col items-center- bg-primary lg:bg-transparent'>
            <Hero />
            <h1 className='text-white font-bold text-3xl uppercase tracking-widest lg:bg-primary text-center py-3 px-2'>{title}</h1>
        </section>
    )
}

export default HeroSectionWithTitle