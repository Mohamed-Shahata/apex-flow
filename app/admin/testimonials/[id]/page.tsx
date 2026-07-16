import { notFound } from "next/navigation";
import TestimonialForm from "@/components/admin/TestimonialForm";
import { getTestimonialById, updateTestimonial } from "@/lib/actions/testimonials";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonial = await getTestimonialById(id);
  if (!testimonial) notFound();

  const action = updateTestimonial.bind(null, id);

  return (
    <div className="admin-page">
      <h1>Edit Testimonial</h1>
      <TestimonialForm action={action} testimonial={testimonial} />
    </div>
  );
}
