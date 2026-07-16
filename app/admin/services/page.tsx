import Link from "next/link";
import { getServices, deleteService } from "@/lib/actions/services";

export default async function AdminServicesPage() {
  const services = await getServices();

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h1>Services</h1>
        <Link href="/admin/services/new" className="admin-btn">
          + New Service
        </Link>
      </div>

      {services.length === 0 ? (
        <p>No services yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Title</th>
              <th>Items</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id}>
                <td>{s.order}</td>
                <td>{s.title}</td>
                <td>{s.items.join(", ")}</td>
                <td className="admin-table-actions">
                  <Link href={`/admin/services/${s.id}`}>Edit</Link>
                  <form
                    action={async () => {
                      "use server";
                      await deleteService(s.id);
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
