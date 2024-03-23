const Offer = () =>{
    return(
        <div className="bg-[#EDEBEB] md:mx-32 py-2 rounded-3xl md:my-8" >
            <div className="text-center font-poppins">
                <h2 className="font-semibold text-3xl py-4">Limited Time Offer</h2>
                <div className="p-4 flex items-center justify-center md:space-x-24">
                
                <img className="rounded-3xl h-[360px] w-[360px]" src="../images/discount.gif"/>
                <div className="bg-white rounded-3xl h-[360px] w-[360px] font-poppins">
                    <h1 className="font-semibold text-3xl p-4">Get 10% OFF</h1>
                    <p className="font-semibold">On all Himigiri products</p>
                    <ul class="list-disc text-start p-12">
                        <li>Bring you Quotation and we will match it.</li>
                        <li>Free Home delivery under 5km.</li>
                        <li>Prebook and get additional 8% discount.</li>
                        <li>Guarantee same day delivery after confirmation.</li>

                    </ul>
                    <p></p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;