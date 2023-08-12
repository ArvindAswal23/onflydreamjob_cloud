import React from 'react'
import styles from "../style";
import {newLogo}  from '../assets';
import Lottie from 'lottie-react';
const NewFeatureCTA = () => {
 
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      {/* <div className="mx-auto max-w-7xl py-10 sm:px-6 sm:py-18 lg:px-2"> */}
        {/* <div className="relative isolate overflow-hidden bg-gray-900 px-4 pt-16 shadow-2xl sm:rounded-3xl sm:px-14 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"> */}
          <div className="text-center lg:text-center">
          {/* <div className="mb-4 align-middle flex flex-row items-center justify-center space-x-10"> */}
          <div className='align-middle flex flex-col md:flex-row lg:flex-row items-center justify-center'>
            <Lottie animationData ={newLogo} style={{ height: "100px", width: "100px" }}/> 
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Onfly Dream Job Resume Enhancer
            </h2>
            </div>
            <p className="mt-6 md:ms-16 lg:ms-18 xl:ms-20 text-lg leading-8 text-gray-100">
             Click on Get Started to use our resume enhancer from today
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-cener">
              <a
                href="/rbform"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="/resumeenhancer" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>  
        {/* </div> */}
      {/* </div> */}
      </section>
  )
}

export default NewFeatureCTA