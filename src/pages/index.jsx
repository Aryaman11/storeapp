import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Banner from '../component/Banner';

const Home = () =>{
    return (
        <div>
            <Header/>
            <Banner/>
            <h1 className='text-3xl text-center'>Category Section</h1>
            <Footer/>
        </div>
    )
}
export default Home;