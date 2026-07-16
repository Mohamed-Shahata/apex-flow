import { notFound } from "next/navigation";
import ProjectForm from "@/components/admin/ProjectForm";
import { getProjectById, updateProject } from "@/lib/actions/projects";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) notFound();

  const action = updateProject.bind(null, id);

  return (
    <div className="admin-page">
      <h1>Edit Project</h1>
      <ProjectForm action={action} project={project} />
    </div>
  );
}
