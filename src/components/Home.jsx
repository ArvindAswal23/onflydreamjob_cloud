import React,  { useEffect }from 'react'
import styles from '../style'
import {WelcomeScreen,JobByDepartment,JobByType,JobByLocation} from './index'

const Home = () => {
  useEffect(() =>{
    document.title="Home | Onfly Dream Job";
},[])
  return (
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
     <WelcomeScreen/>
     <JobByLocation/>
     <JobByDepartment/>
     <JobByType/>
    </div>
    </div>
  </div>
  )
}

export default Home