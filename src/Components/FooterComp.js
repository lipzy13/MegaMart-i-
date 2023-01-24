import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';

function FooterComp() {
  return (
    <div className='bg-primary px-20'>
      <div className='flex flex-row pb-20'>

        <div className='mt-20 mr-24'>
        <h1 className='text-white font-bold text-3xl mx-auto '>MegaMart</h1>

          <p className='text-white text-xl mt-9 font-bold'> Contact us </p>

          <div className='flex mt-5'>
          <BsWhatsapp size={24} color={'white'}/>

          <div className='flex flex-col ml-3'>
          <p className='text-white text-base'>
          Whatsapp
          </p>
          <p className='text-white text-base'> +91 1234567890 </p>
          </div>
          </div>

          <div className='flex flex-row my-5'>
          <IoCallOutline size={24} color={'white'}/>
          <div className='flex flex-col ml-3'>
          <p className='text-white text-base'>
          Call Us
          </p>
          <p className='text-white text-base'> +91 1234567890 </p>
          </div>
          </div>

          <div className='mt-2'>
            <p className='text-white text-base font-bold'>Download App</p>
            <div className='flex flex-row mt-5'>
              <img src={require('../assets/img/andro.png')} alt="android" className='mr-5'/>
              <img src={require('../assets/img/ios.png')} alt="ios" />
            </div>
          </div>

        </div>

        <div className='mt-20 mr-32'>
          <h1 className='text-xl text-white border-b-white border-b-2 pb-4'>Most Popular Categories</h1>
          <ul className='mt-5 list-disc ml-7 space-y-4'>
            <li className='text-white text-base'>Staples</li>
            <li className='text-white text-base'>Beverages</li>
            <li className='text-white text-base'>Personal Care</li>
            <li className='text-white text-base'>Home Care</li>
            <li className='text-white text-base'>Baby Care</li>
            <li className='text-white text-base'>Vegetable & Fruits</li>
            <li className='text-white text-base'>Snack & Foods</li>
            <li className='text-white text-base'>Dairy & Bakery</li>
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-xl text-white border-b-white border-b-2 pb-4'>Customer Services</h1>
          <ul className='mt-5 list-disc ml-7 space-y-4'>
            <li className='text-white text-base'>About Us</li>
            <li className='text-white text-base'>Term & Conditions</li>
            <li className='text-white text-base'>FAQ</li>
            <li className='text-white text-base'>Privacy Policy</li>
            <li className='text-white text-base'>E-waste Policy</li>
            <li className='text-white text-base'>Cancellation & Return Policy</li>
          </ul>

        </div>


      </div>

      <div>
        <p className='text-xl text-white text-center font-thin py-8 border-t-white border-t-1'>© 2023 1st build. not resposive yet lmao. </p>
      </div>
    </div>
  )
}

export default FooterComp