import { TypographyH1 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import JobsListing from "../_components/JobsListing";
import {
  IconChartBar,
  IconChevronsDown,
  IconChevronsUp,
  IconCircleDashedPlus,
} from "@tabler/icons-react";
import { getAllJobsForCompany, getDashboardData } from "@/app/actions/company";

export default async function Page() {
  const jobs = await getAllJobsForCompany();

  return (
    <div className="">
      <Dashboard />
      <div className="mt-12 flex flex-wrap gap-4 justify-between items-center">
        <TypographyH1 text={"Jobs Posted"} />
        <Button asChild variant="primary">
          <Link href="/company/jobs/new" className="flex items-center">
            <IconCircleDashedPlus size={22} />
            <span>Create New Job</span>
          </Link>
        </Button>
      </div>
      <JobsListing jobs={jobs} />
    </div>
  );
}

// contains dummy data - just for ui
const Dashboard = async () => {
  const { jobsListingCount, applicationsCount, shortlistedCount } =
    await getDashboardData();
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-4 p-4 border app-border h-[170px] rounded-2xl ">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-[#5C6984]">
            Jobs Listed
          </span>
          <span className="bg-[#8155FF1A] text-[#8851FF] rounded-md p-1">
            <IconChartBar stroke={2} />
          </span>
        </div>
        <div className="mt-6">
          <span className="text-black font-semibold text-5xl">
            {jobsListingCount}
          </span>
        </div>
        <div className="mt-2.5 flex gap-1 items-center">
          <span className="bg-[#D5FFD4] rounded-md py-1 px-1.5 font-semibold text-sm text-[#039F00] flex items-center">
            <IconChevronsUp size={16} /> 10%
          </span>
          <span className="font-semibold text-[#444444] text-sm md:text-base">
            vs last month
          </span>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 p-4 border app-border h-[170px] rounded-2xl ">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-[#5C6984]">
            Applications
          </span>
          <span className="bg-[#8155FF1A] text-[#8851FF] rounded-md p-1">
            <IconChartBar stroke={2} />
          </span>
        </div>
        <div className="mt-6">
          <span className="text-black font-semibold text-5xl">
            {applicationsCount}
          </span>
        </div>
        <div className="mt-2.5 flex gap-1 items-center">
          <span className="bg-[#D5FFD4] rounded-md py-1 px-1.5 font-semibold text-sm text-[#039F00] flex items-center">
            <IconChevronsUp size={16} /> 60%
          </span>
          <span className="font-semibold text-[#444444] text-sm md:text-base">
            vs last month
          </span>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 p-4 border app-border h-[170px] rounded-2xl ">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-[#5C6984]">
            Shortlisted
          </span>
          <span className="bg-[#8155FF1A] text-[#8851FF] rounded-md p-1">
            <IconChartBar stroke={2} />
          </span>
        </div>
        <div className="mt-6">
          <span className="text-black font-semibold text-5xl">
            {shortlistedCount}
          </span>
        </div>
        <div className="mt-2.5 flex gap-1 items-center">
          <span className="bg-[#FFD0D0] rounded-md py-1 px-1.5 font-semibold text-sm text-[#E91C1C]  flex items-center">
            <IconChevronsDown size={16} /> 04%
          </span>
          <span className="font-semibold text-[#444444] text-sm md:text-base">
            vs last month
          </span>
        </div>
      </div>
    </div>
  );
};
