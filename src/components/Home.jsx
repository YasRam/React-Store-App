import React from 'react';
import Card from './items/card';
import { DiamondPercentIcon, Disc2, DiscAlbumIcon } from 'lucide-react';
import Disc from './items/disc';

const Home = () => {
    return (<>
        <div className='relative  w-full h-100 '>
            <img src="Imgs/slider-02.jpg" alt="" className='w-full h-full object-cover' />
            <div className=' absolute top-0 text-white flex flex-col items-center justify-center bg-black/40 w-full h-full'>
                <h1 className="text-3xl font-bold">Welcome</h1>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, distinctio.</p>
            </div>
        </div>

        <div className='flex items-center justify-around m-10 flex-wrap gap-2'>
            <Card img="Imgs/1.jpg" productName="منتج" category="كاتالوج" />
            <Card img="Imgs/1.jpg" productName="منتج" category="كاتالوج" />
            <Card img="Imgs/1.jpg" productName="منتج" category="كاتالوج" />
            <Card img="Imgs/1.jpg" productName="منتج" category="كاتالوج" />
            <Card img="Imgs/1.jpg" productName="منتج" category="كاتالوج" />
        </div>

        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card img="Imgs/Personnel image 4483.jpg" category="منتج" price="110" disc="10" newitem={true} star="5" />
                <Card img="Imgs/Personnel image 4483.jpg" category="منتج" price="110" disc="20" newitem={false} star="10" />
                <Card img="Imgs/Personnel image 4483.jpg" category="منتج" price="110" disc="5" newitem="" star="4" />
                <Card img="Imgs/Personnel image 4483.jpg" category="منتج" price="110" newitem={true} star={2} />
                <Card img="Imgs/Personnel image 4483.jpg" category="منتج" price="110" newitem={""} />
            </div>
        </div>

        <div className='px-10 py-20 bg-gray-200 my-10'>
            <div className='flex justify-around items-center gap-5'>
            <Disc title = "Free shipping" color = "#fff" content ="Free shipping on all order" img = "./Imgs/support-5.png"/>
            <Disc title = "Free shipping" color = "#fff" content ="Free shipping on all order" img = "./Imgs/support-5.png"/>
            <Disc title = "Free shipping" content ="Free shipping on all order" />
            </div>
            
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-center py-10 px-5 bg-gray-50 rounded-lg shadow-md">
            <div className="sm:w-1/2 w-full">
                <img src="Imgs/Personnel image 4483.jpg" alt="" className='w-full' />
            </div>
            <div className="sm:w-1/2 w-full flex flex-col gap-5 items-center">
                <h2 className='text-3xl font-bold'>Deal of the day</h2>
                <div className="flex justify-around w-full">

                    <div className="p-4">
                        <p className="text-6xl">0</p>
                        <p className="text-lg font-semibold">يوم</p>
                    </div>
                    <div className="p-4">
                        <p className='text-6xl'>0</p>
                        <p className='text-lg font-semibold'> ساعة</p>
                    </div>
                    <div className="p-4">
                        <p className='text-6xl'>0</p>
                        <p className='text-lg font-semibold'> دقيقة</p>
                    </div>
                    <div className="p-4">
                        <p className='text-6xl'>0</p>
                        <p className='text-lg font-semibold'> ثانية</p>
                    </div>
                </div>
                <button className='bg-red-500 text-white px-10 m-8
                py-2 rounded-full hover:bg-indigo-500 transition-colors duration-1000 
                cursor-pointer w-fit'>SHOP NOW</button>
            </div>
        </div>

        <div className='bg-gray-100 flex flex-col items-center justify-center text-center m-10 py-10 gap-2'>
            <img src="Imgs/1.jpg" alt="" className='rounded-full' />
            <p className='px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <DiamondPercentIcon />
            <p className='font-bold'>John Doe</p>
            <p className='font-bold'>customer</p>
        </div>

        <div className='flex flex-col justify-center items-center py-20 bg-white'>
            <h1 className='text-4xl font-bold my-5'>Join With Us!</h1>
            <p>Subscribe to our newsletter to receive news on update</p>
            <form action="" className='my-5 md:w-1/2 w-full flex flex-col justify-center items-center' >
                <input type="text" className='bg-white border-b border-gray-300 
                focus:border-gray-50 w-full focus:outline-none
                text-gray-900 text-sm block p-2.5 text-center'
                    placeholder='Your Email Address' />
                <input type="submit" className='bg-red-500 text-white px-10 m-8
                py-2 rounded-full hover:bg-indigo-500 transition-colors duration-1000 
                cursor-pointer' value="SUBSCRIBE" />
            </form>
        </div>
    </>
    );
}

export default Home;
