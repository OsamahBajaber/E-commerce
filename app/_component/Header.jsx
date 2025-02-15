"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useEffect } from 'react'
import { CartContext } from '../_contexts/CartContext'
import CartApis from '../_utils/CartApis'
import Cart from "./Cart"

function Header() {
  const {user} = useUser()
  const {cart, setCart} = useContext(CartContext)
  const [openCart, setOpenCart] = useState(false)
  
useEffect(() => {
    if (user) {
        getUserCartItems_();
    }
}, [user]);

const getUserCartItems_ = async () => {
    try {
        const response = await CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress);
        console.log("========>", response?.data?.data);
        setCart(response.data.data.map(item => ({
            id: item?.documentId,
            product: item?.products[0],
        })));
    } catch (error) {
        console.log("error", error);
    }
};

  function cartHandler(){
    openCart?setOpenCart(false):setOpenCart(true);
    
  }

  return  (
    <header className="bg-white">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Link className="block " href="/">
      <span className="sr-only">Home</span>
      <Image src="/logo.svg" alt='logo' width={45} height={45}/>
    </Link>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link className="text-primary transition hover:text-primaryHover" href="/"> Home </Link>
          </li>

          <li>
            <Link className="text-primary transition hover:text-primaryHover" href="#product-section"> Explore </Link>
          </li>

          <li>
            <Link className="text-primary transition hover:text-primaryHover" href="#"> Projects </Link>
          </li>

          <li>
            <Link className="text-primary transition hover:text-primaryHover" href="#"> About Us </Link>
          </li>

          <li>
            <Link className="text-primary transition hover:text-primaryHover" href="#"> Contact Us </Link>
          </li>

          
        </ul>
      </nav>
       <div className="flex items-center gap-4">
      {user 
      ?
     <div className='flex items-center gap-10'>
      <h2 onClick={cartHandler}><ShoppingCartIcon className='cursor-pointer'/> ({cart.length})</h2>
      {openCart?<Cart/>:""}
      {/* <Cart/> */}
      <UserButton/>

      </div>
      :
       <div className="sm:flex sm:gap-4">
          <Link
            className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primaryHover"
            href="/sign-in"
          >
            Login
          </Link>

          <Link
            className="hidden rounded-md bg-white border shadow px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200 hover:text-primaryHover sm:block"
            href="/sign-up"
          >
            Register
          </Link>
        </div>
      }
     
        <button
          className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header