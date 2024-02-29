import React from 'react';
import B1 from '../images/beauty/b1.jpeg';
import B2 from '../images/beauty/b2.jpeg';
import B3 from '../images/beauty/b3.jpeg';
import B4 from '../images/beauty/b4.jpeg';
import B5 from '../images/beauty/b5.jpeg';
import B6 from '../images/beauty/b6.jpeg';
import B7 from '../images/beauty/b7.jpeg';
import B8 from '../images/beauty/b8.jpeg';

const Beauty = () => {
  return (
    <div className='w-[100%] bg-[#F1F2F4] pt-[20px] flex flex-row'>
      <div>
        <div className='bg-[white] ml-[20px] mr-[20px] '>
          <div className='font-bold text-xl pt-[20px] pl-[20px]'>
            <h1>Beauty, Food, Toys & more</h1>
          </div>
          <div className='flex flex-row mt-[20px] items-center justiify-center'>
            <div className='w-[17%] ml-[20px] box-border border-2 p-8 rounded mb-[20px]'>
              <div className='h-[180px]'>
                <img src={B1} />
                <p className='text-sm pt-[20px]'>Top Mirrorless Cameras</p>
                <p className='font-bold text-base'>Shop Now!</p>
              </div>
            </div>
            <div className='w-[17%]  ml-[20px] box-border border-2 p-8 rounded mb-[20px]'>
              <div className='h-[180px]'>
                <img className='w-[100%] h-[120px]' src={B2} />
                <p className='text-sm pt-[30px]'>Electric Cycle</p>
                <p className='font-bold text-base'>Up to 40% Off</p>
              </div>
            </div>
            <div className='w-[17%] ml-[20px] box-border border-2 p-8 rounded mb-[20px]'>
              <div className='h-[180px]'>
                <img className='h-[150px]' src={B3} />
                <p className='text-sm'>Dry Fruits</p>
                <p className='font-bold text-base'>Up to 75% Off</p>
              </div>
            </div>
            <div className='w-[17%] ml-[20px] box-border border-2 p-8 rounded mb-[20px]'>
              <div className='h-[180px]'>
                <img src={B4} />
                <p className='text-sm pt-[70px]'>Microphones</p>
                <p className='font-bold text-base'>Up to 70% Off</p>
              </div>
            </div>
            <div className='w-[17%] ml-[20px] box-border p-8 rounded border-2 mb-[20px]'>
              <div className='h-[180px]'>
                <img className='h-[150px] pb-[10px]' src={B5} />
                <p className='text-sm'>Coffee Powder</p>
                <p className='font-bold text-base'>Up to 80% Off</p>
              </div>
            </div>
            <div className='w-[17%] ml-[20px] box-border p-8 rounded border-2 mb-[20px] mr-[20px]'>
              <div className='h-[180px]'>
                <img src={B6} />
                <p className='text-sm pt-[30px]'>Food Spreads</p>
                <p className='font-bold text-base'>Up to 75% Off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beauty;