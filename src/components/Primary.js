import React from "react";
import Navigator from "./Navigator";
import './Primary.css';
const Primary = () =>{
    return(
        <div className="h-100vh w-100vw">
            <nav className="flex space-between justify-between mt-5 animate-bounce">
                <img className="h-6 ml-5" 
                    src="https://howl.in/wp-content/uploads/2022/11/HOWL-Color-Digital-New-Breed-Logo-1.png" alt="logo"/>
                <div>
                    <Navigator/>
                </div>
            </nav>
            <div className="text">
                <p className="h-11 text-[#595959] ml-20 mt-20">We exist because we want to help you navigate <br/>and harness the potential of this ever-changing <br/>digital landscape.</p>
                <div className="flex justify-items-center justify-center motion-reduce:animate-spin hover:scale-100 ease-in">
                    <h1>Your <br/>Growth <br/>Partners</h1>
                    <img className="h-60 rounded-md shadow-md" 
                    src="https://howl.in/wp-content/uploads/2023/04/homeimg-1.jpg" alt="img"/>
                </div>
                <p className="h-11 text-[#595959] flex justify-end mr-30 pt-50">It's not a game of guesses, it's a game of numbers where growth is the <br/>ultimate goal. we levarage cutting-edge technology and data-driven <br/>insights to help you answer questions that unlock growth.</p>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Primary;