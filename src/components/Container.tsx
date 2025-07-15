import React from "react";

type PropType = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: PropType) => {
  return <div className={className}>{children}</div>;
};

export default Container;
