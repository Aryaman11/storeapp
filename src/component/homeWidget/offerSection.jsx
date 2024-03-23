const Offer = () =>{
    return(
        <div className="bg-[#EDEBEB] min-[800px]:mx-32 mx-16 py-2 rounded-3xl md:my-8" >
            <div className="text-center font-poppins">
                <h2 className="font-semibold text-3xl py-4">Limited Time Offer</h2>
                <div className="p-4 min-[800px]:flex min-[800px]:items-center min-[800px]:justify-center lg:space-x-24 space-x-8 max-[799px]:flex-col max-[799px]:space-y-4 max-[799px]:space-x-0">
                <img className="rounded-3xl lg:h-[360px] lg:w-[360px] max-[799px]:mx-auto max-[799px]:w-[70%] w-[40%]" src="../images/discount.gif"/>

                <div className="bg-white rounded-3xl lg:h-[360px] lg:w-[360px] font-poppins w-[40%] max-[799px]:w-[100%] ">
                    <h1 className="font-semibold text-3xl p-4">Get 10% OFF</h1>
                    <p className="font-semibold">On all Himigiri products</p>
                    <ul class="list-disc text-start p-12">
                        <li>Bring you Quotation and we will match it.</li>
                        <li>Free Home delivery under 5km.</li>
                        <li>Prebook and get additional 8% discount.</li>
                        <li>Guarantee same day delivery after confirmation.</li>
                    </ul>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;