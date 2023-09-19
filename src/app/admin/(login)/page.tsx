import React from "react";
import { Badge } from "@/components/ui/badge";
import LoginForm from "./components/LoginForm";

const SignIn = async () => {
  return (
    <React.Fragment>
      <div className="absolute top-0 w-2 -translate-x-1/2 left-1/2 h-1/3 bg-primary" />
      <div className="relative flex justify-center w-full">
        <Badge className="absolute -translate-x-1/2 cursor-default -top-10 left-1/2">
          Admin Access
        </Badge>
        <LoginForm />
      </div>
    </React.Fragment>
  );
};

export default SignIn;
