import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";

const Aboutus = () => {
    return(
        <div>
            <Header/>
            <div className="flex w-2/3 mx-auto max-sm:h-auto h-dvh items-center ">
                <div className="flex flex-col space-y-4 items-center  md:flex-grow rounded-md shadow-md p-10 bg-[#F8F7F7] max-sm:p-4 max-sm:my-4 max-sm:flex-shrink">
                <p className="text-2xl  font-medium text-[#8E8988] font-poppins">About Us</p>
                <p className="text-l">Welcome to Cool Breezes: Your Ultimate Destination for Air Cooling Solutions</p>
                <p>At Cool Breezes, we understand the importance of comfort and well-being in your living or working environment. That's why we're dedicated to providing top-of-the-line air cooling solutions to keep you cool, refreshed, and relaxed, even in the hottest of seasons.</p>
                <p>Our mission is simple: to offer high-quality air cooling products that enhance the quality of life for our customers. We aim to create comfortable spaces where you can thrive, whether at home, in the office, or in any other setting.</p>
                <p>Premium Quality**: We handpick our air coolers from reputable manufacturers known for their excellence in craftsmanship and reliability. Each product undergoes rigorous testing to ensure it meets our high standards of performance and durability.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Aboutus;
