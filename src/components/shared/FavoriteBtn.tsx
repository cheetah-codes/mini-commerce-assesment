import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa6";

const FavoriteBtn = () => {
  return (
    <>
      <Link href="/favorite">
        <FaHeart size={25}/>
      </Link>
    </>
  );
};

export default FavoriteBtn;
