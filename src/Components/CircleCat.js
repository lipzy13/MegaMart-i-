import React from 'react';

function CircleCat(props) {
  return (
    <div className='w-1/5 h-1/5 '>
        <div className='rounded-full bg-[#F5F5F5] bg-contain flex justify-center'>
            <img src={props.img} alt="prod1" className='w-full mx-auto object-contain h-32 align-middle'/>
        </div>
            <h1 className='text-base mt-5 text-center'>{props.name}</h1>
    </div>
  )
}

export default CircleCat