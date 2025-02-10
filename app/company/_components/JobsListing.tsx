import { Button } from "@/components/ui/button";

const JobsListing = ({ jobs }: any) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {jobs.map((job: any) => (
        <div
          key={job.id}
          className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 border p-4 rounded-xl"
        >
          <div>{job.title}</div>
          <div>Exp | Onsite | 12Lpa</div>
          <p>{job.description}</p>
          <Button className="w-full">View Job</Button>
        </div>
      ))}
    </div>
  );
};

export default JobsListing;
