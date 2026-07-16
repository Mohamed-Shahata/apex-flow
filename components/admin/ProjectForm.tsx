"use client";

import { useState } from "react";
import {
  SingleImageUploader,
  MultiImageUploader,
  VideoUploader,
} from "./CloudinaryUploader";

type Project = {
  slug: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  overviewEn: string;
  overviewAr: string;
  problemEn: string;
  problemAr: string;
  solutionEn: string;
  solutionAr: string;
  architectureEn: string;
  architectureAr: string;
  featuresEn: string[];
  featuresAr: string[];
  stack: string[];
  roleEn: string;
  roleAr: string;
  resultEn: string;
  resultAr: string;
  heroImage: string | null;
  images: string[];
  videoUrl: string | null;
  featured: boolean;
  order: number;
};

const TABS = [
  { id: "basic", label: "Basic" },
  { id: "en", label: "English" },
  { id: "ar", label: "عربي" },
  { id: "media", label: "Media" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function ProjectForm({
  action,
  project,
}: {
  action: (formData: FormData) => void;
  project?: Project;
}) {
  const [tab, setTab] = useState<TabId>("basic");

  return (
    <form action={action} className="project-form">
      <div className="project-form-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={`project-form-tab${tab === t.id ? " active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ---------- Basic ---------- */}
      <section className="project-form-panel glass" hidden={tab !== "basic"}>
        <label>
          Slug
          <input name="slug" defaultValue={project?.slug} required />
        </label>
        <label>
          Tech Stack (one per line)
          <textarea
            name="stack"
            defaultValue={project?.stack?.join("\n")}
            rows={4}
          />
        </label>
        <div className="project-form-row">
          <label>
            Order
            <input
              type="number"
              name="order"
              defaultValue={project?.order ?? 0}
            />
          </label>
          <label className="admin-checkbox">
            <input
              type="checkbox"
              name="featured"
              defaultChecked={project?.featured ?? true}
            />
            Featured
          </label>
        </div>
      </section>

      {/* ---------- English ---------- */}
      <section className="project-form-panel glass" hidden={tab !== "en"}>
        <label>
          Title
          <input name="titleEn" defaultValue={project?.titleEn} required />
        </label>
        <label>
          Summary
          <textarea
            name="summaryEn"
            defaultValue={project?.summaryEn}
            required
          />
        </label>
        <label>
          Overview
          <textarea
            name="overviewEn"
            defaultValue={project?.overviewEn}
            required
          />
        </label>
        <label>
          Problem
          <textarea
            name="problemEn"
            defaultValue={project?.problemEn}
            required
          />
        </label>
        <label>
          Solution
          <textarea
            name="solutionEn"
            defaultValue={project?.solutionEn}
            required
          />
        </label>
        <label>
          Architecture
          <textarea
            name="architectureEn"
            defaultValue={project?.architectureEn}
            required
          />
        </label>
        <label>
          Features (one per line)
          <textarea
            name="featuresEn"
            defaultValue={project?.featuresEn?.join("\n")}
            rows={5}
          />
        </label>
        <label>
          Role
          <textarea name="roleEn" defaultValue={project?.roleEn} required />
        </label>
        <label>
          Result
          <textarea name="resultEn" defaultValue={project?.resultEn} required />
        </label>
      </section>

      {/* ---------- Arabic ---------- */}
      <section
        className="project-form-panel glass"
        hidden={tab !== "ar"}
        dir="rtl"
      >
        <label>
          العنوان
          <input name="titleAr" defaultValue={project?.titleAr} required />
        </label>
        <label>
          الملخص
          <textarea
            name="summaryAr"
            defaultValue={project?.summaryAr}
            required
          />
        </label>
        <label>
          نظرة عامة
          <textarea
            name="overviewAr"
            defaultValue={project?.overviewAr}
            required
          />
        </label>
        <label>
          المشكلة
          <textarea
            name="problemAr"
            defaultValue={project?.problemAr}
            required
          />
        </label>
        <label>
          الحل
          <textarea
            name="solutionAr"
            defaultValue={project?.solutionAr}
            required
          />
        </label>
        <label>
          المعمارية
          <textarea
            name="architectureAr"
            defaultValue={project?.architectureAr}
            required
          />
        </label>
        <label>
          المزايا (سطر لكل ميزة)
          <textarea
            name="featuresAr"
            defaultValue={project?.featuresAr?.join("\n")}
            rows={5}
          />
        </label>
        <label>
          الدور
          <textarea name="roleAr" defaultValue={project?.roleAr} required />
        </label>
        <label>
          النتيجة
          <textarea name="resultAr" defaultValue={project?.resultAr} required />
        </label>
      </section>

      {/* ---------- Media ---------- */}
      <section className="project-form-panel glass" hidden={tab !== "media"}>
        <SingleImageUploader
          name="heroImage"
          label="Hero Image"
          defaultValue={project?.heroImage}
        />
        <MultiImageUploader
          name="images"
          label="Gallery Images"
          defaultValue={project?.images}
        />
        <VideoUploader
          name="videoUrl"
          label="Project Video (optional)"
          defaultValue={project?.videoUrl}
        />
      </section>

      <div className="project-form-actions">
        <button type="submit" className="admin-btn">
          Save Project
        </button>
      </div>
    </form>
  );
}
