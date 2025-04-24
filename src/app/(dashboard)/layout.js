// /(dashboard)/layout.js
import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import WithAuth from "@/components/withAuth";

const Dashboard = ({ children }) => {
  return (
    // <WithAuth>
    <DashboardLayout>{children}</DashboardLayout>
    // </WithAuth>
  );
};
export default Dashboard;
