-- Rename existing English columns, add Arabic counterparts, add media fields
ALTER TABLE "Project" RENAME COLUMN "title" TO "titleEn";
ALTER TABLE "Project" RENAME COLUMN "summary" TO "summaryEn";
ALTER TABLE "Project" RENAME COLUMN "overview" TO "overviewEn";
ALTER TABLE "Project" RENAME COLUMN "problem" TO "problemEn";
ALTER TABLE "Project" RENAME COLUMN "solution" TO "solutionEn";
ALTER TABLE "Project" RENAME COLUMN "architecture" TO "architectureEn";
ALTER TABLE "Project" RENAME COLUMN "features" TO "featuresEn";
ALTER TABLE "Project" RENAME COLUMN "role" TO "roleEn";
ALTER TABLE "Project" RENAME COLUMN "result" TO "resultEn";

ALTER TABLE "Project"
  ADD COLUMN "titleAr" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "summaryAr" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "overviewAr" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "problemAr" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "solutionAr" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "architectureAr" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "featuresAr" TEXT[] NOT NULL DEFAULT '{}',
  ADD COLUMN "roleAr" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "resultAr" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "heroImage" TEXT,
  ADD COLUMN "videoUrl" TEXT;

-- Drop defaults now that backfill (if any) is done manually
ALTER TABLE "Project" ALTER COLUMN "titleAr" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "summaryAr" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "overviewAr" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "problemAr" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "solutionAr" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "architectureAr" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "roleAr" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "resultAr" DROP DEFAULT;