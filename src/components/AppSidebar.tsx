
import React from 'react';
import { LayoutDashboard, BarChart, User, Settings, TrendingUp, Filter } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Inventory",
    url: "#",
    icon: BarChart,
  },
  {
    title: "Suppliers",
    url: "#",
    icon: User,
  },
  {
    title: "Analytics",
    url: "#",
    icon: TrendingUp,
  },
  {
    title: "Reports",
    url: "#",
    icon: Filter,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <BarChart className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-gray-900">RetailBI</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.active}>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
