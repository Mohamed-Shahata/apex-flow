"use client";

import { useEffect, useState } from "react";

const CALENDLY_URL = "https://calendly.com/your-handle";

export default function BookingWidget() {
  const [open, setOpen] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!open || scriptLoaded) return;
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );
    if (existing) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, [open, scriptLoaded]);

  return (
    <div className="booking-widget">
      <button
        type="button"
        className="btn btn-primary contact-cv"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Hide booking calendar" : "Book a call"}
      </button>

      {open && (
        <div
          className="calendly-inline-widget"
          data-url={CALENDLY_URL}
          style={{ minWidth: "280px", height: "700px", marginTop: "1.5rem" }}
        />
      )}
    </div>
  );
}
