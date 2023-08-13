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
          <h1 className='flex-1 font-poppins  ss:text-[30px] text-[20px] text-white ss:leading-[40.8px] leading-[30px]'> Hey there,</h1>
          <h2 className='flex-1 font-poppins  ss:text-[30px] text-[20px] text-white ss:leading-[40.8px] leading-[30px]'> 
            Got a question, suggestion, or just want to say hi? We're all ears! Our team is here to help you out. Feel free to reach out to us anytime.
          </h2>
          <h3 className='flex-1 font-poppins  ss:text-[30px] text-[20px] text-white ss:leading-[40.8px] leading-[30px]'> 
            Whether you're curious about our services, need assistance, or want to share your thoughts, drop us a line. We're just an email away at 
            contactus@onflydreamjob.com.
          </h3>
          <h3 className='flex-1 font-poppins  ss:text-[30px] text-[20px] text-white ss:leading-[40.8px] leading-[30px]'> Looking forward to hearing from 
            you!
          </h3>
          <h4 className='flex-1 font-poppins  ss:text-[30px] text-[20px] text-white ss:leading-[40.8px] leading-[30px]'> Best regards,</h4>
        </div>
      </section>
    </div>
  )
}
export default ContactUs