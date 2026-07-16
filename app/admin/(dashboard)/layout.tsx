import AdminSidebar from "@/components/admin/AdminSidebar";
import { getUnreadMessageCount } from "@/lib/actions/analytics";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const unread = await getUnreadMessageCount();

  return (
    <div className="flex min-h-svh">
      <AdminSidebar unreadCount={unread} />
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
