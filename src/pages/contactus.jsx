import Footer from "../component/footer";
import Header from "../component/header";

const Contact = () =>{
    return (
        <div>
            <Header/>
            <div className="flex w-2/3 mx-auto max-sm:h-auto my-24 max-sm:my-12 items-center ">
                <div className="flex flex-col space-y-4 items-center  md:flex-grow rounded-md shadow-md p-10 bg-[#F8F7F7] max-sm:p-4 max-sm:my-4 max-sm:flex-shrink">
                <p className="text-2xl  font-medium text-[#8E8988] font-poppins">Contact Us</p>
                <p className="text-l">Welcome to Singh Electronics: Your Ultimate Destination for Air Cooling Solutions</p>
                <p>At Cool Breezes, we understand the importance of comfort and well-being in your living or working environment. That's why we're dedicated to providing top-of-the-line air cooling solutions to keep you cool, and relaxed, even in the hottest of seasons.</p>
                <p>address </p>
                <p>mobile details and other links</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Contact;