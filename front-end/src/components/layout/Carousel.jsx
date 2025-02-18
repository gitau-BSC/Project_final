import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/api/placeholder/800/400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Modern Hostel Facilities</h3>
          <p>Comfortable and secure accommodation for students.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
