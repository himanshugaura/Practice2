import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;

  return (
    <div className='flex flex-col justify-center items-center p-5 relative'>

      <div className='absolute top-[-3rem] left-15'>
        <div className='w-[100px] h-[100px] rounded-[50%] bg-emerald-500 relative'>
          <img src={review.image} alt="" className='w-[100px] h-[100px] rounded-[50%] absolute right-2 top-1' />
        </div>
      </div>

      
      <div className='mt-10 text-center'>
        <p className='text-2xl md:text-3xl font-bold'>{review.name}</p>
        <p className='text-emerald-400 text-lg md:text-xl'>{review.job}</p>
      </div>

      
      <div className='mt-5'>
        <FaQuoteLeft color='purple' size={24} />
      </div>

      
      <div className='w-[90%] md:w-[80%] text-center p-5'>
        <p className='text-base md:text-lg'>{review.text}</p>
      </div>

      
      <div>
        <FaQuoteRight color='purple' size={24} />
      </div>
    </div>
  );
};

export default Card;