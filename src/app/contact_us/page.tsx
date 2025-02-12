import React from 'react'
import ContactUs from './components/ContactUs'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Contact Us - Arri Healthcare Services",
    description: "Contact Arri Healthcare Services to get the best in home care for your loved ones.",
};


const page = () => {
    return <ContactUs />
}

export default page