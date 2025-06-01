
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopBar } from "@/components/TopBar";
import { DashboardContent } from "@/components/DashboardContent";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <DashboardContent />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
