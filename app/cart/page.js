"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { CartContext } from "../_contexts/CartContext";
import Image from "next/image";
import CartApis from "../_utils/CartApis";

function page() {
  const { cart, setCart } = useContext(CartContext);
  const getTotalAmount = () => {
    let total = 0;
    cart.map((item) => {
      total = total + Number(item.product.price);
    });
    return total;
  };
  const deleteItem = (id) => {
    CartApis.deleteCartItem(id)
      .then((response) => {
        if (response) {
          setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <section className=" min-h-[100vh]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              My Cart
            </h1>
          </header>

          <div className="mt-8">
            {/* Product List */}
            <ul className="space-y-4">
              {cart.map((item) => {
                return (
                  <li key={item.id} className="flex items-center gap-4">
                    <Image
                      src={item?.product?.banner?.url}
                      alt=""
                      width={100}
                      height={100}
                      className="size-24 rounded-sm object-cover"
                    />

                    <div>
                      <h3 className="text-xl text-gray-900">
                        {item.product.title}
                      </h3>

                      <dl className="mt-0.5 space-y-px text-sm text-gray-600">
                        <div>
                          <dt className="inline">Category: </dt>
                          <dd className="inline">{item.product.category}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="text-lg flex flex-1 items-center justify-end gap-2">
                      <span>${item.product.price}</span>
                      <button
                        onClick={() => {
                          deleteItem(item.id);
                        }}
                        className="text-gray-600 transition hover:text-red-600"
                      >
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* ===== Product List ===== */}
            {/* Charges Container */}
            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between text-xl font-medium">
                    <dt>Total</dt>
                    <dd>${getTotalAmount()}</dd>
                  </div>
                </dl>
                {/* Checkout Button */}
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="block rounded-sm bg-primary px-5 py-3 text-sm text-gray-100 transition hover:bg-primaryHover"
                  >
                    Checkout
                  </Link>
                </div>
                {/* ===== Checkout Button ===== */}
              </div>
            </div>
            {/* ===== Charges Container ===== */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
