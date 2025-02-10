import { getAllJobs } from "@/app/actions/jobs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function Page() {
  const jobs = await getAllJobs();
  console.log("jobs= ", jobs);
  return (
    <div className="py-8">
      <h1 className="text-2xl">Jobs</h1>
      <Button asChild variant="outline">
        <Link href="/company/jobs/new">Create New Job</Link>
      </Button>

      <DisplayJobs jobs={jobs} />
    </div>
  );
}
const DisplayJobs = ({ jobs }: any) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {jobs.map((job: any) => (
        <div
          key={job.id}
          className="col-span-4 xl:col-span-3 border p-4 rounded-xl"
        >
          <div>{job.title}</div>
          <div>Exp | Onsite | 12Lpa</div>
          <p>{job.description}</p>
          <Button className="w-full">View Job</Button>
        </div>
      ))}
    </div>
  );
};
