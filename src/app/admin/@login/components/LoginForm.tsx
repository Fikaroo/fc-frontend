"use client";

import { useForm } from "react-hook-form";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { loginClient } from "@/graphql/client/auth";
import { useUser } from "@/store/store";

const schema = z.object({
  email: z.string().email("This is not a valid email."),
  password: z
    .string()
    .min(1, "Password must be at least 3 characters long")
    .max(20, "Password can be at most 20 characters long"),
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
  //   "Password must contain at least one uppercase letter, one lowercase letter, one digit"
  // ),
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
    name: "email",
    label: "Email",
    placeholder: "emample@example.com",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "*********",
    type: "password",
  },
];

const LoginForm = () => {
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });
  const { setUser } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const onSubmit = async (values: SchemaType) => {
    const { data, errors } = await loginClient(values);
    if (!data) {
      return toast({
        title: errors?.[0]?.message as any,
        variant: "destructive",
      });
    }

    if (
      !data?.singin?.role.includes("SUPER_ADMIN") ||
      !data?.singin?.role.includes("ADMIN")
    ) {
      return toast({
        title: "Access Restricted",
        variant: "destructive",
      });
    }

    setUser(data.singin.role);
    toast({ title: `Hey ${data?.singin?.firstName}` as any });
    router.refresh();
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Welcome FreshCard Dashboard</CardTitle>
        <CardDescription>Login with admin account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {formFields.map(({ name, label, placeholder, type }) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={placeholder}
                        type={type || "text"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
