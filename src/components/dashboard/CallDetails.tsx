
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Download, FileText, Play, FileDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CallDetailsProps {
  callId: string;
}

const CallDetails = ({ callId }: CallDetailsProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const callData = {
    id: "call-001",
    customer: {
      name: "Ahmed Mahmoud",
      phone: "+20 (102) 123-4567",
      company: "Cairo Financial",
      email: "ahmed@cairofinancial.com"
    },
    date: "May 10, 2025",
    time: "10:30 AM",
    duration: "4:25",
    status: "completed",
    topic: "Inquiry about Margin app",
    transcript: [
      { speaker: "AI", text: "Hello, thank you for calling Sonar. How can I assist you today?", time: "0:00" },
      { speaker: "Customer", text: "Hi, I was wondering if you could tell me what Margin is? I've heard about it but I'm not sure what it does.", time: "0:05" },
      { speaker: "AI", text: "I'd be happy to explain. Margin is a smart app designed to help users track their spending, stay on budget, and get clear insights into their financial habits. It connects securely to your bank accounts and automatically categorizes your transactions.", time: "0:12" },
      { speaker: "Customer", text: "That sounds useful. How do I add a new expense in the app?", time: "0:24" },
      { speaker: "AI", text: "Adding a new expense in Margin is very simple. First, open the app and tap on the '+' button at the bottom of the screen. Then, enter the amount, select a category, and add any notes if needed. You can also take a photo of your receipt for your records. Finally, tap 'Save' and your expense will be added to your budget tracker.", time: "0:30" },
      { speaker: "Customer", text: "Great, and how do I view my dashboard to see my spending?", time: "0:45" },
      { speaker: "AI", text: "To view your dashboard, just open the app and you'll see your main dashboard on the home screen. It shows your monthly overview with spending by category, upcoming bills, and savings goals. For more detailed insights, tap on the 'Reports' tab at the bottom of the screen, where you can view spending trends and compare your expenses across different time periods.", time: "0:52" },
      { speaker: "Customer", text: "That's very helpful, thank you.", time: "1:05" },
      { speaker: "AI", text: "You're welcome! Is there anything else I can help you with regarding Margin or any other financial tools?", time: "1:10" },
      { speaker: "Customer", text: "No, that's all I needed for now. Thank you for explaining.", time: "1:15" },
      { speaker: "AI", text: "You're welcome! Feel free to call back if you have any more questions about Margin. Have a great day!", time: "1:20" }
    ],
    summary: "Ahmed Mahmoud called to inquire about what Margin is. The agent explained that Margin is a smart financial app designed to help users track spending, stay on budget, and gain insights into financial habits. The customer asked about adding new expenses and viewing the dashboard. The agent provided step-by-step guidance on both processes, explaining how to use the '+' button for expenses and how to access the dashboard and reports for spending insights.",
    report: {
      sentiment: "Positive",
      intent: "Information gathering",
      nextActions: [
        "Send follow-up email with Margin quick start guide",
        "Check in after one week to see if customer has started using Margin",
        "Offer personal onboarding session if needed"
      ],
      keyInsights: [
        "Customer is in research phase for financial tools",
        "Customer values ease of use for daily tasks",
        "Customer is interested in tracking and visualization features",
        "Customer may need additional support during onboarding"
      ],
      recommendedFollowup: "Send a follow-up email with links to video tutorials for adding expenses and using the dashboard in Margin, along with an invitation to a free personal onboarding session if they'd like more guidance."
    }
  };

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your call transcript is being downloaded",
    });
  };

  const handleDownloadRecording = () => {
    toast({
      title: "Download started",
      description: "Your call recording is being downloaded",
    });
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" onClick={handleBack} className="mr-2">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Call Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-semibold">{callData.customer.name}</h2>
                <p className="text-gray-500">{callData.customer.company}</p>
                <div className="flex space-x-4 mt-1 text-sm text-gray-500">
                  <span>{callData.date}</span>
                  <span>{callData.time}</span>
                  <span>{callData.duration}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={handleDownloadRecording}>
                  <Download className="h-4 w-4 mr-1" />
                  Recording
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownload}>
                  <FileDown className="h-4 w-4 mr-1" />
                  Transcript
                </Button>
                <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90">
                  <Play className="h-4 w-4 mr-1" />
                  Play
                </Button>
              </div>
            </div>

            <Tabs defaultValue="summary">
              <TabsList className="mb-4">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="report">AI Report</TabsTrigger>
              </TabsList>
              
              <TabsContent value="summary">
                <div className="bg-gray-50 p-4 rounded-md border">
                  <h3 className="font-medium mb-2 flex items-center text-gray-700">
                    <FileText className="h-4 w-4 mr-2" />
                    Call Summary
                  </h3>
                  <p className="text-gray-700">{callData.summary}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="report">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md border">
                      <h3 className="font-medium mb-2 text-gray-700">Sentiment</h3>
                      <p className="text-green-600 font-medium">{callData.report.sentiment}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md border">
                      <h3 className="font-medium mb-2 text-gray-700">Intent</h3>
                      <p className="font-medium">{callData.report.intent}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border">
                    <h3 className="font-medium mb-2 text-gray-700">Key Insights</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {callData.report.keyInsights.map((insight, index) => (
                        <li key={index} className="text-gray-700">{insight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border">
                    <h3 className="font-medium mb-2 text-gray-700">Next Actions</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {callData.report.nextActions.map((action, index) => (
                        <li key={index} className="text-gray-700">{action}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border">
                    <h3 className="font-medium mb-2 text-gray-700">Recommended Follow-up</h3>
                    <p className="text-gray-700">{callData.report.recommendedFollowup}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
        
        <div>
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Customer Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{callData.customer.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Company</p>
                <p className="font-medium">{callData.customer.company}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{callData.customer.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{callData.customer.email}</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-medium mb-4">Call Analytics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{callData.duration}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">AI Response Time</p>
                  <p className="font-medium">0.8s avg</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">Customer Talk Time</p>
                  <p className="font-medium">2:15</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">AI Talk Time</p>
                  <p className="font-medium">2:10</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CallDetails;
