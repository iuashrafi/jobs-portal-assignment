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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Application } from "@prisma/client";

const ApplicationsListing = ({
  applications,
}: {
  applications: Application[];
}) => {
  return (
    <div className="min-h-screen mt-16 mb-8">
      <div className="app-table-shadow rounded-xl">
        <Table className="">
          <TableHeader className="bg-[#F7F9FB] text-base">
            <TableRow className="">
              <TableHead className="w-[140px] text-black font-semibold rounded-tl-xl px-8 py-3">
                Candidate
              </TableHead>
              <TableHead className="w-[140px] text-black font-semibold">
                Email
              </TableHead>
              <TableHead className="w-[140px] text-black font-semibold">
                Resume Link
              </TableHead>
              <TableHead className="w-[200px] text-black font-semibold">
                Cover Letter
              </TableHead>
              <TableHead className="w-[50px] text-black font-semibold text-right rounded-tr-xl pr-8">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {applications.length === 0 && (
              <TableRow
                className="h-[60px] italic text-center"
                aria-colspan={4}
              >
                <TableCell colSpan={5}>No Applications Found.</TableCell>
              </TableRow>
            )}
            {applications.map((application: Application, index: number) => {
              const isLastRow = index === applications.length - 1;
              return (
                <Fragment key={application.id}>
                  {/* <Link href={`/company/applications/${application.id}`} legacyBehavior={true}> */}
                  <TableRow className="h-[60px] app-border hover:bg-[#F7F9FB] hover:cursor-pointer">
                    <TableCell
                      className={`pl-6 ${isLastRow ? "rounded-bl-xl" : ""}`}
                    >
                      {application.name}
                    </TableCell>
                    <TableCell>{application.email}</TableCell>
                    <TableCell>
                      <Button variant={"link"} asChild>
                        <Link href={application.resume}>Resume</Link>
                      </Button>
                    </TableCell>
                    <TableCell>{application.coverLetter}</TableCell>
                    <TableCell
                      className={`text-right pr-6 ${
                        isLastRow ? "rounded-br-xl" : ""
                      }`}
                    >
                      <IconDots stroke={2} />
                      {/* <DropdownMenu>
                        <DropdownMenuTrigger>
                          <IconDots stroke={2} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/company/jobs/${job.id}/applications`}>
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
                      </DropdownMenu> */}
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

export default ApplicationsListing;
