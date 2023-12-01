import { allUnits } from "@/graphql/units/server-action";
import React, { Fragment } from "react";
import Client from "./components/Client";
import { columns } from "./components/columns";
import { DataTable } from "@/components/ui/data-table";

const Units = async () => {
  const { data, errors } = await allUnits();

  if (errors) {
    return <>Something wrong</>;
  }
  return (
    <Fragment>
      <Client length={data?.units?.length}>
        <DataTable columns={columns} data={data?.units} />
      </Client>
    </Fragment>
  );
};

export default Units;
