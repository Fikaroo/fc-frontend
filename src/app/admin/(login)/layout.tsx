import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "FreshCard Admin Login",
};

const LoginLayout = async ({ children }: { children: React.ReactNode }) => {
  // const { data, error } = await checkAuth();
  // if (data) {
  //   // redirect("/dashboard");
  // }
  // console.log(data, error);
  return <section className="flex-1">{children}</section>;
};

export default LoginLayout;
