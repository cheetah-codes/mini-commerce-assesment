import Link from "next/link";
import React from "react";

const FavoriteBtn = () => {
  return (
    <>
      <Link href="/favorite">FavoriteBtn</Link>
      <p>marked</p>
      <p>& Favorite</p>
    </>
  );
};

export default FavoriteBtn;
