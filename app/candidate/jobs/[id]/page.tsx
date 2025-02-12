import { getJobById } from "@/app/actions/candidate";
import { TypographyH1 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const job = await getJobById(Number(id));
  console.log("current job = ", job);
  return (
    <div>
      <TypographyH1 text={job?.title || ""} />
      <div className="flex gap-3">
        <span>Company</span>
        <span>Location</span>
      </div>
      <p className="py-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
        provident! Modi accusamus sunt maxime accusantium neque cupiditate sed
        facilis sit?{job?.description}
      </p>
      <div className="pb-6"> Salary : 12 lpa</div>
      <Button variant={"primary"} size={"lg"} asChild>
        <Link href={`/candidate/apply/${job?.id}`}>Apply Now</Link>
      </Button>
    </div>
  );
}
