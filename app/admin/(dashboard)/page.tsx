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

      <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
        <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <span className="text-3xl font-bold text-white">{visits}</span>
          <span className="text-xs text-slate-500">Total Visits</span>
        </div>
        <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <span className="text-3xl font-bold text-white">{unread}</span>
          <span className="text-xs text-slate-500">New Messages</span>
        </div>
      </div>
    </div>
  );
}
