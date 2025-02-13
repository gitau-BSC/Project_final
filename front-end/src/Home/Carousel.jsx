//Carousel.jsx

import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = ({ images = [] }) => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } },
          { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]
  };


    return (
        <>
             <div className="full-width-carousel">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="full-width-slide">
                        <img src={src} alt={`Slide ${index + 1}`} className="slide-image" />
                    </div>
                ))}
            </Slider>
        </div>
        </>
    );
};

export default Carousel;
