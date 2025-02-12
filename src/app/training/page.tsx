
import React from 'react'
import Training from './Training'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Training - Arri Healthcare Services",
    description: "Complete this 4 - hour DSP training to begin your career as a direct support professional with Arri Healthcare Services.",
};


const page = () => {
    return <Training />
}

export default page