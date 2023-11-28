import React from "react";
import './Tertiary.css';
const Tertiary = () =>{
    
    return(
        <>
            <div className="flex justify-center mt-10 font-extrabold text-3xl text-[#BD72D3] cursor-pointer"><h1>Clients we work with</h1></div>
            <div className="main sm:flex">
                {/* 10 images */}
                <div className="parent shadow-lg ">
                    <img src="https://howl.in/wp-content/uploads/2022/12/hrx1.jpg" alt="1" className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2022/12/AMEX-Cards-1.jpg" alt='2' className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2022/12/Artboard-3.jpg" alt="3" className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2023/01/thumbnail-Floh-1.jpg" alt="4" className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2023/01/Artboard-1-3.jpg" alt="5" className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2023/01/howl-thumbnail-06.jpg" alt="6" className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2023/01/Howl-Website-THumbnails-6-1.jpg" alt="7" className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2020/07/2-1.png" alt="8" className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2023/01/HSP-thumbnail-1.jpg" alt="9" className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2023/01/1-1.jpg" alt="10" className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2023/01/palladium-1.jpg" alt="11" className="hover:scale-125 ease-in duration-300"/>
                    <img src="https://howl.in/wp-content/uploads/2023/01/MBF-Photo-1.jpg" alt="12" className="hover:scale-125 ease-in duration-300"/>
                </div>

            
                


            </div>
        </>
        
    )
}

export default Tertiary;