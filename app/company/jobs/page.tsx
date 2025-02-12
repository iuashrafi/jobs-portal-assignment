import { TypographyH1 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import JobsListing from "../_components/JobsListing";
import {
  IconChartBar,
  IconChevronsDown,
  IconChevronsUp,
} from "@tabler/icons-react";
import { getAllJobsForCompany } from "@/app/actions/company";

export default async function Page() {
  const jobs = await getAllJobsForCompany();
  console.log("jobs= ", jobs);

  return (
    <div className="bg-green-00">
      <Dashboard />
      <div className="mt-12 flex justify-between items-center">
        <TypographyH1 text={"Jobs Posted"} />
        <Button asChild variant="primary">
          <Link href="/company/jobs/new">Create New Job</Link>
        </Button>
      </div>
      <JobsListing jobs={jobs} />
    </div>
  );
}

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 p-4 border app-border h-[170px] rounded-2xl ">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-[#5C6984]">
            Jobs Listed
          </span>
          <span className="bg-[#8155FF1A] text-[#8851FF] rounded-md p-1">
            <IconChartBar stroke={2} />
          </span>
        </div>
        <div className="mt-6">
          <span className="text-black font-semibold text-5xl">32</span>
        </div>
        <div className="mt-2.5 flex gap-1 items-center">
          <span className="bg-[#D5FFD4] rounded-md py-1 px-1.5 font-semibold text-sm text-[#039F00] flex items-center">
            <IconChevronsUp size={16} /> 10%
          </span>
          <span className="font-semibold text-[#444444]">vs last month</span>
        </div>
      </div>
      <div className="col-span-4 p-4 border app-border h-[170px] rounded-2xl ">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-[#5C6984]">
            Applications
          </span>
          <span className="bg-[#8155FF1A] text-[#8851FF] rounded-md p-1">
            <IconChartBar stroke={2} />
          </span>
        </div>
        <div className="mt-6">
          <span className="text-black font-semibold text-5xl">324</span>
        </div>
        <div className="mt-2.5 flex gap-1 items-center">
          <span className="bg-[#D5FFD4] rounded-md py-1 px-1.5 font-semibold text-sm text-[#039F00] flex items-center">
            <IconChevronsUp size={16} /> 60%
          </span>
          <span className="font-semibold text-[#444444]">vs last month</span>
        </div>
      </div>
      <div className="col-span-4 p-4 border app-border h-[170px] rounded-2xl ">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-[#5C6984]">
            Shortlisted
          </span>
          <span className="bg-[#8155FF1A] text-[#8851FF] rounded-md p-1">
            <IconChartBar stroke={2} />
          </span>
        </div>
        <div className="mt-6">
          <span className="text-black font-semibold text-5xl">10</span>
        </div>
        <div className="mt-2.5 flex gap-1 items-center">
          <span className="bg-[#FFD0D0] rounded-md py-1 px-1.5 font-semibold text-sm text-[#E91C1C]  flex items-center">
            <IconChevronsDown size={16} /> 04%
          </span>
          <span className="font-semibold text-[#444444]">vs last month</span>
        </div>
      </div>
    </div>
  );
};
