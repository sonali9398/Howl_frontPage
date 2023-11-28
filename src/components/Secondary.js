import React from 'react';
import './secondary.css';
const Secondary = () => {
  return (
    <div className=' mt-20 h-700 bg-purple-400 uppercase font-extrabold text-white text-8xl 
    tracking-wide gap-y-8 group block mx-auto rounded-lg ring-1 shadow-lg  hover:bg-sky-500 hover:ring-sky-500
    '>
        <div className='hover:stroke-black relative' fill="none">
            <ul className='cursor-pointer sticky top-0 hover:text-black hover:scale-300 ease-in-out' >
                <li className=' '>strategy and consulting</li>
                <li>online marketing experience</li>
                <li>commerce solutions</li>
                <li>growth marketing</li>
                <li>asset creation  </li>
            </ul>
        </div>
        <div className='image w-[100%] rounded-lg hover:scale-125 ease-in duration-300'>
            <img 
                src={require("../components/images/sec.png")} alt='chart'
            />
        </div>
    </div>
  )
}

export default Secondary;