
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Download, FileText, Play, Video } from "lucide-react";
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
      name: "John Smith",
      phone: "+1 (555) 123-4567",
      company: "Acme Corp",
      email: "john@acmecorp.com"
    },
    date: "May 10, 2025",
    time: "10:30 AM",
    duration: "4:25",
    status: "completed",
    topic: "Product inquiry about enterprise plan",
    transcript: [
      { speaker: "AI", text: "Hello, thank you for calling AI Converse. How can I assist you today?", time: "0:00" },
      { speaker: "Customer", text: "Hi, I'm interested in learning more about your enterprise plan.", time: "0:05" },
      { speaker: "AI", text: "I'd be happy to tell you about our enterprise plan. It includes unlimited calls, priority support, and custom AI training.", time: "0:12" },
      { speaker: "Customer", text: "That sounds good. What about pricing?", time: "0:24" },
      { speaker: "AI", text: "Our enterprise plan starts at $999 per month and scales based on usage. Would you like me to have one of our account executives reach out to discuss your specific needs?", time: "0:30" },
      { speaker: "Customer", text: "Yes, that would be helpful. My email is john@acmecorp.com.", time: "0:45" },
      { speaker: "AI", text: "Perfect! I've noted your email. An account executive will reach out within the next 24 hours. Is there anything else I can help you with today?", time: "0:52" },
      { speaker: "Customer", text: "No, that's all for now. Thank you.", time: "1:05" },
      { speaker: "AI", text: "Thank you for your interest in AI Converse. Have a great day!", time: "1:10" }
    ],
    summary: "John Smith from Acme Corp inquired about the enterprise plan pricing. He requested more information and provided his email (john@acmecorp.com) for follow-up. He's interested in learning about the unlimited calls, priority support, and custom AI training features. An account executive should contact him within 24 hours.",
    report: {
      sentiment: "Positive",
      intent: "Information gathering",
      nextActions: [
        "Account executive to follow up within 24 hours",
        "Prepare enterprise plan pricing details specific to Acme Corp's size",
        "Add customer to CRM for tracking"
      ],
      keyInsights: [
        "Customer is in research phase",
        "Price sensitivity was indicated",
        "Customer represents Acme Corp, a potential enterprise client",
        "Customer preferred email contact over immediate phone call"
      ],
      recommendedFollowup: "Send a personalized email with enterprise plan details before the account executive call to give the customer time to review."
    }
  };

  const handleDownload = () => {
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
                <Button variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90">
                  <Play className="h-4 w-4 mr-1" />
                  Play
                </Button>
              </div>
            </div>

            <Tabs defaultValue="transcript">
              <TabsList className="mb-4">
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="report">AI Report</TabsTrigger>
              </TabsList>
              
              <TabsContent value="transcript" className="space-y-4">
                {callData.transcript.map((item, index) => (
                  <div key={index} className={`flex ${item.speaker === 'AI' ? 'justify-start' : 'justify-end'}`}>
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        item.speaker === 'AI' 
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-brand-blue text-white'
                      }`}
                    >
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium">{item.speaker}</span>
                        <span>{item.time}</span>
                      </div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
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
