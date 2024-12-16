import React from "react";
import Slider from "react-slick";

export default function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const images = ["/assets/images/hero/slider/1.jpg", "/assets/images/hero/slider/2.jpeg", "/assets/images/hero/slider/3.jpg", "/assets/images/hero/slider/4.jpg", "/assets/images/hero/slider/5.png", "/assets/images/hero/slider/6.jpg", "/assets/images/hero/slider/7.jpg", "/assets/images/hero/slider/8.jpg"];

    return (
        <Slider {...settings}>
            {
                images.map((src, i) => {
                    return <ImageView key={i} src={src} />
                })
            }
        </Slider>
    );
}


const ImageView: React.FC<ImageViewProps> = ({ src }) => {
    return <div className="w-full h-64">
        <img className="w-full h-full object-cover object-center" src={src} />
    </div>
}


// Props interfaces
interface ImageViewProps {
    src: string
}