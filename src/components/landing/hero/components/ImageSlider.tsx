import React from "react";
import Slider from "react-slick";

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
        <Slider className="bg-white" {...settings}>
            {
                images.map((src, i) => {
                    return <ImageView key={i} src={src} />
                })
            }
        </Slider>
    );
}




// Props interfaces
interface ImageViewProps {
    src: string
}