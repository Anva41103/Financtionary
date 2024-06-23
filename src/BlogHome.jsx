import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blogPic } from './BlogImg';
import Next from './assets/Next.png';
import Prev from './assets/Prev.png';

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`absolute left-0 top-1/2 transform -translate-y-1/2 ml-3 z-10 text-white`} onClick={onClick}>
      <img className='backdrop-blur-md rounded-full' src={Prev} alt="prev" />
    </button>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={` absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 text-white`} onClick={onClick}>
      <img className='backdrop-blur-md rounded-full' src={Next} alt="Next" />
    </button>
  );
};

const BlogPlay = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings} className='bg-pink-500 w-1/2'>
      {blogPic.map((imageUrl, index) => (
        <div key={index} className=' relative'>
          <img className='mx-auto text-center border-2 h-' src={imageUrl} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default BlogPlay;
