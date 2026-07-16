import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md px-8 py-14 max-w-lg w-full">
        <span className="text-sm font-semibold uppercase tracking-widest text-[#8b96a8]">
          Error 404
        </span>

        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
          404
        </h1>

        <p className="text-base text-[#8b96a8] max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <Link
          href="/"
          className="mt-2 inline-block text-sm font-semibold text-[#ededed] px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}