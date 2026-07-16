import PostForm from "@/components/admin/PostForm";
import { createPost } from "@/lib/actions/posts";

export default function NewPostPage() {
  return (
    <div className="admin-page">
      <h1>New Post</h1>
      <PostForm action={createPost} />
    </div>
  );
}