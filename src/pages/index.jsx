import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import InfoBox from '../component/homeWidget/infobox';
import Offer from '../component/homeWidget/offerSection';
import Banner from '../component/homeWidget/Banner';
import Query from '../component/homeWidget/query';
const Home = () =>{
    return (
        <div>
             <Header/>
             <Banner/>
             <Offer/>
             <Query/>   
             <InfoBox/>
             
            <Footer/>
        </div>
    )
}
export default Home;