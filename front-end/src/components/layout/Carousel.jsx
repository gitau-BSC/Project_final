//Carousel.jsx

import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importing images directly

import hostel from '../assets/images/hostel.jpg';
import hostel2 from '../assets/images/hostel2.jpg';
import hostel4 from '../assets/images/hostel4.jpg';

const Carousel = () => {
    const images = [
    {
        id: 1,
        src: '../assets/images/hostel.jpg',
        alt: 'Hostel image 1'
    },
    {
        id: 2,
        src: '../assets/images/hostel2.jpg',
        alt: 'Image 2'
    },
    {
        id: 3,
        src: '../assets/images/hostel4.jpg',
        alt: 'image3'
    },

];

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
                {images.map((image) => (
                    <div key={image.id} className="full-width-slide">
                        <img src={image.src} alt={image.alt} className="slide-image" />
                    </div>
                ))}
            </Slider>
        </div>
        </>
    );
};

export default Carousel;
