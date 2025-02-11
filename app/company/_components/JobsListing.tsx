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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const JobsListing = ({ jobs }: any) => {
  return (
    <div className="min-h-screen mt-16 mb-8">
      <div className="app-table-shadow rounded-xl">
        <Table className="">
          <TableHeader className="bg-[#F7F9FB] text-base">
            <TableRow className="">
              <TableHead className="min-w-[200px] text-black font-semibold w-[100px] rounded-tl-xl px-8 py-3">
                Job Title
              </TableHead>
              <TableHead className="min-w-[140px] text-black font-semibold">
                Location
              </TableHead>
              <TableHead className="min-w-[140px] text-black font-semibold">
                Description
              </TableHead>
              <TableHead className="min-w-[140px] text-black font-semibold">
                Applications
              </TableHead>
              <TableHead className="min-w-[50px] text-black font-semibold text-right rounded-tr-xl pr-8">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {jobs.map((job: any, index: number) => {
              const isLastRow = index === jobs.length - 1;
              return (
                <Fragment key={job.id}>
                  <Link href={`/company/jobs/${job.id}`} legacyBehavior={true}>
                    <TableRow className="h-[60px] app-border hover:bg-[#F7F9FB] hover:cursor-pointer">
                      <TableCell
                        className={`pl-6 ${isLastRow ? "rounded-bl-xl" : ""}`}
                      >
                        {job.title}
                      </TableCell>
                      <TableCell>{job.location || "Bangalore"}</TableCell>
                      <TableCell>{job.description}</TableCell>
                      <TableCell>10</TableCell>
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
                            <DropdownMenuItem>Delete Job</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </Link>
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
