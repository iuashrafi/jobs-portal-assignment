import { getAllJobs } from "@/app/actions/jobs";
import DisplayJobs from "@/app/candidate/_components/DisplayJobs";
import { TypographyH1 } from "@/components/typography";

export default async function Page() {
  const jobs = await getAllJobs();
  console.log("jobs= ", jobs);
  return (
    <div>
      <TypographyH1 text="Jobs" />
      <DisplayJobs jobs={jobs} />
    </div>
  );
}
