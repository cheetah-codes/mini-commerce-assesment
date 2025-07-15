import React from "react";

type PropType = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: PropType) => {
  return <div className="max-w-screen-xl mx-auto px-4 lg:px-0">children</div>;
};

export default Container;
