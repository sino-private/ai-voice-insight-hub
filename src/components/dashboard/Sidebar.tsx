
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Phone, BarChart3, Settings, Users, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const navItems = [
    { 
      icon: Home, 
      label: "Dashboard", 
      href: "/", 
      active: true 
    },
    { 
      icon: Phone, 
      label: "Calls", 
      href: "/calls", 
      active: false 
    },
    { 
      icon: FileText, 
      label: "Reports", 
      href: "/reports", 
      active: false 
    },
    { 
      icon: BarChart3, 
      label: "Analytics", 
      href: "/analytics", 
      active: false 
    },
    { 
      icon: Users, 
      label: "Team", 
      href: "/team", 
      active: false 
    },
    { 
      icon: Settings, 
      label: "Settings", 
      href: "/settings", 
      active: false 
    },
  ];

  return (
    <div className={cn("w-64 border-r bg-white h-screen flex flex-col", className)}>
      <div className="p-4 border-b">
        <h2 className="font-bold text-xl flex items-center">
          <span className="text-brand-blue">AI</span>
          <span className="ml-1">Converse</span>
        </h2>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink 
            key={item.label}
            to={item.href} 
            className={({ isActive }) => cn(
              "flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors",
              isActive || item.active 
                ? "bg-brand-blue text-white" 
                : "hover:bg-gray-100 text-gray-700"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t mt-auto">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-brand-blue font-bold">
            A
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-500">admin@aiconverse.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
