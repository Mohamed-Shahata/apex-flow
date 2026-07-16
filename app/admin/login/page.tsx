"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Email or password is incorrect.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
      >
        <h1 className="mb-1 text-xl font-bold text-foreground">Admin Login</h1>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm text-slate-400">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            required
            className="rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-foreground outline-none focus:border-blue-500/50"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm text-slate-400">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-foreground outline-none focus:border-blue-500/50"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Checking..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
