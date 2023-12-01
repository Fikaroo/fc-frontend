"use client";

import { Fragment, useState } from "react";

import { PlusIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import AddUnit from "./AddUnit";

const Client = ({
  length,
  children,
}: {
  length: number;
  children: React.ReactNode;
}) => {
  const [isAdd, setIsAdd] = useState(false);

  const handleAdd = () => setIsAdd(!isAdd);

  return (
    <Fragment>
      <div className="flex items-end justify-between mb-4">
        <Heading
          title={`Units (${length})`}
          description="Manage units for your products"
        />

        <Button onClick={handleAdd}>
          <PlusIcon className="w-4 h-4 mr-2" /> Add New
        </Button>
      </div>

      {isAdd ? <AddUnit setState={setIsAdd} /> : null}

      {children}
    </Fragment>
  );
};

export default Client;
