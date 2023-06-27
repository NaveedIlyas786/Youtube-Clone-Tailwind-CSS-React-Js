import ytlogo from "../images/YoutubeLogo.png";
import ytlogoMobile from "../images/moblogo.webp";
import React, { useContext, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';


import {SlMenu} from "react-icons/sl";
import {IoIosSearch} from "react-icons/io";
import {RiVideoAddLine} from "react-icons/ri";
import {FiBell} from "react-icons/fi";
import {CgClose} from "react-icons/cg";

import { Context } from '../context/ContextApi';
import Loader from "../shared/Loader";

const Header = () => {
const [searchQuery, setSearchQuery] = useState("");
const {loading, mobileMenu, setMobileMenu} = useContext(Context); //! By passing "Context",( that is mentioned/declared in 'ContextApi.jsx' file we are able or have authority to Access/Use the "States" defined in  **<Context.Provider></Context.Provider>** ) through passing in "useContext" hook 
const navigate = useNavigate(); //! we cannot use ' useNavigate ' directly: So, we shall have to save it in some variable for its easy using.

const searchQueryHandler = (event)=>{
  if((event?.key === "Enter" || event === "searchButton") && searchQuery?.length>0){
    navigate(`/searchResult/${searchQuery}`);
  }
}

const mobileMenuToggle=()=>{
  setMobileMenu(!mobileMenu);
  console.log(!mobileMenu);
}

const {pathname}=useLocation();
const pageName=pathname.split("/")?.filter(Boolean)?.[0];

//! Now ⇊⇊ we will write the " HTML CODE " for our header Section
  return (
    <div className="sticky top-0 z-10 flex flex-row  items-center justify-between h-14 px-4 md:px-5 bg-black">
      {loading && <Loader/>}
      <div className="flex h-5 items-center">

        {pageName !== "video" && (
        <div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] " 
        onClick={mobileMenuToggle}> 
        {mobileMenu ? (<CgClose className = "text-white text-xl"/>):(<SlMenu className = "text-white text-xl"/>)}
        </div>
        )}

        <Link to="/" className='flex h-5 items-center'>
          <img className="h-full hidden sm:block" src={ytlogo} alt="Youtube" />
          <img className="h-full sm:hidden" src={ytlogoMobile} alt="Youtube" />
        </Link>
      </div>
        <div className="group flex items-center">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className='text-white'/>
            </div>
            <input type='text' className="bg-transparent outline-none text-white px-5 md:pl-0 w-42  sm:w-64 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]" onChange={(e)=>setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery}/>
          </div>
            <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
              <IoIosSearch className='text-white'/>
            </button>
        </div>
        <div className="flex">
          <div className=" items-center  flex">
            <div className="hidden md:flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className="text-xl cursor-pointer text-white"/>
            </div>
            <div className="hidden md:flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className=" text-xl cursor-pointer text-white"/>
            </div>
            <div className="flex overflow-hidden h-8 w-8 rounded-full md:ml-4">
              <img src="https://xsgames.co/randomusers/assets/avatars/male/44.jpg" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header