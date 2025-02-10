import { getApplicationsForJobId } from "@/app/actions/company";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const applications = await getApplicationsForJobId(Number(id));
  console.log("applications = ", applications);
  return (
    <div>
      <h1>View applications submitted for a specific job post with id={id}.</h1>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>Applied by : {application.name}</li>
        ))}
      </ul>
    </div>
  );
}
