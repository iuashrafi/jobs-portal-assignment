import { TypographyH1 } from "@/components/typography";
import CreateJobForm from "../../_components/create-job-form";

export default function Page() {
  return (
    <div className="space-y-6">
      <TypographyH1 text="Create New Job" />
      <CreateJobForm />
    </div>
  );
}
