import { getAllJobs } from "@/app/actions/jobs";
import DisplayJobs from "@/components/DisplayJobs";

export default async function Page() {
  const jobs = await getAllJobs();
  console.log("jobs= ", jobs);
  return (
    <div>
      <h1>Apply for Jobs</h1>
      <DisplayJobs jobs={jobs} />
    </div>
  );
}
