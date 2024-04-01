import React from 'react'
import { FcFullTrash } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { SiInfracost } from "react-icons/si";
import frined from '../assets/frined.svg'
import group from '../assets/group.svg'
import n from '../assets/n.svg'
import right from '../assets/right mark-01.svg'
const Icon = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className='col-12 col-md-6 col-lg-3 reletive mt-50  '>
                <div className="flex flex-col  justify-center items-center">
                    <div className="">
                        <i className=''>
                        <img src={group} className='w-[55px] h-55 co-blue mb-6' />

                        </i>
                    </div>
                    <h1 className="text-3xl font-bold center co-blue ">
                        Over
                    </h1>
                    <h3 className='text-3xl center font-w-3  co-blue '>
                    250,000 cleans
                    </h3>
                    <hr  className='h-2 w-[60%] mx-5 my-6' />
                    <p className='text-center '>
                        Our microfiber cloths, which capture dust and dirt rather than move it around, last longer than traditional cotton.
                    </p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3 reletive mt-50  '>
                <div className="flex flex-col  justify-center items-center">
                    <div className="">
                        <i className=''>
                        <img src={right} className='w-[55px] h-55 co-blue mb-6' />

                        </i>
                    </div>
                    <h1 className="text-3xl font-bold center co-blue ">
                    100%
                    </h1>
                    <h3 className='text-3xl center font-w-3  co-blue '>
                    Satisfaction
                    </h3>
                    <hr  className='h-2 w-[60%] mx-5 my-6' />
                    <p className='text-center '>
                    A money-back guarantee, also known as a satisfaction guarantee, if a buyer is not satisfied with a product or service.
                    </p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3 reletive mt-50  '>
                <div className="flex flex-col  justify-center items-center">
                    <div className="">
                        <i className=''>
                        <img src={frined}  className='w-[55px] h-55 co-blue mb-6' />

                        </i>
                    </div>
                    <h1 className="text-3xl font-bold center co-blue ">
                    Eco-Friendly
                    </h1>
                    <h3 className='text-3xl center font-w-3  co-blue '>
                    Cleaning Products
                    </h3>
                    <hr  className='h-2 w-[60%] mx-5 my-6' />
                    <p className='text-center '>
                    Because indoor pollution rates are typically higher than outdoor pollution rates, we take dust removal seriously.
                    </p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3 reletive mt-50  '>
                <div className="flex flex-col  justify-center items-center">
                    <div className="">
                        <i className=''>
                        <img src={n}   className='w-[55px] h-55 co-blue mb-6' />

                        </i>
                    </div>
                    <h1 className="text-3xl font-bold center co-blue ">
                    Cost
                    </h1>
                    <h3 className='text-3xl center font-w-3  co-blue '>
                    Effective
                    </h3>
                    <hr  className='h-2 w-[60%] mx-5 my-6' />
                    <p className='text-center '>
                    Precision cleaning is required throughout such a broad range of modern industries that it might be more.
                    </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Icon
