import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Page() {
  return (
    <div className="py-8">
      <h1 className="text-2xl">Jobs</h1>
      <Button asChild variant="outline">
        <Link href="/company/jobs/new">Create New Job</Link>
      </Button>
      <DisplayJobs />
    </div>
  );
}

const DisplayJobs = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(() => (
        <div className="col-span-4 xl:col-span-3 border p-4 rounded-xl">
          <div>
            <div>Full Stack Developer</div>
            <div>Amazon</div>
          </div>
          <div>Exp | Onsite | 12Lpa</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            assumenda maxime voluptatem itaque blanditiis exercitationem
            recusandae quam non ullam facilis.
          </p>
          <Button className="w-full">Apply Now</Button>
        </div>
      ))}
    </div>
  );
};
