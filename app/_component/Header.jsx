"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Header() {
  const {user} = useUser()
  return user && (
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
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primaryHover"
            href="#"
          >
            Login
          </a>

          <a
            className="hidden rounded-md bg-white border shadow px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200 hover:text-primaryHover sm:block"
            href="#"
          >
            Register
          </a>
        </div>

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