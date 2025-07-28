import React from 'react';
import bg from '../../public/Imgs/slider-02.jpg'
import product from '../../public/Imgs/1.jpg'

import Card from './items/card';

const Home = () => {
    return (<>
        <div className='relative  w-full h-60 '>
            <img src={bg} alt="" className='w-full h-full object-cover' />
            <div className=' absolute top-0 text-white flex flex-col items-center justify-center bg-black/40 w-full h-full'>
                <h1 className="text-3xl font-bold">Welcome</h1>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, distinctio.</p>
            </div>
        </div>
        <div className='flex items-center justify-around my-10 flex-wrap gap-2'>
                <Card img={product} productName="منتج" category="كاتالوج" />
                <Card img={product} productName="منتج" category="كاتالوج" />
                <Card img={product} productName="منتج" category="كاتالوج" />
                <Card img={product} productName="منتج" category="كاتالوج" />
                <Card img={product} productName="منتج" category="كاتالوج" />
        </div>


    </>

    );
}

export default Home;
