import React from 'react'
import Mainimg from '../componant/Mainimg'
import Pagetwo from '../componant/Pagetwo'
import Card from '../componant/Card'
import Sectionimg from '../componant/Sectionimg'
import Bluedev from '../componant/Bluedev'
import Paces from '../componant/Paces'
import { motion } from 'framer-motion'
import Header from '../componant/Header'
import Icon from '../componant/Icon'
const Mainpage = () => {
  return (
    <motion.div
        initial ={{x: "-100vw" , opacity : 0}}
        animate={{ x: 0 , opacity : 1 }}
        transition={{ duration: 0.5 }}
        className=''
    >
       
        <div className="bg-white">
          <Pagetwo />
          <Icon />
          <Sectionimg />
          <Bluedev  />
          {/* < Paces /> */}
        </div>     
        
    </motion.div>
  )
}

export default Mainpage
