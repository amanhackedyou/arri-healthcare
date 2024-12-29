import React from 'react'

const MapView = ({ hasInternalPadding = false, isCurvy = false }: { hasInternalPadding?: boolean, isCurvy?: boolean }) => {
    return (
        <section className={`w-full mt-6 h-80 ${hasInternalPadding ? 'px-4' : ''}`}>
            <div className={`${isCurvy ? 'rounded' : ''} overflow-hidden h-full`}>
                <iframe
                    style={{ border: '0', width: '100%', height: '100%' }}
                    loading="lazy"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419837.52189710713!2d-83.34908199546425!3d40.06729458881058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838892d0ed41947%3A0x49b01d6cc2ef668e!2sColumbus%20Metropolitan%20Area%2C%20OH%2C%20USA!5e1!3m2!1sen!2sin!4v1735498159551!5m2!1sen!2sin">
                    {/* // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740.3757605003626!2d-82.8741430818095!3d39.86524266108514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88387db7e09fce8f%3A0x324d3adc1035c1b9!2s5739%20Little%20Red%20Rover%20St%2C%20Groveport%2C%20OH%2043125%2C%20USA!5e1!3m2!1sen!2sin!4v1734816494953!5m2!1sen!2sin"> */}
                </iframe>
            </div>
        </section>
    )
}


{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419837.52189710713!2d-83.34908199546425!3d40.06729458881058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838892d0ed41947%3A0x49b01d6cc2ef668e!2sColumbus%20Metropolitan%20Area%2C%20OH%2C%20USA!5e1!3m2!1sen!2sin!4v1735498159551!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */ }
export default MapView