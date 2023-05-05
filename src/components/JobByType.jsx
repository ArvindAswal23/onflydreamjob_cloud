import React from 'react'
import styles from "../style";
import { NewDelhi, Mumbai, Pune, Bangalore, Gurugram, Hyderabad, Chennai, Goa } from '../assets';
const JobByType = () => {
  return (
    <section className='job-type-gradient'>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
          Jobs By  <span className="welcomescreen-text-gradient">Type</span>{" "}
    </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                 <figure><img src={NewDelhi} alt="" width="100" height="50"/> <figcaption> New Delhi</figcaption> </figure>
                </button>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <figure><img src={Mumbai} alt="" width="100" height="50"/> <figcaption> Mumbai</figcaption> </figure>
                </button>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" className="text-white  hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <figure><img src={Pune} alt="" width="100" height="50"/> <figcaption> Pune</figcaption> </figure>
                </button>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
                <button type="button" className="text-white hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                  <figure><img src={Bangalore} alt="" width="100" height="50"/> <figcaption>Bangalore</figcaption> </figure>
                </button>
            </div>
           </div>
      </div>
    </section>
  )
}

export default JobByType