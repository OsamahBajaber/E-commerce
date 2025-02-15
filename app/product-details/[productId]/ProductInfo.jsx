"use client"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import CartApis from "../../_utils/CartApis"
import { useContext, useEffect } from 'react';
import { CartContext } from '../../_contexts/CartContext';

function ProductInfo({productInfo}) {
    const {user} = useUser();
    const {cart,setCart} = useContext(CartContext)
   if (!productInfo || Object.keys(productInfo).length === 0) {
    return <p>Loading product details...</p>;
  }
  
    function handleCartClick(e){
        e.preventDefault()
        if(user){
        const data = {
            data: {
                username: user.fullName,
                email: user.primaryEmailAddress.emailAddress,
                products: [productInfo?.documentId]
            }
        }

        CartApis.addToCart(data).then(response=>{
        console.log("added to cart", response.data.data)
        setCart([...cart, 
            {
                id:response.data.data.documentId,
                product:productInfo,
            },
        ])

        }).catch(error=>{
            console.log("error",error)
        })}
        else{
        redirect("/sign-in");}
    }
  return (
    <div className='w-1/2'>
        {/* Product Details */}
        <h2 className='py-2 font-semibold text-xl'>{productInfo?.title || "Unknown Product"}</h2>
        <h3 className='py-1 text-gray-400 uppercase'>{productInfo?.category || ""}</h3>
        <p className=''>{productInfo?.description[0]?.children[0]?.text || "No description available."}</p>
        <h4 className='my-4 w-fit text-2xl text-primary font-bold tracking-wider hover:text-primaryHover hover:underline hover:cursor-default'>${productInfo.price ? productInfo.price : "N/A"}</h4>
        {/* ===== Product Details ===== */}
    
    {/* Action Buttons */}
        <form className="mt-4 flex flex-col sm:flex-row gap-4">
        <button
            onClick={handleCartClick}
            className="block w-full shadow-md rounded-md bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-400 hover:scale-105"
        >
            <ShoppingCartIcon className='me-1' />
            Add to Cart
        </button>

        <button
            type="button"
            
            className="block w-full shadow-md rounded-md bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-primaryHover hover:scale-105"
        >
            <PaymentsIcon className='me-2'/>
            Buy Now
        </button>
        </form>
        {/* ===== Action Buttons ===== */}
    </div>
  )
}

export default ProductInfo