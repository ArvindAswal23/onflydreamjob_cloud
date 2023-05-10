import React from 'react'
import styles from './style'
import { NavBar,Footer, Home,AllJobs,AllJobByLocation,Job,ErrorPage,NoJobFound} from './components/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route path="/job/:id" element={<Job />} exact />
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