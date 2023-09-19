import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FreshCard Dashboard",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="flex-1">{children}</section>;
};

export default DashboardLayout;
