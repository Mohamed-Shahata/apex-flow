import TestimonialForm from "@/components/admin/TestimonialForm";
import { createTestimonial } from "@/lib/actions/testimonials";

export default function NewTestimonialPage() {
  return (
    <div className="admin-page">
      <h1>New Testimonial</h1>
      <TestimonialForm action={createTestimonial} />
    </div>
  );
}
