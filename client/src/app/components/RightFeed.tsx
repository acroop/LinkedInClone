import Image from 'next/image'
import React from 'react'

const headLines = [
    {
      "head":"Total life insurance policies grow by 9.6% YoY to 24.9 lakh in July 2024",
      "subHead": "Banking and Finance Sector"
    },
    {
      "head":"Total number of passengers carried by airlines  rises 6.9% YoY in July 2024",
      "subHead": "Transportation Sector"
    },
    {
      "head":"Telecom sector's wireless subscribers rise 13 lakh MoM in June 2024",
      "subHead": "Telecom Services"
    },
]

function RightFeed() {
  return (
    <div>
      <div className=' p-7 text-2xl font-bold pb-2'>Latest News</div>
      <div className=' pt-0 p-8 text-gray-500 pb-3'>Top Stories</div>
      <div className=''>
      {
        headLines.map((item, index) => (
          <div key={index} className=' text-sm pt-0 p-8 text-gray-500 pb-3 hover:bg-[#ecebeb] cursor-pointer'>
            <div className='font-bold text-sm'>{item.head}</div>
            <div className='text-gray-500'>{item.subHead}</div>
          </div>
        ))         
      }
      </div>
     
    </div>
  )
}

export default RightFeed
