import { notFound } from "next/navigation";
import ServiceForm from "@/components/admin/ServiceForm";
import { getServiceById, updateService } from "@/lib/actions/services";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = await getServiceById(id);
  if (!service) notFound();

  const action = updateService.bind(null, id);

  return (
    <div className="admin-page">
      <h1>Edit Service</h1>
      <ServiceForm action={action} service={service} />
    </div>
  );
}
