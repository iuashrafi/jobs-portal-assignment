import { Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconDots } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import DeleteJobDialog from "./DeleteJobDialog";

const JobsListing = ({ jobs }: any) => {
  return (
    <div className="min-h-screen mt-16 mb-8">
      <div className="app-table-shadow rounded-xl">
        <Table className="">
          <TableHeader className="bg-[#F7F9FB] text-base">
            <TableRow className="">
              <TableHead className="min-w-[140px] text-black font-semibold w-[100px] rounded-tl-xl px-8 py-3">
                Job Title
              </TableHead>
              {/* <TableHead className="min-w-[140px] text-black font-semibold">
                Company
              </TableHead> */}
              <TableHead className="min-w-[140px] text-black font-semibold">
                Location
              </TableHead>
              <TableHead className="min-w-[200px] text-black font-semibold">
                Description
              </TableHead>
              <TableHead className="min-w-[140px] text-black font-semibold">
                Salary
              </TableHead>
              <TableHead className="min-w-[40px] text-black font-semibold text-right rounded-tr-xl pr-8"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {jobs.length === 0 && (
              <TableRow
                className="h-[60px] italic text-center"
                aria-colspan={4}
              >
                <TableCell colSpan={5}>
                  No Jobs Found, Try Creating One.
                </TableCell>
              </TableRow>
            )}
            {jobs.length > 0 &&
              jobs.map((job: any, index: number) => {
                const isLastRow = index === jobs.length - 1;
                return (
                  <Fragment key={job.id}>
                    {/* <Link href={`/company/jobs/${job.id}`} legacyBehavior={true}> */}
                    <TableRow className="h-[60px] app-border hover:bg-[#F7F9FB] hover:cursor-pointer">
                      <TableCell
                        className={`pl-6 ${isLastRow ? "rounded-bl-xl" : ""}`}
                      >
                        {job.title}
                      </TableCell>
                      {/* <TableCell>{job.company}</TableCell> */}
                      <TableCell>{job.location}</TableCell>
                      <TableCell>
                        <span className="border px-1 py-0.5 rounded-md">
                          {job.category}
                        </span>
                        &nbsp;
                        <span>{job.description}</span>
                      </TableCell>
                      <TableCell>
                        {job.salary > 0 ? `${job.salary} lpa` : `Unpaid`}
                      </TableCell>
                      <TableCell
                        className={`text-right pr-6 ${
                          isLastRow ? "rounded-br-xl" : ""
                        }`}
                      >
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <IconDots stroke={2} />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/company/jobs/${job.id}`}>
                                View Job
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/company/jobs/${job.id}/applications`}
                              >
                                View Applications
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/company/jobs/${job.id}/edit`}>
                                Edit Job
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <DeleteJobDialog jobId={job.id} />
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    {/* </Link> */}
                  </Fragment>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default JobsListing;
