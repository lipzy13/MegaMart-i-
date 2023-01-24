import React from 'react'
import Header from '../Components/Header';
import {HiChevronRight} from 'react-icons/hi';
import Card from '../Components/Card';
import CircleCat from '../Components/CircleCat';
import { productData } from '../data/productData';
import { inCircleData } from '../data/inCircleData';
import DailyEsse from '../Components/DailyEsse';
import { dsData } from '../data/dsData';
import FooterComp from '../Components/FooterComp';

function LandingPage() {
  return (
    <div>
    <Header />
    <div className='px-28'>

      <div className='container mt-5 mb-16'>
          <img src={require('../assets/img/hero.png')} alt='banner' className='w-full h-96 object-cover rounded-2xl'/>
      </div>

      <div className='py-28'>
      <div className='flex justify-between items-center'> 
        <h2 className='text-2xl text-text border-b-4 border-primary pb-4 rounded-sm'>Grab the best deal on <span className='text-primary'> Smartphones </span></h2>
        <div className='flex flex-row items-center'>
        <a href='/' className='text-text text-base'>View All</a>
        <HiChevronRight size={18} color={'#008ECC'} className='ml-2 mt-1'/>
        </div>
      </div>

      <div className='py-10 border-t-1'>
        <div className='flex flex-row space-x-4'>
          {productData.map((item) => (
            <Card key={item.id} name={item.name} disc={item.disc} price={item.price} promo={item.promo} img={item.img}/>
          ))}

        </div>
      </div>
      </div>

    <div>

    <div className='pb-28'>
      <div className='flex justify-between items-center'> 
        <h2 className='text-2xl text-text border-b-4 border-primary pb-4 rounded-sm'>Shop from <span className='text-primary'> Top Categories </span></h2>
        <div className='flex flex-row items-center'>
        <a href='/' className='text-text text-base'>View All</a>
        <HiChevronRight size={18} color={'#008ECC'} className='ml-2 mt-1'/>
        </div>
      </div >
      
      <div className='py-10 border-t-1'>
        <div className='flex flex-row space-x-12'>
      {inCircleData.map((item) => (
        <CircleCat key={item.id} name={item.name} img={item.img}/>
      ))}
        </div>
      </div>
    </div>
    </div>

    <div className='pb-28'>
    <div className='flex justify-between items-center'> 
        <h2 className='text-2xl text-text border-b-4 border-primary pb-4 rounded-sm'>Top <span className='text-primary'> Electronics Brands </span></h2>
        <div className='flex flex-row items-center'>
        <a href='/' className='text-text text-base'>View All</a>
        <HiChevronRight size={18} color={'#008ECC'} className='ml-2 mt-1'/>
        </div>
      </div >
      
        <div className='flex flex-row pt-10'>
            <img src={require('../assets/img/promo1.png')} alt='brands' className='w-1/3 mr-4'/>
            <img src={require('../assets/img/promo2.png')} alt='brands' className='w-1/3 mx-4'/>
            <img src={require('../assets/img/promo3.png')} alt='brands' className='w-1/3 '/>
        </div>

    </div>

    <div className='pb-28'>
    <div className='flex justify-between items-center'> 
        <h2 className='text-2xl text-text border-b-4 border-primary pb-4 rounded-sm'>Daily <span className='text-primary'> Essentials </span></h2>
        <div className='flex flex-row items-center'>
        <a href='/' className='text-text text-base'>View All</a>
        <HiChevronRight size={18} color={'#008ECC'} className='ml-2 mt-1'/>
        </div>
      </div >
      
        <div className='flex flex-row pt-10 space-x-7 pb-10'>
            {dsData.map((item) => (
              <DailyEsse key={item.id} name={item.name} img={item.img} price={item.price}/>
            ))}

        </div>
    </div>
  
    </div>

    <FooterComp />
    </div>
  )
}

export default LandingPage