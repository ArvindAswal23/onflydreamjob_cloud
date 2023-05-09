import React,{ useState,useEffect } from 'react'
import base_url from "../api/urls";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import '../App.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const AllJobs = () => {
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(15);
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
        return <Tr key={id} className ="hover:bg-gray-50 dark:hover:bg-gray-600">
        <Td className='px-4 py-2 text-left  font-medium text-gray-800 dark:text-white'>{companyName}</Td>
        <Td className='px-4 py-2 text-left  whitespace-nowrap text-gray-700 dark:text-gray-200'>{profileName}</Td>
        <Td className='px-4 py-2 text-left  whitespace-nowrap text-gray-700 dark:text-gray-200'>{jobType}</Td>
        <Td className='px-4 py-2 text-left  whitespace-nowrap text-gray-700 dark:text-gray-200'>
        <button className="px-2 py-2 text-left  text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 
        hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800" onClick={(e) => handleJobID(id)}>
              View Details
        </button>
        </Td>
      </Tr>
      })
    }

    const handlePageClick = (e) => {
      const selectedPage = e.selected * perPage;
      setOffset(selectedPage);
    };

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <section className="container px-4 mx-auto">
        <h1 className="text-2xl text-center md:text-left font-medium font-poppin text-white dark:text-white">List Of All Jobs</h1>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="min-w-min max-w-5xl py-2  md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <Thead className="bg-gray-50 dark:bg-gray-800">
                    <Tr>
                      <Th scope="col" className="px-4 py-4 text-sm font-normal font-bold text-white text-left">
                        <span>Organization</span>
                      </Th>
                      <Th scope="col" className="px-4 py-4 text-sm font-normal font-bold text-white text-left">
                        Profile Name
                      </Th>
                      <Th scope="col" className="px-4 py-4 text-sm font-normal font-bold text-white text-left">
                        Job Type</Th>
                      <Th scope="col" className="px-4 py-4 text-sm font-normal font-bold text-white text-left">
                        View</Th>
                    </Tr>
                  </Thead>
                  <Tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {renderAllJobs()}
                  </Tbody>
                </Table>
              </div>
              <div className="flex justify-center items-center">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  renderOnZeroPageCount={null}
                  activeClassName={"active"} />
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </section>
    </div>
  )
}

export default AllJobs