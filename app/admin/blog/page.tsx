import Link from "next/link";
import { getPosts, deletePost } from "@/lib/actions/posts";

export default async function AdminBlogPage() {
  const posts = await getPosts();

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h1>Blog</h1>
        <Link href="/admin/blog/new" className="admin-btn">
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Published</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>{p.slug}</td>
                <td>{p.published ? "Yes" : "No"}</td>
                <td>{p.publishedAt.toLocaleDateString()}</td>
                <td className="admin-table-actions">
                  <Link href={`/admin/blog/${p.id}`}>Edit</Link>
                  <form
                    action={async () => {
                      "use server";
                      await deletePost(p.id);
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