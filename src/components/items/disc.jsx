import React from 'react';

const Disc = (props) => {
const{title,content}=props
const color = props.color || '#ffc107'
const img = props.img || "./Imgs/support-5.png"
    return (
        <div className=' w-full p-5 text-center relative bg-[{color}]'
         style={{ backgroundColor: color }}>
            <h2 className='text-xl'>{title}</h2>
            <p>{content}</p>
            <img src={img} alt="" className='absolute left-0 bottom-0' />
        </div>
    );
}

export default Disc;
