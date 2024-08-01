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
    <div className='bg-[#F1F2F4] pt-[10px] mt-[80px] w-[100%]'>
      <div className='ml-[20px] mr-[20px] flex flex-row justify-center bg-[white] phone:ml-[5px] phone:mr-[10px] overflow-x-auto'>
        <div className='pl-[10px]'>
          <div>
            <img className='w-[50%] pt-[15px] phone:w-[100%] phone:pt-[5px]' src={C1} />
          </div>
          <p className='font-semibold phone:text-[10px]'>Grocery</p>
        </div>
        <div className='pl-[10px]'>
          <div>
            <img className='w-[50%] pt-[15px] phone:w-[100%] phone:pt-[5px]' src={C2} />
          </div>
          <p className='font-semibold phone:text-[10px]'>Mobiles</p>
        </div>
        <div className='pl-[10px]'>
          <div>
            <img className='w-[50%] pt-[15px] phone:w-[100%] phone:pt-[5px]' src={C3} />
          </div>
          <p className='font-semibold phone:text-[10px]'>Fashion</p>
        </div>
        <div className='pl-[10px]'>
          <div>
            <img className='w-[50%] pt-[15px] phone:w-[80%] phone:pt-[5px]' src={C4} />
          </div>
          <p className='font-semibold phone:text-[10px]'>Electronics</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px] phone:w-[100%] phone:pt-[5px]' src={C5} />
          </div>
          <p className='font-semibold phone:text-[7px]'>Home &<br></br> Furniture</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px] phone:w-[100%] phone:pt-[5px]' src={C6} />
          </div>
          <p className='font-semibold phone:text-[10px]'>Appliances</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px] phone:w-[100%] phone:pt-[5px]' src={C7} />
          </div>
          <p className='font-semibold phone:text-[10px]'>Travel</p>
        </div>
        <div>
          <div>
            <img className='w-[50%] pt-[15px] phone:w-[100%] phone:pt-[5px]' src={C8} />
          </div>
          <p className='font-semibold align-middle phone:text-[10px]'>Beauty, Toys &<br></br> More</p>
        </div>
        <div className='pl-[10px]'>
          <div>
            <img className='w-[50%] pt-[15px] phone:w-[100%] phone:pt-[5px]' src={C9} />
          </div>
          <p className='font-semibold phone:text-[10px]'>Two Whellers</p>
        </div>
      </div>
    </div>
  )
}

export default Category