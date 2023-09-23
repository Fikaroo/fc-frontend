import { SymbolIcon } from "@radix-ui/react-icons";
import React from "react";

const Loading = () => {
  return (
    <div className="absolute flex items-center gap-2 -translate-x-1/2 left-1/2 top-1/2">
      <SymbolIcon className="w-6 h-6 animate-spin" />
      <p className="text-xl font-medium ">Loading...</p>
    </div>
  );
};

export default Loading;
