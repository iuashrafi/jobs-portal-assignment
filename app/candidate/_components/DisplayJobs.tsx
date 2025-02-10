import Link from "next/link";
import { Button } from "@/components/ui/button";

const DisplayJobs = ({ jobs }: any) => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-4">
      {jobs.map((job: any) => (
        <div
          key={job.id}
          className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 border app-border p-4 rounded-2xl"
        >
          <div className="font-medium text-lg">{job.title}</div>
          <div>Exp | Onsite | 12Lpa</div>
          <p className="app-text-secondary">
            Lorem ipsum dolor sit amet {job.description}
          </p>
          <Button
            className="w-full app-btn-primary rounded-lg mt-2 text-base"
            asChild
          >
            <Link href="/candidate/jobs/1">Apply Now</Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DisplayJobs;
