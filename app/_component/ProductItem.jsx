import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductItem({product}) {
  return (
    
    <Link href={`/product-details/${product.documentId}`} className="my-2 group shadow-md relative block overflow-hidden">
  
  {/* Product Image */}
  <img
    src={product.banner.url}
    alt="banner"

    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />
  {/* ===== Product Image ===== */}
    {/* Details Container */}
  <div className="relative border border-gray-100 bg-white p-6">
    {/* Product Price */}
    <p className="text-gray-700">${product.price}</p>
    {/* Product Title */}
    <h3 className="mt-1.5 text-lg font-medium text-gray-900">{product.title}</h3>
    {/* Product Description */}
    <p className="mt-1.5 line-clamp-3 text-gray-700">{product.description[0].children[0].text}</p>

   
  </div>
    {/* ===== Details Container ===== */}

</Link>
  )
}

export default ProductItem