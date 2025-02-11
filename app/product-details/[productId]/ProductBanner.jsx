import Image from 'next/image'
import React from 'react'

function ProductBanner({productBanner}) {
  const bannerUrl = productBanner?.banner?.url || null;
  if (!bannerUrl) return null;
  console.log(productBanner)
  return (
    <Image className='rounded-lg shadow-lg' src={bannerUrl} alt='product banner' width={400} height={300}/>
  )
}

export default ProductBanner