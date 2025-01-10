import Heading from '@/components/GLOBAL/Heading'
import React from 'react'

const ServicesWeOffer = () => {
    return (
        <section id='services-we-offer' className='px-4 md:px-12 md:pt-12 bg-transparent flex flex-col py-2 items-center gap-2'>
            {/* <h2 className='text-2xl text-center font-breeSerif font-bold'>Services we offer</h2>
            <hr className="border-slate-400 border-t-[1px] mt-4 mx-4" /> */}

            {/* <p className='mt-2 text-center'>We offer a range of services tailored to your needs. If you require something specific, please let us know, and we&#39;ll do our best to accommodate you.</p> */}

            {/* <div className='flex items-center justify-center gap-2 mb-4 '>
                <img className='h-5' src="/assets/images/logo_icon.svg" />
                <h2 className='text-xl font-bold'>Services we offer</h2>

            </div> */}

            <Heading text="Services We Offer" />


            {/* <ServiceCard title='Out-of-home Services' dotColor='#fe8f01' list={["Transportation: We provide reliable and friendly transportation to ensure you or your loved ones reach appointments, events, or visits safely and comfortably.", "Shopping: Whether it's groceries or essentials, we'll accompany you or your loved ones to make shopping stress-free and enjoyable.", "Errands: Let us assist with errands, ensuring tasks are completed efficiently while keeping your preferences a priority.", "Outings: We accompany you or your loved ones on outings, helping create moments of joy and fostering meaningful connections."]} /> */}
            {/* <ServiceCard title='In-home-services' dotColor='#096982' list={["Companionship: We're here to offer heartfelt companionship, creating a friendly and supportive presence that brightens your day.", "Medication Reminders: We'll ensure you or your loved ones take medications on time, promoting health and peace of mind.", "Assistance with Walking & Mobility: With patience and care, we provide the support you or your loved ones need to move safely and confidently.", "Assistance Bathing, Toileting, & Dressing: Our caregivers offer respectful and compassionate assistance, making these essential tasks as comfortable as possible.", "Transferring Assistance: We provide safe and gentle help to ensure you or your loved ones move securely and comfortably.", "Cueing & Reminders of Daily Living: We offer friendly prompts to help you or your loved ones maintain daily routines and stay on track.", "Light Housekeeping: We help keep your home clean and welcoming, so you or your loved ones feel comfortable and cared for.", "Cooking & Feeding Help: With care and attention, we prepare meals and assist with feeding to ensure a pleasant dining experience.", "Safety Monitoring & Supervision: We keep a watchful eye to ensure the safety and well-being of you or your loved ones at all times.", "Turning & Repositioning: Our gentle assistance helps prevent discomfort and promotes better health for those with limited mobility."]} /> */}

            <div className='flex flex-col gap-2 md:gap-6'>
                <ServiceCard thumbnailScr='/assets/images/landing/services-we-offer/2.jpg' title='In-home-services' dotColor='#096982' services={[
                    {
                        title: "Companionship",
                        description: "We're here to offer heartfelt companionship, creating a friendly and supportive presence that brightens your day."
                    },

                    {
                        title: "Medication Reminders",
                        description: "We'll ensure you or your loved ones take medications on time, promoting health and peace of mind."
                    },

                    {
                        title: "Assistance with Walking & Mobility",
                        description: "With patience and care, we provide the support you or your loved ones need to move safely and confidently."
                    },

                    {
                        title: "Assistance Bathing, Toileting, & Dressing",
                        description: "Our caregivers offer respectful and compassionate assistance, making these essential tasks as comfortable as possible."
                    },

                    {
                        title: "Transferring Assistance",
                        description: "We provide safe and gentle help to ensure you or your loved ones move securely and comfortably."
                    },

                    {
                        title: "Cueing & Reminders of Daily Living",
                        description: "We offer friendly prompts to help you or your loved ones maintain daily routines and stay on track."
                    },

                    {
                        title: "Light Housekeeping",
                        description: "We help keep your home clean and welcoming, so you or your loved ones feel comfortable and cared for."
                    },

                    {
                        title: "Cooking & Feeding Help",
                        description: "With care and attention, we prepare meals and assist with feeding to ensure a pleasant dining experience."
                    },

                    {
                        title: "Safety Monitoring & Supervision",
                        description: "We keep a watchful eye to ensure the safety and well-being of you or your loved ones at all times."
                    },

                    {
                        title: "Turning & Repositioning",
                        description: "Our gentle assistance helps prevent discomfort and promotes better health for those with limited mobility."
                    },

                ]} />

                <ServiceCard layoutDirection='left-to-right' thumbnailScr='/assets/images/landing/services-we-offer/1.jpg' title='Out-of-home Services' dotColor='#fe8f01' services={[
                    {
                        title: "Transportation",
                        description: "We provide reliable and friendly transportation to ensure you or your loved ones reach appointments, events, or visits safely and comfortably."
                    },
                    {
                        title: "Shopping",
                        description: "Whether it's groceries or essentials, we'll accompany you or your loved ones to make shopping stress-free and enjoyable."
                    },
                    {
                        title: "Errands",
                        description: "Let us assist with errands, ensuring tasks are completed efficiently while keeping your preferences a priority."
                    },
                    {
                        title: "Outings",
                        description: "We accompany you or your loved ones on outings, helping create moments of joy and fostering meaningful connections."
                    },
                ]} />
            </div>



        </section>
    )
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, services, dotColor, thumbnailScr, layoutDirection = "right-to-left" }) => {
    const ListItem = ({ service }: { service: Service }) => {
        // 8594
        return <div className={`flex items-start font-medium gap-3 text-xl`}>
            {/* <div style={{ background: dotColor }} className='min-w-[5px] mt-[0.55rem] aspect-square rounded-full'></div> */}
            <span style={{
                color: dotColor
            }} className="">&#62;&#62;</span>
            <p className=''><b className='font-bold'>{service.title}</b>: {service.description}</p>
        </div>
    }

    return <div className={`w-full bg-white md:rounded-3xl md:overflow-hidden md:pr-4- shadow-md md:flex ${layoutDirection === "left-to-right" ? "flex-row-reverse pl-4" : ""} md:gap-4 md:h-[45vh]`}>
        <img className={` h-[220px] rounded-t-md md:rounded-tl-none w-full object-center object-cover md:max-w-[40%] md:h-full  ${layoutDirection === "right-to-left" ? "md:rounded-l-3xl" : ""}`} src={thumbnailScr} />

        <div className='pb-8 pt-4 px-5 h-full overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-[#fff] dark:[&::-webkit-scrollbar-track]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-primaryBlue dark:[&::-webkit-scrollbar-thumb]:rounded-full'>
            <h3 className='text-primary text-2xl font-bold'>{title}</h3>

            <div className='flex flex-col gap-3 md:gap-4 mt-4'>
                {
                    services.map((service, i) => {
                        return <ListItem key={i} service={service} />
                    })
                }
            </div>
        </div>

    </div>
}


interface Service {
    title: string;
    description: string;
}

interface ServiceCardProps {
    title: string;
    dotColor: string;
    thumbnailScr: string;
    services: Service[]; // Array of objects adhering to the Service interface
    layoutDirection?: "right-to-left" | "left-to-right";
}

export default ServicesWeOffer