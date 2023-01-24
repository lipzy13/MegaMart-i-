import React from 'react'

function DailyEsse(props) {
  return (
    <div className='flex  flex-col'>
        <div className='h-48 w-48 bg-slate-100 rounded-2xl flex'>
            <img src={props.img} alt="prod1" className='m-auto object-cover items-center'/>
        </div>

        <div className='flex flex-col text-center mt-5'>
            <h1 className='text-text text-base font-semibold'>{props.name}</h1>
            <h1 className='text-xl font-bold'>UP to 50% OFF</h1>
        </div>
    </div>
  )
}

export default DailyEsse