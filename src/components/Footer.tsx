import React from "react";
import { footerData } from "@/constants";
import FooterMiddleList from "./FooterMiddleList";
import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <div className="px-[48px]">
        <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {footerData.map((item) => (
            <FooterMiddleList
              key={item._id}
              title={item.title}
              listItem={item.listItem}
            />
          ))}
        </Container>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      <div className="flex flex-col justify-center items-center bg-black py-2">
        <div>
          <ul className="text-gray-300 text-sm gap-4 py-2 flex">
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Conditions of Use
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Privacy Notice
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Your Ads Privacy Choices
            </li>
          </ul>
        </div>
        <div>
          <p className="font-normal text-[12px] text-[#DDD] leading-3">
            © 1996-2022, Mini-commerce.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
