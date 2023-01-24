import React from 'react'


function Card(props) {
  return (
    <div className='w-1/5 h-80 border-[#EDEDED] rounded-2xl border'>
      <div className='flex flex-col'>
        <div className='bg-slate-100 py-4 bg-contain'>
            <img src={props.img} alt="prod1" className='w-full mx-auto object-contain h-32'/>
        </div>
            <div className='bg-white divide-y'>

                <div className='mb-3 ml-3'>
                <h1 className='text-base mt-3'>{props.name}</h1>
                <div className='flex flex-row mt-3'>
                <h1 className='text-base mr-2 font-bold'>₹{props.disc}</h1>
                <h1 className='text-base line-through'>₹{props.price}</h1>
                </div>
                </div>

                <h1 className='text-green-500 font-semibold py-[10px] ml-3'>Save - ₹{props.promo}</h1>

            </div>
      </div>

    </div>
  )
}

export default Card
