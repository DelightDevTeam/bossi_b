import React from 'react'
import { BsVolumeUp } from 'react-icons/bs'
 

const Marquee = () => {
 
  return (
    <div className='d-flex align-items-center gap-2 shadow-lg  homeMarquee  p-1  m-2 '>
        <BsVolumeUp size={18} className='ms-2 soundIcon marqueeText' />
        <marquee className='marqueeText' behavior="" direction="left">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo ut eaque, nostrum iusto voluptate dolor, animi harum alias accusantium facere quas aliquid. Aut cumque non autem laboriosam aperiam totam.
        </marquee>

    </div>
    

   )
}

export default Marquee
