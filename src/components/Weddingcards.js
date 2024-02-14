import React from 'react'

const Weddingcards = () => {
  return (
    <>
    <div className=" ">
      <div className="grid grid-cols-4 gap-9  py- px-20">
        <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="../w1.jpg"
              className=" h-1/2 w-full"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hand-Decorated Tier Cakes
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Customize with your choice of cake flavor, filling and frosting. All cakes are baked entirely from scratch and hand-decorated in American buttercream.
            </p>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="w2.jpg"
              className=" h-1/2 w-full"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Delightcake Tasting Kit
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Order a tasting kit with 4 cupcakes: Red Velvet, Vanilla, Chocolate Vanilla, and Chocolate Chocolate. Including 2 specialty cake slices of your choosing.
            </p>
          </div>
        </div>

        <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="../w4.jpg"
              className=" h-1/2 w-full"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cupcakes
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Create an impressive display with Sweet  Delight's signature cupcakes. Perfect on their own or to supplement your wedding cake
            </p>
          </div>
        </div>
        <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="../w3.jpg"
              className=" h-1/2 w-full"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Mini Treats
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Deck out your dessert bar with bite-sized minis of Sweet  Delight's signature cupcakes and chocolate chip cookies.
            </p>
          </div>
        </div>
      </div>

    </div>
  </>
  )
}

export default Weddingcards