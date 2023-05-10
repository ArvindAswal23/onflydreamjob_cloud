import React from 'react'
import styles from "../style";
import { useNavigate } from "react-router-dom";
import { M_Tech,B_Tech,BCA,MBA } from '../assets';


const JobByDepartment = () => {
  const navigate = useNavigate();
   // pass particular location to url and navigate to all jobs by location
   const handleJobsByDepartment = (department, e) => {
    e.preventDefault();
    navigate(`/alljobsbydepartment/${department}`)
  };
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="py-8 px-1mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
          Jobs By  <span className="welcomescreen-text-gradient">Department</span>{" "}
    </h1>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" onClick={(e) => handleJobsByDepartment("me", e)}
                className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                 <figure><img src={M_Tech} alt="" width="100" height="50"/> <figcaption>M.Tech</figcaption> </figure>
                </button>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" onClick={(e) => handleJobsByDepartment("be", e)}
                className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <figure><img src={B_Tech} alt="" width="100" height="50"/> <figcaption> B.Tech</figcaption> </figure>
                </button>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" onClick={(e) => handleJobsByDepartment("mba", e)}
                className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <figure><img src={MBA} alt="" width="100" height="50"/> <figcaption> MBA </figcaption> </figure>
                </button>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" onClick={(e) => handleJobsByDepartment("bca", e)}
                className="text-white hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                  <figure><img src={BCA} alt="" width="100" height="50"/> <figcaption> BCA </figcaption> </figure>
                </button>
            </div>
           
          </div>
              {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-20 pink__gradient" />
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        <div className="absolute z-[0] w-[50%] h-[50%] right-60 bottom-10 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  )
}

export default JobByDepartment