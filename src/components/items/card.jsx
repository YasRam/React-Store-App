import React from 'react';
// import product from '../../../public/Imgs/1.jpg'
const Card = (props) => {
    const {img,productName,category} = props
    return (
        <div className='text-center'>
            <img src={img} alt="" />
            <p className=''>{productName}</p>
            <h3 className='font-bold text-2xl'>{category}</h3>
        </div>
    );
}

export default Card;
