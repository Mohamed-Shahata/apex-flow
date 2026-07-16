import ServiceForm from "@/components/admin/ServiceForm";
import { createService } from "@/lib/actions/services";

export default function NewServicePage() {
  return (
    <div className="admin-page">
      <h1>New Service</h1>
      <ServiceForm action={createService} />
    </div>
  );
}
