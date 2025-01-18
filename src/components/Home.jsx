import React from 'react';
// import AnimatedContent from './AnimatedContent'


import home from '../assets/home photo.jpg';

export default function Home() {
    return (
        <>
        

        <div className="bg-green-700 h-screen">
            <div className='mx-auto px-[180px] flex flex-col justify-between items-start '>

                <h1 className="text-6xl text-white text-left pt-20 py-10">
                    AI Powered Urban Diversity Planner
                </h1>
                <h2 className='text-2xl w-3/4 font-thin text-left py-5 text-white'>
                Reduce the time, effort, and cost of planning urban development and infrastructure projects, <br/>while increasing confidence they will achieve desired outcomes.
                </h2>
                <button 
  type="button"
  className="bg-white text-left w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-medium group "
>
  <div
    className="bg-green-700 rounded-xl h-12 w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
  >
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000000"
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
      ></path>
      <path
        fill="#000000"
        d="M786.752 512 521.344 776.64a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L786.752 512z"
      ></path>
    </svg>
  </div>
  <p className="translate-x-2 pl-2">Get Started</p>
                </button>

            </div>
        </div>

        </>
    );
}
