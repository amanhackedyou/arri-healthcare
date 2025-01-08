import React from "react";
import Slider from "react-slick";
import styles from '../hero.module.css'
import Link from "next/link";

export default function ImageSlider({ images, oriantation }: { images: string[], oriantation: string }) {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const ImageView: React.FC<ImageViewProps> = ({ src }) => {
        return <div className={`w-full ${oriantation === "portrait" ? 'h-[25rem]' : 'h-64'}  bg-white`}>
            <img className="w-full h-full object-cover object-center" src={src} />
        </div>
    }


    return (
        <section className="w-full overflow-hidden- relative">
            {oriantation === "portrait" && <div className="w-full h-full text-white z-10 flex flex-col items-center justify-center absolute top-0 left-0 bg-[#00000080] pointer-events-none">
                <h2 style={{
                    // textShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)'
                    filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5))'
                }} className=" font-extrabold text-5xl text-center leading-[55px]">Delivering Exeptional<br />Care,<br /><span className="font-semibold">Always.</span></h2>

                <div className="w-[80%] gap-3 px-6 flex flex-col items-center shadow-md py-4 bg-white rounded-lg absolute -bottom-[15%] z-20">
                    <Link href="/#get_personalized_quote_seeking_section" className={`${styles.cta} pointer-events-auto bg-[#e6b400]- bg-gradient-to-r from-[#fe8f01] to-[#ffac3f]`}>
                        <span className="font-semibold leading-none text-lg">Get a personalized quote</span>
                    </Link>


                    <Link href="/career" className="text-black outline-primaryBlue outline w-full flex items-center justify-center h-11 rounded-full  pointer-events-auto font-semibold text-lg leading-none">DSP/Caregiver jobs</Link>
                    {/* <div className="flex items-center gap-2"> */}
                    {/* </div> */}
                </div>
            </div>}


            <Slider className="bg-white" {...settings}>
                {
                    images.map((src, i) => {
                        return <ImageView key={i} src={src} />
                    })
                }
            </Slider>
        </section>
    );
}




// Props interfaces
interface ImageViewProps {
    src: string
}