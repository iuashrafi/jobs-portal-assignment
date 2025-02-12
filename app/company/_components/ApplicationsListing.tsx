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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
              <TableHead className="min-w-[100px] text-black font-semibold rounded-tl-xl px-8 py-3">
                Candidate
              </TableHead>
              <TableHead className="min-w-[140px] text-black font-semibold">
                Email
              </TableHead>
              <TableHead className="min-w-[140px] text-black font-semibold">
                Resume
              </TableHead>
              <TableHead className="min-w-[200px] text-black font-semibold">
                Cover Letter
              </TableHead>
              <TableHead className="min-w-[40px] text-black font-semibold text-right rounded-tr-xl pr-8"></TableHead>
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
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <IconDots />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Shortlist</DropdownMenuItem>
                          <DropdownMenuItem>Hire</DropdownMenuItem>
                          <DropdownMenuItem>Reject</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
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
