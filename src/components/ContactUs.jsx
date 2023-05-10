import React ,{useEffect} from 'react'
import styles from "../style";
const ContactUs = () => {
  useEffect(() =>{
     document.title="Contact Us";
},[])
  return (
    <div className='bg-primary w-full overflow-hidden'>
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    {/* <h1 className="text-center"> Contact us</h1> */}
    <h2 className='flex-1 font-poppins  ss:text-[30px] text-[20px] text-white ss:leading-[40.8px] leading-[30px]'> We know change is the only constant so write us</h2>
    <h3 className='flex-1 font-poppins  ss:text-[30px] text-[20px] text-white ss:leading-[40.8px] leading-[30px]'> contactus@onflydreamjob.com</h3>
     </div>
      </section>
      </div>
  )
}
export default ContactUs