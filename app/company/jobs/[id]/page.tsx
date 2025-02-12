import { getJobById } from "@/app/actions/candidate";
import { TypographyH1 } from "@/components/typography";
import { IconBuilding, IconMapPin } from "@tabler/icons-react";

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
    return <>No Job Found!</>;
  }

  return (
    <div>
      <TypographyH1 text={job.title} />
      <div className="flex gap-3">
        <span className="flex space-x-1 items-center">
          <IconBuilding stroke={2} />
          <span>{job.company}</span>
        </span>
        <span className="flex space-x-1 items-center">
          <IconMapPin stroke={2} />
          <span>{job.location}</span>
        </span>
      </div>
      <p className="py-6 text-base">{job?.description}</p>
      <div className="pb-6 text-base">
        Salary : {job.salary > 0 ? `${job.salary} lpa` : `Unpaid`}
      </div>
    </div>
  );
}
