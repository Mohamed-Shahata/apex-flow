import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <span className="admin-brand">Apex Flow — Admin</span>
        <nav className="admin-nav">
          <Link href="/admin">Overview</Link>
          <Link href="/admin/projects">Projects</Link>
          <Link href="/admin/testimonials">Testimonials</Link>
          <Link href="/admin/services">Services</Link>
          <Link href="/admin/faq">FAQ</Link>
          <Link href="/admin/messages">Messages</Link>
        </nav>
        <LogoutButton />
      </aside>
      <main className="admin-content">{children}</main>
    </div>
  );
}
