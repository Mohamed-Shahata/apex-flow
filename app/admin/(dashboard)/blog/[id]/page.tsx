import { notFound } from "next/navigation";
import PostForm from "@/components/admin/PostForm";
import { getPostById, updatePost } from "@/lib/actions/posts";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) notFound();

  const action = updatePost.bind(null, id);

  return (
    <div className="admin-page">
      <h1>Edit Post</h1>
      <PostForm action={action} post={post} />
    </div>
  );
}