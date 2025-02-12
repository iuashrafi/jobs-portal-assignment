"use server";

import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function getApplicationsForJobId(jobId: number) {
  return await db.application.findMany({
    where: {
      jobId,
    },
  });
}

export async function getAllJobsForCompany(
  searchQuery?: string,
  category?: string,
  minSalary?: number,
  maxSalary?: number
) {
  return await db.job.findMany({
    where: {
      AND: [
        searchQuery
          ? {
              title: {
                contains: searchQuery,
                mode: "insensitive",
              },
            }
          : {},
        category
          ? {
              category: category as Prisma.EnumJobCategoryFilter,
            }
          : {},
        minSalary !== undefined || maxSalary !== undefined
          ? {
              salary: {
                gte: minSalary ?? 0,
                lte: maxSalary ?? Number.MAX_SAFE_INTEGER,
              },
            }
          : {},
      ],
    },
  });
}
