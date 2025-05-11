
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { FileText, FileSearch, FilePieChart, Download } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const reportsData = [
  {
    id: 1,
    name: "Monthly Call Summary",
    date: "2025-05-01",
    type: "Summary",
    status: "Completed"
  },
  {
    id: 2,
    name: "Q2 Call Analytics",
    date: "2025-04-15",
    type: "Analytics",
    status: "Completed"
  },
  {
    id: 3,
    name: "Sales Team Performance",
    date: "2025-05-05",
    type: "Performance",
    status: "Pending"
  },
  {
    id: 4,
    name: "Customer Satisfaction Survey",
    date: "2025-05-10",
    type: "Survey",
    status: "Processing"
  },
  {
    id: 5,
    name: "Agent Quality Assessment",
    date: "2025-04-30",
    type: "Assessment",
    status: "Completed"
  }
];

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredReports = reportsData.filter(
    report => report.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              report.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Reports</h1>
          <p className="text-gray-500">View and download all your call reports</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard 
            title="Total Reports"
            value={reportsData.length}
            icon={<FileText />}
          />
          <StatsCard 
            title="Generated This Month" 
            value="12" 
            icon={<FilePieChart />}
            trend={{ value: "30%", positive: true }}
          />
          <StatsCard 
            title="Downloads" 
            value="45" 
            icon={<Download />}
            trend={{ value: "12%", positive: true }}
          />
        </div>
        
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Available Reports</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search reports..."
                    className="border rounded-md px-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FileSearch className="h-4 w-4 absolute right-3 top-2.5 text-gray-400" />
                </div>
                <Button>Generate Report</Button>
              </div>
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.name}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.type}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        report.status === "Completed" 
                          ? "bg-green-100 text-green-800" 
                          : report.status === "Processing" 
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {report.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    No reports found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
