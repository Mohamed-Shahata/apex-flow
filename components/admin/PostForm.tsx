type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  published: boolean;
};

export default function PostForm({
  action,
  post,
}: {
  action: (formData: FormData) => void;
  post?: Post;
}) {
  return (
    <form action={action} className="admin-form">
      <label>
        Slug
        <input name="slug" defaultValue={post?.slug} required />
      </label>
      <label>
        Title
        <input name="title" defaultValue={post?.title} required />
      </label>
      <label>
        Excerpt
        <textarea name="excerpt" defaultValue={post?.excerpt} required />
      </label>
      <label>
        Cover Image URL
        <input
          name="coverImage"
          defaultValue={post?.coverImage ?? ""}
          placeholder="https://..."
        />
      </label>
      <label>
        Content (Markdown supported)
        <textarea
          name="content"
          defaultValue={post?.content}
          rows={14}
          required
        />
      </label>
      <label className="admin-checkbox">
        <input
          type="checkbox"
          name="published"
          defaultChecked={post?.published ?? false}
        />
        Published
      </label>

      <button type="submit" className="admin-btn">
        Save
      </button>
    </form>
  );
}