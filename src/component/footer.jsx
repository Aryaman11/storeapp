const Footer = () =>{
    return(
        <>
        {/* Footer for large and larger screen starts */}
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
        {/* Footer for large and larger screen ends */}

        {/* Footer for medium screen starts */}
        <div className="bg-[#F8F7F7] md:px-24 md:py-1 shadow-md lg:hidden max-sm:hidden">
            <div className="grid grid-flow-row grid-rows-3">
                <div className="flex items-center justify-center">
                        <img className="rounded-2xl w-[20%]" src='./images/logo.png'/>
                </div>
                <div className="mx-12">
                    <div className="flex items-center justify-between text-xl font-medium text-[#8E8988] font-poppins">
                    <p className="text-xl font-medium text-[#8E8988] font-poppins underline max-lg:mr-12">Contact Us</p>
                    <ul>
                        <li className="pt-2 flex items-center justify-end">
                           <img className="" src='./images/location.png'/> 
                           <p className="px-2">Maunath Bhanjan</p>
                        </li>

                        <li className=" flex pt-3 justify-end items-center">
                           <img className="" src='./images/telephone.png'/> 
                           <p className="px-2">+91 9415275378</p>
                        </li>
                        <li className="max-lg:-mt-6 flex items-center justify-end">
                           <img className="px-2" src='./images/email.png'/> 
                           <p className="mx-2">singhelectronicsmau@gmail.com</p>
                        </li>

                    </ul>
                </div>
                <div className="flex items-center justify-between text-xl font-medium text-[#8E8988] font-poppins">
                    <p className="text-xl underline ">Address</p>
                    <div>
                        <p>Singh Electronics , BalliaModh</p>
                        <p>Near Prasad Vatika</p>
                        <p>Mau-275101 , Uttar Pradesh</p>
                        <p>India</p>
                    </div>
                </div>
                </div>
           </div>
        </div> 
        {/* Footer for medium screen ends */}

          {/* Footer for small screen starts */}
          <div className="bg-[#F8F7F7] md:px-24 py-2 hidden max-sm:block">

            <div className="grid grid-flow-row grid-rows-3">
                <div className="flex items-center justify-center">
                        <img className="rounded-2xl w-[30%] text-center" src='./images/logo.png'/>
                </div>
                
                    <div className=" text-xl font-medium text-[#8E8988] font-poppins">
                    <p className="text-xl font-medium text-[#8E8988] font-poppins underline text-center">Contact Us</p>
                    <ul>
                        <li className="py-4 flex items-center justify-center">
                           <img className="" src='./images/location.png'/> 
                           <p className="px-2">Maunath Bhanjan</p>
                        </li>

                        <li className=" flex py-3 justify-center items-center">
                           <img className="" src='./images/telephone.png'/> 
                           <p className="px-2">+91 9415275378</p>
                        </li>
                        <li className="max-sm:-mt-4 flex items-center justify-center">
                           <img className="px-2" src='./images/email.png'/> 
                           <p className="px-2">singhelectronicsmau@gmail.com</p>
                        </li>

                    </ul>
                    </div>

                    <div className=" text-xl font-medium text-[#8E8988] font-poppins">
                    <p className="text-xl underline text-center py-4">Address</p>
                    <div className="text-center">
                        <p>Singh Electronics , BalliaModh</p>
                        <p>Near Prasad Vatika</p>
                        <p>Mau-275101 , Uttar Pradesh</p>
                        <p>India</p>
                    </div>
                    </div>
          </div>
          </div>

        </>
    )
}
export default Footer;