"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/components/admin/LogoutButton";
import MessageNotifier from "@/components/admin/MessageNotifier";

const NAV_LINKS = [
  { href: "/admin", label: "Overview", exact: true },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/testimonials", label: "Testimonials" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/faq", label: "FAQ" },
  { href: "/admin/messages", label: "Messages" },
];

export default function AdminSidebar({ unreadCount }: { unreadCount: number }) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
        aria-expanded={open}
        className="fixed top-4 left-4 z-50 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#0f1420] text-slate-300 hover:text-white hover:border-white/20 transition-colors"
      >
        {open ? "✕" : "☰"}
      </button>

      <aside
        className={`shrink-0 border-r border-white/10 bg-[#0b0f18] transition-[width,opacity] duration-300 overflow-hidden ${
          open ? "w-64 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div className="flex h-full w-64 flex-col gap-8 p-6">
          <span className="text-base font-bold tracking-tight text-white pl-1">
            Apex Flow
            <span className="block text-xs font-normal text-slate-500 mt-0.5">
              Admin Panel
            </span>
          </span>

          <nav className="flex flex-1 flex-col gap-1 text-sm">
            {NAV_LINKS.map((link) => {
              const isActive = link.exact
                ? pathname === link.href
                : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors ${
                    isActive
                      ? "bg-white/10 text-white font-medium"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.href === "/admin/messages" && (
                    <MessageNotifier initialCount={unreadCount} />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/10 pt-4">
            <LogoutButton />
          </div>
        </div>
      </aside>
    </>
  );
}
