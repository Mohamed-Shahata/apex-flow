type Testimonial = { quote: string; name: string; role: string; order: number };

export default function TestimonialForm({
  action,
  testimonial,
}: {
  action: (formData: FormData) => void;
  testimonial?: Testimonial;
}) {
  return (
    <form action={action} className="admin-form">
      <label>
        Quote
        <textarea name="quote" defaultValue={testimonial?.quote} required />
      </label>
      <label>
        Name
        <input name="name" defaultValue={testimonial?.name} required />
      </label>
      <label>
        Role / Company
        <input name="role" defaultValue={testimonial?.role} required />
      </label>
      <label>
        Order
        <input type="number" name="order" defaultValue={testimonial?.order ?? 0} />
      </label>
      <button type="submit" className="admin-btn">
        Save
      </button>
    </form>
  );
}
