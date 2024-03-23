import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import InfoBox from '../component/homeWidget/infobox';
import Offer from '../component/homeWidget/offerSection';
import Banner from '../component/homeWidget/Banner';
const Home = () =>{
    return (
        <div>
            <Header/>
            <Banner/>
            <Offer/>
             <InfoBox/>
             
            <Footer/>
        </div>
    )
}
export default Home;