import React, { useEffect, useState } from 'react';
import B1 from '../images/banners/b1.jpg';
import B2 from '../images/banners/b2.jpeg';
import B3 from '../images/banners/b3.jpeg';
import B4 from '../images/banners/b4.jpeg';
import B5 from '../images/banners/b5.png';
import B6 from '../images/banners/b6.jpg';
import B7 from '../images/banners/b7.jpg';
import B8 from '../images/banners/b8.png';

const Banners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    B1,B2,B3,B4,B5,B6,B7,B8
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-[100%] bg-[#F1F2F4] pt-[20px] items-center justify-center'>
      <div className='flex ml-[20px] mr-[20px] phone:ml-[5px] phone:mr-[5px]'>
        {images.map((image, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none', flex:1}}>
            <img className='w-[100%]' src={image} alt={`Slide ${index}`}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banners;