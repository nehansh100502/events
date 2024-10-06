import React from 'react'
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom'

function contact() {
  return (
    <>
    <div>
        <div className='text-center p-10 mt-12'>
            <h2 className='text-4xl text-[#2dd573] font-bold mb-2'>
            Welcome to NeXoria
            </h2>
            <h2 className='text-2xl text-[#383d3d] font-bold'>
            😊 Thanks ! For contact us through massages ! 😊
            </h2>
            <p className='p-6'>Let's explore awesome content! 🚀🌍</p>
        </div>
        <div className='text-center'>
            <Link to='/Event'>
              <button className='h-14 w-full md:w-60 bg-[#fb7907] hover:bg-teal-500 text-white font-bold mt-7 rounded flex items-center justify-center mx-auto mb-32'>
                 Explore More
                <BsBoxArrowInUpRight className='ml-2 text-white' />
              </button>
            </Link>
          </div>
    </div>
    </>
  )
}

export default contact