'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [images.length, interval]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px' }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            width: '100%',
            height: '100%',
          }}
        >
          <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
