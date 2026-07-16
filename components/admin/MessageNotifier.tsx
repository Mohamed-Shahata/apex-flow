"use client";

import { useEffect, useRef, useState } from "react";

export default function MessageNotifier({
  initialCount,
}: {
  initialCount: number;
}) {
  const [count, setCount] = useState(initialCount);
  const [toast, setToast] = useState(false);
  const lastSeen = useRef(initialCount);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/admin/messages/unread-count");
        if (!res.ok) return;
        const data = await res.json();
        if (data.count > lastSeen.current) {
          setToast(true);
          setTimeout(() => setToast(false), 5000);
        }
        lastSeen.current = data.count;
        setCount(data.count);
      } catch {
        // ignore transient network errors
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {count > 0 && (
        <span className="inline-flex min-w-[18px] h-[18px] items-center justify-center rounded-full bg-cyan-400 px-1.5 text-[11px] font-bold text-[#05070d]">
          {count}
        </span>
      )}
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-[200] rounded-xl border border-white/10 bg-[#0f1420] px-5 py-3 text-sm text-white shadow-2xl"
        >
          You have new contact messages
        </div>
      )}
    </>
  );
}
