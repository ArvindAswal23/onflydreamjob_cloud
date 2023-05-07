import React,{ useState,useEffect } from 'react'
import base_url from "../api/urls";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AllJobs = () => {
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(20);
  const [pageCount, setPageCount] = useState(0)
  const navigate =useNavigate();
  const [jobs, setJobs] = useState([
  ]);
    useEffect(() =>{
        document.title="All Jobs | Onfly Dream Job";
        getAllJobs();
    },[offset])
    // get all jobs from backend 
    const getAllJobs = () => {
      axios.get(`${base_url}/getAllJobs/0`).then(
        (response) => {
          const data = response.data.content;
          const slice = data.slice(offset, offset + perPage);
          setJobs(slice);
          setPageCount(Math.ceil(data.length / perPage));
            toast.success("All Jobs Loaded", {
              position: toast.POSITION.TOP_CENTER,
              toastId: 'success1',
            });
        },
        (error) => {
          // for error
          console.log(error);
          toast.error("No Jobs Found", {
            position: toast.POSITION.BOTTOM_CENTER,
            toastId: 'error1',
        });
        }
      );
    };
    //Pass the particular job id and get the full job details
    const handleJobID =(id) => {
    navigate(`/job/${id}`)
     };

    const renderAllJobs = () => {
      return jobs.map(({ id,companyName, profileName,minSalary, maxSalary, jobType }) => {
        return <tr key={id} className ="hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className='px-4 py-4 text-center text-sm font-medium text-gray-800 dark:text-white'>{companyName}</td>
        <td className=' px-12 py-4 text-center text-sm whitespace-nowrap text-gray-700 dark:text-gray-200'>{profileName}</td>
        <td className='px-4 py-4 text-center text-sm whitespace-nowrap text-gray-700 dark:text-gray-200'>{minSalary} - {maxSalary} LPA</td>
        <td className='px-4 py-4 text-center text-sm whitespace-nowrap text-gray-700 dark:text-gray-200'>{jobType}</td>
        <td className='px-4 py-4 text-center text-sm whitespace-nowrap text-gray-700 dark:text-gray-200'>
        <button className="px-2 py-2 text-center text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 
        hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800" onClick={(e) => handleJobID(id)}>
              View Details
        </button>
        </td>
      </tr>
      })
    }

  return (
  <div className='bg-primary w-full overflow-hidden'>
  <section className="container px-4 mx-auto">
    <h1 className="text-2xl font-medium font-poppin text-gray-800 dark:text-white">All Jobs</h1>
    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                 <th scope="col" className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                        <span>Company Name</span>
                                 </th>
                                 <th scope="col" className="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                    Post Name 
                                 </th>
                                  <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                    Salary (Estimates)
                                  </th>
                                  <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                  Job Type</th>
                                  <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                  View</th>
                                 </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {renderAllJobs()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div className="flex items-center justify-between mt-6">
        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                previous
            </span>
        </a>

        <div className="items-center hidden md:flex gap-x-3">
            <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
        </div>

        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </a>
    </div>
</section>
</div>
  )
}

export default AllJobs