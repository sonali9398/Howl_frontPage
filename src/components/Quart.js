import React from 'react';
import './Quart.css';

const Quart = () => {
  return (
    <div className='h-300  bg-[#B056be] mt-20 flex justify-between pt-10 pb-10'>
        <div className='flex flex-col font-bold text-4xl text-white justify-center align-center align-middle ml-40 cursor-pointer sm:flex'>
            <h1>Keep track <br/>of the wolves</h1>
              <span class="material-symbols-outlined animate-bounce" >
              arrow_forward
              </span>

        </div>
        <div className='threeImg  rounded-lg shadow-lg'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKJHAmqmbmY-7i734YJ8Cp9PdxL2QJ1GPCQ&usqp=CAU' alt='1' className="hover:scale-125 ease-in duration-300"/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFk_AnXQWTrkKIPKym3WbglhaqqoF1rj0jw&usqp=CAU' alt='2'className="hover:scale-125 ease-in duration-300"/>
            <img src='https://images.pexels.com/photos/7319183/pexels-photo-7319183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='3' className="hover:scale-125 ease-in duration-300"/>
  
        </div>
    </div>
  )
}

export default Quart;