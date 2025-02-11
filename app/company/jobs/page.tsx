import { getAllJobs } from "@/app/actions/jobs";
import { TypographyH1 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import JobsListing from "../_components/JobsListing";

export default async function Page() {
  const jobs = await getAllJobs();
  console.log("jobs= ", jobs);

  return (
    <div className="bg-green-00">
      <div className="flex justify-between items-center">
        <TypographyH1 text={"Jobs Posted"} />
        <Button asChild variant="outline">
          <Link href="/company/jobs/new">Create New Job</Link>
        </Button>
      </div>
      <JobsListing jobs={jobs} />
    </div>
  );
}
