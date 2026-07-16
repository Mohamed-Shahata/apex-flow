import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";
import MessageNotifier from "@/components/admin/MessageNotifier";
import { getUnreadMessageCount } from "@/lib/actions/analytics";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const unread = await getUnreadMessageCount();

  return (
    <div className="flex min-h-svh">
      <aside className="flex w-[220px] shrink-0 flex-col gap-8 border-r border-white/10 p-6">
        <span className="text-sm font-bold text-foreground">
          Apex Flow — Admin
        </span>
        <nav className="flex flex-col gap-3 text-sm text-slate-400">
          <Link href="/admin" className="hover:text-foreground">
            Overview
          </Link>
          <Link href="/admin/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link href="/admin/blog" className="hover:text-foreground">
            Blog
          </Link>
          <Link href="/admin/testimonials" className="hover:text-foreground">
            Testimonials
          </Link>
          <Link href="/admin/services" className="hover:text-foreground">
            Services
          </Link>
          <Link href="/admin/faq" className="hover:text-foreground">
            FAQ
          </Link>
          <Link
            href="/admin/messages"
            className="hover:text-foreground flex items-center gap-2"
          >
            Messages
            <MessageNotifier initialCount={unread} />
          </Link>
        </nav>
        <LogoutButton />
      </aside>
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
