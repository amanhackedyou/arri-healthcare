import React from 'react'

const ServicesWeOffer = () => {
    return (
        <section className='px-6 bg-transparent font-rubik pt-4 flex flex-col py-2 items-center gap-2'>
            {/* <h2 className='text-2xl text-center font-breeSerif font-bold'>Services we offer</h2>
            <hr className="border-slate-400 border-t-[1px] mt-4 mx-4" /> */}

            {/* <p className='mt-2 text-center'>We offer a range of services tailored to your needs. If you require something specific, please let us know, and we&#39;ll do our best to accommodate you.</p> */}

            <div className='flex flex-col w-full '>
                <h2 className='text-xl font-bold'>Services we offer</h2>
            </div>

            <ServiceCard title='Out-of-home Services' dotColor='#fe8f01' list={["Transportation", "Shopping", "Errands", "Outings"]} />
            <ServiceCard title='In-home-services' dotColor='#096982' list={["Companionship", "Medication Reminders", "Assistance with Walking & Mobility", "Assistance Bathing, Toileting, & Dressing", "Transferring Assistance", "Cueing & Reminders of Daily Living", "Light Housekeeping", "Cooking & Feeding Help", "Safety Monitoring & Supervision", "Turning & Repositioning"]} />

        </section>
    )
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, list, dotColor }) => {
    const ListItem = ({ text }: { text: string }) => {
        return <div className='flex items-center gap-2'>
            <div style={{ background: dotColor }} className='w-[5px] aspect-square rounded-full'></div>
            <span className='font-light'>{text}</span>
        </div>
    }

    return <div className='w-full bg-white py-8 px-5 rounded shadow-sm'>
        <h3 className='text-primary text-xl font-semibold'>{title}</h3>

        <div className='flex flex-col gap-1 mt-4'>
            {
                list.map((text, i) => {
                    return <ListItem key={i} text={text} />
                })
            }
        </div>
    </div>
}


interface ServiceCardProps {
    title: string,
    dotColor: string,
    list: string[]
}

export default ServicesWeOffer