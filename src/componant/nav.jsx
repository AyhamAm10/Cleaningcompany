import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import z from "../assets/z-01.svg"
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import Heddinlist from "./Heddinlist"
import data from "../data/data";

  

const Navbar = ({setitemsSelect}) => {
  const [active , setactive] = useState('')
  const [toggle , settoggle] = useState(false)
  const navLinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "/about",
      title: "Aboutus",
    },
    {
      id: "/servicesc",
      title: "Privat services",
    },
    {
      id: "/servicesp",
      title: "Commercial services",
    },
    {
      id: "/connect",
      title: " connect us",
    }
  ];
  return (
    <nav style={{background: " #002147" , color:" #fff" } } className={`${styles.paddingX}  w-full flex items-center py-3 fixed top-0 z-20 `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
       <Link
       to="/"
       className="flex items-center gap-2"
       onClick={()=>{
        setactive("")
        window.scroll(0 , 0 )
       }}
       >
       <img src={z} alt='logo' className='w-9 h-9 object-contain white' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            <span className='sm:block hidden'></span>
          </p>
       </Link>
          <ul className="list-none hidden sm:flex flex-row gap-4 ">
        {
          navLinks.map((link)=>(
            <li
            key={link.id}
            className={`
            ${active === link.title?
            'text-white'
            :'text-secondary'
          } hover:text-white text-[18px] font-medium cursor-pointer
            `}
            onClick={()=>{
              setactive(link.title)
              setitemsSelect(data)
            }}
            >
                 <Link
                    to={link.id}>
                    {link.title}
                </Link>
            </li>
          ))
        }    
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center ">
              <img
              src={
                !toggle? menu : close
              } 
              className="w-[28px] h-[28px]"
              onClick={()=>{settoggle(!toggle)}}
              alt="menu" />
              <div 
            //   className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              >
                <Heddinlist active={active} toggle={toggle} settoggle={settoggle} setitemsSelect={setitemsSelect}/>
           </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar