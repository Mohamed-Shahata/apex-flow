import Link from "next/link";
import { getProjects, deleteProject } from "@/lib/actions/projects";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h1>Projects</h1>
        <Link href="/admin/projects/new" className="admin-btn">
          + New Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <p>No projects yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Featured</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td>{p.order}</td>
                <td>{p.title}</td>
                <td>{p.slug}</td>
                <td>{p.featured ? "Yes" : "No"}</td>
                <td className="admin-table-actions">
                  <Link href={`/admin/projects/${p.id}`}>Edit</Link>
                  <form
                    action={async () => {
                      "use server";
                      await deleteProject(p.id);
                    }}
                  >
                    <button type="submit" className="admin-btn-danger">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
