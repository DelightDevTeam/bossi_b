import React, { useState } from "react";
import Footer from "../components/mobile/Footer";
import Carousel from "../components/mobile/Carousel";
import "../assets/css/home.css";
import { Link } from "react-router-dom";
import { FaGift, FaViber } from "react-icons/fa";
import tele from "../assets/img/tele.png";
 import viber from "../assets/img/viber.png";
 import fb from "../assets/img/fb.png";
 import Marquee from "../components/mobile/Marquee";
import BASE_URL from "../hooks/baseURL";
import useFetch from "../hooks/useFetch";
import { IoWalletOutline } from "react-icons/io5";
import GameTabsLg from "../components/desktop/GameTabsLg";
import LanguageDropdown from "../components/LanguageDropdown";

const HomePage = () => {
  const auth = localStorage.getItem("token");
  const [loader, setLoader] = useState(false);
  const {data:contact} = useFetch(BASE_URL + "/contact");

  const links = [
    { img: tele, link: 'telegram.org' },
     { img: viber, link: 'viber.com' },
     { img: fb, link: 'facebook.com' },

  ];

  const logout = async (e) => {
      e.preventDefault();
      setLoader(true);
      localStorage.removeItem('token');
      window.location.href = "/login";
      try {
          const response = await fetch(`${BASE_URL}/logout`, {
              method: "POST",
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${localStorage.getItem('token')}`
              },
          });
          if (response.ok) {
              // console.log("Logout success!");
              setLoader(false);
              window.location.href = "/login";
          } else {
              console.error("Logout failed:", response.statusText);
          }
      } catch (error) {
          console.error("Error during logout:", error);
      }
  };

  return (
    <div >
      <div className="px-lg-3" >
      <div className="d-flex align-items-center  gap-sm-3">
        <Marquee/>
        <LanguageDropdown/>
      </div>
      <Carousel />
      <div className="beforeLoginHome my-5 pb-3">
          <Link to={'/register'}>
         <div className="registerBtn mb-3 ">
          <div className="text-center pt-3 ">
            <h5 className="fw-semibold">စာရင်းသွင်းရန်</h5>
          </div>
        </div>
         </Link>
        <Link to={'/login'}>
        <div className="loginBtn mb-3">
          <div className="text-center pt-3">
            <h5 className="fw-semibold">လော့အင်</h5>
          </div>
        </div>
        </Link>
       
       <Link to={'/information?tab=transfer'}>
       <button className="w-full py-2 rounded-3 sidebarSocial bg-white text-center text-black fw-bold"  >
              <IoWalletOutline size={30} className="me-2" />
              ငွေသွင်း/ငွေထုတ်
            </button>
       </Link>

        <div className="mt-4 w-full text-center d-flex align-items-center justify-content-center gap-2  py-2 cursor-pointer sidebarSocial text-center rounded-3">
          <FaViber size={28} />
          <p className=" fw-semibold">: 0912345689</p>
        </div>
        <Link to={'/promotion'} className="mt-4  w-full text-center d-flex align-items-center justify-content-center gap-2   py-2 cursor-pointer homePromotionBtn text-center rounded-3">
          <FaGift size={28} />
          <p className=" fw-semibold  ">ပရိုမိုးရှင်း</p>
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
      <GameTabsLg/>
      <Footer contact={contact} />
    </div>
  );
};

export default HomePage;
