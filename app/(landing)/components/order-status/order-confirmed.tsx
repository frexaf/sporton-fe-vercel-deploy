"use client";

import Image from "next/image";
import { useState } from "react";

const OrderConfirmed = () => {
  return (
    <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto">
      <Image
        src="/images/icon-order-confirmed.svg"
        width={117}
        height={117}
        alt="order confirmed icon"
      />
      <h2 className="font-semibold text-2xl mb-2 mt-4">Order Confirmed !!</h2>
      <p className="mb-8 text-center">
        We have received your payment, and your order is currently processed by
        our staff, just wait until your favorite sportswear arrive in your home.
        We will contact you in Whatsapp for further shipping updates.
      </p>
    </div>
  );
};

export default OrderConfirmed;
