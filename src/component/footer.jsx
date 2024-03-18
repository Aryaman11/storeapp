const Footer = () =>{
    return(
      
        <div className="bg-[#F8F7F7] md:px-24 md:py-1 shadow-md max-lg:hidden">
           <div className="grid grid-flow-col grid-cols-3">
                <div className="col-span-1 flex items-center">
                    <img className="rounded-2xl w-[50%]" src='./images/logo.png'/>
                </div>
                <div className="col-span-1 text-xl font-medium text-[#8E8988] font-poppins md:items-center">
                    <p className="text-center md:py-4 underline text-2xl">Contact Us</p>
                    <ul>
                        <li className="pt-2 flex items-center justify-center">
                           <img className="" src='./images/location.png'/> 
                           <p className="px-2">Maunath Bhanjan</p>
                        </li>

                        <li className=" flex pt-3 justify-center items-center">
                           <img className="" src='./images/telephone.png'/> 
                           <p className="px-2">+91 9415275378</p>
                        </li>
                        <li className="md:-mt-6 flex items-center justify-center">
                           <img className="px-2" src='./images/email.png'/> 
                           <p className="px-2">singhelectronicsmau@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 text-xl font-medium text-[#8E8988] font-poppins md:items-center text-center">
                    <p className=" md:py-4 underline text-2xl">Address</p>
                    <p>Singh Electronics , BalliaModh</p>
                    <p>Near Prasad Vatika</p>
                    <p>Mau-275101 , Uttar Pradesh</p>
                    <p>India</p>
                </div>
           </div>  
        </div>
    )
}
export default Footer;