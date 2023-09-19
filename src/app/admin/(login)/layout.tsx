import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "FreshCard Admin Login",
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <Fragment>{children}</Fragment>;
};

export default LoginLayout;
