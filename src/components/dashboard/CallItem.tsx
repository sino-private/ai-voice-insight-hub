
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export interface CallItemData {
  id: string;
  customer: {
    name: string;
    phone: string;
  };
  date: string;
  time: string;
  duration: string;
  status: "completed" | "missed" | "ongoing";
  topic?: string;
}

interface CallItemProps {
  call: CallItemData;
  active?: boolean;
}

const CallItem = ({ call, active = false }: CallItemProps) => {
  const navigate = useNavigate();
  
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    missed: "bg-red-100 text-red-800",
    ongoing: "bg-blue-100 text-blue-800 animate-pulse-slow"
  };
  
  const handleViewDetails = () => {
    navigate(`/call/${call.id}`);
  };
  
  return (
    <div 
      className={cn(
        "border rounded-lg p-4 transition-all",
        active ? "border-brand-blue shadow-md" : "border-gray-200 hover:border-gray-300"
      )}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
            <Phone className="h-5 w-5 text-gray-600" />
          </div>
          
          <div>
            <h3 className="font-medium">{call.customer.name}</h3>
            <p className="text-sm text-gray-500">{call.customer.phone}</p>
          </div>
        </div>
        
        <div>
          <span className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            statusColors[call.status]
          )}>
            {call.status.charAt(0).toUpperCase() + call.status.slice(1)}
          </span>
        </div>
      </div>
      
      {call.topic && (
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          Topic: {call.topic}
        </p>
      )}
      
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          <span>{call.date}</span> • <span>{call.time}</span> • <span>{call.duration}</span>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default CallItem;
