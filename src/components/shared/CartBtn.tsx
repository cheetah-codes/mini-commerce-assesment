import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

const CartBtn = () => {
  return (
    <Link href={"/cart"}>
      {/* <Image src={cartIcon} alt="carticon" />
       */}
      <FaCartShopping className="w-8 h-full" />
    </Link>
  );
};

export default CartBtn;
