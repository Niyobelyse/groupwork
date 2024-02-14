import React from "react";

const Cards = () => {
  return (
    <>
      <div className=" ">
        <div className="grid grid-cols-3  py- px-20">
          <div class=" max-w-sm bg-white  rounded-lg">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Pink vanilla
                </h5>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white  rounded-lg ">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="Gcake.jpg"
                className=" h-1/2 w-full"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Smash cake
                </h5>
              </a>
            </div>
          </div>

          <div class=" max-w-sm bg-white  rounded-lg">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Lemon cake
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3  py-6 px-20">
          <div class=" max-w-sm bg-white  rounded-lg">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                  yellow velvet cupcake
                </h5>
              </a>
            </div>
          </div>

          <div class=" max-w-sm bg-white  rounded-lg">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                  Chocolate cupcake
                </h5>
              </a>
            </div>
          </div>

          <div class=" max-w-sm bg-white  rounded-lg">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Vanilla pink cupcake
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
