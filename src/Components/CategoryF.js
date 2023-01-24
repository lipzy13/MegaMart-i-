import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi';

function CategoryF(props) {
  return (
        <div className='bg-[#F3F9FB] rounded-3xl flex flex-row px-2 py-2 rounded-2xl items-center' key={props.id}>
        <a href='/' className='text-sm'>{props.name}</a>
        <HiOutlineChevronDown size={18} color={'#008ECC'} style={{marginLeft: 10}}/>
    </div>
  )
}


export default CategoryF