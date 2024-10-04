import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/mobile/Footer";
import Carousel from "../components/mobile/Carousel";
import "../assets/css/home.css";
import { Link } from "react-router-dom";
import { FaGift, FaViber } from "react-icons/fa";
import tele from "../assets/img/tele.png";
import viber from "../assets/img/viber.png";
import fb from "../assets/img/fb.png";
import adsImg from '../assets/img/ads.png';
import Marquee from "../components/mobile/Marquee";
import BASE_URL from "../hooks/baseURL";
import useFetch from "../hooks/useFetch";
import { IoWalletOutline } from "react-icons/io5";
import GameTabsLg from "../components/desktop/GameTabsLg";
import LanguageDropdown from "../components/LanguageDropdown";
import { AuthContext } from "../contexts/AuthContext";
import { Button, Modal } from "react-bootstrap";
import SweetAlert from 'sweetalert-react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const HomePage = () => {
  const { lan, auth } = useContext(AuthContext);
  const { data: contact } = useFetch(BASE_URL + "/contact");
  const MySwal = withReactContent(Swal);

  const links = [
    { img: tele, link: "telegram.org" },
    { img: viber, link: "viber.com" },
    { img: fb, link: "facebook.com" },
  ];
   const { data:ads } = useFetch(BASE_URL + "/popup-ads-banner");
 // Function to show alert with image
 const showAlertWithImage = () => {
  MySwal.fire({
     text: 'ငွေသွင်းငွေထုတ်အတွက် အကြောင်းကြားစာ ဆက်သွယ်နိုင်ပါတယ် အခုပဲ ဆက်သွယ်လိုက်ပါ  @bossi',
     imageUrl: ads?.img_url , // Replace with your image URL
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Ads Image',
    confirmButtonText: 'OK'
  });
};
useEffect(()=>{
 if(ads?.img_url)  showAlertWithImage()
},[ads])
  return (
    <div >
       <div className="px-lg-3">
        <div className="d-flex align-items-center  gap-sm-3">
          <Marquee />
          <LanguageDropdown />
        </div>
        <Carousel />
        
        {!auth && (
          <div className="beforeLoginHome my-5 pb-3">
            <Link to={"/register"}>
              <div className="registerBtn mb-3 ">
                <div className="text-center pt-3 ">
                  <h5 className="fw-semibold">
                    {lan === "en" ? "Register" : "စာရင်းသွင်းရန်"}
                  </h5>
                </div>
              </div>
            </Link>
            <Link to={"/login"}>
              <div className="loginBtn mb-3">
                <div className="text-center pt-3">
                  <h5 className="fw-semibold">
                    {lan === "en" ? "Login" : "အကောင့်ဝင်ရန်"}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        )}
        <div className="beforeLoginHome my-5 pb-3">
          <Link to={"/information?tab=transfer"}>
            <button className="w-full py-2 rounded-3 sidebarSocial bg-white text-center text-black fw-bold">
              <IoWalletOutline size={30} className="me-2" />
              {lan === "en" ? "Cash In/Out" : "ငွေသွင်း/ငွေထုတ်"}
            </button>
          </Link>

          <div className="mt-4 w-full text-center d-flex align-items-center justify-content-center gap-2  py-2 cursor-pointer sidebarSocial text-center rounded-3">
            <FaViber size={28} />
            <p className=" fw-semibold">: 0912345689</p>
          </div>
          <Link
            to={"/promotion"}
            className="mt-4  w-full text-center d-flex align-items-center justify-content-center gap-2   py-2 cursor-pointer homePromotionBtn text-center rounded-3"
          >
            <FaGift size={28} />
            <p className=" fw-semibold  ">
              {lan === "en" ? "Promotion" : "ပရိုမိုးရှင်း"}
            </p>
          </Link>
          <div className="mt-4  d-flex align-items-center  justify-content-center gap-4">
            {links.map((item, index) => {
              return (
                <Link to={item.link} key={index}>
                  <img src={item.img} className="homeContactImg" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Desktop Games Tabs */}
      <GameTabsLg />
      <Footer contact={contact} />
    </div>
  );
};

export default HomePage;
