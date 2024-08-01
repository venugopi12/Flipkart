import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[20px] bg-[#212121]'>
      <div className='flex text-[white]'>
        <div className='basis-1/6 pl-[20px]'>
          <div>
            <p className='text-[#878570]'>ABOUT</p>
            <ul className='font-light text-sm pt-[10px]'>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Carrers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
          </div>
        </div>
        <div className='basis-1/6'>
          <div>
            <p className='text-[#878570]'> GROUP COMPANIES</p>
            <ul className='font-light text-sm pt-[10px]'>
              <li>Myntra</li>
              <li>Flipkart Wholesale</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </ul>
          </div>
        </div>
        <div className='basis-1/6'>
          <div>
            <p className='text-[#878570] font-semibold'>HELP</p>
            <ul className='font-light text-sm pt-[10px]'>
              <li>Payments</li>
              <li>Shopping</li>
              <li>Cancellation</li>
              <li>Return</li>
              <li>FAQ</li>
              <li>Report Infringement</li>
            </ul>
          </div>
        </div>
        <div className='basis-1/6'>
          <div>
            <p className='text-[#878570]'>CONSUMER POLICY</p>
            <ul className='font-light text-sm pt-[10px]'>
              <li>Cancellation & Returns</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
            </ul>
          </div>
        </div>
        <div className='basis-1/6 pr-[25px]'>
          <div className='phone:hidden'>
            <div>
              <p className='text-[#878570]'>Mail Us:</p>
              <p className='text-sm mb-[20px] font-light pt-[10px]'>
                Flipkart Internet Private Limited,
                Building Alyssa, Begonia & Clove Embassy Tech Village,
                Outer Ring Road, Devarabeesanahalli Village,
                Bengaluru, 560103,
                Karnataka, India
              </p>
            </div>
            <div className='phone:hidden'>
              <p className='text-[#878570]'>Social:</p>
              <div className='flex w-[100%] h-[20px]'>
                <svg className='pr-[10px] text-white-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                <svg className='pr-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                <svg className='pr-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className='basis-1/6 pr-[25px] phone:hidden'>
          <div>
            <p className='text-[#878570]'>Registered Office Address:</p>
            <p className='text-sm font-light pt-[10px]'>
              Flipkart Internet Private Limited,
              Building Alyssa, Begonia & Clove Embassy Tech Village,
              Outer Ring Road, Devarabeesanahalli Village,
              Bengaluru, 560103,
              Karnataka, India
              Telephone:044-45614700
            </p>
          </div>
        </div>
      </div>
      <div className='bg-['>
          <p className='text-center font-light text-[white]'>&copy; 2007-2024 Flipkart.com</p>
        </div>
    </div>
  )
}

export default Footer