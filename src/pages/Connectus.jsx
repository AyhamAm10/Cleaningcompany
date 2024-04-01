import axios from 'axios';
import React, { useState } from 'react'
import data from '../data/data'
import { motion } from 'framer-motion';
import Navbar from '../componant/nav';

const Connectus = ({itemsSelect}) => {

    const [namevalue, setnamevalue] = useState(null);
    const [famvalue, setfamvalue] = useState(null);
    const [locationvalue, setlocationvalue] = useState(null);
    const [numbervalue, setnumbervalue] = useState(null);
    const [emailvalue, setemailvalue] = useState(null);
    const [myordervalue, setmyordervalue] = useState(null);
    const [success, setsuccess] = useState(null);
    const [error, seterror] = useState(null);
    const [typeerror, settypeerror] = useState(false);
    const [item , setitem] = useState(data)
    const [textarea , settextarea] = useState(data)




    const handleSubmit = () => {
        var currentDate = new Date();
        // Get the current date
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
        var year = currentDate.getFullYear();

        // Get the current time
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        const date = {
            day : day ,
            month : month ,
            year : year ,
            hours : hours ,
            minutes : minutes ,
            seconds : seconds ,
            textarea : textarea
        }

        axios.post("http://localhost:3000/", {
            item: myordervalue,
            name: namevalue,
            number: numbervalue,
            email: date,
            location: locationvalue
        })
            .then((response) => {
                console.log(response.data);
                setsuccess('successful')
                setTimeout(() => {
                    setsuccess(null)
                }, 5000);
            })
            .catch((err) => {
                seterror(err.message);
                console.log(error);
                setTimeout(() => {
                    seterror(null)
                }, 5000);
            });
    }

    return (
        <motion.div
        initial ={{x: "-100vw" , opacity : 0}}
        animate={{ x: 0 , opacity : 1 }}
        transition={{ duration: 0.5 }}
        className='relative bg-white'
        >
            
            {
            success ?
            <div class="alert alert-success alert-order col-10 col-md-5 col-lg-4" role="alert">
               The operation succeeded 
            </div> : null
        }
        {
            error ?
            <div class="alert alert-danger alert-order col-10 col-md-5 col-lg-4" role="alert">
               error : {error}
            </div> : null
        }

            <h1 style={{ background: "#f2f2f2", padding: "30px" }}>Meine Karriere. Mein Erfolg.</h1>
            <div className="margin-p">
                <h4 className="text-c">WIR HABEN DEN PASSENDEN JOB FÜR DICH. SENDE UNS DEINE <br />
                </h4>
                <h3 className='margin-p text-c'>INITIATIVBEWERBUNG </h3>
            </div>
            <div className="container">
                <div className="row align-items-center ">
                    <form className="  col-12 col-md-6 col-lg-6 padding-cont" onSubmit={(e) => {
                        
                        e.preventDefault()
                        handleSubmit()
                    }} >
                        <div className="inputs ">
                            <div className='d-flex flex-column margin-p ' >
                                <label htmlFor="">name *</label>
                                <input type="text" className='form-control' onChange={(e) => { setnamevalue(e.target.value) }} required />
                            </div>
                            
                            <div className='d-flex flex-column margin-p' >
                                <label htmlFor="">location *</label>
                                <input type="text" className='form-control' onChange={(e) => { setlocationvalue(e.target.value) }} required />
                            </div>
                            <div className='d-flex flex-column margin-p' >
                                <label htmlFor="">number phone *</label>
                                <input type="text" className='form-control' onChange={
                                    (e) => {setnumbervalue(e.target.value)
                                    console.log(typeof(numbervalue))}
                                
                                } required />
                            </div>
                            <div className='d-flex flex-column margin-p' >
                                <label htmlFor="">E-Mail *</label>
                                <input type="text" className='form-control' onChange={(e) => setemailvalue(e.target.value)} required />
                            </div>
                            {/* select option  */}
                            <div className="d-flex flex-column margin-p">
                                <label htmlFor="exampleSelect" className="block text-sm font-medium text-gray-700 mb-2">
                                    select items *
                                </label>
                                <div className="relative ">
                                    <select
                                    onChange={(e)=>{
                                        setmyordervalue(e.target.value);
                                        console.log(myordervalue)
                                    }}
                                    required
                                    id="exampleSelect"
                                    name="exampleSelect"
                                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 select"
                                    >
                                    {
                                        itemsSelect.map(e=>(<option value={e.item}>{e.item}</option>))
                                    }
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                        />
                                    </svg>
                                    </div>
                                </div>
                                </div>
                                <div className='d-flex flex-column margin-p' >
                                    <label htmlFor=""> your massege</label>
                                   
                                    <textarea className='form-control' onChange={(e) => settextarea(e.target.value)}  cols="30" rows="5"></textarea>
                                </div>

                            
                        </div>
                        <input type="submit" className='btn btn-outline-success btn-lg' onSubmit={(e) => {
                            e.preventDefault()
                            
                        }} />
                    </form>
                    <div className="col-12 col-md-6 col-lg-6 padding-cont">
                        <img src="https://wpshopmart.com/html/demo/Website-template-design-1/images/10.jpg" alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Connectus
