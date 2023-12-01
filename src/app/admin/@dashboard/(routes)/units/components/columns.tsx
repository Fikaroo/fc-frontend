"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { Unit, Variant } from "@/graphql/generated/schema";
import { removeUnit } from "@/graphql/units/server-action";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Unit>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "variants",
    header: "Variants",
    cell: ({ row }) =>
      row
        .getValue<Variant[]>("variants")
        .map(({ name }) => name)
        .join(",") || "No Variant",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const unit = row.original;
      const { toast } = useToast();

      const handleRemove = async () => {
        const { data, errors } = await removeUnit(unit?.id);

        if (errors) {
          toast({ title: errors?.[0]?.message, variant: "destructive" });
        }

        data?.removeUnit &&
          toast({
            title: `Successfully created unit ${data?.removeUnit?.name}`,
          });
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(unit.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem onClick={handleRemove}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
