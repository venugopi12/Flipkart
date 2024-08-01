import React from 'react';
import T1 from '../images/travel/t1.jpeg';
import T2 from '../images/travel/t2.jpeg';
import T3 from '../images/travel/t3.jpeg';
import T4 from '../images/travel/t4.jpeg';
import T5 from '../images/travel/ad.jpg';


const Travel = () => {
  return (
    <div className='w-[100%] flex flex-row bg-[#F1F2F4] pt-[20px] phone:bg-[#FFFFFF]'>
      <div className='w-[30%] bg-[white] ml-[20px] mr-[20px] mb-[20px]'>
        <div className='font-bold text-xl pt-[20px] pl-[20px]'>
          <p>Travel</p>
        </div>
        <div className='flex'>
          <div className='pt-[20px]'>
            <div className='flex flex-row '>
              <div className='box-border border-2 p-8 rounded mb-[10px] w-[50%] h-[250px] ml-[10px]'>
                <img className='h-[130px]' src={T1} />
                <p className=' text-sm pt[20px]'>Travel Bags</p>
                <p className='text-sm font-bold'>Up to 30% Off</p>
              </div>
              <div className='box-border border-2 p-8 rounded mb-[10px] w-[50%] h-[250px] ml-[10px] mr-[10px] pl-[40px]'>
                <img src={T2} />
                <p className='text-sm pt-[35px]'>Water Bottles</p>
                <p className='text-sm font-bold'>From ₹99</p>
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='box-border border-2 p-8 rounded mb-[20px] w-[50%] h-[250px] ml-[10px]'>
                <img src={T3} />
                <p className='text-sm pt-[30px]'>Suzuki Accessories</p>
                <p className='text-sm font-bold'>Up to 50% Off</p>
              </div>
              <div className='box-border border-2 p-8 rounded mb-[20px] w-[50%] h-[250px] ml-[10px] mr-[10px] pl-[40px]'>
                <img className='h-[100px]' src={T4} />
                <p className='text-sm pt-[10px]'>College Bags</p>
                <p className='text-sm font-bold'>Up to 60% Off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[70%] ml-20px pr-[20px] phone:hidden'>
        <div >
          <img className='h-[600px]' src={T5} />
        </div>
      </div>
    </div>
  )
}

export default Travel;