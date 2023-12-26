import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className=' min-h-screen w-full p-8'>{children}</div>;
};

export default DashboardLayout;
