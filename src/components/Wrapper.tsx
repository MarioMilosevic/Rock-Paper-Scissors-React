import { ReactNode } from "react";

type WrapperTypes = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperTypes) => {
  return <div className="flex justify-center">{children}</div>;
};

export default Wrapper;
