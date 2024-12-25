import React from 'react'

const Heading = ({ text }: { text: string }) => {
    return (
        <div className='flex items-center justify-center gap-2 w-full pt-6 pb-4'>
            <img className='h-6' src="/assets/images/logo_icon.svg" />
            <h2 className='font-rubik mt-1 leading-none text-2xl font-bold'>{text}</h2>
        </div>
    )
}

export default Heading;