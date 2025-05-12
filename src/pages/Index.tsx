import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import CallItem, { CallItemData } from "@/components/dashboard/CallItem";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Clock,
  BarChart3,
  User,
  Download,
  Video,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Mock data
const recentCalls: CallItemData[] = [
  {
    id: "call-001",
    customer: {
      name: "Ahmed Mahmoud",
      phone: "+20 (102) 123-4567",
    },
    date: "May 10, 2025",
    time: "10:30 AM",
    duration: "4:25",
    status: "completed",
    topic: "Inquiry about Margin app",
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
    topic: "Customer support issue with billing",
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
    topic: "Technical support for integration",
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
  },
];

const Index = () => {
  const navigate = useNavigate();

  const handleViewAllCalls = () => {
    navigate("/calls");
  };

  const handleViewCallDetails = (callId: string) => {
    navigate(`/call/${callId}`);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Youssef</h1>
        <p className="text-gray-500">
          Here's what's happening with your AI conversations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Calls"
          value="1,248"
          icon={<Phone className="h-5 w-5" />}
          trend={{ value: "12% vs last month", positive: true }}
        />
        <StatsCard
          title="Avg. Call Duration"
          value="3:42"
          icon={<Clock className="h-5 w-5" />}
          trend={{ value: "1:12 vs last month", positive: true }}
        />
        <StatsCard
          title="Resolution Rate"
          value="94%"
          icon={<BarChart3 className="h-5 w-5" />}
          trend={{ value: "2% vs last month", positive: true }}
        />
        <StatsCard
          title="Active Customers"
          value="528"
          icon={<User className="h-5 w-5" />}
          trend={{ value: "8% vs last month", positive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Recent Calls</h2>
            <Button variant="outline" onClick={handleViewAllCalls}>
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {recentCalls.map((call) => (
              <CallItem
                key={call.id}
                call={call}
                active={call.id === "call-001"}
              />
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-medium mb-4">Quick Actions</h2>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => handleViewCallDetails("call-001")}
            >
              <Video className="h-4 w-4 mr-2" />
              View Call Recording
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => handleViewCallDetails("call-001")}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Latest Call
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => handleViewCallDetails("call-001")}
            >
              <FileText className="h-4 w-4 mr-2" />
              View Call Summary
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => handleViewCallDetails("call-001")}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              View Call Report
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="text-sm font-medium mb-3">Today's Statistics</h3>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Calls Today</span>
                <span className="font-medium">12</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Avg. Duration</span>
                <span className="font-medium">4:12</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Resolution Rate</span>
                <span className="font-medium">96%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Phone className="h-4 w-4 text-brand-blue" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">Ahmed Mahmoud</span> from Cairo
                Electronics had a call about enterprise pricing
              </p>
              <p className="text-xs text-gray-500 mt-1">30 minutes ago</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <Download className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">Omar Hassan</span> call recording
                was downloaded
              </p>
              <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <FileText className="h-4 w-4 text-orange-600" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">Layla Ibrahim</span> call report
                was generated
              </p>
              <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <User className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">Mustafa Ali</span> was added as a
                new customer
              </p>
              <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
            </div>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Index;
