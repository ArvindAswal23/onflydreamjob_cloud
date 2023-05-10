import React from 'react'
import { useNavigate } from "react-router-dom";
import { Fresher,Experience,OFF_Campus,Internship } from '../assets';

const JobByType = () => {
  const navigate = useNavigate();

  // pass particular location to url and navigate to all jobs by location
  const handleJobsByType = (jobtype, e) => {
   e.preventDefault();
   navigate(`/alljobsbytype/${jobtype}`)
 };
  return (
    <section className='job-type-gradient'>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
          Jobs By  <span className="welcomescreen-text-gradient">Type</span>{" "}
    </h1>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" onClick={(e) => handleJobsByType("FRESHER_JOB", e)}
                className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                 <figure><img src={Fresher} alt="" width="100" height="50"/> <figcaption> Fresher</figcaption> </figure>
                </button>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" onClick={(e) => handleJobsByType("EXPERIENCE", e)}
                className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <figure><img src={Experience} alt="" width="100" height="50"/> <figcaption> Experience </figcaption> </figure>
                </button>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" onClick={(e) => handleJobsByType("INTERNSHIP", e)}
                className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <figure><img src={Internship} alt="" width="100" height="50"/> <figcaption> Internship</figcaption> </figure>
                </button>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" onClick={(e) => handleJobsByType("OFF_CAMPUS", e)}
                className="text-white hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                  <figure><img src={OFF_Campus} alt="" width="100" height="50"/> <figcaption>OFF Campus</figcaption> </figure>
                </button>
            </div>
           </div>
      </div>
    </section>
  )
}

export default JobByType