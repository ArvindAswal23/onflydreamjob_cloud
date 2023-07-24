import React from 'react'
import styles from './style'
import { NavBar,Footer, Home,AllJobs,AllJobByLocation,Job,ErrorPage,NoJobFound,ALlJobByType,AllJobByDepartment,AboutUs,ContactUs,
  Articles,Article1,Article2,Article3,Article4} from './components/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumeBuilder from './components/resumeBuilder';
const App = () => {
  return (
   
    <div>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar/>
          </div>
        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/alljobs" element={<AllJobs />} exact />
          <Route path="/alljobsbylocation/:location" element={<AllJobByLocation />} exact />
          <Route path="/alljobsbydepartment/:department" element={<AllJobByDepartment />} exact />
          <Route path="/alljobsbytype/:jobtype" element={<ALlJobByType />} exact />
          <Route path="/job/:id" element={<Job />} exact />
          <Route path="/aboutus" element={<AboutUs />} exact />
          <Route path="/contactus" element={<ContactUs />} exact />
          <Route path="/articles" element={<Articles />} exact />
          <Route path="/resumebuilder" element={<ResumeBuilder />} exact />
          <Route path="/article1" element={<Article1/>} exact />
          <Route path="/article2" element={<Article2/>} exact />
          <Route path="/article3" element={<Article3/>} exact />
          <Route path="/article4" element={<Article4/>} exact />
          <Route path="*" element={<ErrorPage />} ></Route>
          <Route path="/nojobfound" element={<NoJobFound />} ></Route>
        </Routes>
      </Router>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
}
export default App