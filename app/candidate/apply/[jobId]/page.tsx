import JobApplicationForm from "../_components/job-application-form";

export default async function Page({
  params,
}: {
  params: Promise<{ jobId: number }>;
}) {
  const { jobId } = await params;
  return (
    <div>
      <h1>Apply to this Job with Jobid = {jobId} </h1>
      <JobApplicationForm jobId={jobId} />
    </div>
  );
}
