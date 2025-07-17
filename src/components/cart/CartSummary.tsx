"use client";
import { store } from "@/store/store";
// import { store } from "@/src/lib/store";
// import { calculateCartTotals } from "@/src/lib/utils";
import BillingSummary from "./BillingSummary";

const CartSummary = ({ email }: { email: string }) => {
  const { cartProduct } = store();

  return (
    <section className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <BillingSummary />
      <button
        type="submit"
        className="w-full mt-6 rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
      >
        Checkout
      </button>
    </section>
  );
};

export default CartSummary;
