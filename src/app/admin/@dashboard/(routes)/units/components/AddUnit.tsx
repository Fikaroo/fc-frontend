"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/SubmitButton";
import { Dispatch, SetStateAction } from "react";
import { createUnit } from "@/graphql/units/server-action";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const schema = z.object({
  name: z.string().nonempty(),
  value: z.string().nonempty(),
});

type SchemaType = z.infer<typeof schema>;

type formFieldType = {
  name: keyof SchemaType;
  label: string;
  placeholder: string;
  type: string;
};

const formFields: formFieldType[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Metr,Litr and etc.",
    type: "text",
  },
  {
    name: "value",
    label: "Value",
    placeholder: "m,l and etc.",
    type: "text",
  },
];

type AddUnitProps = {
  setState: Dispatch<SetStateAction<boolean>>;
};

const AddUnit = ({ setState }: AddUnitProps) => {
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      value: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(values: SchemaType) {
    const { data, errors } = await createUnit(values);

    if (errors) {
      toast({ title: errors?.[0]?.message, variant: "destructive" });
    }

    data?.createUnit &&
      toast({ title: `Successfully created unit ${data?.createUnit?.name}` });

    setState(false);
    return values;
  }

  return (
    <Card className="my-4 border rounded-lg ">
      <CardHeader>
        <h3 className="text-lg font-semibold">Create Unit</h3>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-4 space-y-8"
          >
            <div className="flex flex-1 gap-4">
              {formFields.map(({ name, label, placeholder, type }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={placeholder}
                          type={type}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <SubmitButton text="Create" />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddUnit;
