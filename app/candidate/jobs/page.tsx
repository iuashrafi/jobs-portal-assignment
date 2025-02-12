import { Suspense } from "react";
import { getAllJobs } from "@/app/actions/candidate";
import DisplayJobs from "@/app/candidate/_components/DisplayJobs";
import { TypographyH1 } from "@/components/typography";
import FilterJobs from "../_components/FilterJobs";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    category?: string;
    minSalary?: string;
    maxSalary?: string;
    pageNo?: string;
  }>;
}) {
  const { query, category, minSalary, maxSalary, pageNo } = await searchParams;
  const currentPage = pageNo ? parseInt(pageNo) : 1;

  const jobs = await getAllJobs(
    query || "",
    category || "",
    minSalary ? parseInt(minSalary) : undefined,
    maxSalary ? parseInt(maxSalary) : undefined,
    currentPage,
    10 // page limit
  );

  return (
    <div>
      <TypographyH1 text="Jobs" />
      <FilterJobs />
      <Suspense fallback={<p>Loading jobs...</p>}>
        <DisplayJobs
          jobs={jobs.jobs}
          currentPage={currentPage}
          totalPages={jobs.totalPages}
        />
      </Suspense>
    </div>
  );
}
