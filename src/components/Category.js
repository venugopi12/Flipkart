import React from 'react';
import C1 from '../images/category/c1.png';
import C2 from '../images/category/c2.png';
import C3 from '../images/category/c3.png';
import C4 from '../images/category/c4.png';
import C5 from '../images/category/c5.jpg';
import C6 from '../images/category/c6.jpg';
import C7 from '../images/category/c7.png';
import C8 from '../images/category/c8.png';
import C9 from '../images/category/c9.png';

const Category = () => {
  return (
    <div className='bg-[#F1F2F4] pt-[10px] mt-[80px]'>
      <div className='ml-[20px] mr-[20px] flex flex-row justify-center bg-[white]'>
        <div>
          <div>
            <img className='w-[50%] pt-[15px]' src={C1} />
          </div>
          <p className='font-semibold'>Grocery</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px]' src={C2} />
          </div>
          <p className='font-semibold'>Mobiles</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px]' src={C3} />
          </div>
          <p className='font-semibold'>Fashion</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px]' src={C4} />
          </div>
          <p className='font-semibold'>Electronics</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px]' src={C5} />
          </div>
          <p className='font-semibold'>Home &<br></br> Furniture</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px]' src={C6} />
          </div>
          <p className='font-semibold'>Appliances</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px]' src={C7} />
          </div>
          <p className='font-semibold'>Travel</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px]' src={C8} />
          </div>
          <p className='font-semibold align-middle'>Beauty, Toys &<br></br> More</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px]' src={C9} />
          </div>
          <p className='font-semibold'>Two Whellers</p>
        </div>
      </div>
    </div>
  )
}

export default Category