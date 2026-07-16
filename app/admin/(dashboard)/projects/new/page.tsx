import ProjectForm from "@/components/admin/ProjectForm";
import { createProject } from "@/lib/actions/projects";

export default function NewProjectPage() {
  return (
    <div className="admin-page">
      <h1>New Project</h1>
      <ProjectForm action={createProject} />
    </div>
  );
}
