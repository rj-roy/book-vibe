import React from 'react';
import bannderImg from '../../assets/pngwing 1.png';

const Banner = () => {
    return (
        <div className='w-full min-h-[70dvh] max-w-6xl mx-auto bg-[#f3f3f3] grid grid-cols-1 md:grid-cols-2 place-items-center p-10 px-20 rounded-2xl border border-[#c7b8b8] mt-10'>
            <div className='grid space-y-7'>
                <h1 className='text-5xl'>Books to freshen up your bookshelf</h1>
                <button className="btn btn-success text-white w-35">View The List</button>
            </div>
            <img src={bannderImg} alt="the dating playbook" />
        </div>
    );
};

export default Banner;