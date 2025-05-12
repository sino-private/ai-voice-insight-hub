import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { BarChart3, TrendingUp, Clock, Users } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for charts
const callVolumeData = [
  { name: "Jan", calls: 320 },
  { name: "Feb", calls: 280 },
  { name: "Mar", calls: 350 },
  { name: "Apr", calls: 400 },
  { name: "May", calls: 380 },
];

const callDurationData = [
  { name: "Mon", avg: 4.5, max: 12 },
  { name: "Tue", avg: 5.2, max: 14 },
  { name: "Wed", avg: 4.8, max: 11 },
  { name: "Thu", avg: 5.5, max: 15 },
  { name: "Fri", avg: 5.0, max: 13 },
  { name: "Sat", avg: 3.8, max: 9 },
  { name: "Sun", avg: 3.2, max: 8 },
];

const agentPerformanceData = [
  { name: "Laila", calls: 85, resolution: 92, satisfaction: 4.7 },
  { name: "Ahmed", calls: 72, resolution: 88, satisfaction: 4.5 },
  { name: "Fatima", calls: 90, resolution: 95, satisfaction: 4.8 },
  { name: "Omar", calls: 65, resolution: 82, satisfaction: 4.2 },
  { name: "Nour", calls: 78, resolution: 90, satisfaction: 4.6 },
];

const chartConfig = {
  calls: {
    label: "Calls",
    color: "#3b82f6",
  },
  avg: {
    label: "Average Duration",
    color: "#10b981",
  },
  max: {
    label: "Maximum Duration",
    color: "#f59e0b",
  },
  resolution: {
    label: "Resolution Rate",
    color: "#8b5cf6",
  },
  satisfaction: {
    label: "Satisfaction Score",
    color: "#ef4444",
  },
};

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("monthly");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Call Analytics</h1>
            <p className="text-gray-500">
              Detailed insights into your call performance
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Time Range:</span>
            <select
              className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatsCard
            title="Total Calls"
            value="1,482"
            icon={<BarChart3 />}
            trend={{ value: "8%", positive: true }}
          />
          <StatsCard
            title="Avg. Resolution Rate"
            value="89%"
            icon={<TrendingUp />}
            trend={{ value: "3%", positive: true }}
          />
          <StatsCard
            title="Avg. Call Duration"
            value="4.8 min"
            icon={<Clock />}
            trend={{ value: "2%", positive: false }}
          />
          <StatsCard title="Active Agents" value="12" icon={<Users />} />
        </div>

        <Tabs
          defaultValue="call-volume"
          className="bg-white rounded-lg border shadow-sm overflow-hidden"
        >
          <div className="p-4 border-b">
            <TabsList className="grid grid-cols-2 w-[280px]">
              <TabsTrigger value="call-volume">Call Volume</TabsTrigger>
              <TabsTrigger value="call-duration">Call Duration</TabsTrigger>
            </TabsList>
          </div>

          <div className="p-6">
            <TabsContent value="call-volume" className="mt-0">
              <h3 className="font-semibold mb-4">Monthly Call Volume</h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <ChartContainer config={chartConfig}>
                    <BarChart
                      data={callVolumeData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar
                        dataKey="calls"
                        name="Calls"
                        fill="#3b82f6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ChartContainer>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="call-duration" className="mt-0">
              <h3 className="font-semibold mb-4">
                Average Call Duration (Minutes)
              </h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <ChartContainer config={chartConfig}>
                    <LineChart
                      data={callDurationData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="avg"
                        name="Average Duration"
                        stroke="#10b981"
                      />
                      <Line
                        type="monotone"
                        dataKey="max"
                        name="Maximum Duration"
                        stroke="#f59e0b"
                      />
                    </LineChart>
                  </ChartContainer>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="agent-performance" className="mt-0">
              <h3 className="font-semibold mb-4">Top Agent Performance</h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <ChartContainer config={chartConfig}>
                    <BarChart
                      data={agentPerformanceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        domain={[0, 5]}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar
                        yAxisId="left"
                        dataKey="calls"
                        name="Calls Handled"
                        fill="#3b82f6"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        yAxisId="left"
                        dataKey="resolution"
                        name="Resolution Rate (%)"
                        fill="#8b5cf6"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="satisfaction"
                        name="Satisfaction Score"
                        fill="#ef4444"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ChartContainer>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
