import React from 'react'

function Footer() {
  return (
    <div>
        <div class="bg-gray-800 text-white py-6">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div class="mb-6 md:mb-0">
                    <h3 class="text-xl font-semibold mb-3">About Us</h3>
                    <p class="text-gray-400">This is a project build for the purpose of academic use under the supervisoin on DR. Yami A </p>
                </div>

               
                <div class="mb-6 md:mb-0">
                    <h3 class="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul class="text-gray-400">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Job Listings</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

              
                <div class="mb-6 md:mb-0">
                    <h3 class="text-xl font-semibold mb-3">Resources</h3>
                    <ul class="text-gray-400">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

            
                <div>
                    <h3 class="text-xl font-semibold mb-3">Contact Us</h3>
                    <div class="text-gray-400">
                        sangere futy, jimeta Yola<br />
                        City, State 12345<br />
                        Email: 0x00whitejsx@gmail.com<br />
                        Phone: (+234) 9122618760
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer