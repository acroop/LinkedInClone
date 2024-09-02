import React from 'react'
import MainFeed from './MainFeed'

const Feed = () => {
  return(
   <>
      <div className='flex bg-[#ecebeb] gap-1 overflow-x-hidden '>
        <div className='hidden bg-white m-2  lg:block  h-screen w-[15%] rounded-2xl'>
        </div>
        <div className='h-screen bg-white m-2  w-full lg:w-1/2 rounded-2xl'>
          <MainFeed />
        </div>
        <div className='hidden bg-white m-2 lg:block  h-screen w-[35%] rounded-2xl'>
        </div>
      </div>
      <div className='lg:hidden bg-white m-2 fixed bottom-0 left-0 right-0  p-2 rounded-full'>
      </div>
    </>
  )
}

export default Feed