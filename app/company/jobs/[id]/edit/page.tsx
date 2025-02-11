import { getJobById } from "@/app/actions/candidate";
import CreateJobForm from "@/app/company/_components/create-job-form";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const job = await getJobById(Number(id));

  const initialData = {
    id: job ? job.id : null,
    title: job ? job.title : "",
    description: job ? job.description : "",
    category: job ? job.category : "",
  };

  return (
    <div>
      <h1>Edit job</h1>
      <CreateJobForm initialData={initialData} />
    </div>
  );
}
