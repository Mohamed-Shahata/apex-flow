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

export default function ProjectForm({
  action,
  project,
}: {
  action: (formData: FormData) => void;
  project?: Project;
}) {
  return (
    <form action={action} className="admin-form">
      <label>
        Slug
        <input name="slug" defaultValue={project?.slug} required />
      </label>

      <h3>English</h3>
      <label>
        Title (EN)
        <input name="titleEn" defaultValue={project?.titleEn} required />
      </label>
      <label>
        Summary (EN)
        <textarea name="summaryEn" defaultValue={project?.summaryEn} required />
      </label>
      <label>
        Overview (EN)
        <textarea
          name="overviewEn"
          defaultValue={project?.overviewEn}
          required
        />
      </label>
      <label>
        Problem (EN)
        <textarea name="problemEn" defaultValue={project?.problemEn} required />
      </label>
      <label>
        Solution (EN)
        <textarea
          name="solutionEn"
          defaultValue={project?.solutionEn}
          required
        />
      </label>
      <label>
        Architecture (EN)
        <textarea
          name="architectureEn"
          defaultValue={project?.architectureEn}
          required
        />
      </label>
      <label>
        Features EN (one per line)
        <textarea
          name="featuresEn"
          defaultValue={project?.featuresEn?.join("\n")}
          rows={5}
        />
      </label>
      <label>
        Role (EN)
        <textarea name="roleEn" defaultValue={project?.roleEn} required />
      </label>
      <label>
        Result (EN)
        <textarea name="resultEn" defaultValue={project?.resultEn} required />
      </label>

      <h3>Arabic</h3>
      <label>
        العنوان (AR)
        <input
          name="titleAr"
          defaultValue={project?.titleAr}
          required
          dir="rtl"
        />
      </label>
      <label>
        الملخص (AR)
        <textarea
          name="summaryAr"
          defaultValue={project?.summaryAr}
          required
          dir="rtl"
        />
      </label>
      <label>
        نظرة عامة (AR)
        <textarea
          name="overviewAr"
          defaultValue={project?.overviewAr}
          required
          dir="rtl"
        />
      </label>
      <label>
        المشكلة (AR)
        <textarea
          name="problemAr"
          defaultValue={project?.problemAr}
          required
          dir="rtl"
        />
      </label>
      <label>
        الحل (AR)
        <textarea
          name="solutionAr"
          defaultValue={project?.solutionAr}
          required
          dir="rtl"
        />
      </label>
      <label>
        المعمارية (AR)
        <textarea
          name="architectureAr"
          defaultValue={project?.architectureAr}
          required
          dir="rtl"
        />
      </label>
      <label>
        المزايا AR (سطر لكل ميزة)
        <textarea
          name="featuresAr"
          defaultValue={project?.featuresAr?.join("\n")}
          rows={5}
          dir="rtl"
        />
      </label>
      <label>
        الدور (AR)
        <textarea
          name="roleAr"
          defaultValue={project?.roleAr}
          required
          dir="rtl"
        />
      </label>
      <label>
        النتيجة (AR)
        <textarea
          name="resultAr"
          defaultValue={project?.resultAr}
          required
          dir="rtl"
        />
      </label>

      <h3>Media</h3>
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

      <h3>Meta</h3>
      <label>
        Stack (one per line)
        <textarea
          name="stack"
          defaultValue={project?.stack?.join("\n")}
          rows={4}
        />
      </label>
      <label>
        Order
        <input type="number" name="order" defaultValue={project?.order ?? 0} />
      </label>
      <label className="admin-checkbox">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={project?.featured ?? true}
        />
        Featured
      </label>

      <button type="submit" className="admin-btn">
        Save
      </button>
    </form>
  );
}
