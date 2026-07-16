type Project = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  stack: string[];
  role: string;
  result: string;
  images: string[];
  featured: boolean;
  order: number;
};

export default function ProjectForm({
  action,
  project,
}: {
  action: (formData: FormData) => void;
  project?: Project;
}) {
  return (
    <form action={action} className="admin-form">
      <label>
        Slug
        <input name="slug" defaultValue={project?.slug} required />
      </label>
      <label>
        Title
        <input name="title" defaultValue={project?.title} required />
      </label>
      <label>
        Summary
        <textarea name="summary" defaultValue={project?.summary} required />
      </label>
      <label>
        Overview
        <textarea name="overview" defaultValue={project?.overview} required />
      </label>
      <label>
        Problem
        <textarea name="problem" defaultValue={project?.problem} required />
      </label>
      <label>
        Solution
        <textarea name="solution" defaultValue={project?.solution} required />
      </label>
      <label>
        Architecture
        <textarea
          name="architecture"
          defaultValue={project?.architecture}
          required
        />
      </label>
      <label>
        Features (one per line)
        <textarea
          name="features"
          defaultValue={project?.features?.join("\n")}
          rows={5}
        />
      </label>
      <label>
        Stack (one per line)
        <textarea
          name="stack"
          defaultValue={project?.stack?.join("\n")}
          rows={4}
        />
      </label>
      <label>
        Role
        <textarea name="role" defaultValue={project?.role} required />
      </label>
      <label>
        Result
        <textarea name="result" defaultValue={project?.result} required />
      </label>
      <label>
        Images (one URL per line)
        <textarea
          name="images"
          defaultValue={project?.images?.join("\n")}
          rows={4}
          placeholder="https://..."
        />
      </label>
      <label>
        Order
        <input type="number" name="order" defaultValue={project?.order ?? 0} />
      </label>
      <label className="admin-checkbox">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={project?.featured ?? true}
        />
        Featured
      </label>

      <button type="submit" className="admin-btn">
        Save
      </button>
    </form>
  );
}
