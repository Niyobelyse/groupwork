import React from 'react'
import Navbar from './Navbar'

import Footer from '../Footer'
import Weddingcards from './Weddingcards'

const Weddings = () => {
  return (
    <>
    <Navbar />

    <div className="font-bold text-6xl py-14 text-yellow-700 text-center">
      Weddings
    </div>
    <div className="grid grid-cols-2 bg-yellow-700 py-20">
      <div className="px-24">
        <img
          class="rounded-lg"
          src="../wedding.jpg"
          className="h-full w-full"
          alt=""
        />
      </div>
      <div className="bg-yellow-700">
        <h1 className="px-24 py-10 text-6xl text-white">
        perfect cakes and treats for your celebrations.
        </h1>
        <hr className=" border-dashed border border-yellow-100 w-96 px-24 ml-24"></hr>
        <p className="px-24 py-10 text-white">
        We know how much time and effort goes into wedding planning so let us help check a few things off your list. Our team will make the process easy and fun!
        </p>
      </div>
    </div>
    <div className="">
      <h1 className="font-bold text-6xl py-14 text-yellow-700 text-center">
        What We Offer
      </h1>
    </div>
    <Weddingcards />
    <div>
      <p className="font-bold text-6xl py-14 text-yellow-700 text-center">
        Types of our work
      </p>
    </div>
    <div className="grid grid-cols-4 gap-9 py-4 px-24">
      <div>
        <img
          
          src="../c1.webp"
          className="h-48 w-64 my-12 rounded-lg"
          alt=""
        />
      </div>
      <div >
        <img
          
          src="../c2.webp"
          className="h-full w-full"
          alt=""
        />
      </div>
      <div>
        <img
         
          src="../c3.webp"
          className="h-48 w-64 my-12 rounded-lg"
          alt=""
        />
      </div>
      <div>
        <img
          class="rounded-lg"
          src="../c4.webp"
          className="h-full w-full"
          alt=""
        />
      </div>
    </div>
    <div className="grid grid-cols-4 gap-9 py-4 px-24">
      <div >
        <img
          class="rounded-lg"
          src="../c5.webp"
          className=" h-80 w-full"
          alt=""
        />
      </div>
      <div>
        <img
          class="rounded-lg"
          src="../c6.webp"
          className="h-48 w-64 my-12 rounded-lg"
          alt=""
        />
      </div>
      <div>
        <img
          class="rounded-lg"
          src="../c7.jpg"
          className="h-full w-full"
          alt=""
        />
      </div>
      <div>
        <img
          class="rounded-lg"
          src="../c8.webp"
          className="h-48 w-64 my-12 rounded-lg"
          alt=""
        />
      </div>
    </div>

    <Footer />
  </>
  )
}

export default Weddings