import { Metadata } from "next";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "FreshCard Dashboard",
};

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return <section className="flex-1">{children}</section>;
};

export default DashboardLayout;
