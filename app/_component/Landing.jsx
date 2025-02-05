import React from 'react'

function Landing() {
  return (
    <>{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
    id='landing'
    className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
    {/* Overlay */}
  <div
    className="absolute inset-0 from-gray-900/95 to-gray-900/25 bg-gradient-to-r"
  ></div>
    {/* ====== Overlay ====== */}

        {/* Landing Contaner */}
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 justify-center sm:px-6 lg:flex lg:h-screen lg:items-center"
  >
    {/* Landing Details */}
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        {/* Title */}
      <h1 className="text-3xl tracking-wide font-extrabold text-white sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-primary"> Favorite Project. </strong>
      </h1>
        {/* ===== Title ===== */}
      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
        Whatever you need! Don't worry you will find it here :)
      </p>

        {/* Buttons */}
      <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">
        <a
          href="#landing"
          className="block w-full rounded-sm bg-primary px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-primaryHover focus:ring-3 focus:outline-hidden sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-primary shadow-sm hover:text-primaryHover focus:ring-3 focus:outline-hidden sm:w-auto"
        >
          Learn More
        </a>
      </div>
        {/* ===== Buttons ===== */}


    </div>
    {/* ===== Landing Details ===== */}
    
  </div>
        {/* ===== Landing Contaner ===== */}

</section></>
  )
}

export default Landing