
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CallItem, { CallItemData } from "@/components/dashboard/CallItem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDown, ArrowUp, Calendar, Search } from "lucide-react";
import { useState } from "react";

// Mock data
const allCalls: CallItemData[] = [
  {
    id: "call-001",
    customer: {
      name: "Amira Mahmoud",
      phone: "+20 (102) 123-4567",
    },
    date: "May 10, 2025",
    time: "10:30 AM",
    duration: "4:25",
    status: "completed",
    topic: "Product inquiry about enterprise plan"
  },
  {
    id: "call-002",
    customer: {
      name: "Omar Hassan",
      phone: "+20 (112) 987-6543",
    },
    date: "May 9, 2025",
    time: "3:15 PM",
    duration: "2:10",
    status: "completed",
    topic: "Customer support issue with billing"
  },
  {
    id: "call-003",
    customer: {
      name: "Layla Ibrahim",
      phone: "+20 (100) 456-7890",
    },
    date: "May 9, 2025",
    time: "11:45 AM",
    duration: "5:32",
    status: "completed",
    topic: "Technical support for integration"
  },
  {
    id: "call-004",
    customer: {
      name: "Mustafa Ali",
      phone: "+20 (111) 234-5678",
    },
    date: "May 8, 2025",
    time: "2:00 PM",
    duration: "3:45",
    status: "completed",
    topic: "Product demo request"
  },
  {
    id: "call-005",
    customer: {
      name: "Nour El-Din",
      phone: "+20 (101) 345-6789",
    },
    date: "May 8, 2025",
    time: "9:20 AM",
    duration: "6:15",
    status: "completed",
    topic: "Sales inquiry for small business"
  },
  {
    id: "call-006",
    customer: {
      name: "Fatima Mohammed",
      phone: "+20 (106) 567-8901",
    },
    date: "May 7, 2025",
    time: "4:45 PM",
    duration: "1:55",
    status: "completed",
    topic: "Account setup assistance"
  },
  {
    id: "call-007",
    customer: {
      name: "Ahmed Khaled",
      phone: "+20 (109) 678-9012",
    },
    date: "May 7, 2025",
    time: "11:10 AM",
    duration: "3:20",
    status: "completed",
    topic: "Feature request discussion"
  },
  {
    id: "call-008",
    customer: {
      name: "Yasmin Adel",
      phone: "+20 (115) 789-0123",
    },
    date: "May 6, 2025",
    time: "2:30 PM",
    duration: "4:05",
    status: "completed",
    topic: "Integration with CRM system"
  }
];

const AllCalls = () => {
  const [sort, setSort] = useState("newest");
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Simple filtering and sorting logic
  const filteredCalls = allCalls.filter(call => {
    if (filter === "all") return true;
    return call.status === filter;
  });
  
  const sortedCalls = [...filteredCalls].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`).getTime();
    const dateB = new Date(`${b.date} ${b.time}`).getTime();
    
    return sort === "newest" ? dateB - dateA : dateA - dateB;
  });
  
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">All Calls</h1>
        <p className="text-gray-500">View and manage all conversation records</p>
      </div>
      
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="text"
                placeholder="Search by name or topic..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="w-full md:w-40">
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Calls</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="missed">Missed</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full md:w-40">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Last 7 days</span>
              </div>
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="w-full md:w-40">
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort</label>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="newest">
                    <div className="flex items-center">
                      <ArrowDown className="h-3 w-3 mr-1" />
                      <span>Newest first</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="oldest">
                    <div className="flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      <span>Oldest first</span>
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>
      
      <div className="space-y-4">
        {sortedCalls.map((call) => (
          <CallItem 
            key={call.id} 
            call={call}
            active={call.id === "call-001"} 
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default AllCalls;
