import React from 'react';
import bg from '../../public/Imgs/slider-02.jpg'

 const Favorites = () => {
    return (
        <div className='img'>
            <img src={bg} alt="" />
            <h1 className="text-3xl font-bold mb-4">Welcome to React Store</h1>
            <p className="text-gray-700">
                Explore our latest products and best deals!
            </p>
        </div>
    );
}

export default Favorites;
