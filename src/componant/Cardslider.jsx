import React from 'react'
import { motion } from "framer-motion";
import img2 from "../assets/img2.jpg"
import { fadeIn, textVariant } from "../utils/motion";
import '../css/cardslider.scss'
import { Link } from 'react-router-dom';
const Cardslider = ({img , title , header  , link , titlelink} ) => {
  return (
    <div class="card-hover w-[90%] mt-6 mx-auto md:mx-[30px] lg:mx-[30px] md:w-[45%]">
    <div class="card-hover__content">
      <h3 class="card-hover__title">
        {header}
      </h3>
      <p class="card-hover__text">{title}
        <br/>
        <Link to={link} className='my-2 text-lg'>
        {titlelink}
        </Link>
      </p>
      <a href="#" class="card-hover__link">
        <span> <Link to="/services" > visit service</Link>  </span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div class="card-hover__extra">
      <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
    </div>
    <img src={img} alt="" />
  </div>
  )
}

export default Cardslider
