"use client";

import { useActionState, useState } from "react";
import { submitBooking } from "@/lib/actions/bookings";

const initialState = { ok: false, error: undefined as string | undefined };

export default function BookingWidget() {
  const [open, setOpen] = useState(false);
  const [state, formAction, pending] = useActionState(
    submitBooking,
    initialState,
  );

  return (
    <>
      <button
        type="button"
        className="btn btn-primary contact-cv mx-auto"
        onClick={() => setOpen(true)}
      >
        Book a call
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => !pending && setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0f1420] p-6"
            dir="rtl"
          >
            {state.ok ? (
              <>
                <h2 className="text-lg font-bold text-foreground">
                  تم الحجز بنجاح
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  هتوصلك رسالة تأكيد على الإيميل قريب.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-lg bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
                >
                  إغلاق
                </button>
              </>
            ) : (
              <form action={formAction} className="flex flex-col gap-4">
                <h2 className="text-lg font-bold text-foreground text-right">
                  احجز مكالمة
                </h2>

                <label className="text-right text-sm text-slate-300">
                  الاسم
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-right text-sm"
                  />
                </label>

                <label className="text-right text-sm text-slate-300">
                  الإيميل
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-right text-sm"
                  />
                </label>

                <div className="flex gap-3">
                  <label className="flex-1 text-right text-sm text-slate-300">
                    التاريخ
                    <input
                      type="date"
                      name="date"
                      required
                      className="mt-1 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-right text-sm"
                    />
                  </label>
                  <label className="flex-1 text-right text-sm text-slate-300">
                    الوقت
                    <input
                      type="time"
                      name="time"
                      required
                      className="mt-1 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-right text-sm"
                    />
                  </label>
                </div>

                <label className="text-right text-sm text-slate-300">
                  ملاحظات (اختياري)
                  <textarea
                    name="notes"
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-right text-sm"
                  />
                </label>

                {state.error && (
                  <p className="text-right text-sm text-red-400">
                    {state.error}
                  </p>
                )}

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    disabled={pending}
                    className="rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-white/5 disabled:opacity-50"
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    disabled={pending}
                    className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-[#05070d] hover:bg-cyan-400 disabled:opacity-50"
                  >
                    {pending ? "جاري الحجز..." : "تأكيد الحجز"}
                  </button>

                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
