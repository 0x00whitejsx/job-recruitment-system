import React from 'react'

import Girl_pic from '../../assets/img/A beautiful gir 1.png'
import Girl_pic2 from '../../assets/img/_In the center  1.png'

function card() {
  return (
    <div>
     <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
     
        <div class="bg-white rounded-full p-20 text-center ">
            <img src={Girl_pic} alt="" srcset="" className='rounded-full' />
        
        </div>


        <div class="bg-white p-4  flex justify-center items-center text-lg text-blue-950 text-justify">
            <div>
            <h1 className='font-bold text-5xl p-4 mb-5'>How the model works</h1>
            
           
            A Job Requirement Portal utilizing the Analytic Hierarchy Process (AHP) is a sophisticated platform designed to streamline and optimize the hiring process. AHP, a decision-making framework, empowers employers to make informed choices by systematically evaluating and prioritizing job requirements based on their relative importance. This portal facilitates a data-driven approach, ensuring that job listings are tailored precisely to the organization's needs, enhancing efficiency in recruitment. By leveraging AHP, employers can effectively match candidates with roles that align with both their qualifications and the company's core criteria, ultimately leading to more successful and satisfying job placements.
            </div>
            </div>
            
        <div class="bg-white p-4  flex justify-center items-center text-lg text-blue-950 text-justify">
            <div>
            <h1 className='font-bold text-5xl p-4 mb-5'>How the model works</h1>
        optimizes the hiring process by systematically defining job criteria, assigning relative importance through pairwise comparisons, and matching job seekers with positions that align with their qualifications based on weighted criteria, ensuring efficient and precise job placements. This data-driven approach empowers employers to make informed decisions, enhances the quality of job matches, and fosters continuous improvement through feedback, ultimately streamlining the recruitment process and benefiting both employers and job seekers.
        </div>
        </div>

        <div class="bg-white rounded-full p-20 text-center object-cover">
        <img src={Girl_pic2} alt="" srcset="" className='rounded-full object-contain w-full h-100'  />
        </div>
    </div>
    </div>
  )
}

export default card