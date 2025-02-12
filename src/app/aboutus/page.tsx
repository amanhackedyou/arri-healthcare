
import React from 'react'
import AboutUs from './AboutUs'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "About Us - Arri Healthcare Services",
    description: "Arri Healthcare Services is a non medical home health agency that provides compassionate in-home care for elderly and individuals with developmental disability  in Columbus OH and its surrounding cities.",
};


const page = () => {
    return <AboutUs />
}

export default page