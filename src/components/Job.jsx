import React, {useState, useEffect}  from 'react'
import {useLocation } from "react-router-dom";
import moment from 'moment';
import { useParams } from "react-router-dom";
import base_url from "../api/urls";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Job = () => {
    const {state} = useLocation();
    const navigate =useNavigate();
    const urlId = useParams();
    const [jobDetail, setjobDetail] = useState([
    ]);
    window.scrollTo(0, 0);
    useEffect(() => {
        getJobData(urlId);
      }, []);

    const getJobData = (urlId) => {
    var id = urlId.id;
    axios.get(`${base_url}/getJob/${id}`).then(
      (response) => {
      //  jobDetail = response.data;
      setjobDetail([response.data]);
      },
      (error) => {
        // for error
        console.log(error);
        navigate('*');
      }
    )
  };  
  const title = jobDetail.map((jd) => [jd.companyName]);
  document.title="Job | "+title+" | Onfly Dream Job";
  const createdOn = jobDetail.map((jd) =>[jd.createdOn]);
  const dateTimeAgo = moment(new Date(createdOn)).fromNow();
    var locations = [];
    for (var i = 0; i < jobDetail.length; i++) {
        for (var j = 0; j < jobDetail[i].locations.length; j++) {
            locations.push(jobDetail[i].locations[j].name);
            if (j < jobDetail[i].locations.length - 1)
                locations.push(", ");
        }
    }

    var qualifications = [];
    for (var k = 0; k < jobDetail.length; k++) {
        for (var l = 0; l < jobDetail[k].qualifications.length; l++) {
            qualifications.push(jobDetail[k].qualifications[l].name);
            if (l < jobDetail[k].qualifications.length - 1)
                qualifications.push(", ");
        }
  
    }

  return (  
      <div className='bg-primary w-full overflow-hidden'>
          <div className="text-2xl font-medium font-poppin  dark:text-white text-white"> <h2 className="text-center">Job Details For "{jobDetail.map((jd) => [jd.companyName])}"</h2></div>
          <section className="container px-4 mx-auto">
              <div className="flex flex-col mt-6">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                      <tr>
                                          <th  className="py-4 px-4 text-sm font-medium text-left  text-gray-500 dark:text-gray-400">
                                              <strong> Organization </strong> </th>
                                          <td className='px-4 py-4  text-sm text-left font-medium text-gray-800 dark:text-white'>{jobDetail.map((jd) => [jd.companyName])} </td>
                                      </tr>
                                      <tr>
                                          <th className="py-4 px-4 text-sm font-normal text-left  text-gray-500 dark:text-gray-400"> <strong> Post Name </strong></th>
                                          <td className='px-4 py-4 text-left text-sm font-medium text-gray-800 dark:text-white'>{jobDetail.map((jd) => [jd.profileName])} </td>
                                      </tr>
                                      <tr>
                                          <th className="py-4 px-4 text-sm font-normal text-left  text-gray-500 dark:text-gray-400"> <strong> Job Type </strong> </th>
                                          <td className='px-4 py-4 text-left text-sm font-medium text-gray-800 dark:text-white'>{jobDetail.map((jd) => [jd.jobType])} </td>
                                      </tr>
                                      <tr>
                                          <th className="py-4 px-4 text-sm font-normal text-left  text-gray-500 dark:text-gray-400"><strong> No of Post </strong></th>
                                          <td className='px-4 py-4 text-left text-sm font-medium text-gray-800 dark:text-white'>{jobDetail.map((jd) => [jd.noOfOpening])} </td>
                                      </tr>
                                      <tr>
                                          <th className="py-4 px-4 text-sm font-normal text-left  text-gray-500 dark:text-gray-400"> <strong> Qualification </strong></th>
                                          <td className='px-4 py-4 text-left text-sm font-medium text-gray-800 dark:text-white'>{qualifications} </td>
                                      </tr>
                                      <tr>
                                          <th className="py-4 px-4 text-sm font-normal text-left  text-gray-500 dark:text-gray-400"> <strong> Application Mode </strong></th>
                                          <td className='px-4 py-4 text-left text-sm font-medium text-gray-800 dark:text-white'>{jobDetail.map((jd) => [jd.applicationMode])} </td>
                                      </tr>
                                      <tr>
                                          <th className="py-4 px-4 text-sm font-normal text-left  text-gray-500 dark:text-gray-400"> <strong>Eligible Batch </strong></th>
                                          <td className='px-4 py-4 text-left text-sm font-medium text-gray-800 dark:text-white'>{jobDetail.map((jd) => [jd.batchEligible])} </td>
                                      </tr>
                                      <tr>
                                          <th className="py-4 px-4 text-sm font-normal text-left  text-gray-500 dark:text-gray-400"> <strong> Location </strong></th>
                                          <td className='px-4 py-4 text-left text-sm font-medium text-gray-800 dark:text-white'>{locations} </td>
                                      </tr>
                                      <tr>
                                          <th className="py-4 px-4 text-sm font-normal text-left  text-gray-500 dark:text-gray-400"> <strong> Salary </strong></th>
                                          <td className='px-4 py-4 text-left text-sm font-medium text-gray-800 dark:text-white'>{jobDetail.map((jd) => [jd.minSalary])} - {jobDetail.map((jd) => [jd.maxSalary])} LPA <strong>(Our Estimates)</strong> </td>
                                      </tr>
                                      <tr>
                                          <th className="py-4 px-4 text-sm font-normal text-left  text-gray-500 dark:text-gray-400"><strong> Last Date To Apply </strong></th>
                                          <td className='px-4 py-4 text-left text-sm font-medium text-gray-800 dark:text-white'>{jobDetail.map((jd) => [jd.lastApplyDate])} </td>
                                      </tr>
                                      <tr>
                                          <th className="py-4 px-4 text-sm font-normal text-left  text-gray-500 dark:text-gray-400"> <p></p> <strong> Website </strong> </th>
                                          <td className='px-4 py-4 text-left text-sm font-medium text-gray-800 dark:text-white'><a href={jobDetail.map((jd) => [jd.companyOfficialWebsite])} target="_blank" rel="noopener noreferrer">
                                              <button className="px-2 py-2 text-left text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 
                                                hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 ring-2 ring-blue-500">
                                                  Company Website</button></a></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
              <div className=' px-4 py-4 font-poppins flex justify-left items-left text-left'>
              <div className='px-8 py-4 font-poppins flex justify-center items-center text-left'>
                                       <p className='  text-sm px-4 py-2 flex justify-center items-center text-white text-left font-poppins'> Note: Apply the job before link expires </p>
                                      </div>
                                      <div className='px-8 py-4 font-poppins flex justify-center items-center text-left'>
                                      <a href={jobDetail.map((jd) => [jd.applyLink])} target="_blank" rel="noopener noreferrer">
                                          <button className="px-4 py-2 text-left text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 
                                            hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 ring-2 ring-blue-500"
                                            onclick="ApplyLinkTracking({jobDetail.map((jd) => [jd.applyLink])}); return false;">Apply Link</button>
                                      </a>
                                      </div>
                                      </div>
          </section>
      </div>
  )
}

export default Job