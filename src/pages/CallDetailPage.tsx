
import CallDetails from "@/components/dashboard/CallDetails";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useParams } from "react-router-dom";

const CallDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <DashboardLayout>
      <CallDetails callId={id || ""} />
    </DashboardLayout>
  );
};

export default CallDetailPage;
