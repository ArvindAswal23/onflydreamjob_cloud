import React, { useState, useEffect } from 'react'
import base_url from "../api/urls";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const AllJobByLocation = () => {
    const navigate= useNavigate();
    const {state}= useLocation();
    const urlParam= useParams();
    const [AllJobByLocation, setAllJobByLocation] = useState([
    ]);
    useEffect(() => {
    const title = urlParam.location;
     document.title= title + " | Onfly Dream Job";
    getJobLocationData(urlParam);
  }, []);

      //get all jobs acoording to jobs by from backend
    const getJobLocationData = (urlParam) => {
    let location = urlParam.location;
    axios.get(`${base_url}/home/location/${location}/0`).then(
      (response) => {
      setAllJobByLocation(response.data.content);
      },
      (error) => {
        // for error
        console.log(error);
        navigate('*');
      }
    )
  };
  // Pass the particular job id to the url
  const handleJobID =(id) => {
      navigate(`/job/${id}`)
  };

  return (
    <div>
    <h1 className="text-center">  All Jobs By {urlParam.location} </h1>
    {AllJobByLocation.length > 0 ? (
      <div className="justify">
      <ul>
        {AllJobByLocation.map(AllJobByLocation => (
          <li key={AllJobByLocation.id}> <span> <a href="" onClick={(e) => handleJobID(AllJobByLocation.id)}> {AllJobByLocation.companyName} 2023 | {AllJobByLocation.profileName} | Direct Link </a> </span> </li>
        ))}
      </ul>
      </div> ) : <h7> Sorry :( No Jobs Found </h7>}
  </div>
  
  )
}
export default AllJobByLocation