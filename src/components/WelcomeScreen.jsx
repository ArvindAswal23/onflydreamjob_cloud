import React from 'react'
import styles from "../style";

const WelcomeScreen = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] welcomescreen-text-gradient">
            #1 Portal <br className="sm:block"/>{" "}
            <span className="text-gradient">All Job Posts In One Place</span>{" "}
          </h1>
        <h6 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
          Give wings to your dream job</h6>
        <p className="mb-4 font-light text-gray-500 lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400"> 
        “You can get everything in life you want if you will just help enough other people get what they want.” —Zig Ziglar</p>
    </div>
</section>
  )
}

export default WelcomeScreen