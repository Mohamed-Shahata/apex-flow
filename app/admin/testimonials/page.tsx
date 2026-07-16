import Link from "next/link";
import { getTestimonials, deleteTestimonial } from "@/lib/actions/testimonials";

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h1>Testimonials</h1>
        <Link href="/admin/testimonials/new" className="admin-btn">
          + New Testimonial
        </Link>
      </div>

      {testimonials.length === 0 ? (
        <p>No testimonials yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Name</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((t) => (
              <tr key={t.id}>
                <td>{t.order}</td>
                <td>{t.name}</td>
                <td>{t.role}</td>
                <td className="admin-table-actions">
                  <Link href={`/admin/testimonials/${t.id}`}>Edit</Link>
                  <form
                    action={async () => {
                      "use server";
                      await deleteTestimonial(t.id);
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
