import React from "react";
import Navbar from "./Navbar";

import Cards from "./Cards";


import Footer from "../Footer";
function Birthdays() {
  return (
    <>
      <Navbar />

      <div className="font-bold text-6xl py-14 text-yellow-700 text-center">
        Birthdays
      </div>
      <div className="grid grid-cols-2 bg-yellow-700 py-20">
        <div className="px-24">
          <img
            class="rounded-lg"
            src="../fbirthday.jpg"
            className="h-full w-full"
            alt=""
          />
        </div>
        <div className="bg-yellow-700">
          <h1 className="px-24 py-10 text-white">
            Birthdays. They are kind of our thing!
          </h1>
          <hr className=" border-dashed border border-yellow-100 w-96 px-24 ml-24"></hr>
          <p className="px-24 py-10 text-white">
            We've been honored to celebrate birthdays big and small with
            hundreds and thousands of our guests. Check out some of our birthday
            favorites and some sweet birthday moments below.
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-6xl py-14 text-yellow-700 text-center">
          Some Birthday's favourite
        </h1>
      </div>
      <Cards />
      <div>
        <p className="font-bold text-6xl py-14 text-yellow-700 text-center">
          Trips around us from Sweet Delights
        </p>
      </div>
      <div className="grid grid-cols-4 gap-9 py-4 px-24">
        <div>
          <img
            
            src="../bd1.jpg"
            className="h-48 w-64 my-12 rounded-lg"
            alt=""
          />
        </div>
        <div >
          <img
            
            src="../bd2.jpg"
            className="h-full w-full"
            alt=""
          />
        </div>
        <div>
          <img
           
            src="../bd3.jpg"
            className="h-48 w-64 my-12 rounded-lg"
            alt=""
          />
        </div>
        <div>
          <img
            class="rounded-lg"
            src="../bd4.jpg"
            className="h-full w-full"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-9 py-4 px-24">
        <div >
          <img
            class="rounded-lg"
            src="../bd6.jpg"
            className=" h-80 w-full"
            alt=""
          />
        </div>
        <div>
          <img
            class="rounded-lg"
            src="../bd5.jpg"
            className="h-48 w-64 my-12 rounded-lg"
            alt=""
          />
        </div>
        <div>
          <img
            class="rounded-lg"
            src="../bd7.jpg"
            className="h-full w-full"
            alt=""
          />
        </div>
        <div>
          <img
            class="rounded-lg"
            src="../bd8.jpg"
            className="h-48 w-64 my-12 rounded-lg"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Birthdays;
