import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo } from "../../public/assets";
import { FaLocationDot } from "react-icons/fa6";
import SearchInput from "./forms/SearchInput";
import SignInBtn from "./forms/SignInBtn";
import FavoriteBtn from "./shared/FavoriteBtn";
import CartBtn from "./shared/CartBtn";

const Header = () => {
  return (
    <header className="stickey top-0 z-50 mb-[5px]">
      <div className="w-full h-20 bg-[#ffffff]">
        <div className="h-full w-full mx-auto inline-flex items-center gap-1 md:gap-3 px-4">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-28 object-cover " />
          </Link>
          {/* ////////////Deliver////////////////////// */}
          <div className="headerItem hidden lg:inline-flex gap-1">
            <FaLocationDot className="text-lg text-white" />
            <div className="text-xs">
              <p>Deliver to</p>
              <p className="text-lightash font-bold">USA</p>
            </div>
          </div>
          {/* //////////search//////////////////// */}
          <SearchInput />
          <SignInBtn />
          <FavoriteBtn />
          <CartBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
