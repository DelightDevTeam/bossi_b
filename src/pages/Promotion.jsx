import React from 'react'
import p1 from '../assets/img/p1.png'
import p2 from '../assets/img/p2.png'
import p3 from '../assets/img/p3.png'

const Promotion = () => {
    const imgs=[
        p1,p2,p3
    ]
  return (
      <div className='py-4 px-3 px-sm-5 mx-lg-5 mb-5'>
        <h1 className="fw-bold text-center">Promotion</h1>
        {imgs.map((img,index)=>{
          return  <img key={index} src={img} className='my-3 my-sm-4 promotionImg' />
        })}
     </div>
  )
}

export default Promotion
