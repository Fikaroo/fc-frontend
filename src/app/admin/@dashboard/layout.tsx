import Navbar from "./components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
