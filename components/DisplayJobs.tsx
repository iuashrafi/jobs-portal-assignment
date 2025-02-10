import Link from "next/link";
import { Button } from "./ui/button";

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
          <Button className="w-full" asChild>
            <Link href="/candidate/jobs/1">Apply Now</Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DisplayJobs;
