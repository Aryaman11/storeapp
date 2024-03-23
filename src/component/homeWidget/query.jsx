const Query = () =>{
    return(
        <div className="lg:mx-32 lg:my-8 lg:py-4 bg-[#EDEBEB] font-poppins rounded-3xl ">
            <div className="flex justify-center items-center">
                <svg fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="15.5" r="1.5"/>
                <path d="M12,12H10V8h2a2,2,0,0,0,0-4H10A2.0023,2.0023,0,0,0,8,6v.5H6V6a4.0045,4.0045,0,0,1,4-4h2a4,4,0,0,1,0,8Z" transform="translate(0 0)"/>
                <path d="M22.4479,21.0337A10.971,10.971,0,0,0,19.9211,4.7446l-.999,1.73A8.9967,8.9967,0,1,1,5,14H3a10.9916,10.9916,0,0,0,18.0338,8.4478L28.5859,30,30,28.5859Z" transform="translate(0 0)"/>
                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{fill:"none"}} width="32" height="32" transform="translate(32 32) rotate(-180)"/>
                </svg>
                <p className="font-semibold text-3xl py-4 text-center mx-4">Have a Query</p>
            </div>
            <p className="text-center font-semibold py-2">Got any questions or suggestions? Fill out this form to reach out.</p>
            <div className="flex justify-center items-center lg:space-x-24 border-solid border-2 border-black m-12  rounded-3xl">
                <div className="rounded-3xl">
                  <img src="./images/contact.png" alt="Contact"/>
                </div>
                <div className="font-popins ">
                    <div className="my-8 w-full">
                        <label className="font-semibold pr-4" >Name : </label>
                        <input value="" className="rounded-2xl p-2 text-center " placeholder="Enter your full name"/>
                    </div>
                    <div className="my-8 w-full">
                        <label className="font-semibold pr-4" >Email : </label>
                        <input value="" className="rounded-2xl p-2 text-center " placeholder="Enter your email"/>
                    </div>
                    <div className="my-8 w-full">
                        <label className="font-semibold pr-4" >Phone : </label>
                        <input value="" className="rounded-2xl p-2 text-center" placeholder="Enter your contact number"/>
                    </div>
                    <div className="my-8 w-full">
                        <label className="font-semibold pr-4" >Message : </label>
                        <textarea value="" className="rounded-2xl p-2 text-center" placeholder="Enter your contact number"/>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
export default Query;