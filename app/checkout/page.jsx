"use client"
import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm"
import { useSearchParams } from 'next/navigation';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function Checkout() {
    const searchParams = useSearchParams()
    const options = {
    // passing the client secret obtained from the server
    locale:"en",
    mode:"payment",
    currency:"usd",
    amount: Math.round(searchParams.get("amount"))*100
  };
  return (
     <Elements stripe={stripePromise} options={options}>
      <div className='w-1/2 m-10'>
        Checkout
        <CheckoutForm amount={searchParams.get("amount")}/>
    </div>
     

    </Elements>
    
  )
}

export default Checkout