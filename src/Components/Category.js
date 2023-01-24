import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi';

function CategoryT(props){   
  return (
    <div className='bg-primary rounded-3xl flex flex-row px-2 py-2 rounded-2xl items-center' key={props.id}>
        <a href='/' className='text-sm text-white'>{props.name}</a>
        <HiOutlineChevronDown size={18} color={'white'} style={{marginLeft: 10}}/>
    </div>
        )

}

function CategoryF(props){
  return (
    <div className='bg-[#F3F9FB] rounded-3xl flex flex-row px-2 py-2 rounded-2xl items-center' key={props.id}>
        <a href='/' className='text-sm text-primary'>{props.name}</a>
        <HiOutlineChevronDown size={18} color={'#008ECC'} style={{marginLeft: 10}}/>
    </div>
        )
}


function Category(props) {

  const selected = props.selected;

    if (selected) { 
        return <CategoryT name={props.name} id={props.id}/>
    } else {
        return <CategoryF name={props.name} id={props.id}/>
    }

}

export default Category