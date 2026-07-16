"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/components/admin/LogoutButton";
import MessageNotifier from "@/components/admin/MessageNotifier";

function Icon({ path }: { path: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
    >
      <path d={path} />
    </svg>
  );
}

const ICONS = {
  overview: "M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z",
  projects: "M3 7l2-3h6l2 3h8v13H3V7Z",
  blog: "M4 4h16v16H4V4Zm4 4h8M8 12h8M8 16h5",
  testimonials:
    "M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10Z",
  services: "M12 2 2 7l10 5 10-5-10-5Zm-10 10 10 5 10-5M2 17l10 5 10-5",
  faq: "M12 17h.01M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2 2-2.5 3.5M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  messages: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z",
};

const NAV_LINKS = [
  { href: "/admin", label: "Overview", exact: true, icon: ICONS.overview },
  { href: "/admin/projects", label: "Projects", icon: ICONS.projects },
  { href: "/admin/blog", label: "Blog", icon: ICONS.blog },
  {
    href: "/admin/testimonials",
    label: "Testimonials",
    icon: ICONS.testimonials,
  },
  { href: "/admin/services", label: "Services", icon: ICONS.services },
  { href: "/admin/faq", label: "FAQ", icon: ICONS.faq },
  { href: "/admin/messages", label: "Messages", icon: ICONS.messages },
];

export default function AdminSidebar({ unreadCount }: { unreadCount: number }) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <aside
      className={`shrink-0 border-r border-white/10 bg-[#0b0f18] transition-[width] duration-300 ${
        open ? "w-64" : "w-[76px]"
      }`}
    >
      <div className="flex h-full flex-col gap-6 p-4">
        <div
          className={`flex items-center ${open ? "justify-between" : "justify-center"} gap-2`}
        >
          {open && (
            <span className="text-base font-bold tracking-tight text-white pl-1 truncate">
              Apex Flow
              <span className="block text-xs font-normal text-slate-500 mt-0.5">
                Admin Panel
              </span>
            </span>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
            aria-expanded={open}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Icon path={open ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 text-sm">
          {NAV_LINKS.map((link) => {
            const isActive = link.exact
              ? pathname === link.href
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                title={!open ? link.label : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                  open ? "" : "justify-center"
                } ${
                  isActive
                    ? "bg-white/10 text-white font-medium"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon path={link.icon} />
                {open && (
                  <span className="flex flex-1 items-center justify-between truncate">
                    {link.label}
                    {link.href === "/admin/messages" && (
                      <MessageNotifier initialCount={unreadCount} />
                    )}
                  </span>
                )}
                {!open &&
                  link.href === "/admin/messages" &&
                  unreadCount > 0 && (
                    <span className="absolute mt-[-18px] ml-4 h-2 w-2 rounded-full bg-cyan-400" />
                  )}
              </Link>
            );
          })}
        </nav>

        <div
          className={`border-t border-white/10 pt-4 ${open ? "" : "flex justify-center"}`}
        >
          <LogoutButton iconOnly={!open} />
        </div>
      </div>
    </aside>
  );
}
