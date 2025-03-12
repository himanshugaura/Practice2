import React, { useState } from 'react';
import Card from './Card';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : reviews.length - 1));
  }

  function rightShiftHandler() {
    setIndex((prevIndex) => (prevIndex < reviews.length - 1 ? prevIndex + 1 : 0));
  }

  function randomHandler() {
    const random = Math.floor(Math.random() * reviews.length);
    setIndex(random);
  }

  return (
    <div className='w-full md:w-[70%] lg:w-[50%] bg-gray-200 text-black rounded-2xl flex flex-col items-center justify-center p-6'>
      <Card review={reviews[index]} />

      <div className='flex mt-8 gap-4'>
        <button className='px-3 py-2 rounded-2xl cursor-pointer hover:bg-gray-300' onClick={leftShiftHandler}>
          <GrFormPrevious color='green' size={30} />
        </button>
        <button className='px-3 py-2 rounded-2xl cursor-pointer hover:bg-gray-300' onClick={rightShiftHandler}>
          <GrFormNext color='green' size={30} />
        </button>
      </div>
      <div className='mt-8'>
        <button
          className='bg-emerald-500 px-6 py-3 rounded-2xl text-white cursor-pointer hover:bg-emerald-600 transition-colors mb-5'
          onClick={randomHandler}
        >
          Get Random
        </button>
      </div>
    </div>
  );
};

export default Testimonials;