import React from 'react'
import { Link } from "react-router-dom";
import Nav1 from './Nav1';
import Signup from './Signup';
import Drower from './Drower';
import SignIN from './Login';





const Navbar = () => {
  return (
<>
 <div className=''>
<Nav1/>
 
  
  

<nav class="px-14 bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class=" ml-auto hidden w-full md:block md:w-auto" id="">
      <ul class="font-medium mr-8 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {/* <li>
          <Link to="/" class="block  py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white md:dark:text-red-500 text-black font-bold" >Home</Link>
        </li> */}
                <li>
          <Link to="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 text-black font-bold dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
        </li>
        <li>
          <Link to="/rentallists" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 text-black font-bold dark:hover:text-white md:dark:hover:bg-transparent">About Us</Link>
        </li>
        <li>
          <span to="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white text-black font-bold md:dark:hover:bg-transparent"><Drower/></span>
        </li>
        <li>
          <Link to="/contactus" class="block py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white text-black font-bold md:dark:hover:bg-transparent">Contact Us</Link>
        </li>
        <li>
        <Signup className=''/>
        </li>
        <li>
         <SignIN/>
        </li>

      </ul>
    </div>
  </div>
</nav>  
  </div>   

</>

  )
}

export default Navbar