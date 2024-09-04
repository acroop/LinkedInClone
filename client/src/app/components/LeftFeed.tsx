import React from 'react'

const LeftFeed = () => {
  return (
    <div className='flex justify-center items-center m-2 flex-col gap-1'>
        <img src="./pp.jpg" className='w-[50px] rounded-full' alt="" />
        <h1 className='font-extrabold'>Supratik Das</h1>
        <p className='text-[15px] text-[#818080]'>SDE</p>
        <button className='bg-[#414040] text-[13px] text-white p-2 rounded-2xl'>View Profile</button>
    </div>
  )
}

export default LeftFeed