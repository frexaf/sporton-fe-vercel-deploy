"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderSubmitted = () => {
  const reloadOrderStatus = () => {
    window.location.reload();
  };

  return (
    <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto">
      <Image
        src="/images/icon-order-submitted.svg"
        width={117}
        height={117}
        alt="order submitted icon"
      />
      <h2 className="font-semibold text-2xl mb-2 mt-4">Order Submitted !!</h2>
      <p className="mb-8 text-center">
        Your Order is recorded in our system, we are still confirming the
        payment status, please wait and your order status will be updated in
        less than 12 hours.
      </p>
      <Button variant="dark" className="w-full" onClick={reloadOrderStatus}>
        <FiRefreshCw size={18} />
        Refresh Order Status
      </Button>
    </div>
  );
};

export default OrderSubmitted;
