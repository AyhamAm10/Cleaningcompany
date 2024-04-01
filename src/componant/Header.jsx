import { useState } from "react"
import { close } from "../assets"
import { menu } from "../assets"
import '../css/header.css'
import { motion } from "framer-motion"
import { navLinks } from "../constants";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SlActionRedo } from "react-icons/sl";
import data from "../data/data"


// import {bg} from  "../assets/bg.jpg"



{/* style={open?{clipPath:'polygon(0 0, 78% 0, 100% 100%, 28% 100%)'}:{clipPath:'polygon(0 0, 45% 0, 75% 100%, 28% 100%)'}} */}



const Header = ({setitemsSelect}) => {
    const [open , setopen ] = useState()
    const handelclick = ()=>{
        setopen((prev)=> !prev);
        console.log(open)
        setitemsSelect(data)

    }
  return (
    <>
        <div
         style={{
            backgroundImage: `url(https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        className="header releteve h-[100vh]">
            <div className="toggel">
                <img src={open ?close : menu} alt="" onClick={
                    handelclick
                }/>
            </div>
           
        <div className="bg-red sidebar" >
                <div className="rot1" style={open ? {width: "95%"} :{width:"570px"}} >
                    <div className="text relative h-[100%] flex justify-center items-center">
                        <div className="content">
                            {
                                open? 
                                <motion.ul>
                                    {
                                        navLinks.map((item , id)=>(
                                            <motion.li
                                             initial={{opacity: 0 , x:1000 }}
                                             animate={{opacity: 1 , x:0}}
                                             transition={{ duration: 0.5 , delay: id * 0.2 }}
                                            // whileHover={{scale: 1.1 , opacity: 0.7 , x: 20}}
                                            className="white p-2 text-2xl font-bold hover:translate-x-20"
                                            >
                                                <Link to={item.id} onClick={handelclick}>
                                                    {item.title}
                                                </Link>
                                            </motion.li>
                                            
                                        ))
                                    }
                                        <motion.li
                                            initial={{opacity: 0 , x:1000 }}
                                            animate={{opacity: 1 , x:0}}
                                            transition={{ duration: 0.5 , delay: 0.5 }}
                                        // whileHover={{scale: 1.1 , opacity: 0.7 , x: 20}}
                                        className="white p-2 text-2xl font-bold hoveropacity hovericon relative"
                                        >
                                                services
                                                <SlActionRedo className="servicesIcon "/>
                                                <motion.ul
                                                initial={{opacity: 0 , y:300 }}
                                                animate={{opacity: 1 , y:0}}
                                                transition={{ duration: 0.5 , delay: 0.6 }}

                                                className="serviseList">
                                                    <motion.li className="text-sm m-2 text-center">
                                                        <Link to={"/servicesp"} onClick={handelclick}>
                                                            Commercial Cleaning
                                                        </Link>
                                                    </motion.li>
                                                    <hr />
                                                    <motion.li className="text-sm m-2 text-center">
                                                        <Link to={"/servicesc"} onClick={handelclick}>
                                                            Privat Reinigung
                                                        </Link>
                                                    </motion.li>
                                                </motion.ul>
                                        </motion.li>
                                        <motion.li 
                                        initial={{opacity: 0 , x:1000 }}
                                        animate={{opacity: 1 , x:0}}
                                        transition={{ duration: 0.5 , delay: 0.7}}
                                        // whileHover={{scale: 1.1 , opacity: 0.7 , x: 20}}
                                        className="white p-2 text-2xl font-bold hoveropacity hovericon relative"
                                        >
                                             <Link to={"/connect"} onClick={handelclick}>
                                                contact us
                                            </Link>
                                        </motion.li>
                                </motion.ul>:
                                <div className="">
                                    <h1 className="white text-5xl font-bold ">#TEAMPOWER</h1>
                                    <p className="white p-12 text-center text-lg">Ihr Partner in Sachen <br /> Personaldienstleistungen</p>
                                </div>
                            }
                            <div className="flex justify-end w-full">
                                    <ul className="flex  w-[170px] justify-between ">
                                        <li className="text-3xl white"><FiFacebook /></li>
                                        <li className="text-3xl white"><FiInstagram /></li>
                                        <li className="text-3xl white"><FiLinkedin /></li>
                                        <li className="text-3xl white"><FiYoutube /></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rot2"></div>
        </div>
        </div>
    </>
  )
}

export default Header
