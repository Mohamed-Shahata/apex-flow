import FaqForm from "@/components/admin/FaqForm";
import { createFaq } from "@/lib/actions/faq";

export default function NewFaqPage() {
  return (
    <div className="admin-page">
      <h1>New FAQ</h1>
      <FaqForm action={createFaq} />
    </div>
  );
}
