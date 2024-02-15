import React from "react";

import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <div className="Bodyimage">
        <div class="animate__animated animate__bounce animate__repeat-2 text-center pt-28  font-bold text-4xl text-white">
          Where Celebrations Come Alive with Flavor
        </div>
        <div>
          <p className="text-white text-xl pt-20 text-center">
            Indulge in handcrafted happiness - cakes, <br></br>cupcakes, and
            Rwandan treats for weddings,<br></br>birthdays, and more. Order
            online and explore our delicious world!
          </p>
        </div>
        {/* <div className=" border-r-2 border-l-2 bg-white border-b-2 border-yellow-200 mt-16 inline-flex px-12 w-5/5 mx-24 h-24  mb-8 rounded-lg ">
          <div className=" px-8 py-4 mt-2">
            <span className="text-black font-bold">Location</span>
            <Selectarea className="px-4" />
          </div>
          <div className="px-10 py-4 mt-2">
            <span className="text-black font-bold">Type of property</span>
            <Properttype />
          </div>
          <div className="px-8 py-4 mt-2">
            <span className="text-black font-bold">Bedrooms</span>
            <Bedrooms />
          </div>
          <div className="px-8 py-4 mt-1">
            <span className="text-black font-bold">Bathrooms</span>
            <Bathrooms />
          </div>
          <div className="px-10 py-4 mt-2">
            <span className="text-black font-bold">Pricerange</span>
            <Pricerange />
          </div>
          <div className="px-8 mt-1 py-4 ">
            <label class=" relative inline-flex">
              <input
                class=" bg-yellow-900 w-28 rounded-md  py-2 placeholder:text-white shadow-sm outline-none placeholder:px-2 h-12"
                placeholder="Search"
                type="text"
                name="search"
              />
              <span class="absolute inset-y-0  text-white flex items-center px-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                  />
                </svg>
              </span>
            </label>
          </div>
        </div> */}
      </div>

      {/* <PropertyContainer /> */}
      <div className="grid grid-cols-3  py-12 px-20">
        <div class="max-w-sm bg-white border border-yellow-200 rounded-lg shadow   dark:border-yellow-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="../cake.jpg"
              className=" h-1/2 w-full"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Pink vanilla
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-900">
              A classic design with intricate details that create a dramatic and
              elegant cake that is perfect for any celebration!
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-yellow-200 rounded-lg shadow  dark:border-yellow-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="gcake.jpg"
              className=" h-1/2 w-full"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Smash cake
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-900">
              This stunning cake has several shades of yellow buttercream,
              creating a fun ombre design that goes from dark to light yellow
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-yellow-200 rounded-lg shadow   dark:border-yellow-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="../wcake.jpg"
              className=" h-1/2 w-full"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Lemon cake
              </h5>
            </a>
            <p class="mb-3 font-normal text-white-900 dark:text-gray-900">
              Four layers of vanilla cake filled with fresh lemon curd, frosted
              with vanilla buttercream.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3  py-12 px-20">
        <div class="max-w-sm bg-white border border-yellow-200 rounded-lg shadow   dark:border-yellow-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="rcupcake.jpg"
              alt=""
              className=" h-1/2 w-full"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                yellow velvet cupcake
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-900">
              Moist, deep yellow cupcake with a hint of cocoa, topped with cream
              cheese frosting
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-yellow-200 rounded-lg shadow   dark:border-yellow-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="ccupcake.jpg"
              className=" h-1/2 w-full"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Chocolate cupcake
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-900">
              Chocolate cupcake topped with chocolate buttercream
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-yellow-200 rounded-lg shadow   dark:border-yellow-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="pcupcake.jpg"
              className=" h-1/2 w-full"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Vanilla pink cupcake
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-900">
              Vanilla cupcake topped with Susie Pink vanilla buttercream
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Testimonial />
    </>
  );
};

export default Home;
