import React, { useEffect } from 'react';
import { IoLocationOutline, IoSearchOutline, IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { CiDiscount1 } from 'react-icons/ci';
import { MdSort } from 'react-icons/md';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import Category from './Category';
import { categorydata } from '../data/categorydata';


function Header() {

    

    const [category, setCategory] = React.useState([]);


    useEffect(() => {
        setCategory(categorydata);
    }, []);

    console.log(category);

  return (
    <div className='sticky top-0 z-30'>
    <div className='flex flex-row justify-between bg-[#f5f5f5] py-3 px-28'>
        <div className='header-left'>
            <p className='text-sm text-text'>Welcome to worldwide Megamart!</p>
        </div>
        <div className='header-right'>
            <ul className='flex flex-row divide-x-2'>
                <li>
                    <div className='flex flex-row mx-4' >
                        <IoLocationOutline size={18} color={'#008ECC'}/>
                        <a href='/' className='text-sm ml-2 text-text'>Deliver to <span className='font-bold'> 123456 </span> </a>
                    </div>
                </li>
                <li>
                    <div className='flex flex-row mx-4'>
                        <TbTruckDelivery size={18} color={'#008ECC'}/>
                        <a href='/' className='text-sm ml-2 text-center text-text'>Track your order</a>
                    </div>
                </li>
                <li>
                    <div className='flex flex-row ml-4 justify-center items-center'>
                        <CiDiscount1 size={18} color={'#008ECC'}/>
                        <a href='/' className='text-sm ml-2 text-text'>All Offers</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div className='flex flex-row justify-between py-4 px-28 border-b-1 content-center bg-white'>
        <div className='flex flex-row items-center'>
            <div className='bg-slate-100 w-12 h-12 rounded-lg justify-center items-center flex mr-4'>
                <MdSort size={36} color={'#008ECC'}/>
            </div>
            <h1 className='text-primary font-bold text-3xl mx-auto '>MegaMart</h1>
        </div>

        <div className='flex flex-row bg-slate-100 rounded-lg w-1/3 h-10 justify-between items-center'>
            <div className='mr-2 content-center flex'>
            <IoSearchOutline size={18} color={'#008ECC'} style={{margin: 10}} />
            </div>
            <input type='text' className='bg-slate-100 text-sm text-text w-full' placeholder='Search for products, brands and more'/>
            <div className='ml-2'>
            <AiOutlineUnorderedList size={18} color={'#008ECC'} style={{margin: 10}}/>
            </div>
        </div>

        <div className='flex flex-row justify-between items-center '>
            <div className='flex flex-row mx-5 items-center '>
                <IoPersonOutline size={18} color={'#008ECC'} style={{margin: 6}}/>
                <a href='/' className='text-base text-text text-base'>Sign Up/Sign In</a>
            </div>
            <div className='h-6 bg-[#D9D9D9] w-0.5'></div>
            <div className='flex flex-row mx-5 items-center '>
                <IoCartOutline size={18} color={'#008ECC'} style={{margin: 6}}/>
                <a href='/' className='text-base text-text text-base'>Cart</a>
            </div>
        </div>
    </div>

    <div className='flex flex-row px-28 bg-white'>
        {category.map((category) => (
            <div className='flex flex-row items-center mx-4 my-4'>
                <Category key={category.id} name={category.name} selected={category.selected}/>
            </div>
            ))}
    </div>
        
    </div>
  )
}

export default Header