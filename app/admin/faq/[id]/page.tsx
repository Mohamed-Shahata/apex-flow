import { notFound } from "next/navigation";
import FaqForm from "@/components/admin/FaqForm";
import { getFaqById, updateFaq } from "@/lib/actions/faq";

export default async function EditFaqPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const faq = await getFaqById(id);
  if (!faq) notFound();

  const action = updateFaq.bind(null, id);

  return (
    <div className="admin-page">
      <h1>Edit FAQ</h1>
      <FaqForm action={action} faq={faq} />
    </div>
  );
}
