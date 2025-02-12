import Link from "next/link";
import { Button } from "@/components/ui/button";
import { truncateText } from "@/lib/utils";

const DisplayJobs = ({ jobs }: any) => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-4">
      {jobs.map((job: any) => (
        <div
          key={job.id}
          className="col-span-12 sm:col-span-6 md:col-span-4 2xl:col-span-3 border app-border p-4 rounded-2xl"
        >
          <div className="font-medium text-lg">{job.title}</div>
          <div>
            {job.location} | {job.salary > 0 ? `${job.salary} lpa` : `Unpaid`}
          </div>
          <p className="app-text-secondary">
            {truncateText(job.description, 100)}{" "}
          </p>
          <Button
            variant={"primary"}
            className="w-full rounded-lg mt-2 text-base"
            asChild
          >
            <Link href={`/candidate/jobs/${job.id}`}>Apply Now</Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DisplayJobs;
