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
            console.log(response.data.data)
            setProductList(response.data.data)
        })
    }
  return (
    <div className='text-black'>

        <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection