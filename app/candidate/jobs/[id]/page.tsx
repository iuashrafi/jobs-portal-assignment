import { getJobById } from "@/app/actions/candidate";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = await params;

  const job = await getJobById(Number(id));

  return (
    <div>
      <h1>show detail job with id = {id}</h1>
      <h1>{job?.title}</h1>
      <p>{job?.description}</p>
      <Button variant={"default"} asChild>
        <Link href="/candidate/apply/1">Apply Now</Link>
      </Button>
    </div>
  );
}
