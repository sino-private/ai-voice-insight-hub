
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b px-6 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">HelloSonar</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search calls..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent w-64"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
