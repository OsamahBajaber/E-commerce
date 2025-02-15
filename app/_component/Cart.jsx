"use clinet"
import Link from 'next/link'
import React,{useContext} from 'react'
import { CartContext } from '../_contexts/CartContext'
import Image from 'next/image'

function Cart() {
    const {cart, setCart} = useContext(CartContext)
  return (
    <div
  className="h-[300px] w-[250px] bg-[#eee] z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto"
>
  {/* <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
    <span className="sr-only">Close cart</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button> */}

{/* Products */}
  <div className="mt-4 space-y-6">
    <ul className="space-y-4">
        {cart.map((item)=>{
            return(
                <li key={item.id} className="flex items-center gap-4">
        <Image
          src={item?.product?.banner?.url}
          alt="product item"
          width={64}
          height={64}
          className="size-16 rounded-sm object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">{item.product.title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Category: </dt>
              <dd className="inline">{item.product.category}</dd>
            </div>

            <div>
              <dt className="inline">Price: </dt>
              <dd className="inline">${item.product.price}</dd>
            </div>
          </dl>
        </div>
      </li>
            )
        })}
      
    </ul>
{/* ===== Products ===== */}

{/* Buttons */}
    <div className="space-y-4 text-center">
      <Link
        href="/cart"
        className="block rounded-md border border-primary px-5 py-3 text-sm text-gray-600 transition hover:border-primaryHover"
      >
        View my cart ({cart.length})
      </Link>

      <Link
        href="#"
        className="block rounded-md bg-primary px-5 py-3 text-sm text-gray-100 transition hover:bg-primaryHover"
      >
        Checkout
      </Link>

      <Link
        href="#"
        className="inline-block text-sm text-primaryHover underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </Link>
    </div>
{/* ===== Buttons ===== */}
  </div>
</div>
  )
}

export default Cart