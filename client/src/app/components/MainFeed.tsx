import Image from 'next/image'
import React from 'react'


const MainFeed = () => {
  return (
    <div className='w-full '>
      <div className=' border-b-8'>
        <div className='w-full flex flex-col items-center justify-center p-2 m-3'>
          <div className=' flex w-full justify-center gap-4'>
            <Image
            className=' rounded-full'
            height={10}
            width={45}
            alt='Profile'
            src="/pp.jpg"
            />
            <input type="text" placeholder='Type....' className='w-[75%] h-12 p-2 border-2 rounded-xl' />
          </div>
          
          <div className=' flex justify-evenly w-full items-center m-2 p-2'>
            <div className='hover:bg-[#ecebeb] cursor-pointer p-4 rounded-md transition duration-500 flex items-center gap-2 '>
              <img className=' w-8' src="/gal.svg" alt="" />
              Media</div>

            <div className=' hover:bg-[#ecebeb] cursor-pointer p-4 rounded-md transition duration-500 flex items-center gap-2'>
              <img className=' w-8' src="/pen.svg" alt='' />
              Write</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainFeed