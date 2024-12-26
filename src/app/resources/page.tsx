import HeroSectionWithTitle from '@/components/GLOBAL/HeroSectionWithTitle';
import Header from '@/components/header/Header';
import React from 'react'

const Resources = () => {
    return (
        <>
            <Header />
            <HeroSectionWithTitle title='Wellness Resources' />
            <section className='flex flex-col gap-2 px-4 pt-4'>
                <p className='text-lg'>
                    Arri Healthcare Services is dedicated to supporting your health and well-being. Below, you&#39;ll find trusted resources offering guidance on home care, developmental disabilities, caregiver support, mental health, and aging. These links connect you to services and programs designed to help you and your loved ones lead healthier, more independent lives.
                </p>

                <div className='flex flex-col gap-4 py-4'>

                    <ResourceCard title='Ohio Department of Medicaid - Home Health Services' link='https://medicaid.ohio.gov' />
                    <ResourceCard title='Ohio Home Care Waiver Program' link='https://medicaid.ohio.gov/initiatives/home-and-community-based-services/ohio-home-care-waiver' />
                    <ResourceCard title='Ohio Department of Developmental Disabilities (DODD)' link='https://dodd.ohio.gov' />
                    <ResourceCard title='U.S. Department of Health and Human Services - In-Home Supportive Services' link='https://www.hhs.gov' />
                    <ResourceCard title='Centers for Medicare & Medicaid Services - Home- and Community-Based Services' link='https://www.cms.gov' />


                    <ResourceCard title='Veterans Affairs - Caregiver Support Program' link='https://www.caregiver.va.gov' />
                    <ResourceCard title='National Institute on Aging - Health Information' link='https://www.nia.nih.gov/health' />
                    <ResourceCard title='Family Caregiver Alliance' link='https://www.caregiver.org' />
                    <ResourceCard title="Alzheimer's Association" link='https://www.alz.org' />
                    <ResourceCard title='American Heart Association - Caregiver Resources' link='https://www.heart.org' />
                    <ResourceCard title='Mental Health America' link='https://www.mhanational.org' />

                </div>
            </section>
        </>
    )
}


const ResourceCard = ({ title, link }: { title: string, link: string }) => {
    return <a href={link} target='_blank' className='bg-[#f1f1f1] active:bg-[#e5e5e5] shadow flex flex-col gap-3 border rounded py-3 px-4'>
        <span className='leading-none- font-medium text-xl text-primary'>{title}</span>
        <span className='leading-none font-light'>{link.replace("https://", "")}</span>
    </a>
}

export default Resources;