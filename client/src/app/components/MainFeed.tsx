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
      <div className='m-4'>
      <div className='flex items-center gap-2'>
        <img src="./icon.jpg" className='w-[50px] h-auto rounded-full' alt="PP" />
        <div className='flex flex-col'>
          <h1 className='font-bold'>Aman Sinha</h1>
          <p className='text-[12px] text-[#818080]'>Co-Founder | Snow-Loft</p>
          <p className='text-[12px] text-[#818080]'>2h ago</p>
        </div>
        </div>
      <div>
        <h1 className='mt-2 font-semibold'>🚀 Join Snow-Loft: We're Hiring Game Developers! 🎮</h1>
        <p>Are you ready to turn your game development dreams into reality? At Snow-Loft, we're on the lookout for talented and passionate game developers to join our creative team and help us build the next generation of gaming experiences!
<br />
About Us: Snow-Loft is a cutting-edge game development studio dedicated to crafting unique and immersive gaming worlds. Our team thrives on innovation, creativity, and collaboration. We’re currently working on an exciting new project that blends epic storytelling with groundbreaking gameplay, and we want you to be a part of it!
<span className='inline text-[#818080]'> ...more</span>
</p>
<br />
<img src="./hiring.png" className='w-fit' alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainFeed