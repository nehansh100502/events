import React from 'react'
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import FindEvent from '../Events/findEvent';
// import Footer from '../Footer/footer';

function event() {
 
  return (
   <>
   <div className='bg-[#efeded] h-[100%]'>
   {/* <Link to='/' className='text-blue-800 mr-[400px] flex flex-wrap ml-3'>Home<BsChevronRight className='h-7 w-5'/>Events</Link> */}
    <h2 className='text-[#181717a7] text-5xl text-center font-serif font-bold p-6'>Discover, Connect, and Grow</h2>
    <h2 className='text-orange-800 bg-white h-10 font-bold text-center p-2 hover:bg-slate-300 cursor-pointer'>
        There is a events to grow your skill and discover new things with CrowdHive
      </h2>
   <div>
   <FindEvent />
   </div>
    </div>
    <div>
      <h2 className='text-orange-800 bg-white h-10 font-bold text-center p-2'>
        There is a events to grow your skill and discover new things .. 
      </h2>
    </div>
    {/* <Footer/> */}
   </>
  )
}

export default event