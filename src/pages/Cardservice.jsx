import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import '../css/cardservice.css'







const Cardservice = ({service}) => {
  console.log(service)
    
    return (
      <>
      <figure class="snip1218">
        <div class="image"><img src={service.img} alt="sample80"/>
          <p>
            "That's the problem with nature, something's always stinging you or oozing mucous all over you. Let's go and watch TV."
          </p>
        </div>
        <figcaption>
          <h3><span> {service.item}</span></h3>
          <h5>{service.title}</h5>
        </figcaption>
      </figure>
      </>
    )
  }

  export default Cardservice