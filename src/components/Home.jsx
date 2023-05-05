import React,  { useEffect }from 'react'
import styles from '../style'
import { NavBar,WelcomeScreen,JobByDepartment,JobByType,JobByLocation, Footer } from './index'

const Home = () => {
  useEffect(() =>{
    document.title="Home | Onfly Dream Job";
},[])
  return (
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
     <WelcomeScreen/>
    </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
     <JobByLocation/>
     <JobByDepartment/>
     <JobByType/>
    </div>
    </div>
  </div>
  )
}

export default Home