import React from 'react'

const Footer = () => {
  return (
    <div className='h-30  border-purple-400 bg-[#222630] text-white flex flex-row p-9 justify-around  text-xs'>
      <div className='gap-5 flex space-x-1 h-6 cursor-pointer transition duration-300  scale-75 delay-150 hover:delay-300'>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter" ></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>

      </div>
        
        <a href='/press'>
          <p>PRESS</p>
        </a> 
        <a href='career'>
          <p>CAREER</p>
        </a>    
        <a href='join'>
          <p>JOIN THE PACK</p>
        </a> 

        <div>
            <button className='border flex space-x-2'>Sign up our news letter<span class="material-symbols-outlined" >
              arrow_forward
              </span>
            </button>
        </div>
  
        <p>All rights reserved Designed, developed & powered by HOWL Digital Agency</p>
    </div>
  )
}

export default Footer;