import React from 'react'
import img1 from "../assets/logo.png"

export default function nav() {
  return (
    <div>
        <div className=' max-w-[1280px] mx-auto '> 
      <div className='flex justify-center flex-col sm:flex-row py-2  max-w-[800px] mx-auto sm:justify-between items-center capitalize  text-[12px] '>
        <img className='w-5' src={img1} alt="" />
        <div>
        <ul className='flex flex-col sm:flex-row justify-center items-center space-x-2 font-bold'>
          <li className='text-zinc-300  hover:underline hover:bg-black rounded-full px-2 py1'>product</li>
          <li className='text-zinc-300  hover:underline hover:bg-black rounded-full px-2 py1'>support</li>
          <li className='text-zinc-300  hover:underline hover:bg-black rounded-full px-2 py1'>road map</li>
          <li className='text-zinc-300 hover:underline hover:bg-black rounded-full px-2 py1'>forum</li>
        <button className='py-1 px-3 bg-zinc-300  rounded-full'>Buy now</button>
        </ul>
        </div>
      </div>
   </div>
    </div>
  )
}
