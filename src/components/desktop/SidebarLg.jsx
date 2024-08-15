import React from 'react'
import logo from '../../assets/img/logo.png';
import { FaViber } from 'react-icons/fa';
import profile from '../../assets/img/profile.svg';
import contact from '../../assets/img/contact.svg';
 import about from '../../assets/img/about.svg';
 import home from '../../assets/img/home.svg';
 import money from '../../assets/img/money.png';
 import promotion from '../../assets/img/promotion.svg';
import { Link } from 'react-router-dom';
import slot from "../../assets/img/slot.svg";
import fish from "../../assets/img/fish.svg";
import card from "../../assets/img/card.svg";
import football from "../../assets/img/sport.svg";
import { BsArrowRepeat } from 'react-icons/bs';
 import depositLg from '../../assets/img/depositLg.png';

const SidebarLg = () => {
    const navLinks=[
        { img:home,name:'ပင်မ',link:'/?type=all&list=JILI'},
         {img:profile,name:'မိမိမှတ်တမ်း',link:'/information?tab=profile'},
        {img:money,name:'ငွေသွင်း/ငွေထုတ်',link:'/information?tab=transfer'},
        {img:promotion,name:'ပရိုမိုးရှင်း',link:'/promotion'},
         {img:contact,name:'ဆက်သွယ်ရန်',link:'/contact'},
        {img:about,name:'ကျွန်ုပ်တို့အကြောင်း',link:'/about'},
     ];
     const items = [
       { img: slot, link: "/?type=slot&list=JILI", value: "slot" ,name:'စလော့ဂိမ်းများ'},
      { img: fish, link: "/?type=fishing&list=JILI", value: "fishing" ,name:'ငါးပစ်ဂိမ်းများ'},
      { img: card, link: "/?type=live casino&list=JILI", value: "live casino",name:'ကာစီနိုဂိမ်းများ' },
      { img: football, link: "/?type=sport book&list=SBO", value: "sport book",name:'အားကစားဂိမ်းများ' },
    ];
  return (
       <div className='sidebarLgContainer p-0'>
      <div className="text-center">
        <Link to={'/'}>
        <img src={logo} className='lgSidebarLogo ' />
        </Link>
      </div>
       <div className="d-flex flex-column gap-2 align-items-center">
       <div>
                <Link to={'/information?tab=profile'} >
                  <div className='d-flex align-items-center gap-2 justify-content-center' style={{marginBottom:'0px'}}>
                    <img src={profile} className='me-1 navProfileImg' />
                    <h5 className="navBalance fw-bold">user</h5>
                  </div>
                  <div style={{background:'#3C0646'}} className='ms-1 d-flex py-1  text-white px-2 px-sm-3 rounded-4 mb-3'>
                    <p className='navBalance'>10000MMK </p>
                      <span className="repeatIcon bg-danger ms-1">
                        <BsArrowRepeat size={16}/>
                      </span>
                   </div>
                </Link>
              </div>
              <Link to={'/information?tab=transfer'} >
                <img src={depositLg} className='depositLgImg' />
              </Link>

            </div>
      <div className="text-center px-4 mt-4">
               <div className="registerBtn mb-3 ">
          <div className="text-center pt-3 ">
            <h5 className="fw-semibold">Logout</h5>
          </div>
        </div>
        {navLinks.map((item,index)=>{
            return <Link to={item.link} key={index} >
             <div  className='py-2 mb-3 px-4 rounded-5 border border-2 border-white text-center d-flex align-items-center justify-content-center gap-2'>
                <img src={item.img} className='sidebarLgIcon' />
                <p className='fw-semibold'>{item.name}</p>
            </div>
            </Link>
        })}
        </div>
        {items.map((item,index)=>{
          return <Link to={item.link} className="lgGameTab py-1 mx-3 d-flex items-center justify-content-center gap-2 mb-2" key={index}>
            <img   src={item.img} className='fixedBottomIcon lgGameTabText' />
            <p className='fw-semibold lgGameTabText'>{item.name}</p>
          </Link>
        })}
                 <div className="mt-4 w-max px-4 px-sm-5 py-2 cursor-pointer sidebarSocial text-center rounded-3">
                    <FaViber size={28} />
                    <p className=' fw-semibold'>09123456890</p>
                </div>
                <h5 className=' sidebarTeleText text-center fw-semibold mt-4 mb-3'>
                    Telegram
                <span className="mx-1 mx-sm-3">|</span>
                0912346590</h5>
                <h5 className='sidebarViberText text-center fw-semibold mb-5'>Viber  
                <span className="mx-1 mx-sm-3">|</span>
                  0912346590</h5>
     </div>
  )
}

export default SidebarLg
