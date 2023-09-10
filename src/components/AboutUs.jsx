import React, { useEffect }  from 'react'
import styles from "../style";

const AboutUs = () => {
  useEffect(() =>{
    document.title="About";
},[])
return (
  <div className='bg-sky-950 w-full overflow-hidden	'>
  <section className={`flex md:flex-row backdrop-blur-xl flex-col ${styles.paddingY}`}>
    <div className="py-4 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-12 rounded-xl backdrop-blur-xl bg-sky-950 " >

        <h2 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[80.8px] leading-[65px] bg-sky-950"> About OnflyDreamJob
        </h2> 
        <br />

        <div>
        <p className='flex-1 font-poppins  ss:text-[15px] text-[15px] text-white ss:leading-[25.8px] leading-[15px]'>Welcome to OnflyDreamJob, your number one portal for all 
        things [Job, Work].We’re dedicated to giving you the very best of jobs, with a focus on Fresher Jobs, IT Jobs, Engineering Jobs, Government Jobs. We hope you enjoy our 
        service as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us.
</p>
</div>


   <br /> <br />
        <p className='flex-1 font-poppins  ss:text-[15px] text-[15px] text-white ss:leading-[25.8px] leading-[15px]'>Sincerely,</p>
        <p className='flex-1 font-poppins  ss:text-[15px] text-[15px] text-white ss:leading-[25.8px] leading-[15px]'>[OnflyDreamJob Team] </p>
        </div>
</section>
</div>
);
}

export default AboutUs