import { getVisitCount, getUnreadMessageCount } from "@/lib/actions/analytics";

export default async function AdminOverviewPage() {
  const [visits, unread] = await Promise.all([
    getVisitCount(),
    getUnreadMessageCount(),
  ]);

  return (
    <div className="admin-page">
      <h1>Overview</h1>
      <p>
        Manage projects, testimonials, services, FAQ, and contact messages from
        the sidebar. CRUD pages are added task by task.
      </p>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <span className="admin-stat-value">{visits}</span>
          <span className="admin-stat-label">Total Visits</span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-value">{unread}</span>
          <span className="admin-stat-label">New Messages</span>
        </div>
      </div>
    </div>
  );
}
