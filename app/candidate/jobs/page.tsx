import { Suspense } from "react";
import { getAllJobs } from "@/app/actions/jobs";
import DisplayJobs from "@/app/candidate/_components/DisplayJobs";
import { TypographyH1 } from "@/components/typography";
import FilterJobs from "../_components/FilterJobs";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query?: string;
    category?: string;
    minSalary?: string;
    maxSalary?: string;
  };
}) {
  const { query, category, minSalary, maxSalary } = searchParams;
  const jobs = await getAllJobs(
    query || "",
    category || "",
    minSalary ? parseInt(minSalary) : undefined,
    maxSalary ? parseInt(maxSalary) : undefined
  );
  console.log("jobs= ", jobs);

  return (
    <div>
      <TypographyH1 text="Jobs" />
      <FilterJobs />
      <Suspense fallback={<p>Loading jobs...</p>}>
        <DisplayJobs jobs={jobs} />
      </Suspense>
    </div>
  );
}
