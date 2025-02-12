import { getJobById } from "@/app/actions/candidate";
import { TypographyH1 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  IconBuilding,
  IconChevronsRight,
  IconMapPin,
} from "@tabler/icons-react";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const jobId = Number((await params).id);
  const job = await getJobById(jobId);

  if (!job) {
    return <>Job Not Found!</>;
  }

  return (
    <div>
      <TypographyH1 text={job.title} />
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="flex space-x-1 items-center">
          <IconBuilding stroke={2} />
          <span>{job.company}</span>
        </span>
        <span className="flex space-x-1 items-center">
          <IconMapPin stroke={2} />
          <span>{job.location}</span>
        </span>
      </div>
      <p className="p-4 rounded-2xl my-4 text-base bg-neutral-50">
        {job?.description}
      </p>
      <div className="px-4 pb-6 text-base">
        Salary : {job.salary > 0 ? `${job.salary} lpa` : `Unpaid`}
      </div>
      <Button variant={"primary"} size={"lg"} asChild>
        <Link href={`/candidate/apply/${job?.id}`}>
          Apply Now <IconChevronsRight />
        </Link>
      </Button>
    </div>
  );
}
