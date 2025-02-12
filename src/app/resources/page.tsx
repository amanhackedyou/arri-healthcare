
import React from 'react'
import RecourcesComponent from './RecourcesComponent'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Wellness Resources - Arri Healthcare Services",
    description: "Contact Arri Healthcare Services to get the best in home care for your loved ones.",
};


const page = () => {
    return <RecourcesComponent />
}

export default page