import React from 'react'
// import './header.css'

import Her_girl from '../../assets/img/_In the center  0.png'


function header() {
  return (
    <div>
    <header class="bg-slate-700 pl-10 pr-10 pt-1 pb-1 rounded-lg flex justify-between items-center shadow-sm">

        <div class="flex items-center p-5">
            <img src={Her_girl } alt="Logo" class="h-8 w-8" />
            <span class="text-white text-lg ml-2">Job <span className='bg-orange-400 text-white rounded-lg p-1'>Canvas</span></span>
        </div>

        <nav class="mt-4">
            <ul class="flex space-x-4 text-white">
                <li><a href="#" class="hover:text-gray-300">Home</a></li>
                <li><a href="#" class="hover:text-gray-300">Job listing</a></li>
                <li><a href="#" class="hover:text-gray-300">Employ</a></li>
                <li><a href="#" class="hover:text-gray-300">Login</a></li>
                <li><a href="#" class="hover:text-gray-300">Sign Up</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default header