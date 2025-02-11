import { getJobById } from "@/app/actions/candidate";
import CreateJobForm from "@/app/company/_components/create-job-form";
import { TypographyH1 } from "@/components/typography";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const jobId = Number((await params).id);
  const job = await getJobById(jobId);

  if (!job) {
    return <>No Job Found</>;
  }

  const { id, title, description, category, company, location, salary } = job;

  const initialData = {
    id,
    title,
    description,
    category,
    company,
    location,
    salary,
  };

  return (
    <div className="space-y-6">
      <TypographyH1 text="Edit Job" />
      <CreateJobForm initialData={initialData} />
    </div>
  );
}
