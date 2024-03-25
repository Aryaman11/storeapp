import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <div>

            {/* Header for large device and other larger devices starts  */}

            <div className="bg-[#F8F7F7] md:py-1 shadow-md max-md:hidden flex justify-between items-center md:pl-8">
                <img className="rounded-2xl md:w-[10%]" src='./images/logo.png'/>
                <ul className="w-[60%] md:grid md:grid-flow-col md:grid-cols-4 text-xl font-medium text-[#8E8988] font-poppins md:items-center ">
                    <li className="hover:font-semibold tracking-wide hover:text-[#787372] cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="hover:font-semibold tracking-wide hover:text-[#787372] cursor-pointer">Category</li>
                    <li className="hover:font-semibold tracking-wide hover:text-[#787372] cursor-pointer"><Link to="/about">About us</Link></li>
                    <li className="hover:font-semibold tracking-wide hover:text-[#787372] cursor-pointer"><Link to="/contact">Contact us</Link></li>
                </ul>

            </div>

            {/* Header for large device and other larger devices ends */}


            {/* Header for small device starts */}

            <div className="md:hidden">
                <div className="bg-[#F8F7F7] px-4 py-2">
                 <div className="flex items-center justify-between">
                    <svg className="flex" width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <img className="rounded-2xl w-[90px] h-[45px]" src='./images/logo.png'/>
                 </div>
                 
                </div>
            </div>

            <div>
                
            </div>

            {/* Header for small device ends */}

        </div>
    )
}
export default Header;