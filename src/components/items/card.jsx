import { Star, StarOff, Stars } from 'lucide-react';
import React from 'react';

const Card = (props) => {
    const { img, productName, star, price, disc, newitem,category } = props
    const starCount = Number(star) > 5 ? 5 : Number(star) || 0
    const afterDisc = disc ? (100 - Number(disc)) * Number(price) / 100 : '';
    return (
        <div className='flex flex-col text-center items-center relative'>
            <img src={img} alt={productName} className='w-full mb-2 rounded-md' />
            <div className='fill-white px-2 my-1  absolute top-2 left-2'>
                {newitem ? <div className='rounded px-2 my-1 w-full bg-fuchsia-500 text-white'>جديد</div> : ''}
                {disc ? <div className='rounded px-2 my-1 w-full bg-indigo-500 text-white'>{disc}%</div> : ""}
            </div>

            <p>{productName}</p>

            <h3 className='font-bold text-2xl mb-2'>{category}</h3>
            <div className='flex h-5'>
                {Array(starCount).fill(0).map((_, index) => (
                    <Star size={24} className="text-black fill-black" key={index} />
                ))}
            </div>
            {disc ?
                <div className='pt-2'>
                    
                    <p className='px-1 inline-block line-through'>{price}</p>
                    <p className='px-1 inline-block'>-</p>
                    <p className='px-1 inline-block'>{afterDisc}</p>
                </div> :
                <p className='px-1 inline-block'>{price}</p>
            }
        </div>
    );
}

export default Card;
