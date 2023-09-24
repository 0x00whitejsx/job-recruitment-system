import React from 'react'
import Her_girl from '../../assets/img/model.gif'


function Hero() {
  return (
    <div className='w-full'>
          <div class="bg-white text-white py-16 px-4 md:px-16 lg:flex lg:items-center ">

        <div class="lg:w-1/2 p-3">
            <h1 class="text-8xl font-semibold mb-4 text-orange-400">Job<span className='bg-orange-400 text-white rounded-lg pl-3 pr-3'>Canvas</span></h1>
            <p class="text-lg mb-6 text-slate-900 mt-10">an online job requirement portal build to connect and get match to your dream job.</p>
            <a href="#" class="bg-orange-500 hover:bg-orange-600 pt-3 pb-3 pr-10 pl-10 mt-20 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:shadow-md">Join</a>
            {/* <a href="#" class="bg-orange-500 hover:bg-orange-600 p-3 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:shadow-md">Learn More</a> */}
        </div>

     
        <div class="lg:w-1/2 mt-8 lg:mt-0">
            <img src={Her_girl} alt="Hero Image" class="w-full object-cover" />
        </div>
    </div>
    </div>
  )
}

export default Hero