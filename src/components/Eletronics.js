import React from 'react';
import E1 from '../images/eletronics/e1.jpeg';
import E2 from '../images/eletronics/e2.jpeg';
import E3 from '../images/eletronics/e3.jpeg';
import E4 from '../images/eletronics/e4.jpeg';
import E5 from '../images/eletronics/e5.jpeg';
import E6 from '../images/eletronics/e6.jpeg';
import E7 from '../images/eletronics/e7.jpeg';
import E8 from '../images/eletronics/e8.jpeg';
import E9 from '../images/eletronics/ad2.jpg'

const Eletronics = () => {
  return (
    <div className='w-[100%] bg-[#F1F2F4] pt-[20px] flex flex-row'>
      <div className='w-[85%]'>
        <div className='bg-[white] ml-[20px] mr-[20px] '>
          <div className='font-bold text-xl pt-[20px] pl-[20px]'>
            <h1>Best Of Electronics</h1>
          </div>
          <div className='flex flex-row mt-[20px] items-center justiify-center'>
            <div className='w-[17%] ml-[20px] box-border border-2 p-8 rounded mb-[20px]'>
              <div className='h-[180px]'>
                <img src={E1} />
                <p className='text-sm pt-[20px]'>Top Mirrorless Cameras</p>
                <p className='font-bold text-base'>Shop Now!</p>
              </div>
            </div>
            <div className='w-[17%]  ml-[20px] box-border border-2 p-8 rounded mb-[20px]'>
              <div className='h-[180px]'>
                <img src={E2} />
                <p className='text-sm pt-[80px]'>Printers</p>
                <p className='font-bold text-base'>From ₹4999</p>
              </div>
            </div>
            <div className='w-[17%] ml-[20px] box-border border-2 p-8 rounded mb-[20px]'>
              <div className='h-[180px]'>
                <img src={E3} />
                <p className='text-sm pt-[30px]'>Beauty</p>
                <p className='font-bold text-base'>Shop Now!</p>
              </div>
            </div>
            <div className='w-[17%] ml-[20px] box-border border-2 p-8 rounded mb-[20px]'>
              <div className='h-[180px] pt-[40px]'>
                <img src={E4} />
                <p className='text-sm pt-[70px]'>Printers</p>
                <p className='font-bold text-base'>From ₹2999</p>
              </div>
            </div>
            <div className='w-[17%] ml-[20px] box-border p-8 rounded border-2 mb-[20px]'>
              <div className='h-[180px] pl-[20px]'>
                <img src={E5} />
                <p className='text-sm pt-[30px]'>Trimmers</p>
                <p className='font-bold text-base'>Shop Now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[white] w-[15%] mr-[20px] mb-[5px] items-center justify-center'>
        <div className='pt-[20px]'>
          <img src={E9} />
        </div>
      </div>
    </div>

  )
}

export default Eletronics;