import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../componant/nav'
const Aboutas = () => {
  return (
    <motion.div
    initial ={{x: "-100vw" , opacity : 0}}
    animate={{ x: 0 , opacity : 1 }}
    transition={{ duration: 0.5 }}
    className='bg-white'


    >
       
        <h1 style={{ background: "#f2f2f2", padding: "30px" }}>Meine Karriere. Mein Erfolg.</h1>
        <div className="margin-p">
            <h4 className="text-c">WIR HABEN DEN PASSENDEN JOB FÜR DICH. SENDE UNS DEINE <br />
            </h4>
            <h3 className='margin-p text-c'>About us </h3>
        </div>
        <div className="container">
            <div className="row align-items-center ">
                
                <div className="col-12 col-md-6 col-lg-6 padding-cont">
                    <img src="https://wpshopmart.com/html/demo/Website-template-design-1/images/10.jpg" alt="" />
                </div>

                <div className="col-12 col-md-6 col-lg-6 padding-cont">
                    <h2>
                        About us
                    </h2>
                    
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Aboutas
