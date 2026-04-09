import React from 'react';
import Banner from '../../components/homepage/Banner';
import AllBooks from '../../components/homepage/AllBooks';

const HomePage = () => {
    return (
        <div className='space-y-20 px-4'>
            <Banner/>
            <AllBooks/>
        </div>
    );
};

export default HomePage;