import React from 'react'

const MapView = ({ hasInternalPadding = false }: { hasInternalPadding?: boolean }) => {
    return (
        <section className={`w-full mt-6 h-80 ${hasInternalPadding ? 'px-4' : ''}`}>
            <div className='rounded overflow-hidden h-full'>
                <iframe
                    style={{ border: '0', width: '100%', height: '100%' }}
                    loading="lazy"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740.3757605003626!2d-82.8741430818095!3d39.86524266108514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88387db7e09fce8f%3A0x324d3adc1035c1b9!2s5739%20Little%20Red%20Rover%20St%2C%20Groveport%2C%20OH%2043125%2C%20USA!5e1!3m2!1sen!2sin!4v1734816494953!5m2!1sen!2sin">
                </iframe>
            </div>
        </section>
    )
}

export default MapView