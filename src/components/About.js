import React from "react";
import Navbar from "./Navbar";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import Footer from "../Footer";
function About() {
  return (
    <>
      <Navbar />

      <div className="font-bold text-6xl py-14 text-yellow-700 text-center">
        Our Story
      </div>
      <div className="grid grid-cols-2 bg-yellow-900 py-20">
        <div className="px-24">
          <img
            class="rounded-lg"
            src="../fbirthday.jpg"
            className="h-full w-full"
            alt=""
          />
        </div>
        <div className="bg-yellow-900">
          <h1 className="px-24 py-10 text-6xl text-white">
            Hello welcome to sweet Delights
          </h1>
          <hr className=" border-dashed border border-yellow-100 w-96 px-24 ml-24"></hr>
          <p className="px-24 py-10 text-white">
            At Sweet Delights, we sell more than cakes. Our personal in-bakery
            experience, time-honored recipes and comforting taste have enhanced
            celebrations throughout Rwanda since opening the first bakery in
            2020...and now Sweet Delights is available nationwide.
          </p>
        </div>
      </div>

      <div>
        <p className="font-bold text-6xl py-14 text-yellow-700 text-center">
          Our team players
        </p>
      </div>
      <div className="grid grid-cols-5 gap-9 py-4 px-24">


      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-36 h-36 mb-3 p-4 rounded-full shadow-lg"
              src="del.jpeg"
              alt="Delcate image"
            />
            <h5 class="mb-1 text-xl font-medium text-yellow-900 dark:text-yellow-900">
              Umwari Ora Delicate
            </h5>
            <span class="text-sm text-yellow-900 dark:text-yellow-900">
              Co-Founder / CTO
            </span>
            <div class="grid grid-cols-3  gap-6 text-yellow-900 text-lg mt-4 md:mt-6">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-36 h-36 mb-3 p-4 rounded-full shadow-lg"
              src="boy.jpeg"
              alt="boy image"
            />
            <h5 class="mb-1 text-xl font-medium text-yellow-900 dark:text-yellow-900">
              Umwari Ora Delicate
            </h5>
            <span class="text-sm text-yellow-900 dark:text-yellow-900">
              Co-Founder / CTO
            </span>
            <div class="grid grid-cols-3  gap-6 text-yellow-900 text-lg mt-4 md:mt-6">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-36 h-36 mb-3 p-4 rounded-full shadow-lg"
              src="chris.jpeg"
              alt="garl image"
            />
            <h5 class="mb-1 text-xl font-medium text-yellow-900 dark:text-yellow-900">
              Christella
            </h5>
            <span class="text-sm text-yellow-900 dark:text-yellow-900">
              Co-Founder / CTO
            </span>
            <div class="grid grid-cols-3  gap-6 text-yellow-900 text-lg mt-4 md:mt-6">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-36 h-36 mb-3 p-4 rounded-full shadow-lg"
              src="g1.jpeg"
              alt="gil image"
            />
            <h5 class="mb-1 text-xl font-medium text-yellow-900 dark:text-yellow-900">
              Umwari Ora Delicate
            </h5>
            <span class="text-sm text-yellow-900 dark:text-yellow-900">
       
              Co-Founder / CTO
            </span>
            <div class="grid grid-cols-3  gap-6 text-yellow-900  text-lg mt-4 md:mt-6">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>


        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-36 h-36 mb-3 p-4 rounded-full shadow-lg"
              src="g2.jpeg"
              alt="girl image"
            />
            <h5 class="mb-1 text-xl font-medium text-yellow-900 dark:text-yellow-900">
              Umwari Ora Delicate
            </h5>
            <span class="text-sm text-yellow-900 dark:text-yellow-900">
              Co-Founder / CTO
            </span>
            <div class="grid grid-cols-3  gap-6 text-yellow-900 text-lg mt-4 md:mt-6">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
