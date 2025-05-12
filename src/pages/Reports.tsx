import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { FileText, FileSearch, FilePieChart, Download, Phone } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const callReportsData = [
  {
    id: 1,
    callId: "call-001",
    caller: "Ahmed Mahmoud",
    company: "Cario Financial",
    date: "2025-05-01",
    duration: "4:25",
    status: "Completed"
  },
  {
    id: 2,
    callId: "call-002",
    caller: "Mohammed Ali",
    company: "Tech Solutions Ltd",
    date: "2025-04-15",
    duration: "3:12",
    status: "Completed"
  },
  {
    id: 3,
    callId: "call-003",
    caller: "Hassan Ibrahim",
    company: "Global Media",
    date: "2025-05-05",
    duration: "6:48",
    status: "Processing"
  },
  {
    id: 4,
    callId: "call-004",
    caller: "Karim Nour",
    company: "Smart Systems",
    date: "2025-05-10",
    duration: "2:33",
    status: "Processing"
  },
  {
    id: 5,
    callId: "call-005",
    caller: "Samir Selim",
    company: "Pharma Solutions",
    date: "2025-04-30",
    duration: "5:17",
    status: "Completed"
  }
];

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const filteredReports = callReportsData.filter(
    report => 
      report.caller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewCallDetail = (callId: string) => {
    navigate(`/call/${callId}`);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Call Reports</h1>
          <p className="text-gray-500">View reports for all your recorded calls</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard 
            title="Total Call Reports"
            value="5"
            icon={<FileText />}
          />
          <StatsCard 
            title="Generated This Month" 
            value="5" 
            icon={<FilePieChart />}
            trend={{ value: "10%", positive: true }}
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
              <h2 className="font-semibold">Call Reports</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by caller or company..."
                  className="border rounded-md px-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FileSearch className="h-4 w-4 absolute right-3 top-2.5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Caller</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.caller}</TableCell>
                    <TableCell>{report.company}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.duration}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        report.status === "Completed" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {report.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <button 
                        className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 mr-2"
                        onClick={() => handleViewCallDetail(report.callId)}
                      >
                        <Phone className="h-4 w-4" /> View Call
                      </button>
                      <button 
                        className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        <Download className="h-4 w-4" /> Download
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
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
