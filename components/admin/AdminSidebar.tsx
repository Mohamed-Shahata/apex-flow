"use client";

import { useState } from "react";
import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";
import MessageNotifier from "@/components/admin/MessageNotifier";

export default function AdminSidebar({ unreadCount }: { unreadCount: number }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
        aria-expanded={open}
        className="admin-sidebar-toggle"
      >
        {open ? "✕" : "☰"}
      </button>

      <aside className={`admin-sidebar${open ? "" : " is-closed"}`}>
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
            <MessageNotifier initialCount={unreadCount} />
          </Link>
        </nav>
        <LogoutButton />
      </aside>
    </>
  );
}
