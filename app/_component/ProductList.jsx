import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  console.log("product list",productList)
  return (
    <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-5'>{productList.map((p)=>(
        <ProductItem key={p.id} product={p}/>
    ))}</div>
  )
}

export default ProductList