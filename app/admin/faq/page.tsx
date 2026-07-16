import Link from "next/link";
import { getFaqs, deleteFaq } from "@/lib/actions/faq";

export default async function AdminFaqPage() {
  const faqs = await getFaqs();

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h1>FAQ</h1>
        <Link href="/admin/faq/new" className="admin-btn">
          + New FAQ
        </Link>
      </div>

      {faqs.length === 0 ? (
        <p>No FAQs yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Question</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((f) => (
              <tr key={f.id}>
                <td>{f.order}</td>
                <td>{f.question}</td>
                <td className="admin-table-actions">
                  <Link href={`/admin/faq/${f.id}`}>Edit</Link>
                  <form
                    action={async () => {
                      "use server";
                      await deleteFaq(f.id);
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
