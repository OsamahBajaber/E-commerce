"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'

function ProductSection() {
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        getLatestProduct_();
    },[])
    const getLatestProduct_ = ()=>{
        ProductApis.getLatestProducts().then(response=>{
            setProductList(response.data.data)
        })
    }
  return (
    <div id='product-section' className='mx-28 my-32 text-black'>
        <h2 className='my-6 -mx-10 text-3xl'>Our Latest Products</h2>
        <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection