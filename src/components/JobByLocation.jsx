import React , { useState, useEffect }from 'react'
import styles from "../style";
import base_url from "../api/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NewDelhi, Mumbai, Pune, Bangalore, Gurugram, Hyderabad, Chennai, Goa } from '../assets';

const JobByLocation = () => {
  const navigate = useNavigate();

   // pass particular location to url and navigate to all jobs by location
   const handleJobsByLocation = (location, e) => {
    e.preventDefault();
    navigate(`/alljobsbylocation/${location}`)
  };
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
            Jobs By  <span className="welcomescreen-text-gradient">Location</span>{" "}
      </h1>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
              <div className="p-4 rounded-md flex items-center justify-center">
                  <button type="button" onClick={(e) => handleJobsByLocation("Delhi", e)}
                  className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                   <figure><img src={NewDelhi} alt="" width="100" height="50"/> <figcaption> New Delhi</figcaption> </figure>
                  </button>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                  <button type="button" onClick={(e) => handleJobsByLocation("Mumbai", e)}
                  className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                  <figure><img src={Mumbai} alt="" width="100" height="50"/> <figcaption> Mumbai</figcaption> </figure>
                  </button>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                  <button type="button" onClick={(e) => handleJobsByLocation("Pune", e)}
                  className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                  <figure><img src={Pune} alt="" width="100" height="50"/> <figcaption> Pune</figcaption> </figure>
                  </button>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                  <button type="button" onClick={(e) => handleJobsByLocation("Bangalore", e)}
                  className="text-white hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                    <figure><img src={Bangalore} alt="" width="100" height="50"/> <figcaption>Bangalore</figcaption> </figure>
                  </button>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                  <button type="button" onClick={(e) => handleJobsByLocation("Gurugram", e)}
                  className="text-white hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                  <figure><img src={Gurugram} alt="" width="100" height="50"/> <figcaption>Gurugram</figcaption> </figure>
                  </button>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                  <button type="button" onClick={(e) => handleJobsByLocation("Hyderabad", e)}
                  className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                  <figure><img src={Hyderabad} alt="" width="100" height="50"/> <figcaption>Hyderabad</figcaption> </figure>
                  </button>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                  <button type="button" onClick={(e) => handleJobsByLocation("Chennai", e)}
                  className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 
                  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                  <figure> <img src={Chennai} alt="" width="100" height="50"/><figcaption>Chennai</figcaption> </figure>
                  </button>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                  <button type="button" onClick={(e) => handleJobsByLocation("Goa", e)}
                  className="text-white hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                   <figure><img src={Goa} alt="" width="100" height="50"/> <figcaption>Goa</figcaption> </figure>
                  </button>
              </div>
             </div>
        </div>
      </section>
  )
}

export default JobByLocation