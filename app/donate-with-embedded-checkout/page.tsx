import type { Metadata } from "next";

import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = {
  title: "Deploy with embedded Checkout | Next.js + TypeScript Example",
};

export default function DonatePage(): JSX.Element {
  return (
    <div className="page-container">
      <h1>Deploy with embedded Checkout</h1>
      <p>Deploy to our project 💖</p>
      <CheckoutForm uiMode="embedded" />
    </div>
  );
}
