import { TypographyH1 } from "@/components/typography";
import JobApplicationForm from "../_components/job-application-form";

export default async function Page({
  params,
}: {
  params: Promise<{ jobId: number }>;
}) {
  const { jobId } = await params;
  return (
    <div>
      <TypographyH1 text="Apply to this job" />
      <JobApplicationForm jobId={jobId} />
    </div>
  );
}
