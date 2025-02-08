import Image from 'next/image'
import React from 'react'

function ProductItem({product}) {
  return (
    // <div className="my-6 p-2 
    // flex flex-col
    // cursor-pointer
    // bg-white
    // hover:shadow-lg
    // hover:shadow-primaryHover">
    //     <Image src={product.banner.url} alt='banner' width={200} height={200} className='rounded-t- self-center h-[100px] object-contain'/>
    //     <div className='px-4 my-3 md:px-1 sm:px-1 flex justify-between text-lg font-bold'>
    //         <h3 className='line-clamp-1'>{product.title}</h3>
    //         <h3 className=''>${product.price}</h3>
    //     </div>
    //     <p className='text-gray-400 text-center'>{product.category}</p>
    // </div>
    <a href="#" className="group relative block overflow-hidden">
  
  <img
    src={product.banner.url}
    alt="banner"

    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative border border-gray-100 bg-white p-6">
    <p className="text-gray-700">${product.price}</p>

    <h3 className="mt-1.5 text-lg font-medium text-gray-900">{product.title}</h3>

    <p className="mt-1.5 line-clamp-3 text-gray-700">{product.description[0].children[0].text}</p>

    <form className="mt-4 flex gap-4">
      <button
        className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-400 hover:scale-105"
      >
        Add to Cart
      </button>

      <button
        type="button"
        className="block w-full rounded-sm bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-primaryHover hover:scale-105"
      >
        Buy Now
      </button>
    </form>
  </div>
</a>
  )
}

export default ProductItem