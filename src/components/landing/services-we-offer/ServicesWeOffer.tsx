import React from 'react'

const ServicesWeOffer = () => {
    return (
        <section className='px-6 bg-transparent flex flex-col py-2 items-center gap-2'>
            {/* <h2 className='text-2xl text-center font-breeSerif font-bold'>Services we offer</h2>
            <hr className="border-slate-400 border-t-[1px] mt-4 mx-4" /> */}

            {/* <p className='mt-2 text-center'>We offer a range of services tailored to your needs. If you require something specific, please let us know, and we&#39;ll do our best to accommodate you.</p> */}


            <ServiceCard title='Our-of-home Services' list={["Transportation", "Shopping", "Errands", "Outings"]} />
            <ServiceCard title='In-home-services' list={["Laundry", "Light cleaning", "Home organizing", "Meal Preparation", "Personal care (Grooming, Feeding, Etc)"]} />

        </section>
    )
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, list }) => {
    interface ListItemProps {
        text: string
    }

    const ListItem: React.FC<ListItemProps> = ({ text }) => {
        return <div className='flex items-center gap-2'>
            <div className='w-[5px] aspect-square rounded-full bg-[#fe8f01]'></div>
            <span className='font-light'>{text}</span>
        </div>
    }

    return <div className='w-full bg-white py-8 px-5 rounded shadow-sm'>
        <h2 className='text-primary text-xl font-semibold'>{title}</h2>

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
    list: string[]
}

export default ServicesWeOffer