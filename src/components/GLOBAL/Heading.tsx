import React from 'react'

const Heading = ({ text }: { text: string }) => {
    return (
        <div className='flex items-center justify-center gap-2 md:gap-4 pt-6 pb-4'>
            <img className='h-8 md:h-12' src="/assets/images/logo_icon.svg" />
            <h2 className='mt-1 leading-none text-2xl md:text-5xl font-bold'>{text}</h2>
        </div>
    )
}

export default Heading;