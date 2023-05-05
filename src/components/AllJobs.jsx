import React,{ useEffect } from 'react'

const AllJobs = () => {
    useEffect(() =>{
        document.title="All Jobs | Onfly Dream Job";
    },[])
  return (
    <div class="p-8 bg-amber-300">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
      <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">1</div>
      <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">2</div>
      <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">3</div>
      <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">4</div>
      <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">5</div>
      <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">6</div>
      <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">7</div>
      <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
    </div>
  </div>
  )
}

export default AllJobs