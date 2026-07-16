import type { Project } from "@/app/generated/prisma/models/Project";
import type { Locale } from "@/i18n/request";

/** Returns a locale-aware view of a Project's translatable fields. */
export function localizeProject(project: Project, locale: Locale) {
  const ar = locale === "ar";
  return {
    ...project,
    title: ar ? project.titleAr : project.titleEn,
    summary: ar ? project.summaryAr : project.summaryEn,
    overview: ar ? project.overviewAr : project.overviewEn,
    problem: ar ? project.problemAr : project.problemEn,
    solution: ar ? project.solutionAr : project.solutionEn,
    architecture: ar ? project.architectureAr : project.architectureEn,
    features: ar ? project.featuresAr : project.featuresEn,
    role: ar ? project.roleAr : project.roleEn,
    result: ar ? project.resultAr : project.resultEn,
  };
}

export type LocalizedProject = ReturnType<typeof localizeProject>;
