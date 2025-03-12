import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Testimonials from './Components/Testimonials';
import reviews from './data';

function App() {
 

  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-900 w-full min-h-screen px-10'>
        <div className='p-5 flex flex-col justify-center items-center gap-1.5 mb-8'>
          <h1 className='text-4xl font-bold text-white'>Our Testimonials</h1>
          <div className='w-[10vw] p-0.5 bg-violet-500'></div>
        </div>

        <Testimonials reviews={reviews} />
      </div>
    </>
  );
}

export default App;