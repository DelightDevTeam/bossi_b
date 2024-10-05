import React, { useContext } from 'react'
import logo from '../assets/img/logo.png'
import tele from '../assets/img/tele.png'
import viber from '../assets/img/viber.png'
import fb from '../assets/img/fb.png'
import line from '../assets/img/line.webp'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL'
import authCheck from '../hooks/authCheck'
import { AuthContext } from '../contexts/AuthContext'

const ContactPage = () => {
  authCheck();
  const { content } = useContext(AuthContext)
  const {data:agent} = useFetch(BASE_URL + '/agent')
    const socials=[
        {img:tele,title:'Telegram',link:'http://t.me/Bossiofficial'},
        {img:viber,title:'Viber',link:'https://msng.link/o?959947000013=vi'},
        {img:fb,title:'Facebook',link:'https://www.facebook.com/profile.php?id=61565208721129&mibextid=LQQJ4d'},
        {img:line,title:'Phone',link:'tel:09947000013'},
     ]
  return (
    <div className='py-5 px-3 px-sm-5 mb-5 '>
      <h4 className="fw-bold text-center mb-4">{content.contact.contact}</h4>
      <div className=" contactBox app-gradient mx-auto h-max d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center gap-sm-4 rounded-4 border shadow-lg py-2 py-sm-0 px-4 px-lg-5 my-3 text-white">
             <img src={logo}  />
         <div>
            <small className='fw-bold '>
            {content.contact.welcome}
            </small>
            <small className='d-block mt-2 fw-bold'>{content.contact.service}</small>
        </div>
      </div>
      <p className='text-center mb-5'>{content.contact.hotline} - {agent?.phone}</p>
      <div className="row text-center">
        {socials.map((item,index)=>{
            return <div className='col-6 mb-4 col-sm-3 text-center' key={index}>
               <Link to={item.link} target='_blank'>
               <img src={item.img} className='socialContactImg' />
                <small className='d-block'>{item.title}</small>
               </Link>
            </div>
        })}
      </div>
    </div>
  )
}

export default ContactPage
