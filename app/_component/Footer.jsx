"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

function Footer() {
  const {user} = useUser()
  return  (
    <div className='w-full bg-black text-white text-center'>Footer</div>
  )
}

export default Footer