import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const response = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: Math.round(amount),
      }),
    });
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret: await response.json(),
      confirmParams: {
        return_url: "http://localhost:3000",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        disabled={!stripe}
        className="p-3 mt-5 w-full rounded bg-primary text-white uppercase transition hover:bg-primaryHover"
      >
        Submit
      </button>
    </form>
  );
};

export default CheckoutForm;
