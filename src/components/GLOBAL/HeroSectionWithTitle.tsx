import React from 'react'
import Hero from '../landing/hero/Hero'

const HeroSectionWithTitle = ({ title }: { title: string }) => {
    return (
        <section className='flex flex-col items-center- bg-primary'>
            <Hero />
            <h1 className='text-white font-semibold text-3xl uppercase tracking-widest text-center py-3'>{title}</h1>
        </section>
    )
}

export default HeroSectionWithTitle