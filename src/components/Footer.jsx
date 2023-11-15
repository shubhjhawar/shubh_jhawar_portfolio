import React from 'react';
import { footerDetails } from '../constants';

const Footer = () => {
  return (
    <div>
        <div className="w-full h-[1px] bg-secondary mb-3" />
        <div className='flex flex-wrap justify-center items-center'>
            <h2 className='text-secondary text-[16px] font-semibold mt-1 px-2'>Shubh Jhawar</h2>
        </div>
        <div className='flex flex-row justify-center items-center pb-1 mb-1'>
            {footerDetails.map((footer)=> (
                <div
                onClick={() => window.open(footer.link, '_blank')}
                className='grayscale w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'
                >
                <img src={footer.img} alt="social" className='w-1/2 h-1/2 object-contain'/>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Footer