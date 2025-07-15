"use client";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex-1 h-10 mx-4 md:inline-flex items-center justify-between relative">
      <input
        type="text"
        placeholder="Search Mini Product"
        className="w-full h-full rounded-md bg-[#e5e5e5] px-2 placeholder:text-sm text-base text-[#7d8184] border border-transparent outline-none focus-visible:border-[#f5f5f5] border[3px]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <MdOutlineClose
          onClick={() => setSearchQuery("")}
          className=" text-2xl text-[#7d8184] hover:text-red-600 absolute right-14 duration-200 cursor-pointer"
        />
      )}
      <span className="w-12 h-full hover text-[#7d8184] text-2xl flex items-center justify-center rounded-tr-md rounded-br-md absolute right-0">
        <HiOutlineSearch />
      </span>
    </div>
  );
};

export default SearchInput;
