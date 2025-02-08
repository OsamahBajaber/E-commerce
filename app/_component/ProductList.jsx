import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className='mx-32 my-32 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-3'>{productList.map((p)=>(
        <ProductItem key={p.id} product={p}/>
    ))}</div>
  )
}

export default ProductList