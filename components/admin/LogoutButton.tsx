"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton({
  iconOnly = false,
}: {
  iconOnly?: boolean;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function confirmLogout() {
    setLoading(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        title="Log out"
        className={
          iconOnly
            ? "mt-auto flex justify-center text-slate-400 hover:text-red-400"
            : "mt-auto text-left text-sm text-slate-400 hover:text-red-400"
        }
      >
        {iconOnly ? "⎋" : "Log out"}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => !loading && setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#0f1420] p-6"
          >
            <h2 className="text-lg font-bold text-foreground">Log out?</h2>
            <p className="mt-2 text-sm text-slate-400">
              You&apos;ll need to sign in again to access the admin panel.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                disabled={loading}
                className="rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-white/5 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                disabled={loading}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-50"
              >
                {loading ? "Logging out..." : "Log out"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
