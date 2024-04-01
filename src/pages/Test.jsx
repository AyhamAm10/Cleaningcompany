import React, { useState } from 'react'
import img5 from "../assets/img5.jpg"
import { Link } from 'react-router-dom'
import Cardservice from './Cardservice'
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import data from '../data/data'
import Navbar from '../componant/nav';
const Services = ({setitemsSelect }) => {
    

    const [items , setitems] = useState(data)


    const Commercial = items.filter((element) => element.type == "Commercial Cleaning" )
    const Privat = items.filter((element) => element.type == "Privat Reinigung" )  

    const handelselect = ()=>{
        setitemsSelect(Privat)
    }

  return (
    <div className="bg-white relative">
        <motion.dev
        initial ={{x: "-100vw" , opacity : 0}}
        animate={{ x: 0 , opacity : 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
    >
       
    <div className="services bg-white mt-[90px]">
            
            {/* Commercial Cleaning  */}
        <div className="container bg-white">
            <h1 className='text-4xl font-bold'>Privat Reinigung </h1>
            <hr className='h-2 my-6'/>
                <div className="row justify-center items-center ">
                    {                    
                        Privat.map((service , index) => (
                                <div className="col-12 col-md-6 col-lg-4 reletive mt-50 serv flex justify-center" onClick={()=>{handelselect()}}>
                                 <Link to='/connect' >
                                    <Cardservice service={service} />
                                </Link>     
                                </div>                      
                        ))
                    }
                </div>
        </div>

        

    </div>
    </motion.dev>
    </div>
  )
}

export default Services

