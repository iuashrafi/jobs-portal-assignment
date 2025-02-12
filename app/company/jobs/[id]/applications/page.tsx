import { getApplicationsForJobId } from "@/app/actions/company";
import ApplicationsListing from "@/app/company/_components/ApplicationsListing";
import { TypographyH1 } from "@/components/typography";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const applications = await getApplicationsForJobId(Number(id));

  return (
    <div className="bg-green-00">
      <div className="flex justify-between items-center">
        <TypographyH1 text={"Applications"} />
      </div>
      <ApplicationsListing applications={applications} />
    </div>
  );
}
