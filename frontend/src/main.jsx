import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51R9lNIPMussp2pEM6dlHWVkYaVB5pTABrP68lgwX87NlQKvDuU9dhL1LNheilB5rYavmLYNsxk9LV3NBmsR0E3oq0062wKy7dl"
);

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
