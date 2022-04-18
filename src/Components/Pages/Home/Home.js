import React from 'react';
import Banner from '../../Banner/Banner';
import OverView from '../../OverView/OverView';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OverView></OverView>
            <Services></Services>
        </div>
    );
};

export default Home;