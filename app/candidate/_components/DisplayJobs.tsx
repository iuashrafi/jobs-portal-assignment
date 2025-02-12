"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { truncateText } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsRight,
} from "@tabler/icons-react";
import { Job } from "@prisma/client";

const DisplayJobs = ({
  jobs,
  currentPage,
  totalPages,
}: {
  jobs: Job[];
  currentPage: number;
  totalPages: number;
}) => {
  const router = useRouter();

  const handlePagination = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("pageNo", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      {totalPages === 0 && (
        <div className="italic text-base py-32 text-center">No Jobs Found</div>
      )}
      <div className="grid grid-cols-12 gap-4 mt-8">
        {jobs.map((job: Job) => (
          <div
            key={job.id}
            className="group transition ease-in-out card-shadow hover:scale-[1.01] col-span-12 sm:col-span-6 md:col-span-4 2xl:col-span-3 border app-border p-4 rounded-2xl flex flex-col h-full"
          >
            <div className="font-medium text-lg">{job.title}</div>
            <div>
              {job.location} | {job.salary > 0 ? `${job.salary} lpa` : `Unpaid`}
            </div>
            <p className="app-text-secondary flex-grow">
              {truncateText(job.description, 100)}
            </p>
            <Button
              variant={"primary"}
              className="w-full rounded-lg mt-auto"
              asChild
            >
              <Link href={`/candidate/jobs/${job.id}`}>
                Apply Now <IconChevronsRight />
              </Link>
            </Button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="flex justify-center mt-12 space-x-6">
          <Button
            variant="secondary"
            disabled={currentPage === 1}
            onClick={() => handlePagination(currentPage - 1)}
          >
            <IconChevronLeft /> Previous
          </Button>
          <span className="flex items-center text-sm">{`Page ${currentPage} of ${totalPages}`}</span>
          <Button
            variant="secondary"
            disabled={currentPage >= totalPages}
            onClick={() => handlePagination(currentPage + 1)}
          >
            Next <IconChevronRight />
          </Button>
        </div>
      )}
    </>
  );
};

export default DisplayJobs;
