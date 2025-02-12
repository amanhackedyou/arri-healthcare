
import React from 'react'
import Career from './Career'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Career - Arri Healthcare Services",
    description: "Visit out careers page to apply for available direct support professional and caregiver positions",
};


const page = () => {
    return <Career />
}

export default page