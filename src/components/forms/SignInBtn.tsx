import React from "react";
import { BiCaretDown } from "react-icons/bi";

const SignInBtn = () => {
  return (
    <form
      action=""
      className="text-xs flex flex-col justify-center px-2  items-start headerItem"
    >
      <button className=" font-bold flex items-center ">
        Account list {""}
        <span>
          <BiCaretDown />
        </span>
      </button>
    </form>
  );
};

export default SignInBtn;
