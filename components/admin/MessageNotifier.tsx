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
      {count > 0 && <span className="admin-nav-badge">{count}</span>}
      {toast && (
        <div className="admin-toast" role="status">
          You have new contact messages
        </div>
      )}
    </>
  );
}
