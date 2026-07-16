"use client";

import { useRef, useState } from "react";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

async function uploadToCloudinary(
  file: File,
  resourceType: "image" | "video",
): Promise<string> {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error(
      "Cloudinary env vars missing: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME / NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET",
    );
  }
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`,
    { method: "POST", body: formData },
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || "Cloudinary upload failed");
  }

  const data = await res.json();
  return data.secure_url as string;
}

/** Single image uploader (e.g. hero image). Stores URL in a hidden input named `name`. */
export function SingleImageUploader({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue?: string | null;
}) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const secureUrl = await uploadToCloudinary(file, "image");
      setUrl(secureUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="uploader">
      <label className="uploader-label">{label}</label>
      <input type="hidden" name={name} value={url} />
      {url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt={label} className="uploader-preview" />
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e.target.files?.[0])}
        disabled={loading}
      />
      {loading && <p className="uploader-status">جارٍ الرفع...</p>}
      {error && <p className="uploader-error">{error}</p>}
      {url && (
        <button
          type="button"
          className="uploader-remove"
          onClick={() => {
            setUrl("");
            if (inputRef.current) inputRef.current.value = "";
          }}
        >
          إزالة الصورة
        </button>
      )}
    </div>
  );
}

/** Multi image uploader (project gallery). Stores newline-separated URLs in a hidden textarea named `name`. */
export function MultiImageUploader({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue?: string[];
}) {
  const [urls, setUrls] = useState<string[]>(defaultValue ?? []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setLoading(true);
    setError(null);
    try {
      const uploaded = await Promise.all(
        Array.from(files).map((f) => uploadToCloudinary(f, "image")),
      );
      setUrls((prev) => [...prev, ...uploaded]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  function removeAt(index: number) {
    setUrls((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="uploader">
      <label className="uploader-label">{label}</label>
      <textarea name={name} value={urls.join("\n")} readOnly hidden />
      <div className="uploader-grid">
        {urls.map((u, i) => (
          <div key={u + i} className="uploader-thumb">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={u} alt={`${label} ${i + 1}`} />
            <button type="button" onClick={() => removeAt(i)}>
              ×
            </button>
          </div>
        ))}
      </div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
        disabled={loading}
      />
      {loading && <p className="uploader-status">جارٍ الرفع...</p>}
      {error && <p className="uploader-error">{error}</p>}
    </div>
  );
}

/** Single video uploader (project demo video). */
export function VideoUploader({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue?: string | null;
}) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const secureUrl = await uploadToCloudinary(file, "video");
      setUrl(secureUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="uploader">
      <label className="uploader-label">{label}</label>
      <input type="hidden" name={name} value={url} />
      {url && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video src={url} controls className="uploader-preview-video" />
      )}
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        onChange={(e) => handleFile(e.target.files?.[0])}
        disabled={loading}
      />
      {loading && <p className="uploader-status">جارٍ رفع الفيديو...</p>}
      {error && <p className="uploader-error">{error}</p>}
      {url && (
        <button
          type="button"
          className="uploader-remove"
          onClick={() => {
            setUrl("");
            if (inputRef.current) inputRef.current.value = "";
          }}
        >
          إزالة الفيديو
        </button>
      )}
    </div>
  );
}
